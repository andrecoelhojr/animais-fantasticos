import ScrollSoft from './modules/scroll-soft.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operation.js';
import fetchAnimals from './modules/animals-api.js';
import fetchBitcoin from './modules/bitcoinapi.js';
import initAnimateScroll from './modules/scroll-animation.js';

const scrollsoft = new ScrollSoft('[data-menu="suave"] a[href^="#"');
scrollsoft.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"', '[data-modal="fechar"', '[data-modal="container"');
modal.init();

const tooltip = new Tooltip('[data-tooltip');
tooltip.init();

initDropDownMenu();
initMenuMobile();
initOperation();
initAnimateScroll();
fetchAnimals('../../animalsapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btcPrice');
