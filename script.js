// Process subscription donation
function processSubscription(amount) {
    // Check if the user has selected a valid subscription amount
    if (![50, 100, 200, 500, 1000].includes(amount)) {
        alert("Invalid amount selected. Please choose a valid subscription tier.");
        return;
    }

    // Assuming Cashfree UPI supports recurring payments, replace with the actual Cashfree UPI API link
    let paymentLink = `https://cashfree.com/payment?amount=${amount}&recurring=true`; 
    window.location.href = paymentLink;
}

// Process one-time donation
function processOneTimeDonation() {
    const amount = parseInt(document.getElementById("oneTimeAmount").value);

    if (isNaN(amount) || amount < 500) {
        alert("Please enter an amount above ₹500 for a one-time donation.");
        return;
    }

    // Construct the payment URL for a one-time donation
    let paymentLink = `https://cashfree.com/payment?amount=${amount}&recurring=false`; // Replace with your payment gateway link
    window.location.href = paymentLink;
}

// Function to handle button clicks for subscription donations
function handleSubscriptionClick(tier) {
    let amount;

    // Define donation amounts for subscription tiers
    switch (tier) {
        case 'tier1':
            amount = 50;  // ₹50-₹100
            break;
        case 'tier2':
            amount = 200;  // ₹200-₹500
            break;
        case 'tier3':
            amount = 1000;  // ₹1000
            break;
        default:
            alert("Invalid tier.");
            return;
    }

    processSubscription(amount);
}

// Function to validate and process one-time donation
function handleOneTimeDonationClick() {
    processOneTimeDonation();
}
