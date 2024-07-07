// Get all nav links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const sectionId = link.getAttribute('href').replace('#', '');

    const section = document.getElementById(sectionId);

    section.scrollIntoView({ behavior: 'smooth' });
    navLinks.forEach((otherLink) => {
      otherLink.classList.remove('active');
    });

    link.classList.add('active');
  });
});

// Mobile view chnage 
const burgerOpen = document.getElementById('burger_open');
const burgerClose = document.getElementById('burger_close');

burgerOpen.addEventListener('click', (e) => {
  e.preventDefault();
  burgerOpen.style.display = "none";
  burgerClose.style.display = "block";
  document.getElementById("mobile_view_id").style.display = "block"
  document.querySelector(".homepage-container").style.paddingTop = "270px";
});

burgerClose.addEventListener('click', (e) => {
  e.preventDefault();
  burgerClose.style.display = "none"
  burgerOpen.style.display = "block"
  document.getElementById("mobile_view_id").style.display = "none"
  document.querySelector(".homepage-container").style.paddingTop = "104px";
});

function handleResize() {
  if (window.innerWidth >= 769) {
    burgerOpen.style.display = "none";
    burgerClose.style.display = "none";
    document.getElementById("mobile_view_id").style.display = "none"
  } else {
    burgerOpen.style.display = "block";
  }
}

handleResize();
window.addEventListener('resize', handleResize);


// Get all question cards
const questionCards = document.querySelectorAll('.question-card');

questionCards.forEach((questionCard) => {
  const question = questionCard.querySelector('.question');
  const answer = questionCard.querySelector('.answer');
  const plusIcon = question.querySelector('.plus-icon');
  const minusIcon = question.querySelector('.minus-icon');

  question.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("triger")
    if (answer.classList.contains('active')) {
      answer.classList.remove('active');
      plusIcon.style.display = 'block';
      minusIcon.style.display = 'none';
    } else {
      answer.classList.add('active');
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
    }
  });
});

window.addEventListener('scroll', (e) => {
  e.preventDefault();
  const navHeader = document.querySelector('.header-nav');
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    navHeader.classList.add('animatedbg');
  } else {
    navHeader.classList.remove('animatedbg');
  }
});
