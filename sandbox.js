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
  if (holderName.value === "") {
    document.getElementById('nameP').classList.toggle('visibility');
    holderName.focus();
    return false;
  }
  if (cardNumber.value === "") {
    document.getElementById('nameP').classList.remove('visibility')
    alert("Please enter your email address.");
    cardNumber.focus();
    return false;
  }
  
  return true;
}

submitBtn.addEventListener('click', validate);