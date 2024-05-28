AOS.init({
	duration: 800,
	easing: 'slide'
});

(function ($) {

	"use strict";

	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();

	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: false,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});

		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: false,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 3
				},
				1000: {
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();


	var counter = function () {

		$('#section-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					// console.log(num);
					$this.animateNumber({
						number: num,
						numberStep: comma_separator_number_step
					}, 7000);
				});

			}

		}, {
			offset: '95%'
		});

	}
	counter();

	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, {
			offset: '95%'
		});
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function () {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
			e.preventDefault();

			var hash = this.hash,
				navToggler = $('.navbar-toggler');
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});


			if (navToggler.is(':visible')) {
				navToggler.click();
			}
		});
		$('body').on('activate.bs.scrollspy', function () {
			console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});



	var goHere = function () {

		$('.mouse-icon').on('click', function (event) {

			event.preventDefault();

			$('html,body').animate({
				scrollTop: $('.goto-here').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});
	};
	goHere();




})(jQuery);

if (localStorage.getItem('cart') == undefined || localStorage.getItem('cart') == null) {
	localStorage.setItem('cart', JSON.stringify([]));
}

displayCartIconQuantity();

function toast(msg) {
	var x = document.getElementById("snackbar");
	x.innerHTML = msg;
	x.className = "show";
	setTimeout(function () {
		x.className = x.className.replace("show", "");
	}, 3000);
}

const products = [{
		id: 1,
		name: "KAKASHI HATAKE | FULL SLEEVE WHITE T-SHIRT",
		image: "images/products/kakashi-1.png",
		price: "₹490.00",
		quantity: 1
	},
	{
		id: 2,
		name: "Marshmello || Full Sleeve Black T-Shirt",
		image: "images/products/Marshmellow-1.png",
		price: "₹490.00",
		quantity: 1
	},
	{
		id: 3,
		name: "Combo || Full Sleeve White & Black T-Shirt",
		image: "images/products/combo-bw-1.png",
		price: "₹490.00",
		quantity: 1
	},
	{
		id: 4,
		name: "Skull Print || Full sleeve black",
		image: "images/products/skull-1.png",
		price: "₹490.00",
		quantity: 1
	},
	{
		id: 5,
		name: "Minato Namikaze || Full Sleeve White T-Shirt",
		image: "images/products/Minato-1.png",
		price: "₹490.00",
		quantity: 1
	},
	{
		id: 6,
		name: "Combo Full Sleeve T-Shirt",
		image: "images/products/Combo-mm-1.png",
		price: "₹490.00",
		quantity: 1
	},
	{
		id: 7,
		name: "Power Kakashi T-Shirt",
		image: "images/products/Power-Kakashi-1.png",
		price: "₹490.00",
		quantity: 1
	},
	{
		id: 8,
		name: "Essential Tonsel T-Shirt",
		image: "images/products/Combo-mm-1.png",
		price: "₹490.00",
		quantity: 1
	},
	{
		id: 9,
		name: "Happy Thoughts Panta T-Shirt",
		image: "images/products/Combo-mm-1.png",
		price: "₹490.00",
		quantity: 1
	},
	{
		id: 10,
		name: "Midi Top",
		image: "images/products/Combo-mm-1.png",
		price: "₹490.00",
		quantity: 1
	},
	{
		id: 11,
		name: "Peace Out Lycra T-Shirt",
		image: "images/products/Combo-mm-1.png",
		price: "₹490.00",
		quantity: 1
	},
	{
		id: 12,
		name: "Airship Lycra T-Shirt",
		image: "images/products/Combo-mm-1.png",
		price: "₹490.00",
		quantity: 1
	},
	{
		id: 13,
		name: "Ryon Plain Midi",
		image: "images/products/Combo-mm-1.png",
		price: "₹490.00",
		quantity: 1
	},
];

