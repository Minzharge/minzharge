import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import $ from "jquery";

const root = ReactDOM.createRoot(document.getElementById('root'))
function loopNext() {
    $("#sliderWrapper")
      .stop()
      .animate(
        {
          scrollLeft: "+=20"
        },
        "fast",
        "linear",
        loopNext
      );
  }

  function loopPrev() {
    $("#sliderWrapper")
      .stop()
      .animate(
        {
          scrollLeft: "-=20"
        },
        "fast",
        "linear",
        loopPrev
      );
  }

  function stop() {
    $("#sliderWrapper").stop();
  }

  $("#next").hover(
    function() {
      loopNext();
    },
    function() {
      stop();
    }
  );

  $("#prev").hover(
    function() {
      loopPrev();
    },
    function() {
      stop();
    }
  );


root.render(<App/>)