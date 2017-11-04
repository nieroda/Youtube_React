import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import VideoList from './videolist';
import SearchBar from './searchbar';
import DisplaySelected from './selectedvideo';
import './App.css';
const API_KEY = 'AIzaSyCEilFkCOY4Tqq4C0nJxrSpJ-NDd2CQUow';

class YT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  componentWillMount() {
    this.searchForVideo('react js');
  }

  searchForVideo(input) {
    YTSearch({key: API_KEY, term: input}, (videos) => {
      this.setState({videos, selectedVideo: videos[0]});
    })
  }

  render() {

    const Search = _.debounce((input) => { this.searchForVideo(input) }, 400);

    return (
      <div>
        <SearchBar onSearchChange={Search}/>
        <DisplaySelected video={this.state.selectedVideo} />
        <VideoList
          video={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

export default YT;
