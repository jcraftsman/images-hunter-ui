import React from 'react';
import Input from './Input';
import ResultImg from './ResultImg';
import Grid from '@material-ui/core/es/Grid/Grid';


const Search = () => (
    <Grid container justify="center" spacing={16}>
        <Grid item xs={12}>
            <Grid container justify="center">
                <Input/>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Grid container justify="center">
                <ResultImg/>
            </Grid>
        </Grid>
    </Grid>
);

export default Search;