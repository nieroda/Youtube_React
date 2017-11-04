import React from 'react';


const DisplaySelected = (props) => {

  if (!props.video) {
    return <div> Loading... </div>
  }
  const videoId = props.video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  //<iframe src={url}><iframe>
  return (
    <div className='container'>
      <div className='jumbotron'>
        <div className='row text-center'>
          <div className='embed-responsive embed-responsive-16by9'>
            <iframe className='embed-responsive-item' src={url} title={props.video.etag}  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplaySelected;
