document.addEventListener("DOMContentLoaded", () => {
   const contactForm = document.querySelector("#contactForm");

   if(!contactForm){
    return;

   }

   const packageInput = contactForm.querySelector("#package");
   const params = new URLSearchParams(window.location.search);
  const selectedPackage = params.get("package");
 

  if(packageInput && selectedPackage){
    packageInput.value =selectedPackage;
  };
   contactForm.addEventListener("submit", async (event) => {

    event.preventDefault(); 

    const submitButton = contactForm.querySelector(
      'button[type="submit"]'
    );
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Basic Validation

    if(!data.name || !data.email || !data.message){

      showFormMessage(
        "Please fill in all required fields",
        "error"
      );

      return;

    }

    try{
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      const response = await fetch(
        SITE_CONFIG.form.endpoint,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );
      const result = await response.json();
        if(!response.ok){
          throw new Error(
            result.message || "Something went wrong."
          );

        }
        showFormMessage(
          result.message || 
          "Thank you! Your enquiry has been received.",
          "success"
        );

        contactForm.reset();

    }catch(error){

      showFormMessage(
        "Unable to send your message. Please try again",
        "error"
      );
    }finally{
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    }
    
   });

   function showFormMessage(message, type){

    let messageElement = 
    contactForm.querySelector(".form-message");

    if(!messageElement){

      messageElement = 
      document.createElement("p");

      messageElement.className = "form-message";

      contactForm.appendChild(messageElement);
    }

    messageElement.textContent = message;
    messageElement.dataset.type = type;
   }

});