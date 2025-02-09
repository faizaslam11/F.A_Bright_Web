//new banner slider : 
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
const sliderContainer = document.querySelector('.slider-container');

let currentIndex = 0; 
let autoSlideInterval; 

function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Function to display a specific slide based on the index
function showSlides(index) {
    if (index >= slides.length) {
        currentIndex = 0; 
    } else if (index < 0) {
        currentIndex = slides.length - 1; 
    } else {
        currentIndex = index; 
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots(); 

}

function nextSlide() {
    showSlides(currentIndex + 1);
}

function prevSlide() {
    showSlides(currentIndex - 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000); // Slide every 4 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval); // Clear the interval
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        stopAutoSlide(); // Stop auto-slide when manually selecting a slide
        showSlides(parseInt(dot.dataset.index)); // Show the selected slide
        startAutoSlide(); // Restart auto-slide

    });
});

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

sliderContainer.addEventListener('mouseover', stopAutoSlide);

sliderContainer.addEventListener('mouseout', startAutoSlide);

startAutoSlide();
updateDots();         




// Send Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    closePopup();
});



    
// Download Catalogue
function downloadCatalogue() {
    const link = document.createElement('a');
    link.href = 'F.ABright.pdf'; // Replace with your actual PDF path
    link.download = 'catalogue.pdf';
    link.click();
}





//add prodcuts using json file 
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    displayCards(data);
  })
  .catch(error => console.error("Error fetching data:", error));





// Function to create and display the cards
function displayCards(items) {
    const container = document.getElementById('card-container'); 
    container.innerHTML = "";
    const visiblecount = 9;

    items.forEach((item , index) => {
        const cardArticle = document.createElement('article');
        cardArticle.classList.add('card__article');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = "image";
        img.classList.add('card__img');

        const cardData = document.createElement('div');
        cardData.classList.add('card__data');
        cardData.setAttribute("data-name", item.name);

        const description = document.createElement('span');
        description.classList.add('card__description');
        description.textContent = item.code;

        const title = document.createElement('h2');
        title.classList.add('card__title');
        title.textContent = item.title;

        const button = document.createElement('a');
        button.href = `productpage.html?code=${item.code}`
        button.classList.add('card__button');
        button.textContent = "Read More";

        cardData.appendChild(description);
        cardData.appendChild(title);
        cardData.appendChild(button);

        cardArticle.appendChild(img);
        cardArticle.appendChild(cardData);

        if(index >= visiblecount){
            cardArticle.style.display = "none";
        }

        container.appendChild(cardArticle);
    });

    let seeMoreBtn = document.getElementById("see-more-btn");

    if (!seeMoreBtn) {
        seeMoreBtn = document.createElement("button");
        seeMoreBtn.id = "see-more-btn";
        seeMoreBtn.textContent = "See More";
        seeMoreBtn.classList.add("see-more-button");
        container.parentNode.appendChild(seeMoreBtn);
    }

    seeMoreBtn.addEventListener("click", function () {
        let hiddenCards = document.querySelectorAll(".card__article[style='display: none;']");
        for (let i = 0; i < 6 && i < hiddenCards.length; i++) {
            hiddenCards[i].style.display = "block"; 
        }
        if (document.querySelectorAll(".card__article[style='display: none;']").length === 0) {
            seeMoreBtn.style.display = "none";
        }
    });
}

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.visibility = "visible"; 
        backToTopButton.style.opacity = "1";
    } else {
        backToTopButton.style.opacity = "0"; 
        setTimeout(() => {
            backToTopButton.style.visibility = "hidden"; 
        }, 300); 
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});



// // Hamburger Menu
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');
// console.log("Check");
// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

// Banner Slider
// const slides = document.querySelectorAll('.slide ');
// let currentSlide = 1;

// function nextSlide() {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].classList.add('active');
// }

// setInterval(nextSlide, 3000);

// const productGrid = document.querySelector('.product-grid');
//  products.forEach(product => {
    //   const productCard = document.createElement('div');
    //   productCard.className = 'product-card';
    //   productCard.innerHTML = `
    //       <img src="${product.image}" alt="${product.name}" class="product-image">
    //       <h3>${product.name}</h3>
    //  `;
    //  productCard.addEventListener('click', () => {
    //      window.location.href = product.link;
    //  });
    //  productGrid.appendChild(productCard);
//  });




// Sample product data - replace with your actual products

    // Add more products as needed

// Populate products
// let preveiwContainer = document.querySelector('.products-preview');
// let previewBox = preveiwContainer.querySelectorAll('.preview');
// document.addEventListener("DOMContentLoaded", function () {
//     displayCards()
//     let articles = document.querySelectorAll(".card__article");
//     console.log("bruh", articles);
// });
// articles.forEach(product =>{
//     console.log("check");
//     product.onclick = () =>{
//         preveiwContainer.style.display = 'flex';
//         let name = product.getAttribute('data-name');
//         previewBox.forEach(preview =>{
//             let target = preview.getAttribute('data-target');
//             if(name == target){
//                 preview.classList.add('active');
//             }
//         });
//     };
// });

// previewBox.forEach(close =>{
//     close.querySelector('.fa-times').onclick = () =>{
//         close.classList.remove('active');
//         preveiwContainer.style.display = 'none';
//     };
// });




// Smooth scrolling for navigation links --- NO NEED -- CSS CODE PRESENT
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Contact Popup
// function openPopup() {
//     document.getElementById('contact-popup').classList.add('show');
// }

// function closePopup() {
//     document.getElementById('contact-popup').classList.remove('show');
// }