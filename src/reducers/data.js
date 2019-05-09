function data(state, action){
    switch (action.type){
        case 'SEARCH_VIDEO':{

           // action.payload.query = el valor que ingresan en el input
            let results = [];
            // if(action.payload.query){
            //     const list = state.data.categories[2].playlist;  //la data de la api en su ultima posicion 
            //     const results = list.filter((item)=>{
            //         return   item.author.includes(action.payload.query) // Si el autor coincide con lo el valor del input, devuelve true o false
            //     })
            // }

            if (action.payload.query) {
                const categories = state.data.categories
                categories.map(category => {
                  let tempResults = category.playlist.filter(item => {
                    return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
                  })
                  results = results.concat(tempResults)
                })
              }

            return {
                ...state,
                search: results
            }
        }
        default:
        return state
    }
}

export default data