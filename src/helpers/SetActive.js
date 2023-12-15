import gsap from "gsap/gsap-core"


function setActive(index = null, direction, tl) {
  let sel = document.querySelectorAll(".menu-item-style")
  let num = document.querySelectorAll(".menu-item-style__number")
  sel.forEach((el) => el.classList.remove('menu-item-style__active'))
  num.forEach((el) => el.classList.remove('menu-item-style__number_active'))
  if (direction == 'prev') {
    if (tl.currentLabel() == 'step1' || tl.currentLabel() == 'step1-direct') {
      sel[0].setAttribute("class", "menu-item-style menu-item-style__active")
      num[0].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
      return
    }
    if (tl.currentLabel() == 'step2' || tl.currentLabel() == 'step2-direct') {
      sel[0].setAttribute("class", "menu-item-style menu-item-style__active")
      num[0].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
      return
    }
    if (tl.currentLabel() == 'step3' || tl.currentLabel() == 'step3-direct') {
      sel[1].setAttribute("class", "menu-item-style menu-item-style__active")
      num[1].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
      return
    }
    if (tl.currentLabel() == 'step4' || tl.currentLabel() == 'step4-direct') {
      sel[2].setAttribute("class", "menu-item-style menu-item-style__active")
      num[2].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
      return
    }

  }
  if (direction == 'next') {
    if (index == 'step-1') {
      sel[0].setAttribute("class", "menu-item-style menu-item-style__active")
      num[0].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
      return
    }
    if (tl.currentLabel() == 'step1' || tl.currentLabel() == 'step1-direct') {
      sel[1].setAttribute("class", "menu-item-style menu-item-style__active")
      num[1].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
      return
    }
    if (tl.currentLabel() == 'step2' || tl.currentLabel() == 'step2-direct') {
      sel[2].setAttribute("class", "menu-item-style menu-item-style__active")
      num[2].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
      return
    }
    if (tl.currentLabel() == 'step3' || tl.currentLabel() == 'step3-direct') {
      sel[3].setAttribute("class", "menu-item-style menu-item-style__active")
      num[3].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
      return
    }
    if (tl.currentLabel() == 'step4' || tl.currentLabel() == 'step4-direct') {
      sel[3].setAttribute("class", "menu-item-style menu-item-style__active")
      num[3].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
      return
    }
  }
  if(index == 'step2'){
    sel[1].setAttribute("class", "menu-item-style menu-item-style__active")
    num[1].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
  }
}

export default setActive