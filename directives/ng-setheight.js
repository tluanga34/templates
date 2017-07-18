app.directive("ngSetheight",function(){
    return {
        scope : {
            ngSetheight : '='
        },
        link : function (scope, $elem, $attr){
            scope.$watch("ngSetheight",function(value){
                setTimeout(function(){
                    $elem.css({"height":value});
                },50);
                
            });
        }
    }
});