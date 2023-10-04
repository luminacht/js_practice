let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let userChoice = prompt("What to do? first, last, add: ");
let userResult;

switch(userChoice) {
    case "first":
        alert(`Name: ${contacts[0].name} Phone: ${contacts[0].phone} Email: ${contacts[0].email}`);
        break;
        
    case "last": 
        alert(`Name: ${contacts[contacts.length - 1].name} Phone: ${contacts[contacts.length - 1].phone} Email: ${contacts[contacts.length - 1].email}`);
        break;
        
    case "add":
        let flag = false;
        
        do 
        {
            let newName = prompt("Input Name: ");
            let newPhone = prompt("Input Phone: ");
            let newEmail = prompt("Input Email: ");
            
            if (newName.length === 0 && newPhone.length === 0 && newEmail.length === 0)
            {
                alert("Missing Values!");
            } else {
                contacts.push(`name: "${newName}" phone: "${newPhone}" email: "${newEmail}"`);
                flag = true;
            }
            
        } while(!flag);
        break;
        
    default: alert("Error!");
}
