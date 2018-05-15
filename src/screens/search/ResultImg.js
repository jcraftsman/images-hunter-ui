import React from 'react';
import {GridList, GridTile, IconButton, Subheader} from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
    gridList: {
        width: 500,
    },
};

const ResultImg = ({images}) => (
    <GridList style={styles.gridList}>
        <Subheader>Documents found</Subheader>
        {images.map((tile) => (
            <GridTile
                key={tile.url}
                title={tile.title}
                subtitle={<span>by <b>{tile.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
            >
                <img src={tile.url} alt={tile.description}/>
            </GridTile>
        ))}
    </GridList>
);

export default ResultImg;