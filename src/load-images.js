import buildGallery from './build-gallery.js';

function loadImages(images){
    const imageListNode = document.getElementById('image-list');
    
    images.forEach(images => {
        const dom = buildGallery(images);
        imageListNode.appendChild(dom);
    });
}

export default loadImages;