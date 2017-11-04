import React from 'react';

const VideoListItem = (props) => {
  const url = props.vids.snippet.thumbnails.default.url;
  let titleSnippet = props.vids.snippet.title
  const title = titleSnippet.length > 20 ? `${titleSnippet.substring(0, 20)}....` : titleSnippet;
  return (
    <div className='col-lg-4 col-md-4 col-sm-4'
      onClick={() => props.onVideoSelect(props.vids)}>
      <img alt="img" src={url} className='img-responsive' />
      <p> {title} </p>
    </div>
  );
}

export default VideoListItem;
