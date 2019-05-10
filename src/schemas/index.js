import api from '../api.json';
import { normalize, schema } from 'normalizr';

// se crea el schema
// recibe 3 parametros, el nombre que quiero ponerle al key, definicion del schema, y las opciones
const media = new schema.Entity('media',{},{
    idAttribute: 'id',
    processStrategy: (value, parent, key) => ({
        ...value,
        category: parent.id
    })
})

const category = new schema.Entity('categories', {
 playlist: new schema.Array (media)
},{})

const categories = { categories: new schema.Array(category)};

const normalizedData = new normalize(api, categories)

export default normalizedData
