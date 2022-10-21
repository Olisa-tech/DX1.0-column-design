ScrollReveal({ reset: true, duration: 3000, distance: '100px' })
ScrollReveal().reveal('.heading, .line', {
    origin: 'left',
    distance: '100px',
    duration: 2000
});

ScrollReveal().reveal('.firstsection-leftdiv p', { 
    origin: 'right',
    distance: '100px',
    duration: 2000 });

    ScrollReveal().reveal('.line', { 
        origin: 'bottom',
        delay: 1000
    });

    ScrollReveal().reveal('.logotext', { scale: 3, origin: "top" });

    ScrollReveal().reveal('.secondsection-leftdiv',  {
        rotate: {
            x: 260,
            z: 230,
        }
    });