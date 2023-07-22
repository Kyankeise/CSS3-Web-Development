// Author: Kyan Keise 
// Date: 25/03/2022 
// Title: Mobile First Website 

// Animate smooth scroll

$('#view-work').on('click', function() {
    const images = $('#images').position().top;

    $('html, body').animate(
        {
            scrollTop: images
        },
        900
    );
});
