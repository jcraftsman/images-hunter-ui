import React from 'react';
import {GridList, GridTile, IconButton, Subheader} from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
    gridList: {
        width: 500,
    },
};

const tilesData = [
    {
        url: 'https://cdn.pixabay.com/photo/2018/01/21/20/42/paper-3097505_1280.jpg',
        description: 'Hey there, I love you!'
    },
    {
        url: 'https://s3.eu-west-3.amazonaws.com/evolutionary-confidential/agent-elizabeth/1450344243_letter-document-image-master495.png',
        title: 'confidential',
        author: 'pashminu',
    },
];

const ResultImg = () => (
    <GridList style={styles.gridList}>
        <Subheader>Documents found</Subheader>
        {tilesData.map((tile) => (
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