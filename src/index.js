// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector('form').addEventListener('SUBMIT', (e) =>{
//     e.preventDefault();
//     console.log(e);
//   })
// });

//adding an event listener
 document.querySelector('form').addEventListener('mouseover', function (){
  console.log('Mambo yamechemka')
})

document.querySelector('form').addEventListener('mouseover', e => console.log(e))

//creating an alert.
document.querySelector('.btn').addEventListener
('click', () => alert('i am alert'));


let addbutton = document.querySelector('addbutton');

addbutton.onclick = function () {
  let input = document.querySelector('input').value;
  console.log(input);
}