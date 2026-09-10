if(typeof emailjs !=="undefined"){
emailjs.init({
    publicKey:"IuRr2QTagXz9Q8ZVN"
});
}
const form=document.getElementById("contactform");
if(form){
form.addEventListener("submit", function(event){
    event.preventDefault();
    const name=document.getElementById("name").value;
    const message=document.getElementById("message").value;
    const email= document.getElementById("email").value;
    document.getElementById("time"). value=new Date().toLocaleString();
    console.log(name);
    console.log(message);
    const response =document.getElementById("formResponse");
    emailjs.sendForm("service_037z7vb",
    "template_zvk9guq", form)
    .then(function(){
        response.textContent="message sent successfully!";
        setTimeout(function(){
        response.textContent="";
    }, 3000)
     form.reset();
    })
    .catch(function(error){
        console.log("Failed to send message:",error);
        response.textContent="failed to send message. please try again.";
    });
});
}
    const menuButton= document.getElementById("menuButton");
    const navLinks= document.getElementById("navLinks");
    const closeButton = document.getElementById("closeButton");

    
    if(closeButton && navLinks){
    closeButton.addEventListener("click", function(){
        navLinks.classList.remove("show");
        });
        }
    
        const productButton=document.getElementById("productButton");
        const dropMenu=document.querySelector(".drop-menu");
        if(productButton && dropMenu){
            productButton.addEventListener("click", function(){
                dropMenu.classList.toggle("show");
            })
        }

        if(menuButton && navLinks){
    menuButton.addEventListener("click", function(){
        navLinks.classList.add("show");
    });
}