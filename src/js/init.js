const { detect } = require('detect-browser');
const browser = detect();
import Blazy from 'blazy';

document.addEventListener('DOMContentLoaded',function() {

    if (browser) {
        document.documentElement.classList.add(browser.name);
    }

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.body.removeAttribute('style');
        
        
        setTimeout(function() {
            document.body.classList.add('is-loaded');
        }, 250);
        
        setTimeout(function() {
            cover.remove();
        }, 500);
        

        // Carousels 
        
        document.getElementById('community') ? window.communityCarousel() : false;

        // Anims on inview
        window.animsInit()   

        // Blazy
        
        window.bLazy = new Blazy({
            success: function(el){

/*
                let item = el.parentNode.parentNode.parentNode.parentNode;
                
                item.classList.add('is-visible');
*/
            }
        });
    };
    
    
    window.addEventListener('load', init);

}, false);