function convertTemperature() {

    let temp = parseFloat(document.getElementById("temperature").value);
    let conversion = document.getElementById("conversion").value;
    let result;

    if(isNaN(temp)){
        document.getElementById("result").innerHTML = "Please enter a valid number!";
        return;
    }

    switch(conversion){

        case "CtoF":
            result = (temp * 9/5) + 32;
            document.getElementById("result").innerHTML =
                temp + " °C = " + result.toFixed(2) + " °F";
            break;

        case "FtoC":
            result = (temp - 32) * 5/9;
            document.getElementById("result").innerHTML =
                temp + " °F = " + result.toFixed(2) + " °C";
            break;

        case "CtoK":
            result = temp + 273.15;
            document.getElementById("result").innerHTML =
                temp + " °C = " + result.toFixed(2) + " K";
            break;

        case "KtoC":
            result = temp - 273.15;
            document.getElementById("result").innerHTML =
                temp + " K = " + result.toFixed(2) + " °C";
            break;
    }
}