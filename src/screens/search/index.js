import React from 'react';
import Input from './Input';
import ResultImg from './ResultImg';
import Grid from '@material-ui/core/es/Grid/Grid';
import {connect} from 'react-redux';
import {searchImages} from '../../services/actions';

const Search = ({images, searchImages}) => (
    <Grid container justify="center" spacing={16}>
        <Grid item xs={12}>
            <Grid container justify="center">
                <Input onChange={searchImages}/>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Grid container justify="center">
                <ResultImg images={images}/>
            </Grid>
        </Grid>
    </Grid>
);

const mapStateToProps = ({getImages: {images,}}) => ({images});
const mapDispatchToProps = {searchImages};

export default connect(mapStateToProps, mapDispatchToProps)(Search);