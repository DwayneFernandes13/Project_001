gsap.registerPlugin(MorphSVGPlugin);

const tl = gsap.timeline({repeat: -1, yoyo: false})
const tlEscape = gsap.timeline({repeat: -1, yoyo: false, delay: 0.5})
const tlColors = gsap.timeline({repeat: -1, yoyo: true})

tl.addLabel('start')
tl.to('path:nth-child(1)', {
  ease: Back.easeInOut.config(1.7),
  duration: 1, 
  morphSVG: {
    shape: '#step1',
    type: 'rotational'
  },
})
tl.to('path:nth-child(1)', {
  ease: Back.easeInOut.config(1.7),
  duration: 1, 
  morphSVG: {
    shape: '#step2',
    type: 'rotational'
  },
})
tl.to('path:nth-child(1)', {
  ease: Back.easeInOut.config(1.7),
  duration: 1, 
  morphSVG: {
    shape: '#step3',
    type: 'rotational'
  },
})
tl.to('path:nth-child(1)', {
  ease: Back.easeInOut.config(1.7),
  duration: 1, 
  morphSVG: {
    shape: '#start',
    type: 'rotational'
  },
})


tlEscape.fromTo('svg:nth-child(6) path:nth-child(1)',{
  autoAlpha: 0.2,
}, {
  ease: Power2.out,
  duration: 1,
  scale: 2,
  translateY: '-50%',
  translateX: '-50%',
  autoAlpha: 0,
})

tlColors.to('#stop1', {
  ease: 'linear',
  duration: 2, 
  attr: {
    'stop-color': '#28F0FF'
  }
})
tlColors.to('#stop2', {
  ease: 'linear',
  duration: 2, 
  attr: {
    'stop-color': '#B4B4FF'
  }
}, '-=2')

tlColors.to('#stop1', {
  ease: 'linear',
  duration: 2, 
  attr: {
    'stop-color': '#00FFAA'
  }
})
tlColors.to('#stop2', {
  ease: 'linear',
  duration: 2, 
  attr: {
    'stop-color': '#28F0F0'
  }
}, '-=2')

tlColors.to('#stop1', {
  ease: 'linear',
  duration: 2, 
  attr: {
    'stop-color': '#FFD264'
  }
})
tlColors.to('#stop2', {
  ease: 'linear',
  duration: 2, 
  attr: {
    'stop-color': '#00FFAA'
  }
}, '-=2')