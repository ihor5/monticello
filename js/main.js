$(document).ready(function() {
  $(".js_news__slider").slick({
    autoplay: false,
    dots: true,
    infinite: true,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false
  });
  $(".js_prev").click(function() {
    $(".js_news__slider").slick("slickPrev");
  });
  $(".js_next").click(function() {
    $(".js_news__slider").slick("slickNext");
  });

  //show modal on .news click event
  $(".news__card").on("click", function() {
    const src = $(this)
      .find(".news__img")
      .attr("src");
    const title = $(this)
      .find(".news__title")
      .text();
    const txt = $(this)
      .find(".news__text")
      .text();
    const author = $(this)
      .find(".author")
      .clone();
    $(".showNews__img").attr("src", src);
    $(".showNews__title").html(title);
    $(".showNews__text").html(txt);
    $(".showNews__author").html(author);
    $(".showNews").css("display", "flex");
  });
  $(".showNews__close").click(function() {
    $(".showNews").css("display", "none");
  });

  //show modal on block1 and block2 click event

  $(".block1__btn")
    .find("p")
    .click(function() {
      const src = $(".block1")
        .find("img:first-child")
        .attr("src");
      const subtitle = $(".block1__subtitle")
        .find("h4")
        .text();
      const title = $(".block1__title")
        .find("h3")
        .text();
      const text = $(".block1__text")
        .find("p")
        .text();
      $(".showModal__img").attr("src", src);
      $(".showModal__subtitle").html(subtitle);
      $(".showModal__title").html(title);
      $(".showModal__text").html(text);
      $(".showModal").css("display", "flex");
    });
  $(".showModal__close").click(function() {
    $(".showModal").css("display", "none");
  });

  $(".block2__btn")
    .find("p")
    .click(function() {
      const src = $(".block2")
        .find("img:first-child")
        .attr("src");
      const subtitle = $(".block2__subtitle")
        .find("h4")
        .text();
      const title = $(".block2__title")
        .find("h3")
        .text();
      const text = $(".block2__text")
        .find("p")
        .text();

      $(".showModal__img").attr("src", src);
      $(".showModal__subtitle").html(subtitle);
      $(".showModal__title").html(title);
      $(".showModal__text").html(text);
      $(".showModal").css("display", "flex");
    });

  $(".gallery__main").click(function() {
    $(".gallery__360").css("display", "flex");
  });
  $(".gallery__close").click(function() {
    $(".gallery__360").css("display", "none");
  });

  // 360 horizontal viewer
  $(".cycle").cyclotron();

  $(".gallery__card").click(function() {
    const src = $(this)
      .find("img")
      .attr("src");
    $(".gallery__holder")
      .find("img")
      .attr("src", src);
    $(".gallery__holder").css("display", "block");
  });
  $(".gallery__holder p").click(function() {
    $(".gallery__holder").css("display", "none");
  });
});
