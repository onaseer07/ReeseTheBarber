(function(){
    emailjs.init("user_0VjhhJRDUWJYP8bOlmWpE");
 })();
 window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('gmail', 'reesethebarber_com', this);
        document.getElementById('name').value = '';
        document.getElementById('tel').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    });
};