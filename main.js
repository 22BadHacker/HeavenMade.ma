let hrs = document.getElementById("hrs");
        let min = document.getElementById("min");
        let sic = document.getElementById("sec");

        setInterval(() => {
            let currentTime = new Date();
            hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();

            min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
            
            sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

}, 1000);



// const allLinks = document.querySelectorAll(".tabs a");
// const allTabs = document.querySelectorAll(".tab-content");

// allLinks.forEach((elem) => {
//     elem.addEventListener("click", function () {
//         const linkId = elem.id;
//         const hrefLinkClick = elem.href;

//         allLinks.forEach((link) => {
//             if (link.href == hrefLinkClick) {
//                 link.classList.add("active");
//             }else{
//                 link.classList.remove("active");
//             }
//         });

//         allTabs.forEach((tab) => {
//             const id = tab.id;
//             if(id.includes(linkId)) {
//                 tab.classList.add("tab-content--active");
//                 generateTabItems(elem, tab);

//             }else{
//                 tab.classList.remove("tab-content--active");
//             }
//         });
//     });
// });

// for tabs
const tabs = document.querySelectorAll('.tab-btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e)=> {
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');
        var line = document.querySelector('.active-bg');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";
        all_content.forEach(content=>{content.classList.remove('active')});
        all_content[index].classList.add('active');
    });

});



// for sign up 
function alertM() {
    const firstName = document.getElementById("firstName").value;
    const pass = document.getElementById("pass").value;
    if(firstName == "" && pass == "") {
        alert("Please Enter Your Email and Your Password!");
    }
    else if(firstName == "" || pass == ""){
        alert("You're Messing Something!");
    }
    else{
        alert("You're Good!");
    }
};

// const myTimeout = setTimeout(function() {
//     alert("Hello! Welcome To Heaven Made! Please Let Us Now What can we help you with!");
// }, 8000);

const toggleBtn = document.querySelector('.barmark');
const toggleBtnIcon = document.querySelector('.xmark');
const dropDownMenu = document.querySelector('.dropdown-menu');


toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    // const isOpen = dropDownMenu.classList.contains('open')
    
}
