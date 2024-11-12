function processSubscription(amount) {
    let paymentLink = `https://cashfree.com/payment?amount=${amount}&recurring=true`;
    window.location.href = paymentLink;
}

function processOneTimeDonation() {
    const amount = document.getElementById("oneTimeAmount").value;

    if (amount < 500) {
        alert("Please enter an amount above ₹500 for a one-time donation.");
        return;
    }

    let paymentLink = `https://cashfree.com/payment?amount=${amount}&recurring=false`;
    window.location.href = paymentLink;
}
