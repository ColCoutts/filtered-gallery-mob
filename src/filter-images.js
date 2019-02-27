export default function filteredImage(images, filter) {
    //filter method
    const filteredImages = images.filter(image => {
        const filterKeyword = !filter.keyword || image.keyword === filter.keyword;
        const filterHorns = !filter.horns || image.horns >= filter.horns;
        return filterKeyword && filterHorns;
    });
    return filteredImages;
}
