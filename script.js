document.addEventListener('DOMContentLoaded', function () {
    // Chart.js Impact Visualization
    const ctx = document.getElementById('impactChart').getContext('2d');
    const impactChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Toma de Decisiones de Compra'],
            datasets: [{
                label: 'Antes (Basado en intuición)',
                data: [80],
                backgroundColor: 'rgba(251, 191, 36, 0.6)', // amber-400
                borderColor: 'rgba(251, 191, 36, 1)',
                borderWidth: 1
            }, {
                label: 'Después (Basado en datos)',
                data: [95],
                backgroundColor: 'rgba(15, 118, 110, 0.7)', // teal-700
                borderColor: 'rgba(15, 118, 110, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#57534e' // stone-600
                    },
                    grid: {
                        color: '#e7e5e4' // stone-200
                    }
                },
                y: {
                    ticks: {
                        color: '#57534e' // stone-600
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#57534e' // stone-600
                    }
                },
                title: {
                    display: true,
                    text: 'Fundamento para el Desarrollo de Colecciones',
                    color: '#292524', // stone-800,
                    font: {
                        size: 14
                    }
                }
            }
        }
    });

    // Interactive Timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });

    // Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});