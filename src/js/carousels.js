const Flickity = require('flickity');

const utils = require('fizzy-ui-utils');


document.addEventListener('DOMContentLoaded',function() {    
    
    window.communityCarousel = function() {
        
/*
        const community = document.getElementById('community');

        const communityflkty = new Flickity( community, {
            wrapAround: true,
            dragThreshold: 1,
            cellAlign: 'center',
            freeScroll: true,
            freeScrollFriction: 0.03,
        });
        
*/
        
        
        // Play with this value to change the speed
        let tickerSpeed = 1;
        
        let flickity = null;
        let isPaused = false;
        const slideshowEl = document.getElementById('community');
        
        
        //
        //   Functions
        //
        //////////////////////////////////////////////////////////////////////
        
        const update = () => {
          if (isPaused) return;
          if (flickity.slides) {
            flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
            flickity.selectedIndex = flickity.dragEndRestingSelect();
            flickity.updateSelectedSlide();
            flickity.settle(flickity.x);
          }
          window.requestAnimationFrame(update);
        };
        
        const pause = () => {
          isPaused = true;
        };
        
        const play = () => {
          if (isPaused) {
            isPaused = false;
            window.requestAnimationFrame(update);
          }
        };
        
        
        //
        //   Create Flickity
        //
        //////////////////////////////////////////////////////////////////////
        
        flickity = new Flickity(slideshowEl, {
          autoPlay: false,
          prevNextButtons: true,
          pageDots: false,
          draggable: true,
          wrapAround: true,
          selectedAttraction: 0.015,
          friction: 0.25
        });
        flickity.x = 0;
        
        
        //
        //   Add Event Listeners
        //
        //////////////////////////////////////////////////////////////////////
        
        slideshowEl.addEventListener('mouseenter', pause, false);
        slideshowEl.addEventListener('focusin', pause, false);
        slideshowEl.addEventListener('mouseleave', play, false);
        slideshowEl.addEventListener('focusout', play, false);
        
        flickity.on('dragStart', () => {
          isPaused = true;
        });
        
        
        //
        //   Start Ticker
        //
        //////////////////////////////////////////////////////////////////////
        
        update();
        
        
    };

}, false)