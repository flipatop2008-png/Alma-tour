const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    } else {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
    }
  });
});

sections.forEach(section => {
  section.style.transition = 'all 0.8s ease-out';
  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
});

const bookBtn = document.querySelector('.book-button');

bookBtn.addEventListener('mousemove', (e) => {
  const rect = bookBtn.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  bookBtn.style.transformOrigin = `${x}px ${y}px`;
  bookBtn.style.transform = 'scale(1.15)';
});

bookBtn.addEventListener('mouseleave', () => {
  bookBtn.style.transformOrigin = 'center center';
  bookBtn.style.transform = 'scale(1)';
});

const menuLinks = document.querySelectorAll('.url');

menuLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.textShadow = '0 0 15px #11A116';
    link.style.color = '#fff';
    link.style.transform = 'scale(1.1)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.textShadow = 'none';
    link.style.color = '#b6b6b6';
    link.style.transform = 'scale(1)';
  });

  link.style.transition = 'all 0.3s ease';
});

window.addEventListener('load', () => {
  const titles = document.querySelectorAll('.title, .second-title, .ch-title');
  titles.forEach((title, i) => {
    setTimeout(() => {
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }, i * 200);
  });
  titles.forEach(title => {
    title.style.transition = 'all 0.8s ease-out';
    title.style.opacity = '0';
    title.style.transform = 'translateY(30px)';
  });
});

const footerButtons = document.querySelectorAll('.footer-btn');

footerButtons.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.transformOrigin = `${x}px ${y}px`;
    btn.style.transform = 'scale(1.15)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transformOrigin = 'center';
    btn.style.transform = 'scale(1)';
  });
});