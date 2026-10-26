
// This is the only file you need to edit to change your name and contact details.
// Only change the text inside the quotes.
// Do not remove the quotes or commas.


const SITE_CONFIG = {
    name: "Live On", //Your business or website name. Appears in the header and footer
    tagline: "Live Your Own Journey", //A short slogan shown under the name
   
     //Your contact details, shown on the Contact page and in the footer

    contact: { 
        email: "hello@example.com", //The email address visitors see
        phone: "+91 00000 00000", //Include the country code, for example +91
        whatsapp: "", // Leave empty if you don’t use WhatsApp.
        address: "Your City, Your State, India" //Your business address
    },

    //Full link to each profile. Leave # if you don’t have one

    social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
        youtube: "#"
    },

     //Contact form settings (see README section 9)
    form: {
        endpoint: "", //Paste https://api.web3forms.com/submit here
        AccessKey:"" //Paste your Web3Forms key here

    },

    //The name shown in the footer. The year updates by itself

    copyright: {
        name: "Live On",
        year: new Date().getFullYear()
    }
};

