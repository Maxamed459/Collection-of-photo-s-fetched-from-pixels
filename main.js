const apiKey = "FJp2pOIowiQeaMS7uOt0FnkSvXXHshWw936BY9gtXuORjMERKpVtQPnT";
let cardContainer = document.querySelector('#cardContainer');

async function fetchPhotos() {
  try {
    // Replace the URL with your specific API endpoint and query parameters
    const response = await fetch("https://api.pexels.com/v1/search?query=nature&per_page=100", {
      headers: {
        Authorization: apiKey
      }
    });
    const data = await response.json();
    // console.log(data); // Display the returned data in the console
    data.photos.forEach(photo => {
        let card = `<div class="card bg-gray-100 space-y-2 p-2 ">
                        <img src="${photo.src.original}" class="w-full h-[275px] aspect-19/6 object-cover" alt="photo.alt" load="lazy">
                         <div class="info py-2 flex items-center space-x-2">
                            <div class="w-9 h-9 rounded-full bg-red-400">
                                <img src="./download (4).png" class="w-auto h-9 rounded-full" alt="photo.alt">
                            </div>
                             <h3 class="text-2xl font-medium">${photo.photographer}</h3>
                         </div>
                     </div>`;

        cardContainer.innerHTML += card;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the async function
fetchPhotos();
