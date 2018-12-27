const sideBarBtn = Array.from(document.querySelectorAll('.sb-btn'))
const content = Array.from(document.querySelectorAll('.content'));
const profileInput = document.querySelector('#profile-input');

function showContent() {

  sideBarBtn.forEach(btn => btn.classList.remove('focus'));
  this.classList.add('focus');

  content.forEach(page => page.classList.remove('block'));
  content[sideBarBtn.indexOf(this)].classList.add('block');

}

sideBarBtn.forEach(btn => btn.addEventListener('click', showContent))

// Uncheck the Author button on window click
window.addEventListener('mouseup', (e)=> {

  if (profileInput.checked === true) {
    setTimeout(() => profileInput.checked = false , 100);
  }
  
})