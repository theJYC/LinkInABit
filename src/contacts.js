//initialising a sample array of contact objects for UI development:
//in prod, sampleContacts will replicate chrome.storage data that user populates.

const sampleContacts = [
    {
        id: 1,
        fullName: "Jin Hyuk Choi",
        companyName: "SVB Leerink",
        profileURL: "https://www.linkedin.com/in/jinhyuk-ryan-choi/",
        contactInfoLink: "https://www.linkedin.com/in/jinhyuk-ryan-choi/detail/contact-info/",
        currentTitle: "Investment Banking Analyst",
        companyLinkedInURL: "https://www.linkedin.com/company/kaikustartups/",
        companyLogoURL: "https://media-exp1.licdn.com/dms/image/C4E0BAQFp5oR26Cs8LA/company-logo_100_100/0/1601595083883?e=1640217600&v=beta&t=MeqevpuNk8ynARXKxB1biQhecBRQoaZH3Ug2N8F-2Ek",
    },
    {
        id: 2,
        fullName: "Fredrick Thompson",
        companyName: "Duolingo",
        profileURL: "https://www.linkedin.com/in/fredrick-thompson-875520174/",
        contactInfoLink: "https://www.linkedin.com/in/fredrick-thompson-875520174/detail/contact-info/",
        currentTitle: "Product Manager",
        companyLinkedInURL: "https://www.linkedin.com/company/duolingo/",
        companyLogoURL: "https://media-exp1.licdn.com/dms/image/C4D0BAQGXpleTj4FpbQ/company-logo_100_100/0/1627908234168?e=1640217600&v=beta&t=Lf1_rh0GK-wBeGwVZiaMGt7B0RGBJAjn2EA-oLPriZc",
    },
    {
        id: 3,
        fullName: "Marco Fayet",
        companyName: "United Nations",
        profileURL: "https://www.linkedin.com/in/marcofayet/",
        contactInfoLink: "https://www.linkedin.com/in/marcofayet/detail/contact-info/",
        currentTitle: "Data Consultant",
        companyLinkedInURL: "https://www.linkedin.com/company/united-nations/",
        companyLogoURL: "https://media-exp1.licdn.com/dms/image/C4D0BAQEJd9iXSB3aTQ/company-logo_100_100/0/1604441643356?e=1640217600&v=beta&t=SCPr6iSBc-KF_CDocGNMZ9YIKDUZ6HdbuYjFbZANgjw",
    },
    {
        id: 4,
        fullName: "Oliver Whittam",
        companyName: "Deloitte",
        profileURL: "https://www.linkedin.com/in/oliverwhittam/",
        contactInfoLink: "https://www.linkedin.com/in/oliverwhittam/contact-info/",
        currentTitle: "PWM Analyst",
        companyLinkedInURL: "https://www.linkedin.com/company/deloitte/",
        companyLogoURL: "https://media-exp1.licdn.com/dms/image/C4E0BAQHda-o9KT2w5Q/company-logo_100_100/0/1625689676984?e=1640217600&v=beta&t=wQBtyDNavw6qtow7Fs7v5t5S7W8icnDKQI9zMSS6ehs",
    }

]

export default sampleContacts
