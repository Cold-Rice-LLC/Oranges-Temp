import './style.css'
import { gsap, ScrollTrigger } from 'gsap/all'

// register plugins
gsap.registerPlugin(ScrollTrigger)

// listen for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')

  // // get all elements with data-animate
  // const animateElements = document.querySelectorAll('[data-animate]')
  // const animateMobileElements = document.querySelectorAll('[data-animate-mobile]')
  // const isLargeQuery = window.matchMedia('(min-width: 1024px)')

  // if (isLargeQuery.matches) {
  //   animateElements.forEach((element) => {
  //     ScrollTrigger.create({
  //       trigger: element,
  //       start: 'top 60%',
  //       markers: true,
  //       onEnter: () => {
  //         element.style.opacity = 1
  //       },
  //       onLeaveBack: () => {
  //         // console.log('onLeaveBack')
  //         // element.style.opacity = 0
  //       },
  //     })
  //   })
  // } else {
  //   // animateMobileElements.forEach((element) => {
  //   //   element.style.opacity = 0
  //   // })
  // }

  // // make a timeline for the animateElements
  // const timeline = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: document.body,
  //     start: 'top bottom',
  //     end: 'bottom bottom',
  //     scrub: true,
  //     markers: true,
  //   },
  // })

  // if (isLargeQuery.matches) {
  //   // loop through each element
  //   animateElements.forEach((element) => {
  //     // add the element to the timeline
  //     timeline.to(element, {
  //       opacity: 1,
  //       duration: 0,
  //     })
  //   })
  // } else {
  //   // loop through each element
  //   animateMobileElements.forEach((element) => {
  //     // add the element to the timeline
  //     timeline.to(element, {
  //       opacity: 1,
  //       duration: 0,
  //     })
  //   })
  // }
})
