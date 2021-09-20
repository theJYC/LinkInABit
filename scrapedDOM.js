//Grabbing key contact information from LinkedIn (e.g. linkedin.com/in/jinhyuk-ryan-choi/):

/* #1 Name of contact: */
//grabbing corresponding className applied to the contact name div
const contactNameRaw = document.querySelector(".text-heading-xlarge")
contactNameText = contactNameRaw.innerText
console.log(contactNameText) //"Jin Hyuk (Ryan) Choi"

//implementation: make <contactNameText> a clickable <a>, directing user to <contactURLText> (see #3)

/* #2 Name of company: */
//grabbing current company as highlighted in contact header, earmarked by unique aria-label:
const companyNameRaw = document.querySelector('[aria-label="Current company"]')
companyNameText = companyNameRaw.innerText
console.log(companyNameText) //"Kaiku"

//implementation: make <companyNameText> a clickable <a>, directing user to <currentCompanyURL> (see #6)

/* #3 URL to contact: */
//grabbing the currentURL object using native JS method:
const contactURLRaw = window.location
//retrieving string value to href key in the contactURLRaw object:
contactURLText = contactURLRaw.href
console.log(contactURLText) // "https://www.linkedin.com/in/jinhyuk-ryan-choi/"

//implementation: make <contactName> (from #2) a clickable <a>, directing user to the <currentURL>.

/* #4 contact info: */
//grabbing string URL from 3) and concating with standard route for contact-info:
const contactRedirect = `${contactURLText}detail/contact-info/`
console.log(contactRedirect) // "https://www.linkedin.com/in/jinhyuk-ryan-choi/detail/contact-info/"

//implementation: make it into href value for <contact>, maybe a separate fontawesome icon.

/* #5 contact title: */
//grabbing first HTML element with class="t-16 t-black t-bold"
//though excluding .break-words (which is otherwise applied to each text item in "Activity" section)
const contactTitleLatest = document.querySelector("h3.t-16.t-black.t-bold:not(.break-words)")
const contactCurrentTitle = contactTitleLatest.innerText
console.log(contactCurrentTitle) // "Research Strategy & Data Lead"

//implementation: make it into href value for <title>.

/* #6 company linkedin: */
//since the HTML attribute is repeated for all companies listed under contact profile,
//first grab ALL <a> with matching data-control-name:
const companyListedUnderProfileLatest = document.querySelectorAll('[data-control-name="background_details_company"]')

//then grab the first of the list, since the company in first appearance is most current:
const currentCompanyInProfile = companyListedUnderProfileLatest[0]

//then grab href attribute:
const currentCompanyURL = currentCompanyInProfile.href
console.log(currentCompanyURL) // "https://www.linkedin.com/company/kaikustartups/"

//implementation: make it into href value for <companyNameText>
