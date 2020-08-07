const header = document.querySelector('.top-header');

const backgroundChanger = () => {
  if (this.scrollY > this.innerHeight / 2) {
    header.classList.add('header-active');
  } else {
    header.classList.remove('header-active');
  }
};

window.addEventListener('scroll', backgroundChanger);
