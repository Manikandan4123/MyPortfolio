const header = document.querySelector(".nav-content");
  
window.addEventListener('scroll',() =>{
  if(window.scrollY > 50){
    header.classList.add("nav-content-scrolled");
  }else if(window.scrollY <= 50){
    header.classList.remove("nav-content-scrolled");
  }
});  




const hamburger = document.getElementById('container');
const list = document.getElementById('list');

hamburger.addEventListener('click', () => {
  list.classList.toggle('list_hidden');
});

const wapIcon = document.getElementById('waIcon');

wapIcon.addEventListener('click',()=>
{
  const phoneNumber = "+918939349903"; // Include country code, no '+' or '-'
  const message = "Hello, I want to know more!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
})


async function app(){
  try{
    const res =await fetch("https://api.quotable.io/random");
    const data = await res.json(); 
    document.getElementById("qt").textContent = data.content + "  -" + data.author;
  }catch(error){
    console.log("Invalid API");
  }
}   
app();  




document.getElementById("myForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);

      fetch("https://script.google.com/macros/s/AKfycbyOlIwyUgZvFwh51Et0Y-5eCu9vjuxqvuynthGHdo3hzkdmn4axN3M6DaHIiQuDOmdP/exec", {
        method: "POST",
        body: formData 
      })
      .then(() => {
        document.getElementById("status").textContent = "Form submitted successfully!!!,  I will revert you Soon!!!";
        form.reset();
      })
      .catch((error) => {
        document.getElementById("status").textContent = "Error submitting form.";
        console.error("Fetch error:", error);
      });
    });