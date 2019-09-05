import { combineReducers } from 'redux';

const songList = () => {
    return [
        {
            title: 'Options',
            artist: 'Pedro the Lion',
            album: 'Control (Remastered)',
            duration: '3:56'
        },
        {
            title: 'Escape',
            artist: 'Muse',
            album: 'Showbiz',
            duration: '3:31'
        },
        {
            title: 'Light Years',
            artist: 'Pearl Jam',
            album: 'Binaural',
            duration: '5:06'
        },
        {
            title: 'Your Hand In Mine',
            artist: 'Explosions in the Sky',
            album: 'The Earth Is Not A Cold Dead Place',
            duration: '8:16'
        },
        {
            title: 'Woman',
            artist: 'Tony Q Rastafara',
            album: 'Anak Kampung',
            duration: '3:30'
        },
    ]
}

const selectedSong = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songList,
    selectedSong
})
