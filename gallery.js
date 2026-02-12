document.addEventListener("DOMContentLoaded", function() {

    const gallery = document.getElementById("gallery");

    // Define sections with their images
    const sections = [
        {
            title: "Elegant",
            images: ["gallery1.jpg", "lenka_konkolova_beauty2.jpg"]
        },
        {
            title: "Make Up",
            images: ["lenka_konkolova_beauty1.jpg", "gallery2.jpg" ]
        },
        {
            title: "Draußen",
            images: ["lenka_konkolova_editorial1.jpg", "lenka_konkolova_editorial2.jpg"]
        }
    ];

    sections.forEach(section => {
        // Create heading for section
        const heading = document.createElement("p");
        heading.textContent = section.title;
        heading.classList.add("gallery-heading");
        gallery.appendChild(heading);

        // Create container for images
        const container = document.createElement("div");
        container.classList.add("gallery-section");
        gallery.appendChild(container);

        // Add images
        section.images.forEach(file => {
            const img = document.createElement("img");
            img.src = `images/${file}`;
            img.alt = section.title;
            container.appendChild(img);
        });
    });

});
