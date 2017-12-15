/* rectangle animation */
var repeat = anime({

  targets: 'div',
  scale:  ['*.5', 1, ],
  translateY: 
  [{ value: 0, duration: 1200 },
  { value: 1500, duration: 2000 }],
  
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

/* paragraph animation */
anime({

  targets: 'aside',
  translateX:
  [{value: -800, duration: 0},
  {value: 0, duration: 200}],
  translateY:[0,-200],
  loop: false,
});

/* article animation */
anime({

  targets: 'article',
  translateY:[0,-200],
})


anime({
  
    targets: 'div',
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
    b.style.backgroundColor = "lavender";
} , 1350);

let f = document.querySelector("figure");
setTimeout(function()
{
    f.style.visibility = 'visible';
} , 1350);

let p = document.querySelector("aside");
setTimeout(function()
{
    p.style.visibility = 'visible';
} , 2700);

let a = document.querySelector("article");
setTimeout(function()
{
    a.style.visibility = 'visible';
} , 4050); 

let n = document.querySelector("nav");
setTimeout(function()
{
    n.style.visibility = 'visible';
} , 5400);
  
