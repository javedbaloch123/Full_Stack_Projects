
let contactSection = document.querySelector('.contact-section');
let ContactForm = contactSection.querySelector('form');
let contactModal = contactSection.querySelector('#contactModal');
let showModal = new bootstrap.Modal(contactModal); 
ContactForm.addEventListener('submit',function(e){
   e.preventDefault();
   
 let fname = ContactForm.querySelector('#fname').value.trim();
let email = ContactForm.querySelector('#email').value.trim();
let phone = ContactForm.querySelector('#phone').value.trim();
let lname = ContactForm.querySelector('#lname').value.trim();
let comment = ContactForm.querySelector('#comment').value.trim();

let fnameInput = ContactForm.querySelector('#fname').parentNode.firstElementChild;
let emailInput = ContactForm.querySelector('#email').parentNode.firstElementChild;
let phoneInput = ContactForm.querySelector('#phone').parentNode.firstElementChild;
let spinner = ContactForm.parentNode.querySelector('.contact-spinner');
 
function createErrorSpan() {
    let spanTag = document.createElement('span');
    spanTag.innerHTML = " *";
    spanTag.classList.add('text-danger');
    return spanTag;
}


 // Regular Expressions for Validation
 let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern
 let phonePattern = /^[0-9]{10,15}$/; // Only digits, 10 to 15 characters

 document.querySelectorAll('.text-danger').forEach(span => span.remove());
if(fname === ''){
    fnameInput.appendChild(createErrorSpan());
    
}else if(email === ''){
    emailInput.appendChild(createErrorSpan());
    
}else if(phone === ''){
    phoneInput.appendChild(createErrorSpan());
  
}else if(!emailPattern.test(email)){
    alert('Invalid email address');

}else if(!phonePattern.test(phone)){
    alert('Invalid Phone number');

}else{
   // Send data to PHP via AJAX (Fetch API)
   fetch('get_contact_info.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `fname=${encodeURIComponent(fname)}&lname=${encodeURIComponent(lname)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&comment=${encodeURIComponent(comment)}`
})
.then(response => response.json())
.then(data => {
    if (data.status === 'success') {
       spinner.style.display = 'flex';
         setTimeout(()=>{
            spinner.style.display = 'none';
            ContactForm.reset();
            showModal.show();
         },3000)
        
    } else {
         
    }
})
.catch(error => console.error("Error:", error));
}


})


 







