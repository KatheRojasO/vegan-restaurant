import React from "react";

export default function Hero() {
  return (
    <div id="hero">
      <div className="title">
        {/* You where so close to the 50/50 in code quality... */}
        {/* legally there is only 1 h1 tag per page, if you want to split into 2 lines use this */}
        <h1>
          <span className="first-tile">Nordic</span>
          <span className="secondline">Vegans</span>
        </h1>
        {/* But Eduardo, you may say, this is nesting. Yes, but the rule of h1 over nesting takes priority */}
      </div>
    </div>
  );
}
