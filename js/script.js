/*slider-carousel*/
$('#slide .owl-carousel').owlCarousel({
    loop: true,
    margin: 70,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        580: {
            items: 2
        },
        767: {
            items: 3
        },
        991: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
})

/*testimonial-carousel*/
$('#testimonial .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        1200: {
            items: 2
        }
    }
})

/*youtube video*/
var youtubevideo = document.getElementById("youtubevideo");

function stopvideo() {
    youtubevideo.style.display = "none";
}

function playvideo() {
    youtubevideo.style.display = "block";
}

/*navbar bg color*/
function changeBg() {
    var mynavigation = document.getElementById('mynavigation');
    var scrollValue = window.scrollY;
    if (scrollValue < 50) {
        mynavigation.classList.remove('bgcolor');
    } else {
        mynavigation.classList.add('bgcolor');
    }
}

window.addEventListener('scroll', changeBg);


//form-validation
function print() {
    var a = document.getElementById("name-2").value;
    var b = document.getElementById("email-3").value;
    var c = document.getElementById("comment").value;

    console.log(a);
    console.log(b);
    console.log(c);

    if (a == "") {
        document.getElementById("important").innerHTML = "! This is required";
        return false;
    }
    if (b == "") {
        document.getElementById("important-2").innerHTML = "! This is required";
        return false;
    }
    if (c == "") {
        document.getElementById("important-3").innerHTML = "! This is required";
        return false;
    } else {
        alert("Congrats");
    }
}