// script.js
function processSubscription(amount) {
    let paymentLink = `https://cashfree.com/payment?amount=${amount}&recurring=true`; // Replace with your actual payment gateway link
    window.location.href = paymentLink;
}

function processOneTimeDonation() {
    const amount = document.getElementById("oneTimeAmount").value;

    if (amount < 500) {
        alert("Please enter an amount above ₹500 for a one-time donation.");
        return;
    }

    let paymentLink = `https://cashfree.com/payment?amount=${amount}&recurring=false`; // Replace with your payment gateway link
    window.location.href = paymentLink;
}
