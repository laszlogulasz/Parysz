const startMenu = () => {
	const menuItems = document.querySelectorAll(".nav__elem");
	const menu = document.querySelector(".menu");
	const hamburger = document.querySelector(".burger");
	const toggleMenu = () => menu.classList.toggle("visible");
	const closeMenu = () => menu.classList.remove("visible");
	menuItems.forEach(item =>
		item.addEventListener("click", () => {
			closeMenu();
			hamburger.classList.remove("is-active");
		})
	);
	hamburger.addEventListener("click", () => {
		toggleMenu();
		hamburger.classList.toggle("is-active");
	});
};

const startSwipers = () => {
	const headerSwiper = new Swiper("#headerSwiper", {
		effect: "fade",
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		}
	});
	//const gutter = ;

	const refSwiper = new Swiper("#first", {
		slidesPerView: "auto",
		spaceBetween: window.innerWidth > 768 ? 35 : 18,
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		}
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
				debugMode: false,
				disableScroll: true,
				onShow: modal => projectsSwiper[i].init(),
				closeTrigger: "data-custom-close",
				disableFocus: true,
				awaitCloseAnimation: true
			});
			setTimeout(function() {
				projectsSwiper[i].update();
			}, 300);
		});
	});
};

document.addEventListener("DOMContentLoaded", e => {
	startMenu();
	startSwipers();
});
