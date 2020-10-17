const navBtn = document.querySelector('.nav-btn');
const navOpen = document.querySelector('.nav-open');

const tl = new TimelineLite(
{
  paused: true,
  reversed: true,
  }
);


tl.to('.banner', 1, {
 width : '60%',
 ease: Power2.easeOut,

})
.to('nav', 1, {
 height: '100vh',
 ease: Power2.easeOut,
}, '-=0.5')

.fromTo('.nav-open', 0.5, {
 
 opacity: 0,
left: -50,
 ease: Power2.easeOut
},{
 opacity: 1,
 left: 0,

onComplete: function(){
navOpen.style.pointerEvents = 'auto'
console.log('done')
} 

})

function toggleTween(tween){
 tween.reversed()? tween.play(): tween.reverse()
}



navBtn.addEventListener('click', () => {
 if(tl.isActive()){
  e.preventDefaul();
  e.stopImmediatePropagation();
  return false;
 }
 toggleTween(tl)
})





const section = document.querySelectorAll('#section path');
for (let i = 0; i < section.length; i++){
console.log(`letter${i} : ${section[i].getTotalLength()}`)
}