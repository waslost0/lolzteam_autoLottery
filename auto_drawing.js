// ==UserScript==
// @name         autoDrawing
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  yesblet
// @author       @waslost
// @match        https://lolzteam.online/threads/*
// @grant        window.close
// ==/UserScript==

function waitForElementToDisplay(time, alreadyText, thisHeadText) {

    if (document.querySelector('.button.marginBlock.LztContest--Participate')){
        var imteToCLick = document.querySelector('.button.marginBlock.LztContest--Participate.primary')
    }

    /*if (document.querySelector('.Tooltip.PopupTooltip.LikeLink.item.control.like')) {
        var LikeToCLick = document.querySelector('.Tooltip.PopupTooltip.LikeLink.item.control.like')
    }*/

    if (document.querySelector('.error.mn-15-0-0')) {
        window.close();
    }


    var headings = document.evaluate("//span[contains(., 'Принять участие в розыгрыше')]", document, null, XPathResult.ANY_TYPE, null );
    var thisHeading = headings.iterateNext();

    /*if (alreadyText==null && thisHeadText==null && thisHeading==null) {
        window.close();
        return;
    }*/
    if(alreadyText == null && thisHeadText != null) {
            window.close();
            return;
    }

    console.log(thisHeading);
    if(thisHeading != null) {

        imteToCLick.click();

        setTimeout(function() {
            window.close();
        }, 1000);

    }
    else {
        setTimeout(function() {
            waitForElementToDisplay(time);
        }, time);
    }
}

(function() {
    var alreadyIn = document.evaluate( "//span[@class='LztContest--alreadyParticipating button marginBlock alreadyParticipate disabled hidden']", document, null, XPathResult.ANY_TYPE, null );
    var alreadyText = alreadyIn.iterateNext();

    var headIn = document.evaluate("//span[contains(., 'Вы участвуете в конкурсе')]", document, null, XPathResult.ANY_TYPE, null );
    var thisHeadText = headIn.iterateNext();
    waitForElementToDisplay(1000, alreadyText, thisHeadText);
})();
