fetch('../html/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);

    //get modal
const modal = document.getElementById("myModal");
//get navbar and set into modal
const navbar = document.querySelector(".nav-btn");
//accessing the links
const linking = document.querySelectorAll(".linkage");
//modal is set to default of not open
let navOpen = false;
const openModal = () => {
    if (!navOpen) {
        navbar.classList.add('open');
        navOpen = true;
        modal.style.display = "block"
    } else {
        modal.style.display = "none";
    }
};

//closing modal once link is clicked
for(i=0;i< linking.length;i++){    
    linking[i].onclick = function(){
    modal.style.display = "none";
    navbar.classList.remove('open');
    navOpen = false;
 }
}

navbar.addEventListener('click', openModal);

//closing modal once clicked outside of modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        navbar.classList.remove('open');
        navOpen = false;
        myModal.style.display = "none";
    }
}
})
