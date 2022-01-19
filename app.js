// asks user to input bill

let bill = prompt ("What is your Bill?");
document.body.innerHTML=bill;



// Calculates Tip Amount from Taxed Bill

let taxedBill = bill*1.07;
let tip = bill*.05;

//Calculate the final bill total, which is the taxed bill plus the tip value

let finalBill = taxedBill+tip;

//Output the final bill total.

document.body.innerHTML="Your final bill is = $"+finalBill;


