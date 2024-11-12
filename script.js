function processDonation() {
    const amount = document.getElementById("amount").value;
    const isSubscription = document.getElementById("subscription").checked;

    if (amount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    let paymentLink = `https://cashfree.com/payment?amount=${amount}`;

    if (isSubscription) {
        // Replace with Cashfree API endpoint or link for recurring payments
        paymentLink += "&recurring=true";
    }

    // Redirect to Cashfree payment link
    window.location.href = paymentLink;
}
