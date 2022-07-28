$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $(".main-article-header").addClass("show-shadow");
    } else {
      $(".main-article-header").removeClass("show-shadow");
    }
  });
});
