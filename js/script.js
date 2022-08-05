import ScrollSoft from './modules/scroll-soft.js';
import initAnimateScroll from './modules/scroll-animation.js';
import initialAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initAnimateNumber from './modules/anima-number.js';
import initOperation from './modules/operation.js';
import initAnimailsApi from './modules/animals-api.js';
import initBTC from './modules/bitcoinapi.js';

const scrollsoft = new ScrollSoft('[data-menu="suave"] a[href^="#"');
scrollsoft.init();

initAnimateScroll();
initialAccordion();
initTabNav();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initAnimateNumber();
initOperation();
initAnimailsApi();
initBTC();
