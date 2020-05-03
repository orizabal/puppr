let baseURL = 'https://cors-anywhere.herokuapp.com/https://puppr-676a9.uk.r.appspot.com/';
let baseShelterURL = 'https://torontohumanesociety.com/adopt-a-pet/dogs/';
let matchBtn = document.querySelector("#match");
let rejectBtn = document.querySelector("#reject");

let shelter_array = ["images/doggo.jpg"];
let link_array = ["https://torontohumanesociety.com/adopt-a-pet/dogs/41015170"]; //I'm adding a repeated link for the first fake dog

let dogname_array = ["Molly", "Terra"];
let dogage_array = ["2 years 7 months", "2 years 1 months"];
let dogdesc_array = ["Molly is a caring...", "If Terra's soft, velvety ears, and kind, brown eyes don't you win you over, her personality will. This girl's a gem. Sweet, loving and loyal, she is as adventurous as she is affectionate. Every day a new adventure. She lives for car rides (front seat or back!), trail runs (she is the fastest!), and dog parks (squirrels?). After a long day of exploring the world and chasing the odd squirrel, she loves sitting down with her people for a cuddle/pet session."];
let dogsex_array = ["female", "male"];
let dogprimbreed_array = ["idk", "retriever"];
let dogsecbreed_array = ["either", "mix"];

const fetchData = (location) => {
    axios.get(baseURL + location.toLowerCase())
        .then(response => {
            for (var key in response.data) {
                shelter_array.push(response.data[key]['Photo']);
                link_array.push(baseShelterURL + response.data[key]['ID']);
                dogdesc_array.push(response.data[key]["description"].split("<br/>", 1));
                dogsex_array.push(response.data[key]['Sex']);
                dogprimbreed_array.push(response.data[key]['PrimaryBreed']);
                dogsecbreed_array.push(response.data[key]['SecondaryBreed']);
            }
            console.log(shelter_array);
            console.log(link_array);
        });
}

function page_load() {
    fetchData('Toronto');
}

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
    var name = document.getElementById("dogname");
    var age = document.getElementById("dogage");
    var sex = document.getElementById("dogsex");
    var breed = document.getElementById("dogbreed");
    var desc = document.getElementById("dogdesc");

    pic.src = shelter_array[n - 1];
    name.innerHTML = "Name: " + dogname_array[n - 1];
    age.innerHTML = "Age: " + dogage_array[n - 1];
    sex.innerHTML = "Sex: " + dogsex_array[n - 1];
    breed.innerHTML = "Breed: " + dogprimbreed_array[n - 1] + ", " + dogsecbreed_array[n - 1];
    desc.innerHTML = dogdesc_array[n - 1];
}

let selected_dogs = [];
let selected_links = [];
let num = 1;

function add_to_profile() {
    selected_dogs.push(shelter_array[shelter_num]);
    selected_links.push(link_array[shelter_num]);
    add_slide(1);

    document.getElementById("dog" + num).src = selected_dogs[num - 1];
    num += 1;
}

function open_link(n) {
    window.open(selected_links[n - 1]);
}