function addToCart(pro_id, qty, size) {
	const cart = JSON.parse(localStorage.getItem('cart')) || [];
	const index = cart.findIndex(item => item.pro_id === pro_id && item.size === size);

	if (index !== -1) {
		// If it exists, increment its quantity
		cart[index].qty += qty;
	} else {
		// Otherwise, add a new item to the cart
		const item = {
			pro_id,
			qty,
			size
		};
		cart.push(item);
	}


	localStorage.setItem('cart', JSON.stringify(cart));

	toast("Added successfully to cart!!");

	let totalQty = 0;
	cart.forEach(item => {
		totalQty += item.qty;
		// console.log(item.qty);
	});
	document.getElementById("cartItems").innerHTML = totalQty;

	displayCartIconQuantity();
}

function createTableRow(id, productName, imageUrl, price, quantity, size) {
	// Create the table row element
	var tr = document.createElement('tr');
	tr.setAttribute("id", `${id, size}`);
	tr.classList.add('text-center');

	// Create the "Remove" column
	var removeTd = document.createElement('td');
	removeTd.classList.add('product-remove');
	var removeLink = document.createElement('a');
	removeLink.setAttribute('onclick', 'removePro(' + id + ',"' + size + '")');
	var removeIcon = document.createElement('span');
	removeIcon.classList.add('ion-ios-close');
	removeLink.appendChild(removeIcon);
	removeTd.appendChild(removeLink);
	tr.appendChild(removeTd);

	// Create the "Image" column
	var imageTd = document.createElement('td');
	imageTd.classList.add('image-prod');
	var imageDiv = document.createElement('div');
	imageDiv.classList.add('img');
	imageDiv.style.backgroundImage = 'url(' + imageUrl + ')';
	imageTd.appendChild(imageDiv);
	tr.appendChild(imageTd);

	// Create the "Product Name" column
	var nameTd = document.createElement('td');
	nameTd.classList.add('product-name');
	var nameH3 = document.createElement('h3');
	nameH3.textContent = productName;
	nameTd.appendChild(nameH3);
	tr.appendChild(nameTd);

	// Create the "Price" column
	var priceTd = document.createElement('td');
	priceTd.classList.add('price');
	priceTd.textContent = price;
	tr.appendChild(priceTd);

	// Create the "Size" column
	var sizeTd = document.createElement('td');
	sizeTd.classList.add('product-size');
	sizeTd.textContent = size;
	tr.appendChild(sizeTd);

	// Create the "Quantity" column
	var quantityTd = document.createElement('td');
	quantityTd.classList.add('quantity');
	var quantityInputGroup = document.createElement('div');
	quantityInputGroup.classList.add('input-group', 'mb-3');
	var quantityInput = document.createElement('input');
	quantityInput.setAttribute('type', 'number');
	quantityInput.setAttribute('name', 'quantity');
	quantityInput.classList.add('quantity', 'form-control', 'input-number');
	quantityInput.setAttribute('value', quantity);
	quantityInput.setAttribute('min', '1');
	quantityInput.setAttribute('max', '100');
	quantityInput.addEventListener('input', function () {
		var quantity = parseInt(quantityInput.value);
		var totalPrice = quantity * parseFloat(price.substring(1));
		totalTd.textContent = '₹' + totalPrice.toFixed(2);

		const cart = JSON.parse(localStorage.getItem('cart'));
		const index = cart.findIndex(item => item.pro_id == id);
		if (index !== -1) {
			cart[index].qty = quantity;
			localStorage.setItem('cart', JSON.stringify(cart));
		}
		displayCartIconQuantity();
		calculateSubtotal();
	});
	quantityInputGroup.appendChild(quantityInput);
	quantityTd.appendChild(quantityInputGroup);
	tr.appendChild(quantityTd);

	// Create the "Total" column
	var totalTd = document.createElement('td');
	totalTd.classList.add('total');
	var totalPrice = quantity * parseFloat(price.substring(1));
	totalTd.textContent = '₹' + totalPrice.toFixed(2);
	tr.appendChild(totalTd);
	document.getElementById('rootTable').appendChild(tr);
	calculateSubtotal();
	displayCartIconQuantity();
}

