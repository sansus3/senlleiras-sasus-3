<template>
  <!-- Pintamos el mapa y le damos estilo(ajuste) -->
    <div ref="mapDiv" style="width: 100%; height: 80vh; "></div>
</template>

<script setup>
 //Importaciones
  import { computed, ref, onMounted, inject, reactive } from "vue";
  //Importamos la libreria de googlemaps instalada previamente con npm install.
  import { Loader } from "@googlemaps/js-api-loader";
  
  //APIKEY creada en la cuenta de google.
  const GOOGLE_MAPS_API_KEY = "AIzaSyDgpFxA83lfCwyjEn0o1g2Dw-OlLZPqHEE";
  //Inyectamos las las coordenadas de useGeolocation.js
  const coords = inject("coords");
  
  //Hacemos reactivo el el array de objetos.
  let dataArray = reactive([]);
  //Enlazamos la BBDD de firebase para pintar las propiedades en data y si hay algun error.
  const arboles = async () => {
    try {
      const respuesta = await fetch(
        "https://altas-senlleiras-default-rtdb.europe-west1.firebasedatabase.app/senlleiras.json",
        {
          method: 'GET',
          'Content-Type': 'application/json',
          'API-Key': GOOGLE_MAPS_API_KEY
        }
      );
      const data = await respuesta.json();
      for (let propiedad in data) {
        dataArray.push(data[propiedad]);
      }
      //console.log(data);
    } catch (error) {
      console.log("HAY UN ERROR AQUI", error);
    }
  };
  
  //Posicion inicio-central del mapa.
  const currPos = computed(() => ({
    lat: 42.8768488,
    lng: -8.5467419
  }));
  
  //Cargamos la APIKEY
  const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
  
  //Hacemos el mapa reactivo.
  const mapDiv = ref(null);
  
  //Montamos el mapa
  onMounted(async () => {
    await arboles();
    await loader.load();
    const map = new google.maps.Map(mapDiv.value, {
      center: currPos.value,
      zoom: 14,
    });
     
    //Icono(marca) que pintamos en el mapa
    const image = "https://cdn-icons-png.flaticon.com/128/490/490091.png";
    //Creamos un marcador (Icono arbol)
    const marker = () =>{
    //Recorremos las propiedades de dataArray y pintamos la marca
    let eventos = [];
    for (let item of dataArray) {
      eventos.push(new google.maps.Marker({
        position: {
          lat: Number(item.location.latitude),
          lng: Number(item.location.longitude),
        },
        map,
        icon: image,
        
        
      }));  
    }
    for(let evento of eventos){
      evento.addListener("click", (e) => {
        
      
      
      
  
      });
      
  
    }
    console.log(dataArray[0])
    }  
  //Llamamos al marcador
  marker()
    
  });
  
</script>

<style>

</style>