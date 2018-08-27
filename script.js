$('#contact-form').submit(function(e) {
	var name = document.GetElementById('inputName'),
		email = document.GetElementById('inputEmail'),
		message = document.GetElementById('inputMessage');
	if (!name.value || !email.value || !message.value) {
		alert.error('Please check your entries');
	} else {
		$.ajax({
			url: "https://formspree.io/benjamunster@gmail.com",
			method: "POST",
			data: $(this).serialize(),
			dataType: "json"
		});
		e.preventDefault();
		$(this).get(0).reset();
		alert.success('Message sent');
	}
});