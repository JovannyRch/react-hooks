import { useState } from "react";

export const FormHook = () => {
    const [formState, setFormState] = useState(
        {
            name: '',
            email: '',
            password: ''
        }
    );
    const handleInputChange = ({ target }) => {
        setFormState(
            {
                ...formState,
                [target.name]: target.value,
            }
        )
    };
    return [
        formState,
        handleInputChange,
    ]
};