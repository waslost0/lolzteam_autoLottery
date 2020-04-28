// ==UserScript==
// @name         scroll
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Just to scroll page down.
// @downloadURL  https://raw.githubusercontent.com/waslost0/lolzteam_autoLotteryDrawing/master/scroll_opentab.js
// @updateURL    https://raw.githubusercontent.com/waslost0/lolzteam_autoLotteryDrawing/master/scroll_opentab.js
// @author       @waslost
// @match        https://lzt.guru/forums/contests/
// @grant        GM_openInTab
// ==/UserScript==

function scrollpage() {
    var Height=document.documentElement.scrollHeight;
    var i=1;
    function f(){
        window.scrollTo(0,i);
        Height=document.documentElement.scrollHeight;
        i=i+200;
        if(i>=Height)
        {
            openNewPage();
            return;
        }
        setTimeout( f,500);
    }f();
}

function openNewPage() {
    var dates = document.querySelectorAll('[id^="thread"]');
    for (let i = 0; i < dates.length; i++) {
        var alreadyIn = dates[i].innerHTML;
        if (alreadyIn.search('alreadyParticipate') == -1) {
            setTimeout(function(i) {
                var num = dates[i].attributes.id.nodeValue;
                var splits = num.split('-');
                GM_openInTab ('https://lzt.guru/threads/' + splits[1]);
                console.log('https://lzt.guru/threads/' + splits[1]);

            }, 10000*i, i);

        }
    }
}

scrollpage();
