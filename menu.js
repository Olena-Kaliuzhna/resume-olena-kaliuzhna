const sections = document.querySelectorAll('.section');

sections.forEach(element => {
  if (!element.classList.contains('main-info')) {
    element.classList.add('visually-hidden');
    element.classList.remove('active');
  }
});

document.querySelector('.nav-list').addEventListener('click', event => {
  if (!event.target.classList.contains('nav-item')) return false;
  let menuClass = event.target.dataset['menu'];

  sections.forEach(element => {
    element.classList.remove('visually-hidden');
    element.classList.add('active');
    if (!element.classList.contains(menuClass)) {
      element.classList.add('visually-hidden');
      element.classList.remove('active');
    }
  });
});
