import api from '../api.json';
import { normalize, schema } from 'normalizr';

// se crea el schema
// recibe 3 parametros, el nombre que quiero ponerle al key, definicion del schema, y las opciones
const media = new schema.Entity('media',{},{
    idAttribute: 'id',
    processStrategy: (value, parent, key) => //funcion para heredar algun dato del padre de media y agregarse a algun elemento de media
    ({ // paso como parametro lo que quiero tomar del padre(categories).
    // value seria un obj que trae el titulo, id, autor ... todo lo de media
    //parent trae todo lo del padre de media o sea categoria
    // y el key del elemento 
        ...value,
        category: parent.id
    })
})

const category = new schema.Entity('categories', {
 playlist: new schema.Array(media) // traigo el key playlist de category y transformo en el schema de media. array porq playlist es array
},{})


//Como quiero retornar los datos, los retorno con un obj con el key del padre (categories) que es un array y le paso el schema category
const categories = { categories: new schema.Array(category)};//lo devuelve en un key result

//normalizo los datos con los datos de origen y con lo que debe retornar del schema
const normalizedData = new normalize(api, categories)


//importo los datos normalizado en el componente raiz


export default normalizedData
