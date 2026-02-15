const galleryContainer = document.getElementById("gallery-container");

// Change this number to how many images you have
const numberOfImagesGallery = 10;

for (let i = 1; i <= numberOfImagesGallery; i++) {
    const img = document.createElement("img");
    img.src = `images/gallery${i}.jpg`;
    img.alt = `Beauty work ${i}`;
    galleryContainer.appendChild(img);
}

const numerOfImagesLenkaBeauty = 2;
// Set text content
const heading = document.createElement("h2");
heading.textContent = 'lenka_konkolova_beauty';  // works!
heading.classList.add("gallery-heading");

// Insert heading **before the gallery container content**
galleryContainer.appendChild(heading);

for (let i = 1; i <= numerOfImagesLenkaBeauty; i++) {
    const img = document.createElement("img");
    img.src = `images/lenka_konkolova_beauty${i}.jpg`;
    img.alt = `Beauty work ${i}`;
    galleryContainer.appendChild(img);
}

const numberOfImages = 5;

for (let i = 1; i <= numberOfImages; i++) {
    const img = document.createElement("img");
    img.src = `images/lenka_konkolova_editorial${i}.jpg`;
    img.alt = `Beauty work ${i}`;
    galleryContainer.appendChild(img);
}