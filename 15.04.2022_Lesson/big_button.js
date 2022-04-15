"use strict";

(function() {
    window.addEventListener('load', init);

    function init() {
        let button = id("but1");
        let button2 = id("but2");

        button.addEventListener("click", click);
        button2.addEventListener("click", click2);
    }

    /**
     * @param {object} e Event -- Event details
     */
    function click(e) {
        console.log("Talha Nebi")
    }

    function click2(e) {
        console.log("Kumru")
    }

    /** ---- Helper Functions  ---- */

    function gen(tagName) {
        return document.createElement(tagName);
    }

    function id(idName) {
        return document.getElementById(idName);
    }

    function qs(selector) {
        return document.querySelector(selector);
    }

    function qsa(selector) {
        return document.querySelectorAll(selector);
    }
})();