
function makeReservation(event) {
    event.preventDefault();

    // Date validation
    const dateInput = document.getElementById("date");
    const selectedDate = new Date(dateInput.value);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (selectedDate < currentDate) {
        alert('Please select a future date.');
        dateInput.focus();
        return;
    }

    // Time validation
    const timeInput = document.getElementById("time");
    if (!timeInput.value) {
        alert('Please select a time.');
        timeInput.focus();
        return;
    }

    // Other fields validation
    const partySize = document.getElementById("party-size").value;
    if (partySize < 1) {
        alert('Please enter a valid party size.');
        document.getElementById("party-size").focus();
        return;
    }

    const name = document.getElementById("name").value;
    if (!name.trim()) {
        alert('Please enter your name.');
        document.getElementById("name").focus();
        return;
    }

    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        document.getElementById("email").focus();
        return;
    }

    const phone = document.getElementById("phone").value;
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        document.getElementById("phone").focus();
        return;
    }

    // All fields are valid
    alert('Your reservation has been made successfully!');
}

function clearForm() {
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("party-size").value = "";
    document.getElementById("special-requests").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}

document.querySelector("#booking-form").addEventListener("submit", makeReservation);
document.querySelector("button[type='reset']").addEventListener("click", clearForm);

const currentDate = new Date().toISOString().split('T')[0];
document.getElementById("date").setAttribute('min', currentDate);

// Populate time dropdown with 1-hour intervals between 11 AM and 10 PM
const timeSelect = document.getElementById("time");

for (let hour = 11; hour <= 22; hour++) {
    const option = document.createElement('option');
    option.text = `${String(hour).padStart(2, '0')}:00`;
    option.value = `${String(hour).padStart(2, '0')}:00`;
    timeSelect.add(option);
}
document.getElementById("generate-pdf").addEventListener("click", function (event) {
    event.preventDefault();
    alert("This link will generate and download a PDF file.");
});

const images = document.querySelectorAll('.image-grid img');

images.forEach((image) => {
    image.addEventListener('click', () => {
        // add a zoom attribute to the image to trigger the zoom effect
        image.setAttribute('zoom', '');
        // add a class to the image to trigger the zoom effect
        image.classList.add('zoomed');
    });
});

// add a class to remove the zoom effect when the user clicks outside the image
document.addEventListener('click', (event) => {
    if (!event.target.closest('.image-grid img')) {
        document.querySelectorAll('.image-grid img[zoom]').forEach((image) => {
            image.removeAttribute('zoom');
            image.classList.remove('zoomed');
        });
    }
});

var paragraph = $("#paragraph");

// Change the text color to blue
paragraph.css("color", "blue");

// Increase the font size
paragraph.css("font-size", "40px")

// Prevent form submission if fields are not filled
const form = document.getElementById("contactsForm");
const submitButton = document.querySelector("button[type='submit']");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.firstName.value || !form.phoneNumber.value || !form.message.value) {
        alert("Please fill in all required fields.");
    } else if (!form.contactMethod.value) {
        alert("Please select a preferred contact method.");
    } else {
        form.submit();
    }
});

// Add event listener to radio buttons to check if a value is selected
const contactMethodRadios = document.querySelectorAll("input[name='contactMethod']");

contactMethodRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
        if (!radio.value) {
            alert("Please select a preferred contact method.");
        }
    });
});


function validateForm() {
    var name = document.getElementById("name").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var emailAddress = document.getElementById("emailAddress").value;

    // Check for valid name
    if (!name.match(/^[a-zA-Z\s]+$/)) {
        alert("Invalid name. Please enter only alphabets and spaces.");
        return false;
    }

    // Check for valid contact number
    if (!contactNumber.match(/^[0-9]{10,12}$/)) {
        alert("Invalid contact number. Please enter a valid 10 or 11 digit number.");
        return false;
    }

    // Check for valid email address
    if (!emailAddress.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,7})$/)) {
        alert("Invalid email address. Please enter a valid email address.");
        return false;
    }

    // If all fields are valid, return true
    return true;
}

// Call the function when the form is submitted
document.getElementById("contactsForm").addEventListener("submit", function (event) {
    event.preventDefault();
    if (!validateForm()) {
        return false;
    } else {
        // Form is valid, submit the form
        this.submit();
    }
});

function addToCart(item, price) {
    let quantity;
    switch (item) {
        case 'Pizza':
            quantity = document.getElementById('pizza-quantity').value;
            break;
        case 'Hotdog':
            quantity = document.getElementById('hotdog-quantity').value;
            break;
        case 'Burger':
            quantity = document.getElementById('burger-quantity').value;
            break;
        case 'Sushi':
            quantity = document.getElementById('sushi-quantity').value;
            break;
        case 'Salad':
            quantity = document.getElementById('salad-quantity').value;
            break;
        case 'Pasta':
            quantity = document.getElementById('pasta-quantity').value;
            break;
    }

    const cartItem = document.createElement('p');
    cartItem.textContent = `${item} x${quantity} - $${price * quantity}`;

    document.getElementById('cart').appendChild(cartItem);
}

function clearCart() {
    document.getElementById('cart').innerHTML = '<p>Add some food items to your cart.</p>';
}