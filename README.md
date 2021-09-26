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

P.S. Please refer to [changelog](https://github.com/jinyoungch0i/circleBack/tree/main/public/changelog) to follow ongoing UI iterations.

## Technologies
Stack: HTML/CSS, JavaScript, React.js (Context API), Bootstrap, and Chrome APIs.

### HTML/CSS & Bootstrap

[Bootstrap v5](https://getbootstrap.com/) was utilised as the chosen CSS framework for responsive UI development.
<br/>

On instances where styling within JSX resulted in messy code, custom CSS was defined in `public/style.css`

### JavaScript

JavaScript (ES6) was used to grab key information from a LinkedIn profile's page and relay the data to the extension.
<br/>

The data was stored in the following object form:

```js
    {
        id: 2,
        fullName: "Fredrick Thompson",
        companyName: "Duolingo",
        contactPhotoURL: "https://some_path_to_profile_picture_url",
        profileURL: "https://www.linkedin.com/in/fredrick-thompson-875520174/",
        contactInfoLink: `${profileURL}detail/contact-info/`,
        currentTitle: "Product Manager",
        companyLinkedInURL: "https://www.linkedin.com/company/duolingo/",
        companyLogoURL: "https://some_path_to_company_logo_img",
    }
```

### React.js

React v17 was utilised in order to 

- [Context API](https://github.com/jinyoungch0i/react-context) was utilised for state management
- [React-Icons](https://react-icons.github.io/react-icons/icons?name=fa) was utilised to selectively import (ES6) Font Awesome icons
- [Hooks](https://reactjs.org/docs/hooks-reference.html) were utilised for accessing component life cycle methods & functional (over class-based) components
- [React-Router](https://reactrouter.com/) will be incorporated to allow performant routing on the client-side

### Chrome APIs

`circleBack` requires the interaction between its two content scripts, for which the following APIs were utilised:
- [chrome.storage](https://developer.chrome.com/docs/extensions/reference/storage/) to save LinkedIn contacts locally
- [chrome.runtime](https://developer.chrome.com/docs/extensions/mv3/messaging/#simple) to relay data from the LinkedIn page to the rendered UI in the extension's popup window
