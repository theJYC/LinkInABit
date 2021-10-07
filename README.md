# LinkedLater

<img src="/public/changelog/demo.gif" alt="LinkedLater UI demo" title="LinkedLater UI demo" width="auto">

## Summary

`CURRENTLY IN ACTIVE DEVELOPMENT 🚀`

Have you ever found yourself intending to reach out to people you find on LinkedIn, only to forget about them the next day?
<br />

`LinkedLater` (previously `circleBack`) is a Chrome Extension that allows users to keep an accessible record of desired LinkedIn profiles.

While not exclusive, `LinkedLater` can primarily benefit:

- Recruiters: coordinating recruitment pipelines and sharing profiles with the rest of the team,
- Jobseekers: discovering and reaching out to hiring managers and future colleagues,
- Salespeople: maintaining sales channels and exploring relevant clientele,
- etc.!


`LinkedLater` can be downloaded via Chrome Web Store, or NPM.

[Download via Chrome Store (🔜)](https://chrome.google.com/webstore/category/extensions) | [Install via NPM (🔜)](https://www.npmjs.com/search?q=LinkedLater)

P.S. Please refer to [changelog](https://github.com/jinyoungch0i/circleBack/tree/main/public/changelog) to follow ongoing UI iterations.

## Technologies
Stack: HTML/CSS, JavaScript, React, Bootstrap, and Chrome APIs.
<br />

Below is a detailed list of technologies used:

### HTML/CSS & Bootstrap

Most of the HTML/CSS code was written in [JSX](https://reactjs.org/docs/faq-styling.html). 
<br />

Upon refactor, all layout and styling will be isolated to each component's scope.
<br />

- [Bootstrap v5](https://getbootstrap.com/) was utilised as the chosen CSS framework for responsive UI development
- [FontAwesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react) was utilised to enhance the UX with intuitive icons

### JavaScript

JavaScript (ES6) was used to collect relevant metadata from desired LinkedIn profiles, which was then relayed to the extension's popup window (see [Chrome APIs](https://github.com/jinyoungch0i/circleBack#chrome-apis))
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

With regards to JavaScript dependencies, the following were installed via NPM:

- [CRACO](https://www.npmjs.com/package/@craco/craco) was utilised to override default [Create React App (CRA)](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) configurations
    + This was crucial for `LinkedLater` given its interaction between multiple JS files
    + CRA defaults to building one file with the application code in its build process
    + CRACO allowed the updating of build settings of CRA in order to generate two files instead
        * Thereby preventing the need to `npm run eject` the React app
- [babel-plugin-transform-react-remove-prop-types](https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types) was utilised to remove PropTypes declarations in production bundle
    + This was recommended by [Google Chrome Labs](https://github.com/GoogleChromeLabs/webpack-libs-optimizations#remove-proptypes-declarations-in-production) as a means to eliminate production bloat
    + (Since PropTypes declarations are only used in the development environment & provides no functionality in a production setting)

### React.js

React v17 was utilised, with a select number of technologies within the React ecosystem: 

- [Context API](https://github.com/jinyoungch0i/react-context) was utilised for state management
- [Hooks](https://reactjs.org/docs/hooks-reference.html) were utilised to access component life cycle methods in functional (vs. class-based) fashion
- [PropTypes](https://www.npmjs.com/package/prop-types) was utilised to integrate type-checking in components during runtime
- [React-Icons](https://react-icons.github.io/react-icons/icons?name=fa) was utilised to selectively import (ES6) Font Awesome icons
- [React-Router](https://reactrouter.com/) will be incorporated to allow performant routing on the client-side

### Chrome APIs

`LinkedLater` requires the interaction between its two content scripts, for which the following APIs were utilised:
- [chrome.storage](https://developer.chrome.com/docs/extensions/reference/storage/) to save LinkedIn contacts locally
- [chrome.runtime](https://developer.chrome.com/docs/extensions/mv3/messaging/#simple) to relay data from LinkedIn profile to the extension's popup window
