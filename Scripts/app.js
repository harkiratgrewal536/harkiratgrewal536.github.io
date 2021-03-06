/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app;
(function (app) {
    "use strict"

    // About Button Click event handler

    function Start() {
        // local variable
        let title = document.title;

        console.log("%c javascript works, Nice", "font-weight:bold; font-size: 20px;");
        console.log("%c ----------------------------", "font-weight:bold; font-size: 20px;");
        console.log("Title: " + title);
        console.log("Sir, I gave the link to the old assignment 'MyFavouriteThings, please consider that too. Thanks. :)");

        try {
            

            switch (title) {
                case "COMP125 - Home":

                    content.HomeContent();
                    break;

                case "COMP125 - About":
                    content.AboutContent();
                    break;

                case "COMP125 - Contact":
                    content.ContactContent();
                    break;

                default:
                    throw ("Title not Defined");
                    break;
            }
        }
        catch(err) {
            console.log(err);
            console.warn("Oops");
        }
    }


    //window.onload = Start;

    window.addEventListener("load", Start);


    // these are all app properties
    app.Title = document.title;

    let copyright = document.getElementById("--copyright--").lastChild;
    document.getElementById("--copyright--").appendChild(copyright);
})(app || (app = {}));