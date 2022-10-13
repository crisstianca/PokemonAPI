import { useForm } from "../hooks/useForm"
import { ListPokemones } from "./ListPokemones";
import { useEffect, useState } from "react"
import { getPokemon } from "../helpers/getPokemon";

export const AddValues = () => {

    const { onInputChange, onSubmit, ...inputValue } = useForm();

    const [ pokemones, setPokemones ] = useState();
    
    const getPoke = async() => {
        const newPokemon = await getPokemon( inputValue.limit, inputValue.initialOffSet);
        setPokemones( newPokemon );
    }

    const deleteItem = ( pokemon ) => {
        const pokemonDelete = pokemon
        const pokemonFilter = pokemones.filter( pokemon => {
          return pokemon != pokemonDelete
        });

        setPokemones( pokemonFilter );
     }

    useEffect( () => {
        //getPoke();
    }, []) 

    return (
        <>
            <form
                className="row" 
                onSubmit={ ( event ) => { onSubmit(event, getPoke) } }
            >
                <div className="col-md-3">
                    <input 
                        className="form-control mt-3"
                        type="text"
                        name="limit" 
                        placeholder="limit"
                        onChange={ onInputChange }
                    ></input>
                </div>
                <div className="col-md-3">
                    <input 
                        className="form-control mt-3"
                        type="text"
                        name="initialOffSet" 
                        placeholder="initialOffSet"
                        onChange={ onInputChange }
                    ></input>
                </div>
                <div className="col-md-3">
                    <button
                        type="submit"
                        className="btn btn-primary mt-3"
                    >
                        Buscar Pokemons
                    </button>
                </div>
            </form>

            <div> 
                <ListPokemones key={ inputValue.name } pokemones={ pokemones } deleteItem={ deleteItem } />
            </div>
        </>
        
  )
}
