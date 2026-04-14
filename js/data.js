// Generated from data/*.json by scripts/sync_quiz_data.py.
window.QUIZ_DATA = {
  "CFAA": [
    {
      "id": 1,
      "topic": "CFAA",
      "chapter": "Gray Hat Ch. 2 / Gift of Fire Ch. 5",
      "scenario": "A security researcher notices that a company's web server has an open port with no authentication required. Out of curiosity, they access the server, poke around a few directories, find nothing sensitive, then send the company a responsible disclosure email explaining what they found. No data was copied or modified.",
      "correctAnswer": "Ethical",
      "explanation": "The motive may be good, but the access was still uninvited. Under the CFAA, accessing a computer without authorization can create legal risk even when the researcher causes no damage and later discloses the issue responsibly. Ethically, reporting the flaw helps the affected organization, but the safer legal path would have been to obtain permission before testing."
    },
    {
      "id": 2,
      "topic": "CFAA",
      "chapter": "Gift of Fire Ch. 5",
      "scenario": "An employee uses their legitimate login to open an internal analytics dashboard they are already allowed to access, even though company policy says the tool should be used only for assigned work tasks. They do not bypass any technical controls or enter restricted folders.",
      "correctAnswer": "Legal",
      "explanation": "This is poor judgment and likely a policy violation, so it is not ethical. But after Van Buren v. United States, the CFAA does not treat every purpose-based misuse as a crime when the person is already entitled to access that part of the system. Here, the employee stayed inside areas their credentials allowed them to open."
    },
    {
      "id": 9,
      "topic": "CFAA",
      "chapter": "Gray Hat Ch. 2",
      "scenario": "A company hires a penetration-testing firm under a written contract. The tester stays inside the agreed scope, uses a temporary account supplied by the client, proves SQL injection by viewing one dummy record, and immediately reports the flaw.",
      "correctAnswer": "Both",
      "explanation": "This is what lawful ethical testing looks like: explicit authorization, limited proof, and prompt reporting. Under the CFAA, permission and scope matter. Ethically, the tester minimizes access and shows only what is needed to confirm risk."
    },
    {
      "id": 10,
      "topic": "CFAA",
      "chapter": "Gray Hat Ch. 2",
      "scenario": "A contractor whose project access was removed asks a coworker for their password, logs into the payroll system with that borrowed account, and downloads employee tax forms 'just to check whether their own paperwork is right.'",
      "correctAnswer": "Neither",
      "explanation": "Using someone else's credentials after your own access is revoked is classic unauthorized access. The payroll records are sensitive, the purpose is personal, and the contractor had no right to enter or copy that data. Both legally and ethically, this crosses the line."
    },
    {
      "id": 11,
      "topic": "CFAA",
      "chapter": "Gift of Fire Ch. 5",
      "scenario": "A graduate student uses a campus network account to automate the download of millions of journal articles from a subscription database, ignores rate limits, and moves the laptop into a locked closet after the service begins blocking the traffic.",
      "correctAnswer": "Neither",
      "explanation": "The combination of large-scale automated downloading, evasion of countermeasures, and concealment creates serious legal risk under the CFAA and related theories. Ethically, the conduct bypasses institutional limits and shifts the cost and disruption onto others, even if the student claims a public-interest motive."
    },
    {
      "id": 12,
      "topic": "CFAA",
      "chapter": "Gray Hat Ch. 2",
      "scenario": "During a documented outage, a system administrator uses an approved emergency account to restore a corrupted payroll database, opens only the tables needed to verify the backup, and records each step in the incident log.",
      "correctAnswer": "Both",
      "explanation": "The administrator has authorization, a legitimate operational reason, and an audit trail. That makes the access legally defensible and ethically responsible, because it is limited to the minimum needed to recover service and protect employees."
    },
    {
      "id": 13,
      "topic": "CFAA",
      "chapter": "Gray Hat Ch. 2",
      "scenario": "A former employee notices that their VPN account still works a week after termination. They log in from home and copy internal source code because they think they deserve a portfolio sample from the product they helped build.",
      "correctAnswer": "Neither",
      "explanation": "Once employment ends, leftover credentials do not create continuing permission. Logging in after termination to copy code is unauthorized access and misuse of confidential information. Ethically, it ignores the employer's clear boundary and exploits an administrative mistake."
    },
    {
      "id": 14,
      "topic": "CFAA",
      "chapter": "Gift of Fire Ch. 5",
      "scenario": "A bank employee uses a customer-service dashboard they are allowed to open to look up a celebrity customer's balance out of curiosity. They do not alter anything or share the information with anyone.",
      "correctAnswer": "Legal",
      "explanation": "This is a serious privacy and policy violation, so it is not ethical. But if the employee stayed within data their account was technically permitted to access, current CFAA reasoning after Van Buren suggests the misuse of information is not automatically the same as unlawful hacking. Other laws, regulations, or employment consequences may still apply."
    }
  ],
  "DMCA": [
    {
      "id": 3,
      "topic": "DMCA",
      "chapter": "Gray Hat Ch. 2 / Gift of Fire Ch. 4",
      "scenario": "A cryptography researcher lawfully obtains a DRM-protected software product, makes a good-faith effort to request permission from the vendor, circumvents only what is necessary to study an encryption flaw, and publishes technical findings without releasing copyrighted content or a piracy tool.",
      "correctAnswer": "Both",
      "explanation": "This is the kind of narrow, good-faith research the DMCA tries to preserve through its encryption-research and security-testing exceptions. The researcher lawfully obtained the work, limited the circumvention to what was necessary, and shared the results in a way aimed at improving security rather than enabling infringement."
    },
    {
      "id": 4,
      "topic": "DMCA",
      "chapter": "Gift of Fire Ch. 4",
      "scenario": "A security firm buys a DVD, uses a ripping tool to remove its access controls, copies the full decrypted movie to an internal server, and keeps that copy available for future team use without permission from the copyright owner.",
      "correctAnswer": "Neither",
      "explanation": "Buying the disc does not automatically allow circumvention of DRM or copying the full decrypted work. The DMCA broadly prohibits bypassing technological access controls, and narrow research exceptions do not cover making reusable full-content copies for general internal convenience. That also makes the choice ethically weak, because it goes far beyond the minimum needed for legitimate security analysis."
    },
    {
      "id": 15,
      "topic": "DMCA",
      "chapter": "Gift of Fire Ch. 4",
      "scenario": "A university disability-services office lawfully obtains an ebook for an enrolled student with print disabilities, circumvents the ebook's access controls only to create a screen-reader-friendly copy, and keeps that copy restricted to the student's accommodation needs.",
      "correctAnswer": "Both",
      "explanation": "This fits the kind of narrow accessibility-focused use that copyright law and DMCA exemptions are designed to protect. The office is not distributing a pirate copy; it is using limited circumvention to enable access for a lawful user, which is ethically strong as well."
    },
    {
      "id": 16,
      "topic": "DMCA",
      "chapter": "Gift of Fire Ch. 4",
      "scenario": "A Linux user buys a movie on disc, circumvents the DRM only to watch it on a device the studio does not support, and never shares the file with anyone else.",
      "correctAnswer": "Ethical",
      "explanation": "Many people see this as ethically reasonable because the user paid for the movie and is not redistributing it. But the DMCA can still make circumvention itself unlawful even when the purpose is personal and noninfringing, unless a specific exemption applies."
    },
    {
      "id": 17,
      "topic": "DMCA",
      "chapter": "Gray Hat Ch. 2 / Gift of Fire Ch. 4",
      "scenario": "A security researcher lawfully buys a smart camera, bypasses its firmware lock only as far as needed to confirm a vulnerability, coordinates disclosure with the vendor, and publishes findings without releasing a bypass utility.",
      "correctAnswer": "Both",
      "explanation": "This is the strongest case for the DMCA's security-research and interoperability breathing room: lawful possession, narrow technical steps, harm reduction, and no trafficking in a circumvention tool. Ethically, the researcher is focused on fixing a risk rather than enabling infringement or abuse."
    },
    {
      "id": 18,
      "topic": "DMCA",
      "chapter": "Gift of Fire Ch. 4",
      "scenario": "An influencer uploads a ready-made DRM-stripping tool and a step-by-step video showing followers how to save subscription movies permanently and repost them.",
      "correctAnswer": "Neither",
      "explanation": "The DMCA prohibits trafficking in tools primarily designed to bypass access controls, and the tutorial is aimed at large-scale unauthorized copying. Ethically, it encourages infringement and goes well beyond any legitimate research or personal-use argument."
    },
    {
      "id": 19,
      "topic": "DMCA",
      "chapter": "Gift of Fire Ch. 4",
      "scenario": "A museum preserves an abandoned CD-ROM reference work whose copy-protection system no longer runs on modern hardware. Staff circumvent the obsolete protection in a closed archival lab and do not distribute the decrypted files to the public.",
      "correctAnswer": "Both",
      "explanation": "Controlled preservation of aging media is one of the clearest cases for limited circumvention. The museum is trying to keep a work accessible over time, not to undermine the market for it, so the legal and ethical arguments both improve."
    },
    {
      "id": 20,
      "topic": "DMCA",
      "chapter": "Gift of Fire Ch. 4",
      "scenario": "A startup cracks the license check on one purchased design program, installs the cracked version on twenty office computers, and tells employees it is acceptable because the company paid once already.",
      "correctAnswer": "Neither",
      "explanation": "Paying for one copy does not authorize disabling the license controls and multiplying use across the company. The DMCA risk comes from the circumvention itself, and the copying and use pattern are also ethically weak because the company is taking value without permission."
    }
  ],
  "Responsible Disclosure & Privacy": [
    {
      "id": 5,
      "topic": "Responsible Disclosure & Privacy",
      "chapter": "Gray Hat Ch. 3",
      "scenario": "A software vendor publishes a vulnerability disclosure policy that authorizes good-faith testing of its public web app, gives researchers a private reporting channel, and promises not to recommend legal action if they follow the policy. A researcher stays within scope, avoids collecting user data, and reports the issue privately.",
      "correctAnswer": "Both",
      "explanation": "This is a strong example of coordinated disclosure. The researcher has explicit authorization, follows the published rules, and limits the testing to what is needed to report the problem. That makes the conduct legally safer and ethically aligned with modern disclosure best practices."
    },
    {
      "id": 6,
      "topic": "Responsible Disclosure & Privacy",
      "chapter": "Gray Hat Ch. 3 / Gift of Fire Ch. 2",
      "scenario": "A researcher finds a flaw in a public website with no disclosure policy, exploits it far enough to download a sample of real customer records 'for proof,' keeps a copy on a personal laptop, and posts screenshots online before contacting the vendor.",
      "correctAnswer": "Neither",
      "explanation": "Good-faith disclosure does not require collecting and retaining real customer data or publishing it before the affected organization can respond. Pulling personal records, keeping copies, and publicizing screenshots creates needless privacy harm and legal risk. Responsible disclosure should minimize access, avoid retention of sensitive data, and report privately first."
    },
    {
      "id": 7,
      "topic": "Responsible Disclosure & Privacy",
      "chapter": "Gift of Fire Ch. 2",
      "scenario": "A mobile app shows a separate, plain-language prompt explaining that it will collect precise geolocation for targeted advertising, asks for affirmative consent before collection, and gives users an easy way to delete their data and stop sharing later.",
      "correctAnswer": "Both",
      "explanation": "Clear disclosure, affirmative consent, and meaningful user choice are much closer to both legal and ethical privacy practice. FTC guidance and enforcement actions repeatedly emphasize that precise geolocation is sensitive data and should not be collected or shared for secondary uses without transparent notice and consent."
    },
    {
      "id": 8,
      "topic": "Responsible Disclosure & Privacy",
      "chapter": "Gift of Fire Ch. 2",
      "scenario": "A mobile app buries the sale of precise location data in paragraph 14 of a long Terms of Service, collects the data by default, and shares it with advertisers without any just-in-time prompt or separate opt-in.",
      "correctAnswer": "Neither",
      "explanation": "Burying sensitive data practices in fine print is a bad privacy design choice and a weak compliance posture. FTC guidance and recent orders involving precise geolocation stress the need for clear disclosure and affirmative consent, not passive acceptance through dense boilerplate."
    },
    {
      "id": 21,
      "topic": "Responsible Disclosure & Privacy",
      "chapter": "Gray Hat Ch. 3 / Gift of Fire Ch. 2",
      "scenario": "A researcher finds an exposed voter-registration database with no published disclosure policy, views a single record header to confirm the leak, stops before downloading the table, and privately alerts the state agency with reproduction steps.",
      "correctAnswer": "Ethical",
      "explanation": "Without authorization, the researcher still carries legal risk, so this is not as safe as working under an approved disclosure policy. But ethically it is careful: the confirmation is minimal, no data is retained, and the report is private and actionable."
    },
    {
      "id": 22,
      "topic": "Responsible Disclosure & Privacy",
      "chapter": "Gift of Fire Ch. 2",
      "scenario": "A voice-assistant app collects microphone samples to improve speech recognition, then later uses those recordings to build ad-targeting profiles without a new notice or separate opt-in.",
      "correctAnswer": "Neither",
      "explanation": "This is a classic secondary-use problem. Users consented to one purpose, not another more intrusive one, and the undisclosed profiling creates privacy harm and weakens trust. That is ethically poor and legally risky."
    },
    {
      "id": 23,
      "topic": "Responsible Disclosure & Privacy",
      "chapter": "Gift of Fire Ch. 2",
      "scenario": "In a jurisdiction with no specific law banning the practice, a data broker buys precise location histories from apps and sells audience segments to clinics and lenders under a contract that allows resale.",
      "correctAnswer": "Legal",
      "explanation": "The transaction may be lawful in that hypothetical jurisdiction, which is why privacy law often feels behind the technology. Ethically, though, trading sensitive location patterns for profiling purposes is deeply troubling because people rarely understand or meaningfully control that downstream use."
    },
    {
      "id": 24,
      "topic": "Responsible Disclosure & Privacy",
      "chapter": "Gray Hat Ch. 3",
      "scenario": "A researcher privately reports a serious software flaw, works through a coordinator while the vendor builds a patch, and publishes a technical advisory only after a fix and mitigation guidance are available.",
      "correctAnswer": "Both",
      "explanation": "This follows the coordinated-disclosure model emphasized in Gray Hat Hacking. It gives users and vendors a fair chance to reduce harm first, which makes the process ethically sound and legally safer."
    }
  ]
};
