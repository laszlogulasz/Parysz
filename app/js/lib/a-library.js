document.addEventListener("DOMContentLoaded", function(event) {
	const headerSwiper = new Swiper("#headerSwiper", {
		effect: "fade",
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		}
	});

	const refSwiper = new Swiper("#first", {
		slidesPerView: "auto",
		spaceBetween: 35,
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		}
	});

	const projects = document.querySelectorAll(".project");
	projects.forEach((project, i) => {
		project.addEventListener("click", () => {
			MicroModal.show(`modal-${i + 1}`, {
				disableScroll: true,
				onShow: modal => {
					const swiperContainer = modal.querySelector('.second');
					const swiper = swiperContainer.swiper ?
						swiperContainer.swiper :
						new Swiper(swiperContainer, {
							navigation: {
								nextEl: ".swiper-button-next",
								prevEl: ".swiper-button-prev"
							}
						});
					swiper.update()
				},
				closeTrigger: "data-custom-close",
				awaitCloseAnimation: true
			});
		});
	});
});
