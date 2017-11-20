/* rectangle animation */
anime({

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


