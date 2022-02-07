import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const videos = props.videos.map((video) => {
    return <VideoItem />
  });
  return <div>{videos}</div>
} 

export default VideoList;