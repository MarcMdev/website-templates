const sideBarBtn = Array.from(document.querySelectorAll('.sb-btn'))
const content = Array.from(document.querySelectorAll('.content'));

function showContent() {

  sideBarBtn.forEach(btn => btn.classList.remove('focus'));
  this.classList.add('focus');

  content.forEach(page => page.classList.remove('block'));
  content[sideBarBtn.indexOf(this)].classList.add('block');

}


sideBarBtn.forEach(btn => btn.addEventListener('click', showContent))
