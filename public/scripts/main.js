// highlight navbar tab according to current tab
$(`.navbar a[href='${window.location.pathname}']`).css('color', 'var(--selected-color)');

// fade in page content on load
$('.center').stop(true).fadeIn({ duration: 1000, queue: false }).css('display', 'none').slideDown(700);

// fade out page content when leaving page
// $('a').click(function(event){
//     event.preventDefault();
//     linkLocation = this.href;
//     $('.center').fadeOut({ duration: 1000, queue: false }).slideUp(700, function() {
//         setTimeout(function(){ redirectPage(linkLocation); }, 200);
//     });
// });

// add events to button to hide/show page contents
$('.toggleBg').on('click', function() {
    $('button.toggleBg i').toggleClass('fas fa-eye-slash');
    $('button.toggleBg i').toggleClass('fas fa-eye');
    $('.center').fadeToggle(700);
});

function redirectPage(link) {
    document.location.href = link;
}