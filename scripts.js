var slide_i = 1;
show_slide(slide_i);

function add_slide(n) {
    show_slide(slide_i += n);
}

function show_slide(n) {
    var i;
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