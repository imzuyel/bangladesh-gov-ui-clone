$(".top-social .link.effect").hover(
  function () {
    $("#bg").addClass("bg-hover");
    $("#bg").removeClass("bg");
  },
  function () {
    $("#bg").addClass("bg");
    $("#bg").removeClass("bg-hover");
  }
);

// Slider
let n = 0;
function slide() {
  const images = document.getElementsByClassName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].style = "display:none";
  }
  n++;
  if (n > images.length) {
    n = 1;
  }
  images[n - 1].style = "display:block";
  setTimeout(slide, 2000);
}

slide();

// Tab
$(document).ready(function () {
  $('.tab-a').click(function () {
    $(".tab").removeClass('tab-active');
    $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
    $(".tab-a").removeClass('active-a');
    $(this).parent().find(".tab-a").addClass('active-a');
  });
});