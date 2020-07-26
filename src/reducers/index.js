import { combineReducers } from 'redux'

const songsReducer = () => {

  return [
    { title: "first Song", duration: "4:05" },
    { title: "second Song", duration: "2:30" },
    { title: "third Song", duration: "3:15" },
    { title: "fouth Song", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})