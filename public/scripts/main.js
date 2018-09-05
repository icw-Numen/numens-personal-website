// fade in page content on load
$('.center').stop(true).fadeIn({ duration: 1000, queue: false }).css('display', 'none').slideDown(700);

// fade out page content when leaving page
$("a").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $(".center").fadeOut({ duration: 1000, queue: false }).slideUp(700, redirectPage(linkLocation));      
});

// add events to button to hide/show page contents
$("button.toggleBg").click(function(event) {
    if($("button.toggleBg i").hasClass("i.fas.fa-eye-slash")) {
        $("button.toggleBg i").removeClass("i.fas.fa-eye-slash");
        $("button.toggleBg i").addClass("i.fas.fa-eye");
    } else {
        $("button.toggleBg i").removeClass("i.fas.fa-eye");
        $("button.toggleBg i").addClass("i.fas.fa-eye-slash");
    }
    $(".center").fadeToggle(700);
});

function redirectPage(link) {
    document.location.href= link;
}