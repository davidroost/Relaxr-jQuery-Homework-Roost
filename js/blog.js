$("a").click(function(event){
    event.preventDefault();
});

$('.about-relaxr-01-remaining').hide();

$('.learn-more').click(function(event){
    $('.about-relaxr-01-remaining').slideToggle("slow")
  });

$('.article-01-remaining').hide();

$('.read-more-01').click(function(event){
    $('.article-01-remaining').slideToggle("slow")
  });
$('.article-02-remaining').hide();

$('.read-more-02').click(function(event){
    $('.article-02-remaining').slideToggle("slow")
  });

$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 1100;

    if(y_scroll_pos > scroll_pos_test) {
      $('.article-01-remaining').hide('slow');
    }
  });

$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 1800;

    if(y_scroll_pos > scroll_pos_test) {
      $('.article-02-remaining').hide('slow');
    }
  });

$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 1100;

    if(y_scroll_pos > scroll_pos_test) {
      $('.about-relaxr-01-remaining').hide('slow');
    }
  });
