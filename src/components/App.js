import React from 'react';
import '../App.css'
// components
import SongList from './SongList'
import SongDetails from './SongDetails'
import Navbar from './Navbar'

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="ui container grid mt-50">
                <div className="ui row">
                    <div className="column eight wide">
                        <SongList />
                    </div>
                    <div className='column eight wide'>
                        <SongDetails />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;