var slideIndex = 0;
UpdateGallery(slideIndex);

function GalleryToImage(id){
	UpdateGallery(slideIndex = id);
}

function GalleryPrevImage(){
	var images = document.getElementsByClassName("item");
	slideIndex--;
	if(slideIndex < 0){
		slideIndex = images.length -1;
	}
	UpdateGallery(slideIndex);
}

function GalleryNextImage(){
	var images = document.getElementsByClassName("item");
	slideIndex++;
	if(slideIndex >= images.length){
		slideIndex = 0;
	}
	UpdateGallery(slideIndex);
}

function UpdateGallery(slideId){
	var i;
	var images = document.getElementsByClassName("item");
	var dots = document.getElementsByClassName("gallery-dot");
	for(i = 0; i<images.length; i++){
		images[i].style.display = "none";
	}
	for(i = 0; i<dots.length; i++){
		dots[i].className = dots[i].className.replace(" active", "");
	}
	images[slideIndex].style.display = "block";
	 dots[slideIndex].className += " active";
}


var devGalleryIndex = 0;
UpdateDevGallery(devGalleryIndex);
function DevGalleryToImage(id){
	UpdateDevGallery(devGalleryIndex = id);
}

function DevGalleryPrevImage(){
	var images = document.getElementsByClassName("item-dev");
	devGalleryIndex--;
	if(devGalleryIndex < 0){
		devGalleryIndex = images.length -1;
	}
	UpdateDevGallery(devGalleryIndex);
}

function DevGalleryNextImage(){
	var images = document.getElementsByClassName("item-dev");
	devGalleryIndex++;
	if(devGalleryIndex >= images.length){
		devGalleryIndex = 0;
	}
	UpdateDevGallery(devGalleryIndex);
}

function UpdateDevGallery(slideId){
	var i;
	var images = document.getElementsByClassName("item-dev");
	var dots = document.getElementsByClassName("gallery-dot-dev");
	for(i = 0; i<images.length; i++){
		images[i].style.display = "none";
	}
	for(i = 0; i<dots.length; i++){
		dots[i].className = dots[i].className.replace(" active", "");
	}
	images[devGalleryIndex].style.display = "block";
	 dots[devGalleryIndex].className += " active";
}