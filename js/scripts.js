/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Questionnaire

Survey.StylesManager.applyTheme("defaultV2");

var surveyJSON = {"logoPosition":"right","pages":[{"name":"page1","elements":[{"type":"text","name":"BMI","title":"What is your BMI (body mass index)?","isRequired":true}],"navigationButtonsVisibility":"show"},{"name":"page2","elements":[{"type":"boolean","name":"Smoking","title":"Have you smoked at least 100 cigarettes in your entire life?","description":" Note: 5 packs = 100 cigarettes","isRequired":true,"labelTrue":"No","labelFalse":"Yes"}]},{"name":"page3","elements":[{"type":"boolean","name":"AlcoholDrinking","title":"Would you be considered a heavy drinker?","description":"A heavy drinker is defined as an adult man having more than 14 drinks per week or an adult woman having more than 7 drinks per week.","isRequired":true,"labelTrue":"No","labelFalse":"Yes"}]},{"name":"page4","elements":[{"type":"boolean","name":"Stroke","title":"Have you ever had (or been told that you have had) a stroke?","isRequired":true,"labelTrue":"No","labelFalse":"Yes"}]},{"name":"page5","elements":[{"type":"text","name":"PhysicalHealth","title":"Thinking about your physical health, which includes physical illness and injury, for how many days during the past 30 days was your physical health not good? ","description":"(0-30 days)","isRequired":true}]},{"name":"page6","elements":[{"type":"text","name":"MentalHealth","title":"Thinking about your mental health, for how many days during the past 30 days was your mental health not good? ","description":"(0-30 days)","isRequired":true}]},{"name":"page7","elements":[{"type":"boolean","name":"DiffWalking","title":"Do you have serious difficulty walking or climbing stairs?","isRequired":true,"labelTrue":"Noes","labelFalse":"Yes"}]},{"name":"page8","elements":[{"type":"boolean","name":"Sex","title":"Are you male or female?","isRequired":true,"labelTrue":"Female","labelFalse":"Male"}]},{"name":"page9","elements":[{"type":"radiogroup","name":"AgeCategory","title":"What is your age?","isRequired":true,"choices":[{"value":"item1","text":"18-24"},{"value":"item2","text":"25-29"},{"value":"item3","text":"30-34"},{"value":"item4","text":"35-39"},{"value":"item5","text":"40-44"},{"value":"item6","text":"45-49"},{"value":"item7","text":"50-54"},{"value":"item8","text":"55-59"},{"value":"item9","text":"60-64"},{"value":"item10","text":"65-69"},{"value":"item11","text":"70-74"},{"value":"item12","text":"75-79"},{"value":"item13","text":"80 or older"}]}]},{"name":"page10","elements":[{"type":"radiogroup","name":"Race","title":"What is you race?","isRequired":true,"choices":[{"value":"item1","text":"American Indian/Alaskan Native"},{"value":"item2","text":"Black"},{"value":"item3","text":"Hispanic"},{"value":"item4","text":"White"},{"value":"item5","text":"Other"}]}]},{"name":"page11","elements":[{"type":"boolean","name":"Diabetic","title":"Have you ever had (or been told that you have had) diabetes?","isRequired":true,"labelTrue":"No","labelFalse":"Yes"}]},{"name":"page12","elements":[{"type":"boolean","name":"PhysicalActivity","title":"Do you engage in any physical activity or exercise other than your regular job? (during the past 30 days)","isRequired":true,"labelTrue":"No","labelFalse":"Yes"}]},{"name":"page13","elements":[{"type":"radiogroup","name":"question9","title":"Would you say that in general your health is...   ","isRequired":true,"choices":[{"value":"item1","text":"Excellent"},{"value":"item2","text":"Very good"},{"value":"item3","text":"Good"},{"value":"item4","text":"Fair"},{"value":"item5","text":"Poor"}]}]},{"name":"page14","elements":[{"type":"text","name":"SleepTime","title":"On average, how many hours of sleep do you get in a 24-hour period?","isRequired":true}]},{"name":"page15","elements":[{"type":"boolean","name":"Asthma","title":"Have you ever had (or been told that you have had) asthma?","isRequired":true,"labelTrue":"No","labelFalse":"Yes"}]},{"name":"page16","elements":[{"type":"boolean","name":"KidneyDisease","title":"Not including kidney stones, bladder infection, or incontinence, were you ever told you had kidney disease?","isRequired":true,"labelTrue":"No","labelFalse":"Yes"}]},{"name":"page17","elements":[{"type":"boolean","name":"SkinCancer","title":"Have you ever had (or been told that you have had) skin cancer?","isRequired":true,"labelTrue":"No","labelFalse":"Yes"}]}],"showProgressBar":"top","questionsOnPageMode":"questionPerPage"};

function sendDataToServer(survey) {
    //send Ajax request to your web server
    alert("The results are: " + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});