import {initNav} from './navigation'
import {setCopyright, setFooterHeight} from './footer'

document.addEventListener("DOMContentLoaded", function () {
    initNav();
    setCopyright();
    setFooterHeight();
});