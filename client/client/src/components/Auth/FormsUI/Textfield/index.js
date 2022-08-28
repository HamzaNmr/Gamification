import React from 'react';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';

const TextfieldWrapper = ({
    name,
    ...otherProps
}) => {
    const [field, mata] = useField(name);

    const configTextfield = {
        ...field,
        label: "Email",
        color: "secondary",
        variant: "outlined",
        placeholder: 'Enter your email',
        ...otherProps,
    }

    if(mata && mata.touched && mata.error){
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
    }

    return (
        <TextField 
           {...configTextfield}
        />
    );
};

export default TextfieldWrapper;