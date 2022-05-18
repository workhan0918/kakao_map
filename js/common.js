$(function(){
  // console.log($("body"));
  // console.log(window.location.href);
  // console.log($(location).attr("href"));

  function splitFunc(el) {
    let href = el.attr("href").split("/");
    href = href[href.length-1].split(".");
    href = href[0];
    return href;
  }

  // ^ 함수화 ^
  // let windowHref = $(location).attr("href").split("/");
  // windowHref = windowHref[windowHref.length-1].split('.');
  // windowHref = windowHref[0];
  // console.log(windowHref);


  let windowHref = splitFunc($(location));
  $("#lnb a").each(function() {
    // let matchHref = $(this).attr("href").split("/");
    // matchHref = matchHref[matchHref.length-1].split(".");
    // matchHref = matchHref[0];
    // console.log(matchHref[0]);
    // console.log(matchHref[0] == windowHref);
    // console.log($(this).text() == windowHref);
    // if ( matchHref == windowHref ) {
    //   $(this).addClass("on");
    // }
    if ( splitFunc($(this)) == windowHref ) {
      $(this).addClass("on");
    }
  });
  // #lnb의 메뉴와 같은 서브페이지 주소값을 매칭하여
  // 해당 메뉴에 on class 추가하시오.

  //script 영역 아코디언 만들기
  $("dd:not(:first)").css({
      "display":"none",
      "height": 0
    });

    $(".accordion dl dt").click(function(){
      let isAni = $("dd").is(":animated");
      let thisElem = $(this);
        if ( !isAni ) {
          $("dd").each(function(){
            if ( parseInt($(this).css("height")) == 300 ) {
              $(this).animate({ height: 0 },300,function(){
                $(this).css("display","none");
              });
            }
          });
          $("+dd", this).css("display", "block").animate({height: 300},800);
        }

    });
});
