




$(document).ready(function() {
    $('.mobile-toggle').click(function() {
        var isOpen = $(this).hasClass('open');

        if (isOpen) {
            $(this).removeClass('open');
          $(this).find('span').text('☰'); //Change text to hamburger icon
            $('header li, .portfolioheader li').css('transform', 'rotate(-90deg)');
            $('ul').css('width', ''); // Remove width property
            $('.right').css('display', 'none');
            $('ul').css('flex-direction', 'column');
            $('header a').css('font-size', '1em');
            $('header a').css('font-weight', '300');
            $('header a').css('text-transform', 'none');
            $('nav').css('background-color', 'black');
            if ($(window).width() < 800) {
        // If screen width is less than 700px, set header link color to green
        $('header a').css('color', 'transparent');
        $('nav').css('background-color', 'transparent');//handy nachdem ich das menu aufmache und dann wieder zu,ache
    } else {
        // Otherwise, set header link color to white
        $('header a').css('color', 'white');
        $('nav').css('background-color', 'transparent');
        
        
    }
            
        } else {
            $(this).addClass('open');
            $(this).find('span').text('✕'); //Change text to close icon
            $('header li, .portfolioheader li').css('transform', 'rotate(0deg)');
            $('ul').css('width', '100vw');
            $('.right').css('display', 'block');
            $('.left').css('display', 'flex');
            $('.left').css('width', '70%');
            $('ul').css('flex-direction', 'row');
            $('header a').css('font-size', '4em');
            $('header a').css('font-weight', '900');
            $('header a').css('text-transform', 'lowercase');
            $('nav').css('background-color', 'black');
            $('header a').css('color', 'white');



        
        }
    });
});
    

//IMAGES EFFECT ON HOVER IN NAVIGATION 


document.querySelectorAll('.left > li').forEach(function(li, index) {
    li.addEventListener('mouseover', function() {
      document.querySelectorAll('.right > img').forEach(function(img, imgIndex) {
        if (imgIndex === index) {
          img.style.transform = 'scale(1.5)';
          img.style.opacity = '1';
        } else {
          img.style.opacity = '0';
        }
      });
    });
  
    li.addEventListener('mouseout', function() {
      document.querySelectorAll('.right > img').forEach(function(img) {
        img.style.transform = 'scale(1)';
        img.style.opacity = '0';
      });
    });
  });




  