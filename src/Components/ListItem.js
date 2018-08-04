import React from "react";
const ListItem=({video,onVideoChange})=>{
   const imageUrl=video.snippet.thumbnails.default.url
    
   return (
    <li onClick={()=>{onVideoChange(video)}} className="list-group-item">
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
