import React from 'react';
import VideoListItem from './videolistitem';

const VideoList = (props) => {
  const VideoLists = props.video.map((video) => {
    return <VideoListItem
              key={video.etag}
              vids={video}
              onVideoSelect={props.onVideoSelect}/>
  });

  return (
    <div className='container'>
      {VideoLists}
    </div>
  )
}

export default VideoList;
