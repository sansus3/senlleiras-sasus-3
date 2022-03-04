import { storage } from "@/hooks/firebase";//storage de firebase para almacenar ficheros
import { ref, uploadBytes } from "firebase/storage";
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

export {subirImagenes,errores,imagenesArray}