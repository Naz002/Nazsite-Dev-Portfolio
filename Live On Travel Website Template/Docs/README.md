# Live On - Travel Website Template

**Version 1.0.0**

Thank you for buying Live On! This is a ready-made travel website with five pages. You can make it your own by changing some text, photos, and colors. You do not need to be an expert, and you do not need to install anything special.

This guide is written for beginners. Follow it from top to bottom and you will have your website online.

---

## Contents

1. [What you get](#1-what-you-get)
2. [Before you start](#2-before-you-start)
3. [Quick start checklist](#3-quick-start-checklist)
4. [Folder map](#4-folder-map)
5. [Change your name and contact details](#5-change-your-name-and-contact-details)
6. [Change the colors](#6-change-the-colors)
7. [Change the fonts](#7-change-the-fonts)
8. [Replace the images](#8-replace-the-images)
9. [Make the contact form work](#9-make-the-contact-form-work)
10. [Put your website online](#10-put-your-website-online)
11. [Common problems and fixes](#11-common-problems-and-fixes)
12. [Credits and license](#12-credits-and-license)
13. [Support](#13-support)

---

## 1. What you get

**Five pages:**

- Home (`index.html`)
- About (`about.html`)
- Destinations (`destinations.html`)
- Packages (`packages.html`)
- Contact (`contact.html`)

**Features:**

- Looks good on phones, tablets, and computers
- Menu that works on small screens
- Package buttons that fill in the contact form for your visitor
- Contact form that sends messages to your email
- One settings file for your name, phone, email, and social links
- No database and no special software needed

**Documents in the `Docs` folder:**

- `README.md`: this guide
- `CREDITS.md`: where fonts, icons, and free photos come from
- `LICENSE.txt`: what you can and can't do with this template
- `CHANGELOG.md`: list of versions

---

## 2. Before you start

### What you need

1. **A code editor.** This is a free program for editing text files. We recommend **Visual Studio Code** (VS Code): https://code.visualstudio.com
2. **A web browser** such as Chrome, Firefox, Edge, or Safari.
3. **Web hosting** to put your site online. Section 10 explains free options.

### Words you will see in this guide

| Word | What it means |
| --- | --- |
| **Folder** | A place that holds files, like a drawer |
| **File extension** | The letters after the dot in a file name. In `hero.jpg`, the extension is `.jpg` |
| **HTML file** | A page of your website (ends in `.html`) |
| **CSS file** | A file that controls how the website looks: colors, fonts, spacing (ends in `.css`) |
| **Browser refresh** | Reloading the page so you see your changes. Press `F5` (or `Cmd + R` on Mac) |
| **Hosting** | A company that keeps your website files online so other people can visit |
| **Endpoint** | A web address that a form service gives you, used to send form messages to your email |
| **Access key** | A long code that tells the form service which email address should receive your messages |

### Two helpful tips

- **Always keep a backup.** Before you change anything, copy the whole template folder and keep the copy safe. If something breaks, you can start again.
- **Show file extensions.** On Windows, open any folder, click **View**, and turn on **File name extensions**. This lets you see the `.jpg` at the end of names when you rename images.

---

## 3. Quick start checklist

Tick these off in order.

- [ ] Extract (unzip) the downloaded file. Right-click it and choose **Extract All**.
- [ ] Open the folder and double-click `index.html`. Your website opens in the browser. This is a preview on your computer only.
- [ ] Open the whole template folder in VS Code: choose **File > Open Folder**.
- [ ] Change your name and contact details (section 5).
- [ ] Choose your colors (section 6).
- [ ] Replace the grey placeholder images with your photos (section 8).
- [ ] Set up the contact form (section 9).
- [ ] Put the website online (section 10).

---

## 4. Folder map

This is what is inside your template folder.

```text
Live-On-Travel-Website-Template-v1.0.0/
├── index.html
├── about.html
├── destinations.html
├── packages.html
├── contact.html
├── config/
│   └── site.js
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── destination.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── apply-config.js
│   │   ├── navbar.js
│   │   ├── slider.js
│   │   └── form.js
│   └── images/
│       ├── homepage/
│       ├── about/
│       ├── destinations/
│       ├── packages/
│       ├── contact/
│       └── favicon.svg
└── Docs/
    ├── README.md
    ├── CREDITS.md
    ├── LICENSE.txt
    └── CHANGELOG.md
```

**The files you will actually use:**

| Item | What to do with it |
| --- | --- |
| `config/site.js` | **Edit this.** Your name, phone, email, social links, and form address |
| `assets/css/style.css` | Edit the colors and fonts at the top |
| `assets/images/` | Replace the grey placeholder images here. The small browser tab icon `favicon.svg` is here too |
| The five `.html` files | Edit the page text if you want to change it |

**Please do not edit these:**

| Item | Why |
| --- | --- |
| `assets/js/apply-config.js` | It copies your settings from `config/site.js` onto every page |
| `assets/js/navbar.js`, `slider.js`, `form.js` | They make the menu, slider, and form work |
| `assets/css/destination.css`, `responsive.css` | Extra styles for the Destinations page and for phones |

---

## 5. Change your name and contact details

You only need to edit **one file**: `config/site.js`.

1. In VS Code, open the `config` folder on the left.
2. Click `site.js`.
3. Replace the demo text inside the quotation marks with your own details.

You can change:

- Website name and tagline
- Email address
- Phone number
- WhatsApp number (include your country code, or leave it empty if you do not use WhatsApp)
- Address
- Social media links
- Copyright name (the year changes by itself)
- Form endpoint and access key (see section 9)

4. Save the file: press `Ctrl + S` (or `Cmd + S` on Mac).
5. Go to your browser and refresh. Your new details now appear on every page.

**Important:** keep the quotation marks `" "` and the commas at the end of each line. Only change the words between the quotes.

**Social media links:** until you add a link, the icons are shown but do nothing when clicked. Replace each `#` with your full profile address, for example `https://www.instagram.com/your-name`.

**Changing page text:** headings, descriptions, destination names, package names, and prices are written directly in the five HTML files. Open a page in VS Code, find the words you want to change, and type your own. Do not delete the `<` and `>` signs around them. Save, then refresh the browser.

### Other things to change before you publish

- **Browser tab titles.** The text shown in the browser tab comes from the `<title>` line near the top of each of the five HTML files. Replace "Live On" in each one with your own name.
- **Search descriptions.** Each page also has a line starting with `<meta name="description"`. This is the short text Google can show under your page title. Rewrite it for your own business, with a different sentence on every page.
- **Package names are in three places.** Each package name appears in `index.html`, in `packages.html` (in the "Plan Your Trip" links), and in the package list of the form in `contact.html`. If you rename a package, change it in all three places. The spelling must match exactly, or the package will not be selected in the form.
- **Demo content.** The reviews, ratings, prices, and claims (such as "Best Price Guarantee" and "24/7 Customer Support") are examples only. Replace them with real information about your business. Showing invented reviews or claims to your visitors can mislead them.
- **WhatsApp.** The WhatsApp icon in the footer stays switched off until you add your number in `config/site.js`.

**About the name "Live On":** it is demo branding only. It is not meant to represent your business or trademark. Please replace it with your own business name before you publish.

---

## 6. Change the colors

All the main colors are in one place.

1. Open `assets/css/style.css` in VS Code.
2. Look at the very top of the file. You will see a block that starts with `:root`.
3. Each line has a name and a color code, for example `--primary: #0F3D4C;`.
4. Change the color code to the one you want.
5. Save and refresh the browser.

What the main names do:

| Name | What it colors |
| --- | --- |
| `--primary` and `--primary-dark` | The main brand color (header, footer, dark sections) |
| `--accent` and `--accent-hover` | Buttons and highlights |
| `--text`, `--text-light`, `--text-on-dark` | Text colors |
| `--background` and `--background-soft` | Page and section backgrounds |

**How to find a color code:** search "color picker" in your browser, choose a color, and copy the code that starts with `#`. Paste it in place of the old one and keep the `;` at the end.

**Tip:** change one color at a time, so you can see exactly what it controls.

---

## 7. Change the fonts

The template uses two free Google Fonts: **Poppins** (body text) and **Playfair** (headings).

To use different fonts:

1. Go to https://fonts.google.com and choose your fonts.
2. Copy the import link that Google gives you.
3. Open `assets/css/style.css`. On the first lines of the file, replace the old font link with your new one.
4. Press `Ctrl + F` and search for `font-family`. Replace each old font name with your new font name. Keep the quotation marks and the comma.
5. Save and refresh the browser.

If the text looks wrong afterwards, undo with `Ctrl + Z` and try again.

---

## 8. Replace the images

The images in this download are **grey placeholders** with the words "Add Your Image Here." No photographs are included. You add your own.

Use your own photos, or photos you have the right to use. Free photo sites like Pexels and Unsplash are good places to look. Always read the license on each site before using a photo on a business website. Links are in `CREDITS.md`.

### How to replace one image

You do not need to edit any code.

1. Find the image you want to replace in the table below.
2. Prepare your own photo. Make it the recommended size and a wide (16:9) shape.
3. Rename your photo to **exactly** the old file name, for example `hero.jpg`.
4. Go to the folder shown in the table, for example `assets/images/homepage/hero/`.
5. Copy your photo into that folder. When the computer asks, choose **Replace the file**.
6. Refresh your browser.

### The browser tab icon

The small icon in the browser tab is the file `assets/images/favicon.svg`. To use your own logo, save your icon with the same name and replace the file. If your icon is a PNG instead, ask a developer to change the icon line in the `<head>` of each page.

### Three rules

1. **Keep the exact name and extension.** `hero.jpg` must stay `hero.jpg`, not `hero.png` or `Hero.jpg`.
2. **Capital letters matter online.** Your own computer may not care, but most web servers do.
3. **Make your photos small before using them.** Big photos make your website slow. Use a free tool like https://squoosh.app and try to keep each photo under 300 KB.

### List of all 17 images

All paths start inside `assets/images/`.

| File | Page | Where it appears | Recommended size |
| --- | --- | --- | --- |
| `homepage/hero/hero.jpg` | Home | Big banner at the top | 1920 x 1080 |
| `about/a-1.jpg` | About | Banner at the top | 1920 x 1080 |
| `contact/c-1.jpg` | Contact | Banner at the top | 1920 x 1080 |
| `destinations/d-1.jpg` | Destinations, Home | Destinations banner and a destination card | 1920 x 1080 |
| `destinations/d-2.jpg` | Destinations, Home | Destination card | 1200 x 675 |
| `destinations/d-3.jpg` | Destinations, Home | Destination card | 1200 x 675 |
| `destinations/d-4.jpg` | Destinations | Destination card | 1200 x 675 |
| `destinations/d-5.jpg` | Destinations | Destination card | 1200 x 675 |
| `destinations/d-6.jpg` | Destinations | Destination card | 1200 x 675 |
| `destinations/d-7.jpg` | Destinations | Destination card | 1200 x 675 |
| `destinations/d-8.jpg` | Destinations | Destination card | 1200 x 675 |
| `packages/p-1.jpg` | Packages, Home | Packages banner and a package card | 1920 x 1080 |
| `packages/p-2.jpg` | Packages, Home | Package card | 1200 x 675 |
| `packages/p-3.jpg` | Packages, Home | Package card | 1200 x 675 |
| `packages/p-4.jpg` | Packages | Package card | 1200 x 675 |
| `packages/p-5.jpg` | Packages | Package card | 1200 x 675 |
| `packages/p-6.jpg` | Packages | Package card | 1200 x 675 |

---

## 9. Make the contact form work

When a visitor fills in the form, the message needs somewhere to go. The template does not have its own server, so it uses **Web3Forms**, a free service that sends the messages to your email. You do not need to create a full account.

### Steps

1. Go to https://web3forms.com
2. Scroll to "Create your Access Key", enter the email address where you want to receive messages, and submit.
3. Open the email from Web3Forms and copy your **access key**. It is a long code with dashes.
4. Open `config/site.js` in VS Code.
5. In the `form` section, paste this address between the quotation marks of `endpoint`:
   `https://api.web3forms.com/submit`
6. Paste your access key between the quotation marks of `AccessKey`.
7. Save the file (`Ctrl + S`).
8. Put your website online (section 10).
9. Open your live Contact page, fill in the form, and click **Send Message**.
10. Check your email, including the spam folder. Your test message should arrive.

### What you should see

- **Form set up correctly:** a green success message appears, and the email arrives within a minute or two.
- **Endpoint or access key empty:** the form shows "The contact form is not set up yet." This means one of the two settings in `config/site.js` is still empty.

### If it does not work

- Check that the endpoint and access key are copied completely, with no spaces, and are inside the quotation marks.
- Check that the access key name in `config/site.js` is spelled exactly `AccessKey`.
- Press `F12` in your browser, open the **Console** tab, and read any red message.
- Always test on the live website, or with a local preview tool such as the VS Code "Live Server" extension.

**Safety note:** the access key is made to be used on websites, but do not share it publicly. Never use or share the template author's key.

---

## 10. Put your website online

Your template is made of simple files, so almost any hosting works. Upload the **whole folder** and keep everything inside it exactly as it is. The file `index.html` must be in the main folder of your site.

Free and low-cost options:

| Option | How it works |
| --- | --- |
| **Netlify** | Create a free account and drag your folder onto the dashboard |
| **GitHub Pages** | Upload your files to a repository and turn on Pages |
| **Cloudflare Pages** | Upload the folder or connect a repository |
| **A regular web host** | Upload the files with the host's file manager into the `public_html` folder (or similar) |

After uploading, open your website address and check every page. Click the links, open the menu on your phone, and send a test message from the contact form.

---

## 11. Common problems and fixes

| Problem | What to try |
| --- | --- |
| I changed something but nothing happens | Save the file (`Ctrl + S`), then hard refresh the browser (`Ctrl + F5`) |
| An image is missing or broken | Check the file name and extension. They must match exactly, including capital letters |
| My new photo looks cropped | Use a wide 16:9 photo at the recommended size |
| The website looks broken after I edited a file | Press `Ctrl + Z` in VS Code to undo, or copy the file again from your backup |
| My name or phone did not change | Make sure you edited `config/site.js`, kept the quotation marks, and saved |
| The contact form says it could not send or is not set up | Check the endpoint and access key in `config/site.js` (section 9) |
| A red bar says "Settings could not be loaded" | Open `config/site.js` and look for a missing quotation mark or comma. Undo your last change with `Ctrl + Z` |
| The WhatsApp icon does nothing | That is normal when the WhatsApp number in `config/site.js` is empty. Add your number to turn it on |
| The menu does not open on my phone | Make sure all files, including the `assets` folder, were uploaded |
| The website is slow | Make your photos smaller (section 8) |

---

## 12. Credits and license

- Fonts, icons, and photo sources are listed in `CREDITS.md`.
- Your rights are in `LICENSE.txt`. In short: you may use this template for your own websites and for client websites. You may not resell, share, or repackage the template files as your own template.
- Fonts, icons, and other third-party assets keep their own licenses.

---

## 13. Support

Need help? Email: **nazsite002@gmail.com**

Please tell us which page you are on, which browser you use, and what you expected to happen. A screenshot helps a lot.
