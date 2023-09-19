
//Author: Kyan Keise -->
// Date 14th April 2022 -->
//  title: Creative Agency Website

// Code for the navigation bar to be responsive on mobile devices
const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
toggle.classList.toggle('active')
navigation.classList.toggle('active')
})