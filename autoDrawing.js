// ==UserScript==
// @name         autoDrawing
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  asd
// @updateURL    https://raw.githubusercontent.com/waslost0/lolzteam_autoLotteryDrawing/master/auto_drawing.js
// @downloadURL  https://raw.githubusercontent.com/waslost0/lolzteam_autoLotteryDrawing/master/auto_drawing.js
// @author       @waslost
// @match        https://lolz.guru/threads/*
// @grant        window.close
// ==/UserScript==

function waitForElementToDisplay(time) {
    var already_participate = document.evaluate( "//span[@class='LztContest--alreadyParticipating button marginBlock alreadyParticipate disabled ']", document, null, XPathResult.ANY_TYPE, null );
    var already_participate_text = already_participate.iterateNext();

   if (already_participate_text != null) { window.close();}

    var participate = document.querySelector('.button.marginBlock.LztContest--Participate');
    var like = document.querySelector('.icon.likeCounterIcon');

    if (document.querySelector('.error.mn-15-0-0')) {
        window.close();
    }

    try {
        var is_captcha_sloved = document.evaluate( "//div[@class='antigate_solver image solved']", document, null, XPathResult.ANY_TYPE, null );
        var is_captcha_sloved_text = is_captcha_sloved.iterateNext();
        console.log(is_captcha_sloved_text)
    }
    catch (e) {}

    try {
        if(is_captcha_sloved_text.innerText == "Solved") {
            like.click();
            participate.click();
            setTimeout(function() {
                window.close();
            }, 1000);
        }
    }
    catch (e) {}

   setTimeout(function() {
            waitForElementToDisplay(time);
   }, time);
}

(function() {
    waitForElementToDisplay(1000);
})();