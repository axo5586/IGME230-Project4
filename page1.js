/* rectangle animation */
anime({
    
      targets: '.rectangle',
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
    
      targets: '.rectangle',
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

let b = document.querySelector("body");
setTimeout(function()
{
    b.style.backgroundColor = "#262626";
} , 1450);

let i = document.getElementById("imgs");
setTimeout(function()
{
    i.style.visibility = 'visible';
} , 1400);

let n = document.querySelector("nav");
setTimeout(function()
{
    n.style.visibility = 'visible';
} , 2500);


let animation = anime({
  targets: 'img',
  translateY: 
  [{ value: 100, duration: 1400},
  { value: 500, duration: 200 }],
  easing: 'linear',
  
});

