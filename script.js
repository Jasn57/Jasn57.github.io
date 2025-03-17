const images = [
    'https://i.pinimg.com/474x/71/96/68/71966824c1c05e5d25379e80a4ff4117.jpg', 
    'https://i.pinimg.com/736x/75/51/13/7551130d868e65e3d4397ef0bb44bb69.jpg',
    'https://i.pinimg.com/736x/10/f2/b6/10f2b631ede250206b77200cc0b0a0f0.jpg'
    ];
    
    let currentImageIndex = 0;
    const imageElement = document.getElementById('image-display');
    const titleElement = document.querySelector('.image-title');
    
    function cycleImages() {
    imageElement.src = images[currentImageIndex];
    titleElement.textContent = `Image ${currentImageIndex + 1}`; 
    currentImageIndex = (currentImageIndex + 1) % images.length;
    }
    
    setInterval(cycleImages, 3000);
    cycleImages(); 
    
