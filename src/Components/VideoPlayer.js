import React from 'react';

const VideoDetail=({video})=>{
    if(!video){
        return <div className="text-black-50 ml-5 text-left">Loading...</div>
    }

const videoId=video.id.videoId;

const Url=`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
return(
<div className="col-md-7 col-sm-12">
 <div   className="ml-2 embed-responsive embed-responsive-16by9">
 <iframe  src={Url} className=" embed-responsive-item" allowFullScreen frameBorder={0}>
 </iframe>
 </div>
 <div className="mt-3 ml-2">
 <h3 >{video.snippet.title}
 </h3>
 <p className="text-black-40 mt-2">{video.snippet.description}
 </p>
 </div>
</div>
)

}
export default VideoDetail;