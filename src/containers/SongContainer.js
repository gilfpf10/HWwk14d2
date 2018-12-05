import React, {Component} from 'react';

class SongContainer extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      topSongs:[]

    };

  }

  componentDidMount(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(response => response.json())
    .then(data => data.feed.entry.map(entry => ({
      id: entry['id']['label'],
      title: entry["title"]["label"],
      artist: entry["im:artist"]["label"],
    })))
    .then(data => this.setState({topSongs: data}));

  }

  render(){
    const songList = this.state.topSongs.map(song => (

      <li key={song.id}>
      <div> Title: {song.title}</div>
      <div> Artist: {song.artist}</div>
      <br></br>
      </li>
    ));

    return (
      <div>
      <h2>Top 20 Songs</h2>
      <ul>
      {songList}
      </ul>
      </div>
    );

  }
}

export default SongContainer;
