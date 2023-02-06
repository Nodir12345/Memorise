import * as React from "react";
import Box from "@mui/material/Box";
import audio from "./audio/audio.m4a"
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import "./liner.scss";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Liner = () => {
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  const [down, setdown] = React.useState(true);

  return (
    
      <div>
     { down ?   <Box>
      <div className="radius">
        <div>
          <IconButton onClick={()=>setdown(false)} aria-label="delete">
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
      </div>
      <div className="boxm">
        <div className="boxmusic">
          <div className="leftmusic">
            <IconButton aria-label="previous song" color="error">
              <FastRewindRounded fontSize="large" color="error" />
            </IconButton>
          </div>

          <div className="play">
            <IconButton
              aria-label={paused ? "play" : "pause"}
              onClick={() => setPaused(!paused)}
              color="error"
            >
              {paused ? (
                <PlayArrowRounded color="error" sx={{ fontSize: "4rem" }} />
              ) : (
                <PauseRounded color="error" sx={{ fontSize: "4rem" }} />
              )}
            </IconButton>
          </div>
          <div className="rigthmusic">
            <IconButton aria-label="next song" color="error">
              <FastForwardRounded fontSize="large" color="error" />
            </IconButton>
          </div>
        </div>
        {/* <div className="slider">
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value)}
          />
        </div> */}
        <audio className="audio" src={audio}
      controls></audio>
      </div>
    </Box>:
    <div className="drop">
     <button onClick={()=> setdown(true)} className="buttontop"><KeyboardArrowUpIcon fontSize="large" /></button>
    </div>
    }

      </div>
    
 
  );
};
