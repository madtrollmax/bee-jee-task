import React from 'react';
import { Alert } from 'react-bootstrap';

const GlobalError = props => {
    const {errors, errorField} = props;
    return (
        (errors && errors[errorField]) 
            ? <Alert variant="danger">{errors[errorField]}</Alert>
            : null
    );
};

export default GlobalError;