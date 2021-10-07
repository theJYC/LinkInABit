{
    //name of this extension follows the JS camelCase convention
    "name": "LinkedInLater",
    //currently only developed to run on Chrome but exploring compatibility w/ Firefox & Brave
    "description": "Chrome Extension for trackable LinkedIn networking",
    "version": "1.0.0",
    //manifest format 3 is the latest version according to Google's documentation
    "manifest_version": 3,
    //actions specified to customise btns that appear on Chrome toolbar,
    //which triggers a pop-up with the contents of LinkedInLater's index.html
    "action" : {
        "default_popup": "index.html",
        "default_title": "Toggle LinkedInLater"
    },
    "icons": {
        //favicon displayed on extension's pages
        "16" : "",
        //icon displayed on chrome://extensions
        "48" : "",
        //icon displayed on chrome web store
        "128" : ""
    }

}
