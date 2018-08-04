import React, { Component } from 'react';
import _ from "lodash";
import './App.css';
import SearchBar from './Components/SearchBar'
import YTSearch from 'youtube-api-search';
import VideoList from "./Components/VideList";
import VideoDetail from "./Components/VideoPlayer";

const APIKey="AIzaSyASsTAnJAqiFiRTdC-TxjWQu6sjG0dwcZw";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      videos:[],
      selectedVideo:null
    }
   this.videoSearch("IceCube")
  }
  videoSearch(term){
    YTSearch({key:APIKey,term:term},(videos)=>{
      this.setState({videos:videos,
      selectedVideo:videos[0]})
  
      })
  }
  render() {
    const videoSearch=_.debounce((term)=>{this.videoSearch(term)},750)
    return (
<div>
  <SearchBar onSearchTermChange={videoSearch}/>
  <div className="row mt-1">
  <VideoDetail video={this.state.selectedVideo}/>
  <VideoList onVideoChange={selectedVideo=>{this.setState({selectedVideo})}} videos={this.state.videos}/>
  </div>
  </div>
    );
  }
}

export default App;
