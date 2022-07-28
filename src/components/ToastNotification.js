import React from 'react';
import { showMessage } from 'react-native-flash-message';

const SuccessMessage = (message) => {
    return showMessage({
        message: message,
        type:'success',
    })
}

const ErrorMessage = (message) => {
    return showMessage({
        message: message,
        type:'danger',
    })
}

const WarningMessage = (message) => {
    return showMessage({
        message: message,
        type:'warning',
    })
}

export{SuccessMessage,ErrorMessage,WarningMessage}