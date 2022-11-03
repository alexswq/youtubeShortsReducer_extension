window.addEventListener("load", () => {
	const retry = setInterval(() => {
		let shortsLinkMobile = document.getElementsByTagName("ytd-mini-guide-entry-renderer")[1];
		let shortsLinkDesktop = document.getElementsByTagName("ytd-guide-entry-renderer")[1];
		if (shortsLinkMobile !== undefined || shortsLinkDesktop !== undefined) {
			shortsLinkDesktop?.remove();
			shortsLinkMobile?.remove();
			clearInterval(retry);
		}
	}, 10);
});

window.addEventListener("click", redirect);

window.addEventListener("keydown", (event) => {
	switch (event.code) {
		case "ArrowUp":
		case "ArrowDown":
			redirect();
			break;
	}
});

function redirect() {
	const isOnShorts = window.location.pathname.includes("/shorts");

	if (isOnShorts) {
		window.location = "https://www.youtube.com";
		return;
	}
}

setInterval(() => {
	if (window.location.pathname.includes("/shorts")) {
		redirect();
	}
}, 60000);
