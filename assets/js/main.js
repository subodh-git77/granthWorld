/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/* SEARCH show */
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/* SEARCH hidden */
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}


/*=============== LOGIN ===============*/
/*=============== SEARCH ===============*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

/* Login show */
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/* Login hidden */
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides:'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,

    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
})
    

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides:'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
})

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
      
    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
})

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides:'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    // reset: true, //Animation repeat
})

sr.reveal(`.home__data, .featured__container, .new__container,
           .join__data,  .testimonial__container, .footer`)
sr.reveal(`.home__images`, {delay: 600})
sr.reveal(`.services__card`, {interval: 100})
sr.reveal(`.discount__data`, {origin: 'left'})
sr.reveal(`.discount__images`, {origin: 'right'})


/*=============== Sign Up ===============*/

// Select the parent element that contains the buttons
const body = document.body;

// Handle Login Button Click
body.addEventListener("click", (event) => {
    const target = event.target;

    // If login button is clicked
    if (target.classList.contains("login-button")) {
        const loginContent = document.getElementById("login-content");
        loginContent.style.top = "0"; // Show login modal
    }

    // If login close button is clicked
    if (target.id === "login-close") {
        const loginContent = document.getElementById("login-content");
        loginContent.style.top = "-100%"; // Hide login modal
    }
});

// Handle Sign-Up Button Click and Back-to-Login Link
body.addEventListener("click", (event) => {
    const target = event.target;

    // If sign-up link is clicked
    if (target.closest(".login__signup a")) {
        event.preventDefault(); // Prevent default link behavior
        const loginContent = document.getElementById("login-content");
        const signupContent = document.getElementById("signup-content");

        loginContent.style.top = "-100%"; // Hide login modal
        signupContent.style.top = "0"; // Show signup modal
    }

    // If signup close button is clicked
    if (target.id === "signup-close") {
        const signupContent = document.getElementById("signup-content");
        signupContent.style.top = "-100%"; // Hide signup modal
    }

    // If "Back to Login" is clicked
    if (target.id === "back-to-login") {
        event.preventDefault(); // Prevent default link behavior
        const signupContent = document.getElementById("signup-content");
        const loginContent = document.getElementById("login-content");

        signupContent.style.top = "-100%"; // Hide signup modal
        loginContent.style.top = "0"; // Show login modal
    }
});


/*=============== Add to Cart ===============*/

let cartCount = 0;
const cartItems = [];

// Select elements
const cartButton = document.getElementById("cart-button");
const cartCountElement = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const cartCloseButton = document.getElementById("cart-close");
const cartItemsList = document.getElementById("cart-items-list");

// Handle "Add to Cart" Button Click
document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("button")) {
        const featuredCard = event.target.closest(".featured__card");
        const title = featuredCard.querySelector(".featured__title").textContent;
        const price = parseFloat(featuredCard.querySelector(".featured__price").textContent.replace("$", ""));
        const discount = parseFloat(featuredCard.querySelector(".featured__discount").textContent.replace("$", ""));
        // const discount = parseFloat(event.target.dataset.discount);
        const imageUrl = featuredCard.querySelector(".featured__img").src;

        // Calculate discounted price
        // const discountedPrice = (price - (price * discount) / 100).toFixed(2);

        // Add the book to the cart
        const cartItem = { title, originalPrice: price, discountedPrice: discount, imageUrl };
        cartItems.push(cartItem);
        cartCount++;

        updateCartUI();
        alert(`${title} has been added to the cart.`);
    }
});

// Show Cart Modal on Cart Icon Click
cartButton.addEventListener("click", () => {
    if (cartItems.length > 0) {
        cartModal.style.display = "flex"; // Show the cart modal
    } else {
        alert("Your cart is empty.");
    }
});

// Remove from Cart Button Click
cartItemsList.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-from-cart")) {
        const itemIndex = event.target.dataset.index;

        // Remove the item from the cart
        cartItems.splice(itemIndex, 1);
        cartCount--;

        updateCartUI();
    }
});

// Update Cart UI
function updateCartUI() {
    // Update cart count badge
    cartCountElement.textContent = cartCount;

    // Clear existing cart items in the modal
    cartItemsList.innerHTML = "";

    // Render cart items
    cartItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.className = "cart-item";
        listItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}" class="cart-item__img">
            <div class="cart-item__details">
                <span>${item.title}</span>
                <span>Original: $${item.originalPrice}, Discounted: $${item.discountedPrice}</span>
            </div>
            <button class="remove-from-cart" data-index="${index}">Remove</button>
        `;
        cartItemsList.appendChild(listItem);
    });

    // Show or hide the cart modal
    cartModal.style.display = cartCount > 0 ? "flex" : "none";
}

// Handle Cart Modal Close Button
cartCloseButton.addEventListener("click", () => {
    cartModal.style.display = "none"; // Hide the cart modal
});

