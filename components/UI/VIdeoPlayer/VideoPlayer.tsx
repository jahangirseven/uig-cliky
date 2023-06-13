import React, { useState } from 'react';
import styles from './VideoPlayer.module.css'
import {CaretRightOutlined} from '@ant-design/icons'

interface VideoPlayerProps{
    videoUrl : string, 
    posterUrl : string
}

function VideoPlayer({ videoUrl, posterUrl } : VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayClick() {
    setIsPlaying(true);
  }

  function handleCloseClick() {
    setIsPlaying(false);
  }

  return (
    <div className={`${styles.player_container} videoplayer_container`}>
        
    
    
      {isPlaying ? (
        <div className={styles.video_layer} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '80%', height: '80%', backgroundColor: '#fff' }}>
            <button onClick={handleCloseClick} className={styles.close_btn}>X</button>
            <iframe 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="Video Player"   
                src={`${videoUrl}?autoplay=1&controls=10&showinfo=0`}
                style={{ width: '100%', height: '100%', border: 'none' }}>
            </iframe>
          </div>
        </div>
      ) : <>
          <img 
            src={posterUrl}
            alt="Video Poster" 
            style={{ width: '100%', height: '100%'  , position: 'relative'  }} 
            onClick={handlePlayClick} 
          />
          
             <div className={styles.dark__layer}>
                 <button 
                  className={styles.btn_playvideo} 
                  onClick={handlePlayClick} ><CaretRightOutlined /></button>
             </div>
          </ > }
    </div>
  );
}

export default VideoPlayer;