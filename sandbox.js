// let button = document.getElementById('button');



// button.addEventListener('click', ()=>{

//     let frontName = document.getElementById('frontName');
//     let name = document.getElementById('name');

//     name.addEventListener('change', function () {
//         frontName.innerHTML = this.value;
//     });

// })


const submitBtn = document.getElementById('button');

const validate = (e) => {
  e.preventDefault();
  const holderName = document.getElementById('holderName');
  const cardNumber = document.getElementById('cardNumber');
  if (holderName.value === "" && cardNumber.value === "") {
    document.getElementById('nameP').innerHTML = "help punk"
    document.getElementById('cardNumber').innerHTML = "help punk"
    holderName.focus();
    return false;
  }
  // if (cardNumber.value === "") {
  //   document.getElementById('cardNumber').innerHTML = "help punk"
  //   cardNumber.focus();
  //   return false;
  // }
  
  return true;
}

submitBtn.addEventListener('click', validate);