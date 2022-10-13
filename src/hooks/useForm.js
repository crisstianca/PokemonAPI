import { useState } from "react";

export const useForm = () => {
  
    const [ inputValue, setInputValue ] = useState({
        initialOffSet: '',
        limit: ''
    });

    const onInputChange = ( { target } ) => {
        setInputValue({
            ...inputValue, 
            [target.name]: target.value
        })
    }

    const onSubmit = ( event, getPoke) => {
        event.preventDefault();
        setInputValue( inputValue )
        getPoke();
    }
  
    return {
        ...inputValue,
        onInputChange,
        onSubmit,
    }
}
