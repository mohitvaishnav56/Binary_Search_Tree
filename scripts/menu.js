let menuDiv = document.querySelector(".menu");
let menuIcon = document.querySelector(".menu h1");
let menuList = document.querySelector(".menu-list");
let formsCont = document.querySelector(".forms");
let forms = document.querySelectorAll(".forms form");
let tabs = document.querySelectorAll(".tabs li");
let count = 0;

menuIcon.addEventListener("click", () => {
    if(count == 0){
        menuList.style.left = "0";
        menuIcon.style.transform = "rotate(-45deg)";
        menuDiv.style.width = "300px";
        menuDiv.style.border = "1px solid #000";
        menuList.style.border = "1px solid #000";

        count = 1;
    }else{
        menuIcon.style.transform = "rotate(0deg)";
        menuList.style.left = "-100%";
        menuDiv.style.width = "80px";
        menuDiv.style.border = "none";
        menuList.style.border = "none";
        count = 0;
    }
});

tabs.forEach((tab, index) => {  
    tab.addEventListener("click", () => {
        forms.forEach(form => {
            forms[0].style.marginLeft =`-${index * 110}%`;
        });
    });
 });


