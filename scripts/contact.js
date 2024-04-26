// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submit_button = document.querySelector('#submit-button');
let contact_page = document.querySelector('#contact-page');

submit_button.addEventListener('click', function() {
    let thank_message = document.createElement('p');
    thank_message.innerHTML = 'Thank you for your message!';
    thank_message.style.fontSize = '24px'; 

    contact_page.innerHTML = '';
    contact_page.appendChild(thank_message);
});

