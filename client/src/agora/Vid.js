import { useState } from "react";
import { Button } from "@mui/material"
import VideoCall from "./VideoCall";

function Vid() {
    const [inCall, setInCall] = useState(false);
    return (
        <div className="App" style={{ height: "100%" }}>
        {inCall ? (
          <VideoCall setInCall={setInCall} />
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setInCall(true)}
          >
            Join Call
          </Button>
        )}
      </div>
    );
  }




export default Vid
