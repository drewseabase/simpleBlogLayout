let balance = 500;
let pin = 1234;
let enteredPin = 1234;
let choice = 2;
let amount = 210;


enteredPin === pin ? atmChoices(choice, amount, balance) : console.log('Incorrect PIN');

function atmChoices(choice, amount, balance){
      switch (choice){
        case (1):
            console.log(`Your current balance is $${balance}!`)
            break;
        case(2):
            if (amount > 0){
                balance += amount;
                console.log("Deposit successful");
                console.log(`Your new balance is $${balance}`);
            }else{
                console.log("Can't deposit zero or negative dollar amount!")
            }
            break;
        case(3):
            if (amount > balance){
                console.log('Insuffecient Funds');
            }else if (amount > 0){
                balance -= amount;
                console.log('Withdrawl successful!');
                console.log(`Your new balance is $${balance}`);
            }else{
                console.log("Can't withdraw zero or negative dollar amount!");
            }
            break;
        case(4):
            console.log('Thank you for using the ATM!');
            break;
        default:
            console.log('Invalid ATM Choice!');
            break;
}
}

