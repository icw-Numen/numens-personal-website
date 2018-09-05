// $('.content-full-page').animate({'opacity':'1'}, 600).slideDown(600);
$('.center').stop(true).fadeIn({
    duration: 1000,
    queue: false
}).css('display', 'none').slideDown(700);

$("a").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $(".center").fadeOut({ duration: 1000, queue: false }).slideUp(700, redirectPage(linkLocation));      
});

function redirectPage(link) {
    document.location.href= link;
}