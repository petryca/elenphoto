// Select the target element using a selector
const targets = document.querySelectorAll('.grid>div');

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // The element has entered the viewport
            entry.target.classList.add('visible');
        } else {
            // The element has left the viewport
            entry.target.classList.remove('visible');
        }
    });
}, {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.3 // Trigger callback when 30% of the element is in the viewport
});

// Start observing the target element
targets.forEach(target => {
    observer.observe(target);
});