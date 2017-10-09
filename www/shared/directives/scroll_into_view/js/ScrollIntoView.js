angular.module("Common")


    .directive("scrollToVp", [function () {

        return {
            link: function (scope, $elem) {

                console.log($elem);

                $elem.on("click", function () {
                    console.log(this);
                    this.scrollIntoView({
                        behavior: "smooth", // or "auto" or "instant"
                        block: "center" // or "end"
                    });
                });

            }
        }

    }])