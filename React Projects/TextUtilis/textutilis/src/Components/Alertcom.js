import React from 'react';

export default function Alertcom(props) {
    const capitalization = (word) => {
        const convertWord = word.toLowerCase();
        return convertWord.charAt(0).toUpperCase() + convertWord.slice(1);
    }

    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong> {capitalization(props.alert.type)}</strong>: {props.alert.message}
            </div>
        </div>
    )
}
