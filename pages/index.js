import {useRef, useEffect, useState} from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const aud = useRef(null);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    aud.current.playbackRate = speed;
  }, [speed]);


  return (
    <>
      <div className="speedcontrolcontainer">
        <audio ref={aud} src="https://d1qx7pbj0dvboc.cloudfront.net/produced.mp3" controls></audio>
        <div>
          <label for="pbrate">Speed:</label>
          <input type="range" id="pbrate" min=".3" max="1" value={speed} step=".1" onChange={(e)=>setSpeed(e.target.value)} />
          <span style={{marginLeft: '5px'}}>{speed}</span>
        </div>
      </div>
  </>
  );
}
