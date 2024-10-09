// Function to fetch images dynamically
async function loadImages() {
    const imageGrid = document.getElementById('image-grid');

    // Fetch the image names from the API
    const response = await fetch('/api/images');
    const images = await response.json();

    // Create image elements and append to the grid
    images.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.src = `jayveepng/${image}`;
        imgElement.alt = image;

        // Add click event to open the modal
        imgElement.onclick = function() {
            openModal(this.src, this.alt);
        };

        // Append each image to the grid
        imageGrid.appendChild(imgElement);
    });
}

// Function to open the modal
function openModal(src, alt) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = src;
    caption.innerHTML = alt;
}

// Function to close the modal
function closeModal() {
    document.getElementById('image-modal').style.display = "none";
}

// Call loadImages when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadImages);
