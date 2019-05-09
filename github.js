window.onload = function() {
	var logos = document.getElementsByClassName("octicon-mark-github");
	var logo_src = chrome.extension.getURL("images/github.png");

	for(var i = 0; i < logos.length; i++){
		while (logos[i].firstChild) {
			logos[i].removeChild(logos[i].firstChild);
		}

		var img=document.createElement("img");
		img.src=logo_src;
		img.style.height = "32px";
		img.className = "v-align-middle";

		logos[i].parentNode.appendChild(img);
		logos[i].remove();
	}
}
