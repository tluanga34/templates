app

  .directive("touchStart", ["$parse", function($parse) {
    return {
      link: function(scope, $elem, $attr) {

        var clickHandler = $parse($attr.touchStart);

        $elem.on("touchstart", function(e) {
          scope.$apply(function() {
            clickHandler(scope, { $event: e });
          });
        });
      }
    }
  }])

  .directive("touchEnd", ["$parse", function($parse) {
    return {
      link: function(scope, $elem, $attr) {
        var clickHandler = $parse($attr.touchEnd);
        $elem.on("touchend", function(e) {
          scope.$apply(function() {
            clickHandler(scope, { $event: e });
          });
        });


      }
    }
  }])


  .directive("touchCancel", ["$parse", function($parse) {
    return {
      link: function(scope, $elem, $attr) {
        var clickHandler = $parse($attr.touchCancel);
        $elem.on("touchcancel", function(e) {
          scope.$apply(function() {
            clickHandler(scope, { $event: e });
          });
        });


      }
    }
  }]);