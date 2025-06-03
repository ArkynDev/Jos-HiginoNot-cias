let newsFloating = document.getElementById('floatingNews');
let openNews = false;

function shangeFloating () {
    openNews = !openNews;
    if(openNews == false) {
        newsFloating.style.display = "none";
    } else {
        newsFloating.style.display = "flex";
    }
}

shangeFloating();