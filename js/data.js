window.QUIZ_DATA = {
  CFAA: [
    {
      id: 1,
      topic: 'CFAA',
      scenario: "A security researcher notices that a company's web server has an open port with no authentication required. Out of curiosity, they access the server, poke around a few directories, find nothing sensitive, then send the company a responsible disclosure email explaining what they found. No data was copied or modified.",
      correctAnswer: 'Ethical',
      explanation: "The motive may be good, but the access was still uninvited. Under the CFAA, accessing a computer without authorization can create legal risk even when the researcher causes no damage and later discloses the issue responsibly. Ethically, reporting the flaw helps the affected organization, but the safer legal path would have been to obtain permission before testing."
    },
    {
      id: 2,
      topic: 'CFAA',
      scenario: 'An employee uses their legitimate login to open an internal analytics dashboard they are already allowed to access, even though company policy says the tool should be used only for assigned work tasks. They do not bypass any technical controls or enter restricted folders.',
      correctAnswer: 'Legal',
      explanation: "This is poor judgment and likely a policy violation, so it is not ethical. But after Van Buren v. United States, the CFAA does not treat every purpose-based misuse as a crime when the person is already entitled to access that part of the system. Here, the employee stayed inside areas their credentials allowed them to open."
    }
  ],
  DMCA: [
    {
      id: 3,
      topic: 'DMCA',
      scenario: 'A cryptography researcher lawfully obtains a DRM-protected software product, makes a good-faith effort to request permission from the vendor, circumvents only what is necessary to study an encryption flaw, and publishes technical findings without releasing copyrighted content or a piracy tool.',
      correctAnswer: 'Both',
      explanation: 'This is the kind of narrow, good-faith research the DMCA tries to preserve through its encryption-research and security-testing exceptions. The researcher lawfully obtained the work, limited the circumvention to what was necessary, and shared the results in a way aimed at improving security rather than enabling infringement.'
    },
    {
      id: 4,
      topic: 'DMCA',
      scenario: 'A security firm buys a DVD, uses a ripping tool to remove its access controls, copies the full decrypted movie to an internal server, and keeps that copy available for future team use without permission from the copyright owner.',
      correctAnswer: 'Neither',
      explanation: 'Buying the disc does not automatically allow circumvention of DRM or copying the full decrypted work. The DMCA broadly prohibits bypassing technological access controls, and narrow research exceptions do not cover making reusable full-content copies for general internal convenience. That also makes the choice ethically weak, because it goes far beyond the minimum needed for legitimate security analysis.'
    }
  ],
  'Responsible Disclosure & Privacy': [
    {
      id: 5,
      topic: 'Responsible Disclosure & Privacy',
      scenario: 'A software vendor publishes a vulnerability disclosure policy that authorizes good-faith testing of its public web app, gives researchers a private reporting channel, and promises not to recommend legal action if they follow the policy. A researcher stays within scope, avoids collecting user data, and reports the issue privately.',
      correctAnswer: 'Both',
      explanation: 'This is a strong example of coordinated disclosure. The researcher has explicit authorization, follows the published rules, and limits the testing to what is needed to report the problem. That makes the conduct legally safer and ethically aligned with modern disclosure best practices.'
    },
    {
      id: 6,
      topic: 'Responsible Disclosure & Privacy',
      scenario: "A researcher finds a flaw in a public website with no disclosure policy, exploits it far enough to download a sample of real customer records 'for proof,' keeps a copy on a personal laptop, and posts screenshots online before contacting the vendor.",
      correctAnswer: 'Neither',
      explanation: 'Good-faith disclosure does not require collecting and retaining real customer data or publishing it before the affected organization can respond. Pulling personal records, keeping copies, and publicizing screenshots creates needless privacy harm and legal risk. Responsible disclosure should minimize access, avoid retention of sensitive data, and report privately first.'
    },
    {
      id: 7,
      topic: 'Responsible Disclosure & Privacy',
      scenario: 'A mobile app shows a separate, plain-language prompt explaining that it will collect precise geolocation for targeted advertising, asks for affirmative consent before collection, and gives users an easy way to delete their data and stop sharing later.',
      correctAnswer: 'Both',
      explanation: 'Clear disclosure, affirmative consent, and meaningful user choice are much closer to both legal and ethical privacy practice. FTC guidance and enforcement actions repeatedly emphasize that precise geolocation is sensitive data and should not be collected or shared for secondary uses without transparent notice and consent.'
    },
    {
      id: 8,
      topic: 'Responsible Disclosure & Privacy',
      scenario: 'A mobile app buries the sale of precise location data in paragraph 14 of a long Terms of Service, collects the data by default, and shares it with advertisers without any just-in-time prompt or separate opt-in.',
      correctAnswer: 'Neither',
      explanation: 'Burying sensitive data practices in fine print is a bad privacy design choice and a weak compliance posture. FTC guidance and recent orders involving precise geolocation stress the need for clear disclosure and affirmative consent, not passive acceptance through dense boilerplate.'
    }
  ]
};
