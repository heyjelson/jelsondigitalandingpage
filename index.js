window.onload = function() {
            document.getElementById('form').addEventListener('submit', function(event) {
                event.preventDefault();
                
                this.user_number.value = Math.random() * 100000 | 0;
                this.user_name.value;
                this.user_email.value;
                this.message.value;

                emailjs.sendForm('contact_service', 'contact_form', this)
                    .then(function() {
                        console.log('SUCCESS!');
                        alert('message sent Thanks!')
                    }, function(error) {
                        console.log('FAILED...', error);
                        alert('something wrong.. try later.')
                    });
            });
        }

