document.addEventListener("DOMContentLoaded", function(event) {
	var mySwiper1 = new Swiper("#first", {
		slidesPerView: "auto",
		spaceBetween: 35,
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		}
	});
});

const projects = document.querySelectorAll(".project");
projects.forEach((project, i) => {
	const projectsSwiper = new Swiper(".second", {
		init: false,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});

	project.addEventListener("click", () => {
		MicroModal.show(`modal-${i + 1}`, {
			debugMode: true,
			disableScroll: true,
			onShow: modal => projectsSwiper[i].init(),

			closeTrigger: "data-custom-close",
			awaitCloseAnimation: true
		});
		setTimeout(function() {
			projectsSwiper[i].update();
		}, 10);
	});

	console.log("TCL: projectsSwiper", projectsSwiper);
});
