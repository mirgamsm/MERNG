import { AgoraVideoPlayer } from "agora-rtc-react";
import { Grid } from "@mui/material"
import { useState, useEffect } from "react";


export default function VideoScreen(props)
{
    const { users, tracks} = props;
    const [gridSpacing, setGridSpacing] = useState(12);

    useEffect(() =>{
        setGridSpacing(Math.max(Math.floor(12/ (users.length + 1))), 4);

    }, [users, tracks]);

    return(
        <div className="flexBox2">
            <div className="flexItem">
                
                <AgoraVideoPlayer 
                videoTrack={tracks[1]}
                key="me"
                style={{height: "100%", width: ""}}
                />
            </div>
            {users.length > 0 && users.map((user) => {
                if (user.videoTrack) {
                    return ( 
                     <div className="flexItem">
                        <h1>{user.uid}</h1>
                        <AgoraVideoPlayer 
                        videoTrack={user.videoTrack}
                        key={user.uid}
                        style={{height: "100%", width: ""}}
                        />
                    </div>
                    );
                } else return null; 
            })
            }
        </div>
    )
}






