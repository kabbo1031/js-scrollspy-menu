const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', ()=>{
  let current = '';

  sections.forEach(sec=>{
    if(pageYOffset >= sec.offsetTop - 70){
      current = sec.id;
    }
  });

  links.forEach(link=>{
    link.classList.toggle(
      'active',
      link.getAttribute('href') === '#' + current
    );
  });
});
