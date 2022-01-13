console.log("Hello from the console")

document.querySelectorAll(".nav-item").forEach((item)=> {
  item.addEventListener("click", (event)=> {
    document.querySelector("#navbarNavDropdown").classList.toggle("show");
  })
})

mapboxgl.accessToken = 'pk.eyJ1Ijoibm9lbWllcGllcmFydCIsImEiOiJja283NWR1czkwNzZzMnZtdWl2OGZxcjhjIn0.L1NkLHkTIl3hayUXvkfOAg';
// Create a marker
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/noemiepierart/ckvlg3os2230h14pidakkf82g',
center: [4.836329, 45.905188],
zoom: 8
});

// Add a Marker on the place
new mapboxgl.Marker({ "color": "#b18e72" })
.setLngLat([4.696043823289855,  45.99468464204281 ])
.addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


