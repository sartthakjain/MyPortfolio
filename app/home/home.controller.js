angular.module('home')
    .controller('homeController', ['$state', '$scope', function ($state, $scope) {




            $(".content_index").show(0);






            var count = 0;
            setInterval(function () {

              //  document.getElementById('one').classList.toggle("active");
                switch (count % 6) {
                    case 0: $("#one").text("He is a creative web designer and an innovative software engineer.");
                        break;
                    case 2: $("#one").text("also a crazy youtuber and an adventurer gypsy.");
                        break;
                    case 4: $("#one").text("The fitness freak guy and extreme coffee lover.");

                }

                count++;
            }, 2200);








    }])
