
/* start rectangle animation */
anime({
  
    targets: '.start ',
    scale:  ['*.5', 1, ],
    translateY: 
    [{ value: 0, duration: 1200 },
    { value: 1300, duration: 2000 }],

    
    rotate: { value:'.5turn', easing: 'easeInOutSine'},
    delay: function(target, index)
    {
      /*delays each div by 20 milliseconds*/
      return index * 20;
    },
    delay:50,
    begin:(function(anim){ }),
    loop: false
});

anime({
  
    targets: '.start',
    backgroundColor: '#FFF',

    delay: function(target, index)
    {
      /*delays each div by 20 milliseconds*/
      return index * 20;
    },
    delay:1250,
    begin:(function(anim){ }),
    loop: false
});

let animation = anime({
    targets: '#animation .rectangle',
    translateX: 
    [{ value: 0, duration: 0 },
    { value: '1920', duration: 1000}],
    backgroundColor: 
    [
        {value: '#0011ff'}, 
    ],
      easing: 'linear',
    loop: true,
    direction: 'alternate',
    autoplay: false
  });

document.getElementById("play").onclick = animation.play;
document.getElementById("pause").onclick = animation.pause;
document.getElementById("restart").onclick = animation.restart;

let a = document.getElementById("application");
setTimeout(function()
{
    a.style.visibility = 'visible';
} , 1400);

