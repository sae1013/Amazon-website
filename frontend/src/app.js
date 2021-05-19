import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import Error404Screen from './screens/Error404Screen.js';
import { parseRequestUrl } from './utils.js';
const routes = {
    "/": HomeScreen,
    "/product/:id":ProductScreen,
};

const router = ()=>{
    
    const request = parseRequestUrl();
    const parseUrl = 
    (request.resource ? `/${request.resource}` : '/')+
    (request.id ? `/:id` :'')+
    (request.action ? `/${request.action}`:'');
    
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const mainContainer = document.querySelector('#main-container');
    mainContainer.innerHTML = screen.render();
}

window.addEventListener('load',router);
window.addEventListener('hashchange',router);