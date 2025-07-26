// ------------------------------------------------Nav bar --------------------------------------------------
 
 // Navbar Scroll Effect
 window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle Dropdown in Navbar
document.getElementById('reviewDropdown').addEventListener('click', function(e) {
    e.stopPropagation();
    const dropdownContent = document.getElementById('reviewDropdownContent');
    dropdownContent.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const dropdownContent = document.getElementById('reviewDropdownContent');
    if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
    }
});

// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});

// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------



// ELement 5
let cards = document.querySelectorAll(".card-animation");
        let stackArea = document.querySelector(".stack-area");

        function rotateCards() {
            let angle = 0;
            cards.forEach((card, index) => {
                if (card.classList.contains("away")) {
                    card.style.transform = `translateY(-130vh) rotate(-50deg)`;
                    card.style.opacity = "0";
                } else {
                    if (window.innerWidth > 992) {
                        card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
                    } else {
                        card.style.transform = `translate(-50%, -50%)`;
                    }
                    card.style.opacity = "1";
                    angle -= 5;
                    card.style.zIndex = cards.length - index;
                }
            });
        }

        rotateCards();

        window.addEventListener("scroll", () => {
            let distance = window.innerHeight * 0.35;
            let topVal = stackArea.getBoundingClientRect().top;
            let index = -1 * (topVal / distance + 1);
            index = Math.floor(index);

            for (let i = 0; i < cards.length; i++) {
                if (i <= index) {
                    cards[i].classList.add("away");
                } else {
                    cards[i].classList.remove("away");
                }
            }
            rotateCards();
        });

        // Handle responsive behavior
        window.addEventListener("resize", rotateCards);