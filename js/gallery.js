const images = [
    {
      preview: 'images/1.jpg',
      original: 'images/1.jpg',
      description: 'Опис зображення 1',
    },
    {
      preview: 'images/2.jpg',
      original: 'images/2.jpg',
      description: 'Опис зображення 2',
    },
    {
      preview: 'images/3.jpg',
      original: 'images/3.jpg',
      description: 'Опис зображення 3',
    },
    {
        preview: 'images/4.jpg',
        original: 'images/4.jpg',
        description: 'Опис зображення 3',
      },
     {
        preview: 'images/5.jpg',
        original: 'images/5.jpg',
        description: 'Опис зображення 3',
      },
      {
        preview: 'images/6.jpg',
        original: 'images/6.jpg',
        description: 'Опис зображення 3',
      },
      {
        preview: 'images/7.jpg',
        original: 'images/7.jpg',
        description: 'Опис зображення 3',
      },
      {
        preview: 'images/8.jpg',
        original: 'images/8.jpg',
        description: 'Опис зображення 3',
      },  
  ];
  
  // Генерація розмітки
  const galleryContainer = document.querySelector('.gallery');
  const galleryMarkup = images
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img 
              class="gallery__image" 
              src="${preview}" 
              data-source="${original}" 
              alt="${description}" />
          </a>
        </li>
      `;
    })
    .join('');
  
  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
  
  // Делегування кліків
  galleryContainer.addEventListener('click', onGalleryItemClick);
  
  function onGalleryItemClick(event) {
    event.preventDefault();
  
    const isImage = event.target.classList.contains('gallery__image');
    if (!isImage) return;
  
    const originalImageSrc = event.target.dataset.source;
  
    const instance = basicLightbox.create(`
      <img src="${originalImageSrc}" width="800" height="600">
    `);
  
    instance.show();
  }
  