const sideBarBtn = Array.from(document.querySelectorAll('.sb-btn'))
const content = Array.from(document.querySelectorAll('.content'));
const profileInput = document.querySelector('#profile-input');
const menuBtn = document.querySelector('.menu-btn');
const sideBar = document.querySelector('.side-bar');


// Event Functions
function showContent() {

  sideBarBtn.forEach(btn => btn.classList.remove('focus'));
  this.classList.add('focus');

  content.forEach(page => page.classList.remove('block'));
  content[sideBarBtn.indexOf(this)].classList.add('block');

  menuBtn.classList.toggle('focus');
  sideBar.classList.toggle('slide-in');

};

function slideIn() {
  sideBar.classList.toggle('slide-in');
  menuBtn.classList.toggle('focus');
};

sideBarBtn.forEach(btn => btn.addEventListener('click', showContent));

// Uncheck the Author button on window click
// Hide SideBar
window.addEventListener('mouseup', (e)=> {

  if (profileInput.checked === true) {
    setTimeout(() => profileInput.checked = false , 100);
  };

  if (sideBar.classList.contains('slide-in')) {
    setTimeout(()=> {
      if (sideBar.classList.contains('slide-in')) {
        menuBtn.classList.toggle('focus');
        sideBar.classList.toggle('slide-in')
      }
    }, 100)
  }

});

//slide-in effect for side-bar on mobile version
menuBtn.addEventListener('click', slideIn);