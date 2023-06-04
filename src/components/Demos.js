import React from "react";

function Demos() {
  return (
    <div className="demo">
      <div className="demo-content">
        <h2>Demo</h2>
        <p>Animation Reel</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JYeigPynaLo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Demos;
