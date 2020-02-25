const { detect } = require('detect-browser');
const browser = detect();

document.addEventListener('DOMContentLoaded',function() {

    if (browser) {
        document.documentElement.classList.add(browser.name);
    }

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.body.removeAttribute('style');
        
        
        setTimeout(function() {
            cover.remove();
            document.body.classList.add('is-loaded');
        }, 250);
        

        // Carousels 
        
        document.getElementById('community') ? window.communityCarousel() : false;

        // Anims on inview
        window.animsInit()   

    };
    
    
    window.addEventListener('load', init);

}, false);