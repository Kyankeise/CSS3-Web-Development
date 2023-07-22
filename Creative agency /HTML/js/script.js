<!-- Author: Kyan Keise -->
<!-- Date 14th April 2022 -->
<!-- Video title: Creative Agency Website from scratch / HTML & CSS  -->

const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
toggle.classList.toggle('active')
navigation.classList.toggle('active')
})
