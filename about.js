console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form submitted successfully!')
}

const mouseOverPic = document.getElementById('Image-Id')
mouseOverPic.addEventListener('mouseover', function() {
	alert('Cats are awesome, and if you like cats, you are awesome!')
})

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);