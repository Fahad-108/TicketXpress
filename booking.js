window.onload = function() {
    // Get today's date and format it as YYYY-MM-DD
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months are zero-indexed
    let dd = today.getDate();
    
    if (mm < 10) mm = '0' + mm; // Add leading zero if month is less than 10
    if (dd < 10) dd = '0' + dd; // Add leading zero if day is less than 10
    
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    
    // Set the min date to today for the date input
    document.getElementById('date').setAttribute('min', formattedDate);
    
};

function saveBookingDetails(event) {
    event.preventDefault();

    const route = document.getElementById('route').value;
    const busType = document.getElementById('bus-type').value;
    const seats = document.getElementById('seats').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const selectedRoute = document.querySelector(`#route option[value="${route}"]`);
    const standardPrice = selectedRoute.getAttribute('standard-price');
    const luxuryPrice = selectedRoute.getAttribute('luxury-price');

    let selectedPrice = busType === "Luxury" ? luxuryPrice : standardPrice;

    localStorage.setItem('route', route);
    localStorage.setItem('date', date);
    localStorage.setItem('time', time);
    localStorage.setItem('busType', busType);
    localStorage.setItem('seats', seats);
    localStorage.setItem('price', selectedPrice);

    window.location.href = "confirmation.html";
}