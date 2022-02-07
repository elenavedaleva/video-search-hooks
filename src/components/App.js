import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    console.log(response);
    this.setState({ videos: response.data.items})
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        I have {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;