
let radioBtnTrue = document.getElementById('radio-btn-true');
radioBtnTrue.addEventListener('click', (e)=>{
  OpenSection(e);
  CheckedMarker(e);
  localStorage.setItem('consent', JSON.stringify(e.target.value));
});
let radioBtnFalse = document.getElementById('radio-btn-false');
radioBtnFalse.addEventListener('click', CheckedMarker);

document.getElementsByName('consent').forEach(item =>{
  item.addEventListener('click',(e)=>{
    boldCheckedValue(e);
    localStorage.setItem('consent', JSON.stringify(e.target.value));    
  });
});

document.getElementsByName('method').forEach(item =>{
  item.addEventListener('click',(e)=>{
    boldCheckedValue(e);    
    localStorage.setItem('method', JSON.stringify(e.target.value));
    let via = item.closest('label').children[1].innerText;
    let recipient = item.closest('label').children[2].innerText;    
    localStorage.setItem('via', JSON.stringify(via));
    localStorage.setItem('recipient', JSON.stringify(recipient));    
  });
});

const sendCodeBtn = document.getElementById('send-code-btn');
sendCodeBtn.addEventListener('click', (e)=>{
  OpenSection(e);
  CheckedMarker(e);
  ShowMethodSelected(e);
  GenerateCode();  
});

function OpenSection(e) {
  let section = e.target.closest('.step').nextElementSibling.children[1].firstElementChild;
  section.classList.remove('hidden');
  section.classList.add('no-hidden');
  let marker = e.target.closest('.step').nextElementSibling.firstElementChild.firstElementChild;
  marker.classList.add('active');
}

function CheckedMarker(e) {
  let marker = e.target.closest('.step-body').previousElementSibling.firstElementChild;
  marker.classList.add('done');
  marker.removeChild(marker.firstElementChild);
  let icon = document.createElement('i');
  icon.classList.add('fas','fa-check');
  marker.appendChild(icon);
  marker.parentElement.nextElementSibling.style.borderLeft = '2px solid #00c221';  
}

function boldCheckedValue(e) {
  let labels = e.target.closest('form').querySelectorAll('.radio-label');

  for(label of labels) {
    label.style.fontWeight = '400';    
  }

  let checkedLabels =e.target.closest('label').querySelectorAll('.radio-label');
  
  for(checkedLabel of checkedLabels) {    
    checkedLabel.style.fontWeight = '600';    
  }   
}

let validationCode = document.getElementById('validation-code');
validationCode.addEventListener('keyup', ValidateCode);

function ValidateCode(e) {
  let code = e.target.value;  
  let patt = new RegExp('^[0-9]+$');
  let codeEval = patt.test(code);  
  if(codeEval == false) {
    this.nextElementSibling.innerHTML = "Only numbers are accepted";
    e.target.style.border="1px solid #B00020";
  } else {
    this.nextElementSibling.innerHTML = "";
    e.target.style.border="1px solid #D1D1D1";
    let verifyBtn = document.getElementById('verify-btn');
    if (code.length == 12) {
      verifyBtn.removeAttribute('disabled');
    } else {
      verifyBtn.setAttribute('disabled', 'disabled');
    }
  }
}

function ShowMethodSelected() {  
  let messageBox = document.getElementById('message');
  messageBox.innerHTML = "An " + localStorage.getItem('via') + "has been sent to your " + localStorage.getItem('method') + "</br>Please check your messages (" + localStorage.getItem('recipient') + ") to obtain the validation code";
}

document.getElementById('resend-code').addEventListener('click', (e) =>{
  GenerateCode();
  alert("Your new code is " + localStorage.getItem('code'));
});

function GenerateCode() {
  let newCode =Math.floor(Math.random()*1000000000000);
  localStorage.setItem('code', JSON.stringify(newCode));
}

let verifyBtn = document.getElementById('verify-btn');
verifyBtn.addEventListener('click', VerifyCode);

function VerifyCode() {
  let code = document.getElementById('validation-code');
  let givenCode = localStorage.getItem('code');

  if(code.value == givenCode) {
    alert("Consent: " + localStorage.getItem('consent') + "\n" + "Verifying method: " + localStorage.getItem('recipient') + "\n" + "Code: " + localStorage.getItem('code'))
  }
  else {
    code.style.border="1px solid #B00020";
    code.nextElementSibling.innerHTML = "The entered code is not valid";
  }
}
