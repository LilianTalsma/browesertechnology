document.addEventListener('DOMContentLoaded', (event) => {
    // Retrieve form data from localStorage
    const formData = JSON.parse(localStorage.getItem('formData')) || {};

    // Populate form fields with retrieved data
    for (const [key, value] of Object.entries(formData)) {
        const input = document.querySelector(`[name=${key}]`);
        if (input) {
            if (input.type === 'radio' || input.type === 'checkbox') {
                input.checked = input.value === value;
            } else {
                input.value = value;
            }
        }
    }

    // Add event listener to save form data on submit
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting

        // Collect form data
        const formData = {};
        new FormData(form).forEach((value, key) => {
            formData[key] = value;
        });

        // Save form data to localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Optionally, you can submit the form here if needed
        // form.submit();
    });
});