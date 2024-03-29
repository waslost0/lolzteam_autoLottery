// ==UserScript==
// @name         autoDrawing
// @namespace    http://tampermonkey.net/
// @version      0.2.1
// @description  asd
// @updateURL    https://raw.githubusercontent.com/waslost0/lolzteam_autoLotteryDrawing/master/auto_drawing.js
// @downloadURL  https://raw.githubusercontent.com/waslost0/lolzteam_autoLotteryDrawing/master/auto_drawing.js
// @match        https://lolz.guru/threads/*
// @grant        window.close
// ==/UserScript==

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function waitForElementToDisplay(time) {
    var timeout = [20, 60];
    var contests = document.querySelector('a[href="https://lolz.guru/forums/contests/"]');
    if (contests == null) return;
    var already_participate = document.querySelector('span[class="LztContest--alreadyParticipating button marginBlock alreadyParticipate"]');
    if (already_participate != null) window.close();
    var participate_button = document.querySelector('.LztContest--Participate.button');
    var like = document.querySelector('.icon.likeCounterIcon');

    if (participate_button == null) {
        window.close();
    }

    if (document.getElementsByClassName('errorOverlay').length != 0) {
        window.close();
    }


    if (document.querySelector('.error.mn-15-0-0')) {
        window.close();
    }

    try {
        await delay(getRndInteger(timeout[0], timeout[1]) * 1000);
        participate_button.click();
        console.log('participate click');
        await delay(4000);
        console.log('like click');
        like.click();
        await delay(2000);
    } catch (e) {}

    setTimeout(function () {
        waitForElementToDisplay(time);
    }, time);
}

waitForElementToDisplay(1000);
