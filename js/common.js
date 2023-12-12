const searchEl = document.querySelector('.search');
const serachInpuEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  serachInpuEl.focus();
});

serachInpuEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  serachInpuEl.setAttribute('placeholder', '통합검색');
});

serachInpuEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  serachInpuEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();