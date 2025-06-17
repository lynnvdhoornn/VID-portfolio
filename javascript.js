console.log("hi");

// cursor
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});


// titles floating
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('header h1, header img, header h3, h2, header p, section ul:first-of-type, h3, p:not(footer), form, section ol, section:first-of-type img:nth-of-type(1), section:first-of-type img:nth-of-type(2)');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => {
        observer.observe(element);
    });
});



