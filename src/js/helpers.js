(function(window, document, cutme, undefined) {

    const Helpers = function() {
        return {
        	isInView: isInView,
        };
    };   
    
    const isInView = function(el) {
        let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
        
        if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow ) {
            return true;
        }
    };
    
    cutme.Helpers = new Helpers();

}(window, document, window.cutme = window.cutme  || {}));