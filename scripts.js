let baseURL = 'https://cors-anywhere.herokuapp.com/https://puppr-676a9.uk.r.appspot.com/';
let baseShelterURL = 'https://torontohumanesociety.com/adopt-a-pet/dogs/';
let matchBtn = document.querySelector("#match");
let rejectBtn = document.querySelector("#reject");

let clicked = false;
let shelter_array = ["images/photo-1.png", "images/photo-2.png"];
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

let shelter_num = 0;

var slide_i = 1;
show_slide(slide_i);
var i;

function add_slide(n) {
    show_slide(slide_i += n);

    shelter_num += 1;
    if (shelter_num > shelter_array.length) {
        shelter_num = shelter_array.length;
    }
}

function show_slide(n) {
    var pic = document.getElementById("dog-pic");
    pic.src = shelter_array[n - 1];

}

let selected_array = [];
let num = 1;

function add_to_profile() {
    selected_array.push(shelter_array[shelter_num]);
    add_slide(1);

    document.getElementById("dog" + num).src = selected_array[num - 1];
    num += 1;
}