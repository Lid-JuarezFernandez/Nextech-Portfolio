let homebutton = document.querySelector(".homebutton");
let lifebutton = document.querySelector(".lifebutton");
let purposebutton = document.querySelector(".purposebutton");
let worksbutton = document.querySelector(".worksbutton");
let contactbutton = document.querySelector(".contactbutton");
let nighttimebutton = document.querySelector(".nighttimebuttom");
let spanishbutton = document.querySelector(".spanishbutton");



let intropage = document.querySelector(".introcontainer");
let aboutpage = document.querySelector(".aboutmecontainer");
let lifepage = document.querySelector(".lifecontainer")
let purposepage = document.querySelector(".purposecontainer");
let workspage = document.querySelector(".workscontainer");
let infopage = document.querySelector(".infocontainer");




let email = document.querySelector(".email");
let name = document.querySelector(".name");
let comment = document.querySelector(".comment");
let sendButton = document.querySelector(".sendButton");
let received = document.querySelector(".received");
let newmessage= document.querySelector(".newmessage");



homebutton.addEventListener("click", function() {
    intropage.style.display = "flex";
    aboutpage.style.display = "flex"
    lifepage.style.display = "none";
    purposepage.style.display = "none";
    workspage.style.display = "none";
    infopage.style.display = "none";
});



lifebutton.addEventListener("click", function() {
    intropage.style.display = "none";
    aboutpage.style.display = "none";
    lifepage.style.display = "flex";
    purposepage.style.display = "none";
    workspage.style.display = "none";
    infopage.style.display = "none";
});


purposebutton.addEventListener("click", function() {
    intropage.style.display = "none";
    aboutpage.style.display = "none"
    lifepage.style.display = "none";
    purposepage.style.display = "flex";
    workspage.style.display = "none";
    infopage.style.display = "none";
});


worksbutton.addEventListener("click", function() {
    intropage.style.display = "none";
    aboutpage.style.display = "none";
    lifepage.style.display = "none";
    purposepage.style.display = "none";
    workspage.style.display = "flex";
    infopage.style.display = "none";
});



contactbutton.addEventListener("click", function() {
    intropage.style.display = "none";
    aboutpage.style.display = "none";
    lifepage.style.display = "none";
    purposepage.style.display = "none";
    workspage.style.display = "none";
    infopage.style.display = "flex";
});









sendButton.addEventListener("click", function() {
    let emailuser = document.querySelector(".email").value;
    let nameuser = document.querySelector(".name").value;
    let commentuser = document.querySelector(".comment").value;

    console.log(emailuser);
    console.log(nameuser);
    console.log(commentuser);

    sendButton.style.display = "none";
    received.style.display = "block";
    newmessage.style.display = "block";
});

newmessage.addEventListener("click", function() {
    received.style.display = "none";
    newmessage.style.display = "none";
    sendButton.style.display = "block";
});