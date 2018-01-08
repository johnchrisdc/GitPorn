window.onload = function() {
	var logos = document.getElementsByClassName("header-logo-invertocat");
	var logo_src = "https://i.imgur.com/9x9v1Ez.png";	

	for(var i = 0; i < logos.length; i++){
		while (logos[i].firstChild) {
			logos[i].removeChild(logos[i].firstChild);
		}

		var img=document.createElement("img");
		img.src=logo_src;
		img.style.height = "30px";

		logos[i].appendChild(img);
	}
}

