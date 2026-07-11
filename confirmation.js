window.onload = function () {
    const route = localStorage.getItem('route');
    const date = localStorage.getItem('date');
    const time = localStorage.getItem('time');
    const busType = localStorage.getItem('busType');
    const seats = localStorage.getItem('seats');

    // Route handling with encoding-safe split
    if (route) {
        const [from, to] = route.split("→").map(part => part.trim());
        document.getElementById('route-info').textContent = `${from} → ${to}`;
    } else {
        document.getElementById('route-info').textContent = "Route not found";
    }

    // Populate booking info
    document.getElementById('departure-date').textContent = date || "N/A";
    document.getElementById('departure-time').textContent = time || "N/A";
    document.getElementById('bus-type').textContent = busType || "N/A";

    const seatsNum = parseInt(seats) || 0;
    document.getElementById('num-seats').textContent = seatsNum;

    // Price calculation
    const pricePerSeat = getPrice(route, busType);
    const totalPrice = pricePerSeat * seatsNum;
    document.getElementById('total-price').textContent = `₨ ${totalPrice}`;
};

// Price logic
function getPrice(route, busType) {
    const prices = {
        "Islamabad → Lahore": { "Standard": 1500, "Luxury": 2000 },
        "Karachi → Multan": { "Standard": 4500, "Luxury": 6000 },
        "Rawalpindi → Peshawar": { "Standard": 1000, "Luxury": 1500 },
        "Lahore → Faisalabad": { "Standard": 900, "Luxury": 1500 },
        "Karachi → Quetta": { "Standard": 2500, "Luxury": 3500 },
        "Islamabad → Murree": { "Standard": 800, "Luxury": 1500 },
        "Gujrat → Lahore": { "Standard": 1100, "Luxury": 1500 },
        "Gujrat → Islamabad": { "Standard": 1200, "Luxury": 1600 },
        "Lahore → Sialkot": { "Standard": 1000, "Luxury": 1500 },
        "Rawalpindi → Swat": { "Standard": 1300, "Luxury": 2000 },
    };

    if (prices[route] && prices[route][busType]) {
        return prices[route][busType];
    } else {
        console.error("Invalid route or bus type");
        return 0;
    }
}

// Redirect to payment
function makePayment() {
    alert("Proceeding to payment page...");
    window.location.href = "thank.html";
}
