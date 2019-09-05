import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
    if (!props.song) return (<div className="ui segment"><h2 className="ui header">Select a song</h2></div>)
    const { title, artist, album, duration } = props.song;
    return (
        <div className="ui segment">
            <div>
                <h1>{title}</h1>
                <h3>{artist}</h3>
                <p>Album: {album}</p>
                <p>Duration: {duration}</p>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails)
