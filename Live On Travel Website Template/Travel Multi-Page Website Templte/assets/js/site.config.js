document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-site-name]")
    .forEach(element => {
        element.textContent = SITE_CONFIG.name;
    });
    document.querySelectorAll("[data-site-tagline]")
    .forEach(element => {
        element.textContent = SITE_CONFIG.tagline
    })
    document.querySelectorAll("[data-site-email]")
    .forEach(element => {
        element.textContent = SITE_CONFIG.contact.email;
        element.href = `mailto:${SITE_CONFIG.contact.email}`;
    });
    document.querySelectorAll("[data-site-phone]")
    .forEach(element =>{
        element.textContent = SITE_CONFIG.contact.phone;
        element.href =`tel:${SITE_CONFIG.contact.phone}`;
    });

    //Whatsapp

    document.querySelectorAll("[data-site-whatsapp]")
    .forEach(element => {
        element.href = `https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g,"")}`
    })
    document.querySelectorAll("[data-site-address]")
    .forEach(element => {
        element.textContent =SITE_CONFIG.contact.address;
    });
    document.querySelectorAll("[data-site-year]")
    .forEach(element => {
        element.textContent = SITE_CONFIG.copyright.year
    });
    document.querySelectorAll("[data-site-copyright]")
    .forEach(element => {
        element.textContent = SITE_CONFIG.copyright.name
    });
    document.querySelectorAll("[data-site-instagram]").forEach(element => {
        element.href = SITE_CONFIG.social.instagram
        if(SITE_CONFIG.social.instagram === "#"){
            element.addEventListener("click", event => event.preventDefault());
        }
    });

      document.querySelectorAll("[data-site-facebook]").forEach(element => {
        element.href = SITE_CONFIG.social.facebook
        if(SITE_CONFIG.social.facebook === "#"){
            element.addEventListener("click", event => event.preventDefault());
        }
    });

      document.querySelectorAll("[data-site-twitter]").forEach(element => {
        element.href = SITE_CONFIG.social.twitter
        if(SITE_CONFIG.social.twitter ==="#"){
        element.addEventListener("click", event => event.preventDefault());
        }
    });

      document.querySelectorAll("[data-site-youtube]").forEach(element => {
        element.href = SITE_CONFIG.social.youtube
        if(SITE_CONFIG.social.youtube === "#"){
            element.addEventListener("click", event => event.preventDefault());
        }
    });


});