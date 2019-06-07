
function isIPv4Address(inputString) {
    let inputString1 = inputString.split("");
    let fl = true;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i].charCodeAt() < 46 || inputString[i].charCodeAt() > 57 || inputString[i].charCodeAt() == 47) {
            fl = false;
        }else
           {
        let inputString2 = inputString.split(".");
        for (let i = 0; i < inputString2.length; i++) {
            if (inputString2[i] > 255 || inputString2[i] < 0 || inputString2[i] == "" || inputString2.length < 2) {
                fl = false;
                 }
              }
        }
    }
       
        return fl;
    }






