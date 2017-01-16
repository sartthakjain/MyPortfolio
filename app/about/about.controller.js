angular.module('about')
    .controller('aboutController', ['$scope', '$state', function ($scope, $state) {



              var $animation_elements = $('.animation_element');
              var $window = $(window);


        show_aboutme();
        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');



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
            //    setTimeout(function () { $(".general_text").addClass("show"); }, 2000);
                //  $(".photos").delay(1000).animate({ opacity: '1' }, 500, "easeInOutCirc");
                $(".main").css({ "background-color": "white" });


            }, 2000);

        };



        function check_if_in_view() {
          var window_height = $window.height();
          var window_top_position = $window.scrollTop();
          var window_bottom_position = (window_top_position + window_height);

          $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            var animation_type=($element).data('animation');
            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
              $element.addClass(animation_type);
              console.log(animation_type);
            } else {
          
              console.log(animation_type);
            }
          });
        }




    }])
