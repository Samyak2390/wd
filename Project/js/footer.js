var foot = document.querySelector('footer');
var scrolling = false;

window.onscroll=function() {
  scrolling = true;
}

setInterval( function() {
  if ( scrolling ) {
    scrolling = false;
    foot.style.opacity='0.7';
  }else{
      foot.style.opacity='1';
      foot.style.transition='0.25s ease-out';
  }

}, 250 );