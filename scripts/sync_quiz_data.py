from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TOPIC_FILES = [
    ("CFAA", ROOT / "data" / "cfaa.json"),
    ("DMCA", ROOT / "data" / "dmca.json"),
    ("Responsible Disclosure & Privacy", ROOT / "data" / "disclosure-privacy.json"),
]
REQUIRED_FIELDS = {
    "id",
    "topic",
    "chapter",
    "scenario",
    "correctAnswer",
    "explanation",
}
VALID_ANSWERS = {"Ethical", "Legal", "Both", "Neither"}


def load_topic_questions(expected_topic: str, path: Path) -> list[dict[str, object]]:
    questions = json.loads(path.read_text(encoding="utf-8"))

    if not isinstance(questions, list) or not questions:
        raise ValueError(f"{path} must contain a non-empty JSON array.")

    for index, question in enumerate(questions, start=1):
        if not isinstance(question, dict):
            raise ValueError(f"{path} entry {index} must be an object.")

        missing = REQUIRED_FIELDS.difference(question)
        if missing:
            fields = ", ".join(sorted(missing))
            raise ValueError(f"{path} entry {index} is missing: {fields}")

        if question["topic"] != expected_topic:
            raise ValueError(
                f"{path} entry {index} has topic {question['topic']!r}, "
                f"expected {expected_topic!r}."
            )

        if question["correctAnswer"] not in VALID_ANSWERS:
            raise ValueError(
                f"{path} entry {index} has invalid correctAnswer "
                f"{question['correctAnswer']!r}."
            )

    return questions


def build_js(data: dict[str, list[dict[str, object]]]) -> str:
    payload = json.dumps(data, indent=2, ensure_ascii=True)
    return (
        "// Generated from data/*.json by scripts/sync_quiz_data.py.\n"
        "window.QUIZ_DATA = "
        f"{payload};\n"
    )


def main() -> None:
    topic_data: dict[str, list[dict[str, object]]] = {}
    seen_ids: set[int] = set()

    for topic, path in TOPIC_FILES:
        questions = load_topic_questions(topic, path)
        topic_data[topic] = questions

        for question in questions:
            question_id = question["id"]
            if not isinstance(question_id, int):
                raise ValueError(f"{path} contains a non-integer id: {question_id!r}")

            if question_id in seen_ids:
                raise ValueError(f"Duplicate question id detected: {question_id}")

            seen_ids.add(question_id)

    output_path = ROOT / "js" / "data.js"
    output_path.write_text(build_js(topic_data), encoding="utf-8")

    counts = ", ".join(f"{topic}: {len(topic_data[topic])}" for topic, _ in TOPIC_FILES)
    print(f"Updated {output_path} ({counts})")


if __name__ == "__main__":
    main()
