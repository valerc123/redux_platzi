import { createStore } from 'redux';

//$ variable del DOM
const  $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event)
{
    event.preventDefault();
    const data = new FormData($form); // guarda los datos del formulario
    const title = data.get('title') // obtener name de formulario en este caso es title
    console.log(title)

    //action
    store.dispatch({
        type:'ADD_SONG', //type es obligatorio y debe ir un string en mayuscula que describa la acción 
        payload: { title } //preferiblemente enviar un objeto 
    })
}

const initialState=[
    {"title": "Despacito"},
    {"title": "One more time"},
    {"title": "Echame la culpa"}
]
const reducer = function(state, action){ // el reducer siempre debe retonar el estado
    switch (action.type) { 
        case 'ADD_SONG':
            return [...state, action.payload] //nuevo estado (estado anterior mas title del action)
        default: return state
    }
}
const store = createStore(
    reducer, //reducer  recibe una funcion vacia por defecto que retorna el estado (state)=>state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enhancer
)

function render(){
    const $container = document.getElementById('playlist');
    const playlist = store.getState() //obtine los datos del store  
    $container.innerHTML = '' // para limpiar las canciones y no se vuelvan a repetir 
    playlist.forEach(item => {
        const template = document.createElement('p');
        //textContent  propiedad para agregar contendido al parrafo
        template.textContent = item.title; // toma el valor del titulo 
        $container.appendChild(template) //appendChild agrega hijos al elemento (div)
    });
}

render() // me da el primer render de la aplicacion

function handleChange(){
    render()// cada vez que hay un cambio en el form me da un render nuevo
}

store.subscribe(handleChange) // escucha los cambios 
 //console.log(store.getState()) // store.getState() es el initialState


