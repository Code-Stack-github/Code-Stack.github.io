let i=0, j=0;
let pct1=[], pct2=[];
pct1[0]='CSS/Pictures/ADA img1.jpg';
pct1[1]='CSS/Pictures/HoC1.png';
pct1[2]='CSS/Pictures/HoC2.png';
pct1[3]='CSS/Pictures/HoC3.png';
pct1[4]='CSS/Pictures/ADA img3.png';
pct2[0]='CSS/Pictures/Web1.jpg';
pct2[1]='CSS/Pictures/Web2.png';
pct2[2]='CSS/Pictures/Web3.jpg';
pct2[3]='CSS/Pictures/Web4.png';
pct2[4]='CSS/Pictures/Web5.jpg';
function slideshow1() {
    document.slide1.src=pct1[i];
    if(i<pct1.length-1) {
        i++;
    }
    else {
        i=0;
    }
    setTimeout("slideshow1()", 3000);
}
function slideshow2() {
  document.slide2.src=pct2[j];
  if(j<pct2.length-1) {
      j++;
  }
  else {
      j=0;
  }
  setTimeout("slideshow2()", 3000);
}
function slideshow() {
  slideshow1();
  slideshow2();
}
window.onload=slideshow;