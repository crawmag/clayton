const myModal = document.getElementById("myModal");
const img = document.getElementsByClassName("merch");
const modalImg = document.getElementById("img01");
const caption = document.getElementById("caption");

//image modal section

for (i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        myModal.style.display = "block";
        modalImg.src = this.src;
        caption.innerHTML = this.alt;
    }
}
// element to close modal
const span = document.getElementsByClassName("close")[0];
// function to close modal
span.onclick = function () {
    myModal.style.display = "none";
}
