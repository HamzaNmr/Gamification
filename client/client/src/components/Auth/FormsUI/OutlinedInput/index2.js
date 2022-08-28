// import React from 'react';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import { useField } from 'formik';

// const OutlinedInputWrapper = ({
//     name,
//     ...otherProps
// }) => {
//     const [field, mata2] = useField(name);

//     const configOutlinedInput = {
//         ...field,
//         fullWidth: "true",
//         color: "secondary",
//         placeholder: 'Enter your password',
//         label: "Password",
//         ...otherProps,
//     }

//     if(mata2 && mata2.touched && mata2.error){
//         configOutlinedInput.error = true;
//         configOutlinedInput.helperText = mata2.error;
//     }

//     return (
//         <OutlinedInput 
//            {...configOutlinedInput}
//         />
//     );
// };

// export default OutlinedInputWrapper;

