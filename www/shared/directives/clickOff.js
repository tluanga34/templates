/*
    This directive is responsible for trigerring event when user click outside the target element.

    This is usefull to close the pop-up, drop-down, etc when user click outside the element just to close them.

*/

angular.element.prototype.clickOff = function(callback) {
  var clicked = false,
    parent = this;

  //console.log(this);

  parent.on("click", function() {
    clicked = true;
  });

  angular.element(document).on("click", function(event) {
    if (!clicked) {
      callback(parent, event);
    }

    clicked = false;
  });
};

app

  .directive("clickOff", ["$parse", function($parse) {
    return {
      link: function(scope, $elem, $attr) {

        var clickHandler = $parse($attr.clickOff);

        $elem.clickOff(function(e) {
          scope.$apply(function() {
            clickHandler(scope, { $event: e });
          });
        });
      }
    }
  }]);