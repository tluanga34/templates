angular.module("starter")

  .filter("toPostString", [function () {
    return function (input) {

      var str = [];
      for (var key in input) {
        if (input.hasOwnProperty(key)) {
          str.push(encodeURIComponent(key) + "=" + encodeURIComponent(input[key]))
          console.log(key + " -> " + input[key]);
        }
      }
      return str.join("&");
    }
  }]);