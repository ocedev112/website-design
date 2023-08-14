var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

$(window).load(function(){
    $('#preloader').delay(150);
})