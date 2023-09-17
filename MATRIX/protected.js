// Get references to the navigation links and the "Rules" button
const navbarLinks = document.querySelectorAll('.navbar a');
const rulesButton = document.getElementById('rules-button');
const rules1Element = document.querySelector('.rules1');
const submitButton = document.querySelector('.submit-button');
const checkbox = document.querySelector('.vetanxmebi_checkbox');

// Disable the navigation links initially
navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        if (!rulesButton.classList.contains('rules-accepted')) {
            event.preventDefault(); // Prevent the link from navigating
        }
    });
});

rulesButton.addEventListener('click', function() {
    // Add the 'rules-accepted' class to the "Rules" button
    rulesButton.classList.add('rules-accepted');

    // Remove the click event listeners from the navigation links

    // Toggle the display property of the .rules1 element
    if (rules1Element.style.display === 'none' || rules1Element.style.display === '') {
        rules1Element.style.display = 'block';
    } else {
        rules1Element.style.display = 'none';
    }
});

// Disable the submit button by default
submitButton.disabled = true;

// Add an event listener to the checkbox
checkbox.addEventListener('change', function() {
    // Enable the submit button if the checkbox is checked
    submitButton.disabled = !this.checked;
});

// Add a click event listener to the submit button
submitButton.addEventListener('click', function() {
    // Hide the .rules1 element when the submit button is clicked
    rules1Element.style.display = 'none';
});
