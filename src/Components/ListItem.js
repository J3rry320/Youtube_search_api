import React from "react";
import ReactDOM from 'react-dom';
const ListItem=({video,onVideoChange})=>{
   const imageUrl=video.snippet.thumbnails.default.url
   //Check and Update
    const handleScrollToElement=(event)=> {
    const tesNode = ReactDOM.findDOMNode(this.refs.videoPlayer)
  console.log(tesNode);
  }
    
   return (
    <li onClick={()=>{onVideoChange(video); }} className="list-group-item">
    <div className="video-list media ">
    <div className="media-left">
    <img src={imageUrl}   className="media-object mr-2"/>
    </div>
    <div className="media-body">
    <div className="media-heading mt-1">
    {video.snippet.title}
    </div>
    </div>
    </div>
    
    </li>
  
)
};
export default ListItem;
