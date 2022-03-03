import { storage } from "@/hooks/firebase";//storage de firebase para almacenar ficheros
import { ref, uploadBytes } from "firebase/storage";
/**
 * 
 * @param {String} id Identificador o ruta donde subir las imágenes en Firebase
 * @param {Object} images con el formato {uno: null, dos: null,tres: null}. Al cargarse uno de los elementos el tipo de dato es DocumentHtmlFile
 */
export const subirImagenes = async (id,images) => {
    for (let item in images) {
        if (images[item] !== null) {
            //console.log(images[item][0].name)
            const storageRef = ref(storage, `${id}/${images[item].name}`); //creamos una referencia
            const reponse = await uploadBytes(storageRef, images[item]);
        }
    }
}