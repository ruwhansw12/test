
// scroll animations
AOS.init();


const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


let isParagraphVisible = {};

function toggleParagraph(paragraphId) {
    const paragraph = document.getElementById(paragraphId);
    const toggleIcon = paragraph.parentElement.querySelector('.toggle-icon');

    if (isParagraphVisible[paragraphId]) {
        paragraph.classList.add('hidden');
        toggleIcon.style.transform = "rotate(0deg)";
        isParagraphVisible[paragraphId] = false;
    } else {
        paragraph.classList.remove('hidden');
        paragraph.style.color = '#919191';
        toggleIcon.style.transform = "rotate(180deg)";
        isParagraphVisible[paragraphId] = true;
    }
}

                                        // image slider






const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 20; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 20;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);


                                            // popUpPage

const d = document;

const dialog = d.querySelector("dialog");
const open = d.getElementById("open");
const close = d.getElementById("close");

open.addEventListener("click", () => {
    dialog.show();
})

close.addEventListener("click", () => {
    dialog.close();
})



// when click the burger icon popuppage com to down


document.getElementById('open').addEventListener('click', function() {
    document.querySelector('.popUpPage').classList.toggle('active');
});

document.getElementById('close').addEventListener('click', function() {
    document.querySelector('.popUpPage').classList.remove('active');
    document.querySelector('.popUpPage').classList.remove('active');

});


                                                        // dark mode


// let darkModeActive = false;
//
// const toggleMode = () => {
//     const bodyElement = document.body;
//     if (!darkModeActive) {
//         // Activate dark mode
//         bodyElement.style.backgroundColor = '#1a1b33';
//         bodyElement.style.color = 'white';
//         darkModeActive = true;
//     } else {
//         // Activate light mode
//         bodyElement.style.backgroundColor = 'white';
//         bodyElement.style.color = 'black';
//         darkModeActive = false;
//     }
// };
//
// document.getElementById('modeToggle').addEventListener('click', toggleMode);





    const bodyElement = document.body;

        bodyElement.style.backgroundColor = '#1a1b33';
        bodyElement.style.color = 'white';
