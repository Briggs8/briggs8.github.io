//Modern Mini Gallery
fetch('./modernMini.json')
  .then(response => response.json())
  .then(data => {
    const jsonData = data;

    const gallery = document.getElementById('modernGallery');
    const mainBody = document.getElementById('modernMainBody');

    gallery.querySelectorAll('img').forEach(img => {
      img.addEventListener('click', () => {

        const data = jsonData[img.id];

        mainBody.innerHTML = 
        `<img src="${atob(data.image)}" alt"${data.imageAlt}">
          <div>
          <h2>${data.title}</h2>        
          <p>${data.description}</p>
          </div>`;
      });
    });
  });