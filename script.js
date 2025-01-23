let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
};

function validate(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const number=document.getElementById("number").value;
    const message=document.getElementById("message").value;

    if(!name){
        alert("Must have a name");
        
        return false;
    }

    if(!email){
        alert("Must have a email");
        
        return false;
    }
    if(!number){
        alert("Must have a number");
       
        return false;
    } 
    if(!message){
        alert("Must have a message");
       
        return false;
    }

    sendEmail( name,email,number,message);
    return false;
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
  });

  
function sendEmail(name, email,number,message) {
    const serviceID = "service_3859vdh"; 
    const templateID = "template_3gmgg0b"; 

    emailjs
      .send(serviceID, templateID, { name, email,number, message })
      .then(() => {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        alert("Failed to send message. Please try again.");
      });
  }







