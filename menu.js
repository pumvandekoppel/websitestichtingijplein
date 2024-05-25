var hidden = new Boolean(true);
var smallscreen = window.matchMedia("(max-width: 497px)")

function menu() {
    if (hidden == true) {
        document.getElementById("biglogofirstpart").style.display = "none";
        if (smallscreen.matches) {
            document.getElementById("biglogomiddlepart").style.display = "none";
            document.getElementById("nav").style.paddingLeft = "0";
        }
        document.getElementById("biglogosecondpart").style.display = "none";
        document.getElementById("roze").style.display = "block";
        document.getElementById("blauw").style.display = "block";
        document.getElementById("groen").style.display = "block";
        document.getElementById("geel").style.display = "block";
        document.getElementById("menu").style.display = "none";
        hidden = false;
    }
    else {
        document.getElementById("roze").style.display = "none";
        document.getElementById("blauw").style.display = "none";
        document.getElementById("groen").style.display = "none";
        document.getElementById("geel").style.display = "none";
        document.getElementById("menu").style.display = "block";
        hidden = true;
    }
}