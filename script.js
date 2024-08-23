function toggleDiv() {
    var div = document.getElementById("DivText");
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}


function ScrollToTop(){
    window.scrollTo(0,0);
}