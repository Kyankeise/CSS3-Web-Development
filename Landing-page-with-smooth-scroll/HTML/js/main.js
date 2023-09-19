// Author: Kyan Keise 
//  Date: 03/05/22
// Title: Landing page with smooth scroll 

// option 2 - jquery smooth scroll

// $('.navbar a').on('click',function(e) {
//     if(this.hash !== '') {
//         e.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800);
//     }
// });


// Option 3 - smooth scroll script

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 800
});
