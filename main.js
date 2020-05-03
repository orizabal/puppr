import {axiosShelters} from axios.js;

let matchBtn = document.querySelector("#match");
let rejectBtn = document.querySelector("#reject");
let location = document.getElementById('loc');


matchBtn.addEventListener("click", function() {

});

export const fetchShelterData = (location) => {
    axiosShelters.get('/' + location.lower())
    .then(response => {
        console.log(response);
        makeArrays(response);
    })
    .catch(error => {
        console.log(error);
        getFail(error);
    });
};

const makeArrays = (data) => {
    
};

const getFail = (error) => {
    console.log('[main.js] GET request failed, error: ' + error);
};