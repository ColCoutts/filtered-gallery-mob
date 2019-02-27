import images from '../data/images.js';
import buildGallery from './build-gallery.js';
import filteredImage from './filter-images.js';
import loadImages from '../src/load-images.js';

const formNode = document.getElementById('filter-list');

loadImages(images);


formNode.addEventListener('submit', function(event){
    event.preventDefault();
    
    const imageListNode = document.getElementById('image-list');
    console.log(imageListNode.children);
    
    const formData = new FormData(formNode);

    const filter = {
        keyword: formData.get('keyword'),
        horns: formData.get('horns')
    };
    
    const filteredResult = filteredImage(images, filter);
    const imageChildren = imageListNode.children;
    console.log(imageChildren);

    // while(imageChildren.length > 0) {
    //     imageListNode.removeChild;
    // }
    console.log(imageListNode);
    
    filteredResult.forEach(function(filteredResult) {
        const dom = buildGallery(filteredResult);
        imageListNode.appendChild(dom);
    });
});


//dont understand while and the callback aspect of this build