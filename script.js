let email = document.querySelector(".email");
let name = document.querySelector(".name");
let comment = document.querySelector(".comment");
let sendButton = document.querySelector(".sendButton");
let received = document.querySelector(".received");
let newmessage= document.querySelector(".newmessage");

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