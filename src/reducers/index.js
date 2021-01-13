import { combineReducers } from 'redux'; 

const songsReducer= ()=>{
    return[
        {title: 'Maula Mere Maula' , duration: '6:04'},
        {title: 'Funk' , duration: '3:18'},
        {title: 'Ku Ku' , duration: '3:21'},
        {title: 'JAme Raho' , duration: '3:00'}
        
    ];
};

const selectedSongReducer= (selectedSong=null , action) =>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};


export default combineReducers({
    songs: songsReducer ,
    selectedSong: selectedSongReducer
});