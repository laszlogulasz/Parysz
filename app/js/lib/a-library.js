document.addEventListener("DOMContentLoaded", function(event) {
	var mySwiper1 = new Swiper("#first", {
		// Optional parameters

		loop: true,
		// If we need pagination
		pagination: {
			el: ".swiper-pagination"
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},

		// And if we need scrollbar
		scrollbar: {
			el: ".swiper-scrollbar"
		}
	});
	var swiper = new Swiper("#second", {
		// Enable lazy loading
		preloadImages: false,
		lazy: true,
		init: false,

		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});

	MicroModal.init({
		onShow: modal => swiper.init(), // [1]
		//onClose: modal => swiper.destroy(), // [2]
		openTrigger: "data-custom-open", // [3]
		closeTrigger: "data-custom-close", // [4]
		disableScroll: true, // [5]
		disableFocus: false, // [6]
		awaitCloseAnimation: false, // [7]
		debugMode: true // [8]
	});

	const projects = document.querySelectorAll(".project");
	(() => console.log("TCL: projects", projects))();

	projects.forEach((project, i) =>
		project.addEventListener("click", () => {
			MicroModal.show(`modal-${i}`, {
				debugMode: false,
				disableScroll: true,
				onShow: modal => swiper.init(),
				closeTrigger: "data-custom-close",
				awaitCloseAnimation: true
			});
			console.log("clicked");
		})
	);
});
