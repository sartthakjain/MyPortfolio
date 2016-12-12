$(document).ready(function () {
    $page_value = 0;

   (function ($) {
        // Init Skrollr
        var s = skrollr.init({
            render: function (data) {
                      }
        });
    })(jQuery);


    $(document).ready(function () {
        $('#fullpage').fullpage({
            anchors: ['firstPage', 'secondPage', 'thirdPage']
        });
    });


     $(".preloader").hide(0);
    $(".content_index").show(0);
     $(".content_aboutme").show(0);
     $(".content_social").show(0);



     show_social();

    setTimeout(function(){
      $(".preloader").hide(1000);

    }, 8000);


    //
    //
    // var count=0;
    // setInterval(function () {
    //
    //     document.getElementById('one').classList.toggle("active");
    //     switch (count%6) {
    //         case 0: $("#one").text("He is a creative web designer and an innovative software engineer.");
    //             break;
    //         case 2: $("#one").text("also a crazy youtuber and an adventurer gypsy.");
    //             break;
    //         case 4: $("#one").text("The fitness freak guy and extreme coffee lover.");
    //
    //     }
    //
    //     count++;
    // }, 2200);


    $(".nav_next").click(function () {

        switch ($page_value) {

            case 0: $(".content_index").hide(1000);
                      show_aboutme();
                         break;
            case 1: $(".content_aboutme").hide(1000);
                     show_social();
                     break;
        };


    });


    $(".nav_prev").click(function () {

        switch ($page_value) {

            case 1: $(".content_aboutme").hide(1000);
                    show_index();
                    break;
            case 2: $(".content_social").hide(1000);
                     show_aboutme();
                      break;

        };


    });




    function show_aboutme() {
        $page_value = 1;
        $(".content_aboutme").delay(3000).show(1000);
        setTimeout(function () {
            $(".nav_prev span").css({ "background-color": "#FFFF33" });
            $(".nav_prev a.link_text").css({ "color": "#FFFF33" });
            $(".nav_next span").css({ "background-color": "#FFFF33" });
            $(".nav_next a.link_text").css({ "color": "#FFFF33" });
            $("#right").css({ "background-color": "#fff" });
            $("#left").css({ "background-color": "#fff" });
            setTimeout(function () { $(".general_text").addClass("show"); }, 2000);
          //  $(".photos").delay(1000).animate({ opacity: '1' }, 500, "easeInOutCirc");
            $(".main").css({ "background-color": "white" });

        }, 2000);


    };
    function show_social() {
        $page_value = 2;
        $(".content_social").delay(3000).show(1000);
        $(".main").css({ "background-color": "white" });
    //    $("#left").css({ "background-color": "blue" });
      //  $("#right").css({ "background-color": "blue" });

    };




















});

/*
 <p class="onblack general_text" data-center-top="opacity:0;" data-top-bottom="opacity:1;"
                   data-anchor-target=".block_one"
                   style="top: 500px; left: 10%; font-size: 30px; width: 50%; position: fixed;">
                    "Design is not just what it looks like an
                </p>
                <p class="onwhite general_text" data-center-top="opacity:0;" data-top-bottom="opacity:1;"
                   data-anchor-target=".block_one"
                   style="top:500px;left:50%;font-size:30px;width:50%;position:fixed;">
                    d feels like. Design is how it works."
                </p>






        <div id="helper">
            <div class="marker red"></div>
            <div class="marker green"></div>
            <div class="marker blue"></div>
            <div class="marker yellow"></div>
        </div>


         <div style="position:fixed;top:80%;">
                <a href="http://twitter.com/minimalmonkey" class="icon-button twitter"><i class="icon-twitter"></i><span></span></a>
                <a href="http://facebook.com" class="icon-button facebook"><i class="icon-facebook"></i><span></span></a>
                <a href="http://plus.google.com" class="icon-button google-plus"><i class="icon-google-plus"></i><span></span></a>
            </div>


                 <!-- LightWidget WIDGET -->
               <iframe src="//lightwidget.com/widgets/19b60c7acf1357f99603c2a61bbb9545.html"
             id="lightwidget_19b60c7acf" name="lightwidget_19b60c7acf" scrolling="no"
            allowtransparency="true" class="lightwidget-widget"
            style="width: 20%;height:20%; border: 0; overflow: hidden;"></iframe>



                <h1 class="name_short" style="position:fixed;font-size:10px;"
                    data-bottom-bottom="top:100px;left:75%;"
                    data-top-center="top:-20px;left:35%;"
                    data-anchor-target=".block_one">
                    <div class="circle_profile" data-bottom-bottom="background-size:110%;width:150px;height:150px;"
                         data-top-center="background-size:110%;width:75px;height:75px;"
                         data-anchor-target=".block_one">
                    </div>
                </h1>


                //helper





                //tint

                   <div class="tintup" data-id="sartthakjain"
                  data-columns="" data-expand="true"
                 data-infinitescroll="true"
                 data-personalization-id="842707"
                style="height:500px;width:100%;">
                <a href="http://www.tintup.com/blog/the-best-twitter-wall-display"
                   style="width:118px;height:31px;
                background-image:url(//d33w9bm0n1egwm.cloudfront.net/assets/logos/poweredbytintsmall.png);
                position:absolute;bottom:10px;right: 20px;text-indent: -9999px;z-index:9;">tweet wall for events</a></div>

            </div>

              <script async src="https://d36hc0p18k1aoc.cloudfront.net/pages/a5b5e5.js"></script>




*/
