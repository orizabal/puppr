let baseURL = 'https://cors-anywhere.herokuapp.com/https://puppr-676a9.uk.r.appspot.com/';
let baseShelterURL = 'https://torontohumanesociety.com/adopt-a-pet/dogs/';
let matchBtn = document.querySelector("#match");
let rejectBtn = document.querySelector("#reject");

let clicked = false;
let shelter_array = ["images/photo-1.png"];
let link_array = ["https://torontohumanesociety.com/adopt-a-pet/dogs/41015170"]; //I'm adding a repeated link for the first fake dog

const fetchData = (location) => {
    axios.get(baseURL + location.toLowerCase())
    .then(response => {
        for (var key in response.data) {
            shelter_array.push(response.data[key]['Photo']);
            link_array.push(baseShelterURL + response.data[key]['ID']);
        }
        console.log(shelter_array);
        console.log(link_array);
    });
}

matchBtn.addEventListener("click", function() {
    if (!clicked) {
        fetchData('Toronto');
        clicked = true;
    }
});

rejectBtn.addEventListener("click", function() {
    if (!clicked) {
        fetchData('Toronto');
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
    if (shelter_num > shelter_array.length) {
        shelter_num = shelter_array.length;
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
    selected_array.push(shelter_array[shelter_num]);
    add_slide(1);

    // document.getElementById("length").innerHTML = selected_array.length;
    // document.getElementById("num").innerHTML = shelter_num;
    document.getElementById("dog" + num).src = selected_array[num - 1];
    num += 1;
}