
const apiUrl = "https://www.superheroapi.com/api.php/10157703717092094/search/"
const searchTerm = "batm"

card = document.querySelector('.card');
imgElement = card.querySelector('.img img');
nameElement = card.querySelector('h4');
roleElement = card.querySelector('h6');
descriptionElement = card.querySelector('p');



fetch(apiUrl + searchTerm)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    
    return response.json();
  })
  .then(data => {

    console.log(data["results"][0]);
    const firstResult = data.results[0];

    imgElement.src = firstResult.image.url
    nameElement.textContent = firstResult.name
    roleElement.textContent = firstResult.biography["full-name"]
    descriptionElement.textContent = firstResult.biography.aliases

  })
  .catch(error => {

    console.error("Error en la solicitud:", error);
  });
