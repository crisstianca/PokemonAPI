
export const ListPokemones = ( {pokemones=[], deleteItem} ) => {

    return (
       <div className="d-grid gap-3">
            {
                pokemones.map( 
                    (pokemon, index) => 
                        <div 
                            key={ index }
                            className="p-2 "
                        >
                            { pokemon.name }
                            <div>
                                <button 
                                    className="btn btn-danger"
                                    onClick= { () => { deleteItem(pokemon) } } 
                                > 
                                    Delete 
                                </button>
                            </div>
                        </div>)
            }
       </div>
  )
}
