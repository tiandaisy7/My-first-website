// Like and Subscribe button interactivity
document.addEventListener('DOMContentLoaded', function() {
	// ...existing code...
	const likeBtn = document.querySelector('.like-btn');
	const subscribeBtn = document.querySelector('.subscribe-btn');
	const likeMsg = document.querySelector('.like-message');
	const subscribeMsg = document.querySelector('.subscribe-message');
	if (likeBtn && likeMsg) {
		likeBtn.addEventListener('click', function() {
			likeMsg.textContent = 'Thank you for liking!';
			likeMsg.style.display = 'block';
			setTimeout(() => { likeMsg.style.display = 'none'; }, 2000);
		});
	}
	if (subscribeBtn && subscribeMsg) {
		subscribeBtn.addEventListener('click', function() {
			subscribeMsg.textContent = 'You are now subscribed!';
			subscribeMsg.style.display = 'block';
			setTimeout(() => { subscribeMsg.style.display = 'none'; }, 2000);
		});
	}
});
document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('.contact-form');
	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			const name = document.getElementById('name').value;
			const email = document.getElementById('email').value;
			const message = document.getElementById('message').value;
			fetch('http://localhost:3000/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, email, message })
			})
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					alert('Thank you, ' + name + '! Your message has been sent.');
					form.reset();
				} else {
					alert('Sorry, there was a problem sending your message.');
				}
			})
			.catch(() => {
				alert('Sorry, there was a problem connecting to the server.');
			});
		});
	}
});
