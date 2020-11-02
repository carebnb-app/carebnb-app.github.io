window.addEventListener('scroll', function(){
	if(pageYOffset > 30){
		const menu = document.querySelector('.menu');
		menu.style.boxShadow = "0 0 20px rgb(0,0,0, 0.1)";
		menu.style.transition = "1s";
	}
});