import React from 'react';
import ListItem from "./ListItem"
const VideoList=(props)=>{
    const VideoItems=props.videos.map((video)=>{
        return <ListItem onVideoChange={props.onVideoChange}  key={video.etag} video={video}/>
    })
    return(
        <ul className="col-md-5 col-sm-12">
    {VideoItems}
        </ul>
    )

}
export default VideoList;