function calculateSubtotal() {
	var subtotal = 0;
	var totalTds = document.getElementsByClassName('total');
	for (var i = 0; i < totalTds.length; i++) {
		var priceString = totalTds[i].textContent.substring(1);
		var price = parseFloat(priceString);
		subtotal += price;
	}

	document.getElementById('subtotal').textContent = '₹' + subtotal.toFixed(2);
	localStorage.setItem('subtotal', document.getElementById('subtotal').textContent);

	var subtotalValue = document.getElementById('subtotal').innerHTML;
	if (parseInt(subtotalValue.substring(1)) > 1000) {
		var delivery = document.getElementById('delivery');
		delivery.textContent = '₹0.00';
		var discount = document.getElementById('discount').innerHTML;
		var res = parseInt(subtotalValue.substring(1)) + parseInt(delivery.innerHTML.substring(1)) -
			parseInt(discount.substring(1));
		document.getElementById('total').innerHTML = `₹${res.toFixed(2)}`;
	} else if (parseInt(subtotalValue.substring(1)) < 1000) {
		var delivery = document.getElementById('delivery');
		delivery.innerHTML = '₹33.00';
		var discount = document.getElementById('discount').innerHTML;
		var res = parseInt(subtotalValue.substring(1)) + parseInt(delivery.innerHTML.substring(1)) - parseInt(
			discount.substring(1));
		document.getElementById('total').innerHTML = `₹${res.toFixed(2)}`;
	}
}

function checkoutCart() {
	const urlParams = new URLSearchParams(window.location.search);
	const pro_id = urlParams.get('id');

	if (pro_id != null) {
		document.getElementById("main").style.display = "unset";
		return;
	}

	displayProducts();

	if (JSON.parse(localStorage.getItem('cart')).length == 0) {
		if (document.getElementById("placeholder")) {
			document.getElementById("placeholder").style.display = "unset";
			return;
		}
		localStorage.setItem('subtotal', "₹00.00");
		document.querySelector('.cart-list').style.display = 'none';
		document.querySelector('.cart-list').nextElementSibling.style.display = 'unset';
		document.querySelector('.cart-wrap').style.display = 'none';
	} else {
		if (document.getElementById("main")) {
			document.getElementById("main").style.display = "unset";
			return;
		}
		if (document.getElementById('rootTable').innerHTML.length !== 0) {
			document.querySelector('.cart-list').style.display = 'block';
			document.querySelector('.cart-list').nextElementSibling.style.display = 'none';
			document.querySelector('.cart-wrap').style.display = 'unset';
		}
	}
}

function removePro(id, size) {

	const cartItems = JSON.parse(localStorage.getItem('cart'));

	const removeCartIndex = cartItems.findIndex(item => parseInt(item.pro_id) == id);
	if (removeCartIndex !== -1) {
		cartItems.splice(removeCartIndex, 1);
		localStorage.setItem('cart', JSON.stringify(cartItems));
		document.getElementById(`${id, size}`).style.display = 'none';
		displayCartIconQuantity();
		window.location.reload();
	}
}

async function displayProducts() {
	const cart = JSON.parse(localStorage.getItem('cart'));
	// console.log(cart);
	for(var i= 0; i < cart.length; i++) {
		var item = cart[i];
		var db = firebase.firestore();
			var docRef = db.collection('product_discount').doc(item.pro_id);
			var productsData = await docRef.get();
		// const product = products.find(p => p.id == item.pro_id);
		const price = Math.round(parseInt(productsData.data().price)-(parseInt(productsData.data().discount_percentage)/100*parseInt(productsData.data().price))).toFixed(2);
		createTableRow(productsData.id, productsData.data().name, `images/products/${productsData.data().img}-1.png`, `₹${price}`, item.qty, item.size);	
	};
}

function cartMain() {
	checkoutCart();
}

function displayCartIconQuantity() {
	var cart = JSON.parse(localStorage.getItem('cart'));
	let totalQty = 0;
	cart.forEach(item => {
		totalQty += item.qty;
	});
	document.getElementById("cartItems").innerHTML = totalQty;
}

function clearCart() {
	localStorage.removeItem("cart");
}