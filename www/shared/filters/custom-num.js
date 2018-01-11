app.filter("customNum", function () {
    return function (input, param) {


        //console.log(input);
        if(input == undefined)
        	return;
        else if (input == 0)
            return '-';
        else if (input < 1000 && input >= -1000) {
            if (param == "2decimal")
                return input.toFixed(2);
            else
                return Math.round(input)
        }

        
        var output = (parseInt(input)).toString(),
            decimal,
			start = 3,
			pos;

        decimal = input.toString()
        if (decimal.indexOf(".") != -1) {
            decimal = decimal.split(".")[1].split("").splice(0, 2).join("");
            decimal = "." + decimal;
        } else {
            decimal = ".00";
        }

        output = output.split('');

        var isMinus = false;

        if (output[0] == '-') {
            output.shift();
            isMinus = true;
        }

        pos = (output.length - 3)

        for (; pos > 0; pos -= 2) {
            output.splice(pos, 0, ',');
        }

        if (isMinus)
            output.unshift('-');

        output = output.join('');

        if (param == "2decimal")
            return output + decimal;
        else
            return output;
    }
});