document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-popular')[0];
    
    const init = function() {
        
        const title = el.getElementsByClassName('js-title'),
              box = el.getElementsByClassName('js-box');
        
        const action = function(e) {

            const parent = e.currentTarget.parentNode;
            
            if (parent.classList.contains('is-active')) {
                parent.classList.remove('is-active');
                parent.classList.remove('fade-in');
            }
            
            else {
                for (let i = 0; i < box.length; i++) {
                    box[i].classList.remove('is-active');
                    box[i].classList.remove('fade-in');
                }

                parent.classList.add('is-active');
                
                setTimeout(function() {
                    
                    parent.classList.add('fade-in');
                    
                }, 10);
            }
        };
        
        for (let i = 0; i < title.length; i ++) {
            title[i].addEventListener('click', action);
        }
        
    }
    
    el ? init() : false;
    
}, false);
