/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const useForm = <T extends Record<string, any>>(initialForm: T) => {
    
    const [formState, setFormState] = useState<T>(initialForm);

    const onInputChange = ({ target }: any) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState, // Expande todas las propiedades del estado
        formState, // Devuelve el objeto completo del formulario
        onInputChange,
        onResetForm,
    };
};