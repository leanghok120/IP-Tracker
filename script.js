const inputBar = document.getElementById("input-bar")
const submitButton = document.getElementById("search-button")
const infoCard = document.getElementsByClassName("info")
const ipInfoCard = document.getElementById("ip-info")
const locationInfoCard = document.getElementById("location-info")
const timeCardInfo = document.getElementById("timezone-info")
const ispCardInfo = document.getElementById("isp-info")

fetchData("")

function fetchData(domain) {
  fetch("https://geo.ipify.org/api/v2/country?apiKey=at_rDX03VctaAEtFpJj9Eqe671VR5Hj7&domain=" + domain)
    .then(Response => Response.json())
    .then(Data => ipInfoCard.textContent = Data.ip)
    .catch(Error => console.error())

  fetch("https://geo.ipify.org/api/v2/country?apiKey=at_rDX03VctaAEtFpJj9Eqe671VR5Hj7&domain=" + domain)
    .then(Response => Response.json())
    .then(Data => locationInfoCard.textContent = Data.location.region + ", " + Data.location.country)
    .catch(Error => console.error())

  fetch("https://geo.ipify.org/api/v2/country?apiKey=at_rDX03VctaAEtFpJj9Eqe671VR5Hj7&domain=" + domain)
    .then(Response => Response.json())
    .then(Data => timeCardInfo.textContent = "UTC " + Data.location.timezone)
    .catch(Error => console.error())

  fetch("https://geo.ipify.org/api/v2/country?apiKey=at_rDX03VctaAEtFpJj9Eqe671VR5Hj7&domain=" + domain)
    .then(Response => Response.json())
    .catch(Error => console.error())
    .then(Data => ispCardInfo.textContent = Data.isp)
} 

function searchValue() {
  let domain = inputBar.value.toLowerCase()
  console.log("Fetching data")
  console.log("Value: " + domain)
  fetchData(domain)
}

// Map stuff
var map = L.map('map')
map.setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const options = {
    enableHighAccuracy: true, 
    // Get high accuracy reading, if available (default false)
    timeout: 5000, 
    // Time to return a position successfully before error (default infinity)
    maximumAge: 2000, 
    // Milliseconds for which it is acceptable to use cached position (default 0)
};

navigator.geolocation.watchPosition(success, error, options);
// Fires success function immediately and when user position changes

function success(pos) {

    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy; // Accuracy in metres

}

function error(err) {

    if (err.code === 1) {
        alert("Please allow geolocation access");
        // Runs if user refuses access
    } else {
        alert("Cannot get current location");
        // Runs if there was a technical problem.
    }

}
