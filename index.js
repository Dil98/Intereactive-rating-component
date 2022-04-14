// const inputRating = document.getElementsByTagName('span');
const btn = document.querySelector('.submit-btn');
const feedback  =document.querySelector('.feedback');
const decription = document.querySelector('.decription');
const rating = document.querySelector('.rating-score');
const header = document.querySelector('.header');

// let inputRating=document.querySelectorAll('span');
// inputRating.forEach((rate)=>{
//  rate.addEventListener('click',(event)=>{
//     console.log(span.textContent);
//     });
// });


btn.addEventListener('click', () =>{
    decription.style.display = 'none';
    rating.style.display = 'none';
    header.style.display = 'none';

    feedback.style.display= 'flex';
    return true;
})