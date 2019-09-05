import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/index';

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button className='ui button primary' onClick={() => this.props.selectSong(song)}>Select</button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            )
        });
    }
    render() {
        return (
            <div className="ui segment">
                <h2 class="ui header">Elliot Fu</h2>
                <div className='ui divided list'>{this.renderList()}</div>
            </div>
        )
    }
}

const stateToProps = state => {
    return { songs: state.songList }
}

export default connect(stateToProps, { selectSong })(SongList);