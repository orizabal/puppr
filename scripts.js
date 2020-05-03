let baseURL = 'https://cors-anywhere.herokuapp.com/https://puppr-676a9.uk.r.appspot.com/';
let matchBtn = document.querySelector("#match");
let rejectBtn = document.querySelector("#reject");

let clicked = false;
let shelter_array = [];

const fetchPictures = (location) => {
    let photoSources = [];
    axios.get(baseURL + location.toLowerCase())
        .then(response => {
            for (var key in response.data) {
                console.log(response.data[key]['Photo']);
                photoSources.push(response.data[key]['Photo']);
            }
        });
    console.log(photoSources);
    return photoSources;
}

matchBtn.addEventListener("click", function() {
    if (!clicked) {
        fetchPictures('Toronto');
        clicked = true;
    }
});

rejectBtn.addEventListener("click", function() {
    if (!clicked) {
        fetchPictures('Toronto');
        clicked = true;
    }
});


//let shelter_array = ["images/photo-1.png", "images/photo-2.png", "images/photo-3.png"];
let shelter_num = 0;

var slide_i = 1;
show_slide(slide_i);

function add_slide(n) {
    show_slide(slide_i += n);

    shelter_num += 1;
    if (shelter_num > photoSources.length) {
        shelter_num = photoSources.length;
    }
}

var i;

function show_slide(n) {
    var x = document.getElementsByClassName("dog-pic");
    if (n > x.length) {
        slide_i = 1;
    }
    if (n < 1) {
        slide_i = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slide_i - 1].style.display = "block";
}

let selected_array = [];
let num = 1;

function add_to_profile() {
    selected_array.push(photoSources[shelter_num]);
    add_slide(1);

    document.getElementById("length").innerHTML = photoSources.length;
    // document.getElementById("num").innerHTML = shelter_num;
    document.getElementById("dog" + num).src = selected_array[num - 1];
    num += 1;
}