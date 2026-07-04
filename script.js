// -------------------------------
// LOADING SCREEN
// -------------------------------

let loading = document.getElementById("loadingText");
let percent = 0;

let loadingTimer = setInterval(function () {

    percent++;

    loading.innerHTML = percent + "%";

    if (percent >= 100) {

        clearInterval(loadingTimer);

        document.getElementById("loadingScreen").style.display = "none";

        document.getElementById("welcomePage").style.display = "flex";

    }

}, 30);


// -------------------------------
// LETTERS
// -------------------------------

const letter1 = `Dear Loosuuu ❤️,

Today isn't just another day...
Today is the birthday of someone who has filled my life withcountless memories,
endless laughter,and moments I'll always treasure.
Some people come into our lives and become unforgettable.
You're one of those people. ❤️`;

const letter2 = `Thank you for every smile,
every conversation, every crazy moment,
and every memory we've shared.
Your kindness, support, and friendship
mean more to me
than words can ever express.
I'm truly grateful
to have you in my life. ❤️`;

const letter3 = `On this special day,
I pray that your life is filled with happiness,
good health, success, peace,
and countless beautiful memories.
Never stop smiling,  Never stop chasing your dreams.

once again...Happy Birthday  🎂🎉
With lots of love,
Your Karappan poochiii ❤️`;


// -------------------------------
// TYPE WRITER FUNCTION
// -------------------------------

function typeText(text, elementId, speed = 35) {

    const element = document.getElementById(elementId);

    element.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, speed);

        }

    }

    typing();

}


// -------------------------------
// OPEN SURPRISE
// -------------------------------

document.getElementById("startBtn").onclick = function () {

    document.getElementById("welcomePage").style.display = "none";

    document.getElementById("page1").style.display = "flex";

    typeText(letter1, "text1");

};


// -------------------------------
// PAGE 1 -> PAGE 2
// -------------------------------

document.getElementById("next1").onclick = function () {

    document.getElementById("page1").style.display = "none";

    document.getElementById("page2").style.display = "flex";

    typeText(letter2, "text2");

};


// -------------------------------
// PAGE 2 -> PAGE 3
// -------------------------------

document.getElementById("next2").onclick = function () {

    document.getElementById("page2").style.display = "none";

    document.getElementById("page3").style.display = "flex";

    typeText(letter3, "text3");

};


// -------------------------------
// PAGE 3 -> NEXT
// -------------------------------

document.getElementById("next3").onclick = function(){

    startGallery();

}
// =======================
// MEMORY GALLERY
// =======================

const photos = [
    "images/photo1.jpeg",
    "images/photo2.jpeg",
    "images/photo3.jpeg",
    "images/photo4.jpeg",
    "images/photo5.jpeg",
    "images/photo6.jpeg",
    "images/photo7.jpeg",
    "images/photo8.jpeg",
    "images/photo9.jpeg",
    "images/photo10.jpeg"
];
const captions = [

"Our first photo... It's very special to me. ❤️",

"This is our second photo... I love this photo . 😊",

"Every moment with you is unforgettable. ✨",

"The best adventures were always with you. 🌍",

"Thank you for always being there. ❤️",

"Life is better with a friend like you. 💙",

"We laughed until we couldn't breathe. 😂",

"Some memories never fade. ✨",

"This friendship is my favorite story. 📖",

"Happy Birthday ! Here's to many more memories! 🎂❤️"

];
// =======================
// SLIDESHOW VARIABLES
// =======================

let currentPhoto = 0;

const gallery = document.getElementById("gallery");
const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");


// =======================
// SHOW PHOTO FUNCTION
// =======================

function showPhoto(){

    galleryImage.classList.remove("fade");

    setTimeout(() => {

        galleryImage.src = photos[currentPhoto];

        galleryCaption.innerHTML = captions[currentPhoto];

        galleryImage.classList.add("fade");

    },200);

}


// =======================
// START SLIDESHOW
// =======================

function startGallery(){

    document.getElementById("page3").style.display = "none";

    gallery.style.display = "flex";

    showPhoto();

    let slideShow = setInterval(function(){

        currentPhoto++;

       if(currentPhoto >= photos.length){

    clearInterval(slideShow);

    startCountdown();

    return;

}
        showPhoto();

    },4000);

}
// =========================
// FLOATING HEARTS
// =========================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },7000);

}

setInterval(createHeart,700);
// =========================
// COUNTDOWN FUNCTION
// =========================

// =========================
// CINEMATIC COUNTDOWN
// =========================

function startCountdown() {

    gallery.style.display = "none";

    const countdownSection = document.getElementById("countdownSection");

    const countdownTitle = document.getElementById("countdownTitle");

    const countdownNumber = document.getElementById("countdownNumber");

    countdownSection.style.display = "flex";

    countdownTitle.innerHTML = "🎁 One Last Surprise...";

    let number = 3;

    countdownNumber.innerHTML = number;

    const timer = setInterval(function () {

        number--;

        if (number > 0) {

            countdownNumber.innerHTML = number;

        }

        else if (number === 0) {

            countdownNumber.innerHTML = "🎂";

        }

        else {

            clearInterval(timer);

            countdownTitle.innerHTML = "";

            countdownNumber.innerHTML = "🎉 Happy Birthday Loosuuu ❤️";

            countdownNumber.style.fontSize = "70px";

            setTimeout(function () {

                countdownSection.style.display = "none";

                document.getElementById("videoSection").style.display = "flex";

                document.getElementById("birthdayVideo").play();

            },3000);

        }

    },1000);

}
const emotionalLetter = `

The Final Letter for you... ❤️

Summa english la ye letter write pandranu pakkatha
Tho vanthuttan with my Tamil...

Un birthday-ku oru different surprise kudukkanum
nu romba naal yosichen so athanala than intha website.

Pudichi irukka....

Eppavumey solluvala enna vittutu poiduviyanu so 
ippovum soldran unna torture pannama nan engayum poga mattan 
so don't worry sariya...

Therinjikko enna mathiri friend uhh lan google la 
thedunalum kedaikkathu... athanala enna pathrama pathukko..

Aprom vera enna enjoy your day...
And one more thing...
Thaks for being with me.....

Once again   Happiee Poranthanal... ❤️

eppavumey sirichittu jolly ah iru.

I am always be with you in every situations.....

Love You da Maireyyyy...🫂❤️

— Your Karappan Poochiii ❤️

`;

function typeFinalMessage(){

    const text=document.getElementById("finalMessage");

    text.innerHTML="";

    let i=0;

    function typing(){

        if(i<emotionalLetter.length){

            text.innerHTML+=emotionalLetter.charAt(i);

            i++;

            setTimeout(typing,35);

        }

    }

    typing();

}

// =========================
// VIDEO ENDED
// =========================

document.getElementById("birthdayVideo").addEventListener("ended", function () {

    document.getElementById("videoSection").style.display = "none";

    document.getElementById("emotionalSection").style.display = "flex";

    typeFinalMessage();

});



// =========================
// CONTINUE BUTTON
// =========================

document.getElementById("continueBtn").onclick = function(){

    document.getElementById("emotionalSection").style.display = "none";

    document.getElementById("cakeSection").style.display = "flex";

};

document.getElementById("cake").onclick = function(){

    document.getElementById("birthdayWish").style.display = "block";

    this.innerHTML = "🧁";

    setTimeout(function(){

        document.getElementById("cakeSection").style.display = "none";

        document.getElementById("thankYouSection").style.display = "flex";

    },3000);

};

document.getElementById("replayBtn").onclick = function(){

    location.reload();

};