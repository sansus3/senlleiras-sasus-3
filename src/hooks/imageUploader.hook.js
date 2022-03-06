import { storage } from "@/hooks/firebase";//storage de firebase para almacenar ficheros
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { reactive } from "vue";

/**
 * Los elementos cargados son de tipo  HTMLInputElement.file
 */
const imagenesArray = reactive([]);

/**
 * Control de errores
 */
const errores = reactive({ //gestión de errores de imagen
    /**
     * {Boolean} errorImg - Indica que no hay cargada ninguna imagen
     */
    errorImg: true,
    errorImgStr: 'Debe seleccionar un fichero al menos',
});
/**
 * Subida de imágenes a Firestore
 * @param {String} id Identificador o ruta donde subir las imágenes en Firebase
 */
const subirImagenes = async (id) => {
    for (let item of imagenesArray) {
        //console.log(item.file.name)
        if (item.file  && item.file.name.length) {
            //console.log(item.file.name)
            const storageRef = ref(storage, `${id}/${item.file.name}`); //creamos una referencia
            const reponse = await uploadBytes(storageRef, item.file);
        }
    }
}

const getImages = async (id,rutas) => {
    // Create a reference under which you want to list
    const listRef = ref(storage, id);
    // Find all the prefixes and items.
    const res = await listAll(listRef)
    //console.log(res)
    res.items.forEach(async (itemRef) => {
        // All the items under listRef.
        //console.log(itemRef.fullPath)
        (async () => {
            const url = await getDownloadURL(ref(storage, itemRef.fullPath));
            const bool = rutas.length ? false : true;
            rutas.push(
                {
                    url,
                    text: 'Carballo del Bosque del Banquete de Conxo',
                    clases: { 'carrusel-image': true, 'carruselmostrado': bool },
                    puntos: { 'posicionado': true },
                },
            );
        })();     
    });
}

export {subirImagenes,getImages,errores,imagenesArray}