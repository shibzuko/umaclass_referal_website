document.querySelector('.select-display').addEventListener('click', function() {
    this.classList.toggle('clicked');
});

document.querySelectorAll('.select-options li').forEach(function(li) {
    li.addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        var display = this.closest('.custom-select-wrapper').querySelector('.select-value');
        display.textContent = this.textContent;
        var select = this.closest('.custom-select-wrapper').querySelector('.custom-select');
        select.value = value;

        // Trigger the change event on the select element
        var event = new Event('change');
        select.dispatchEvent(event);

        // Hide the options
        this.parentNode.style.display = 'none';
    });
});

// Handle outside click to close the custom select options
document.addEventListener('click', function(e) {
    if (!e.target.matches('.select-display')) {
        document.querySelectorAll('.select-options').forEach(function(options) {
            options.style.display = 'none';
        });
        document.querySelectorAll('.select-display').forEach(function(display) {
            display.classList.remove('clicked');
        });
    }
}, true);
