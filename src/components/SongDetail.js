import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song!</div>;
  }
  return (
    <div>
      <h3>Details for</h3>
      <p>
        Title:{song.title}
        <br></br>
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mstp = (state) => {
  return { song: state.selectedSong };
};

export default connect(mstp)(SongDetail);
