const lottieDayNight = document.getElementById('lottie-auto-day-night');
const lottieStories = document.getElementById('lottie-stories');
const lottieEasyFun = document.getElementById('lottie-easy-and-fun');

const lottieAlternative = document.getElementById('lottie-alternative');
lottieAlternative.style.display = 'none';

if(window.innerWidth < 800){
    lottieAlternative.style.display = 'block';
    lottieAlternative.style.paddingBottom = '225px';
    lottieDayNight.style.display = 'none';
}

console.log(lottieAlternative);
    
window.addEventListener('resize', function(){
	if(window.innerWidth < 800){
		lottieDayNight.style.display = 'none';
        lottieAlternative.style.display = 'block';
	} else if(window.innerWidth > 800){
        lottieAlternative.style.display = 'none';
        lottieDayNight.style.display = 'block';
	}
});


// window.addEventListener('scroll', () => {
// 	if(pageYOffset > 30){
// 		const menu = document.querySelector('.menu');
// 		menu.style.boxShadow = "0 0 20px rgb(0,0,0, 0.1)";
// 		menu.style.transition = "1s";
// 	}
// });

// const galleryimg = document.querySelectorAll('.pictures img');
// const fullgallery = document.querySelector('.fullgallery');


// for(let i=0; i < galleryimg.length; i++){
		
// 		let img = galleryimg[i];
// 		let imgsrc = img.src.split("/").pop();
// 		let imgname = imgsrc.split(".").shift();

// 		img.addEventListener('click', () => {
// 			//fullgallery.src = `https://carebnb.app/smartguestbook/img/gallery/${imgname}.jpg`;
// 			// const scrollposition = document.body.scrollTop;
// 			// console.log(scrollposition);
// 			//fullgallery.style.top = scrollposition;
// 		});
	
// 	}
