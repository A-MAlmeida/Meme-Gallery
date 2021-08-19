var gallery = document.querySelector('main');

let imageUrls = [];

var imageUrlInput = document.querySelector('input');

var buttonFunction;
var addImageButton = document.querySelector('button');
  addImageButton.addEventListener('click', buttonFunction)
    function buttonFunction() {
      console.log(imageUrlInput.value);
      if(imageUrlInput.value != '') {
        imageUrls.push(imageUrlInput.value);
      }
      imageUrlInput.value = '';
      updateGallery();
    }

    function updateGallery() {
      gallery.innerHTML = '';
      for(x=0; x < imageUrls.length; x++) {
        var imageElement = document.createElement("img");
        imageElement.className = "gallery-image";
        imageElement.src = imageUrls[x];

        gallery.appendChild(imageElement);

      }
    }

    updateGallery();
