//  Galeri katagorilerinin
let wedding = [];
let winter = [];
let red = [];
let village = [];
let whiteBlack = [];
let istanbul = [];

function createGalleryItem(element) {
    const galleryGrid = document.querySelector('.gallery-grid');

    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = element;

    galleryItem.appendChild(img);
    galleryGrid.append(galleryItem);
}

function showCategory(categoryName) {
    const selectedCategory = eval(categoryName);

    // Galeri grid içindeki tüm öğeleri temizle
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = '';

    // Şeçili kategorisdeki resimleri göster
    selectedCategory.forEach(createGalleryItem);
}

fetch('assets/js/gallery.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP hatası! Durum: ${response.status}`);
        }
        return response.json();
    })

    .then(data => {
        //  Kategoriler
        const categories = ['wedding', 'winter', 'red', 'village', 'whiteBlack', 'istanbul'];

        categories.forEach(category => {
            const categoryImages = data
                .filter(item => item.category === category)
                .map(item => eval(category).push(item.imgUrl));
        });

        showCategory('wedding')
    })

    .catch(error => {
        console.error('Fetch hatası:', error);
    });