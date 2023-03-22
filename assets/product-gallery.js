document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.Thumbnail');
    const mainImage = document.querySelector('.Main-image');
  
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
            mainImage.src = thumbnail.src;
            mainImage.alt = thumbnail.alt;
        });
    });
  });