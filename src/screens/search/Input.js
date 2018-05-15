import React from 'react';
import {TextField} from 'material-ui';

const Input = ({ onChange }) => (
    <TextField
        defaultValue=""
        floatingLabelText="Text to find"
        onChange={(evt) => onChange(evt.target.value)}
    />
);

export default Input;