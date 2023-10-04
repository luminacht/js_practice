let isNum = false;

do {
    
    let width = window.prompt("Enter width: ");
    let height = window.prompt("Enter height: ");
    let length = window.prompt("Enter length: ");
    
    let volume = width * height * length;
    
        if(isNaN(volume)) {
            window.alert("Not a number!");
        } else {
            window.alert("The volume is " + volume);
            isNum = true;
            break;
        }
    
} while(!isNum);
