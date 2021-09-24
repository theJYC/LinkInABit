# circleBack

<img src="/public/changelog/README_UI.jpg" alt="circleBack UI demo" title="circleBack UI demo" width="auto">

## Summary

`circleBack is currently in active development`

`circleBack` is a Chrome Extension that allows users to keep an accessible record of desired LinkedIn contacts.

Given its utility, `circleBack` is **a tool that primarily serves recruiters, job hunters, and salespeople** who rely on LinkedIn as a platform to maintain their networking channels.\
<br />
Other than the above target demographics, `circleBack` may also be leveraged as a 'networking journal' for any LinkedIn user who could benefit from keeping a more manageable list of LinkedIn connections.

`circleBack` can be downloaded via Chrome Web Store, or NPM.

[Download via Chrome Store](https://chrome.google.com/webstore/category/extensions) | [Install via NPM](https://www.npmjs.com/search?q=circleback)

## Technologies
Stack: HTML/CSS, JavaScript, React.js (Context API), Bootstrap, and Chrome APIs.

### HTML/CSS & Bootstrap

[Bootstrap](https://getbootstrap.com/) v5 was utilised for its ease of responsive UI development.

### JavaScript

JavaScript (ES6) was used to grab key information from a LinkedIn profile's page and relay the data to the extension.
The data is stored into an object structure, as below:

```js
    {
        id: 2,
        fullName: "Fredrick Thompson",
        companyName: "Duolingo",
        contactPhotoURL: "https://media-exp1.licdn.com/dms/image/C4D03AQHP0cXj4vHuKQ/profile-displayphoto-shrink_200_200/0/1541293291804?e=1637798400&v=beta&t=w2UPH4hNjZbVN_ZnFYeFhHuxKLMl7lm-eqB39UuYZmo",
        profileURL: "https://www.linkedin.com/in/fredrick-thompson-875520174/",
        contactInfoLink: "https://www.linkedin.com/in/fredrick-thompson-875520174/detail/contact-info/",
        currentTitle: "Product Manager",
        companyLinkedInURL: "https://www.linkedin.com/company/duolingo/",
        companyLogoURL: "https://media-exp1.licdn.com/dms/image/C4D0BAQGXpleTj4FpbQ/company-logo_100_100/0/1627908234168?e=1640217600&v=beta&t=Lf1_rh0GK-wBeGwVZiaMGt7B0RGBJAjn2EA-oLPriZc",
    }
```

### React.js

[Context API](https://github.com/jinyoungch0i/react-context) was utilised for state management, and [React-Router](https://reactrouter.com/) will be incorporated to allow performant routing on the client-side.

### Chrome APIs

`circleBack` requires the interaction between its two content scripts, for which the following APIs were utilised:
- [chrome.storage](https://developer.chrome.com/docs/extensions/reference/storage/) API was used to save desired LinkedIn contacts locally
- [chrome.runtime](https://developer.chrome.com/docs/extensions/mv3/messaging/#simple) API was used to relay data from the LinkedIn page to the rendered UI in the extension's popup window
