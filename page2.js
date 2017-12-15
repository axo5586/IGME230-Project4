/* rectangle animation */
anime({
    
      targets: '.rectangle',
      scale:  ['*.5', 1, ],
      translateX: 
      [{ value: 0, duration: 1200 },
      { value: 2000, duration: 2000 }],
      
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
      delay:1330,
      begin:(function(anim){ }),
      loop: false
});

let b = document.querySelector("body");
setTimeout(function()
{
    b.style.backgroundColor = "#262626";
} , 1400);

let p = document.querySelector("aside");
setTimeout(function()
{
    p.style.visibility = 'visible';
} , 2850);

let a = document.querySelector("article");
setTimeout(function()
{
    a.style.visibility = 'visible';
} , 4300); 

let f = document.getElementById("particles-js");
setTimeout(function()
{
    f.style.visibility = 'visible';
} , 5750); 
    
let n = document.querySelector("nav");
setTimeout(function()
{
    n.style.visibility = 'visible';
} , 7100); 
    
