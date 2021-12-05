let nvb=document.getElementById("navbar");
let stc=navbar.offsetTop;
function SCR() {
  if(window.pageYOffset>=stc) {
    nvb.classList.add("sticky")
  } else {
    nvb.classList.remove("sticky");
  }
}
window.onscroll=SCR;