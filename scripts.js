var slide_i = 1;
show_slide(slide_i);

function add_slide(n) {
    show_slide(slide_i += n);
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

    console.log("test")
}

var dog_array = new Array();

function add_to_profile() {
    // var length = dog_array.length;

    dog_array[0] = new Image();
    dog_array[0].src = "images/dog-play.jpg";

}