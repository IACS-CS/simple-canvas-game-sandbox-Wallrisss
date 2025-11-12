import "./style.css";

import { GameInterface } from "simple-canvas-library";

let curvepercent = 0;
let gi = new GameInterface();
gi.addDrawing(function ({ ctx, width, height, elapsed }) {
  ctx.strokeStyle = "rgb(0,228,0)";
  ctx.lineWidth = 5;

  //line in R
  ctx.moveTo(10, 13);
  ctx.lineTo(10, 100);
  ctx.stroke();

  //the mid in R

  ctx.moveTo(10, 50);
  ctx.lineTo(28, 50);
  ctx.stroke();

  //the \ in R
  ctx.moveTo(10, 45);
  ctx.lineTo(50, 100);
  ctx.stroke();

  ctx.beginPath();
  //loop in R
  ctx.arc(
    25,
    30, // center (x,y)
    20, // radius
    //Math.PI * 1.25 * curvepercent, // start angle (radians)
    - 0.75 * Math.PI * curvepercent,
    Math.PI * 0.75 * curvepercent // end angle (radians)
  );
  ctx.stroke();

  //o
  ctx.moveTo(125, 75);
  ctx.arc(100, 75, 25, 0, Math.PI * 2 * curvepercent);
  ctx.stroke();

  //line in b
  ctx.moveTo(150, 10);
  ctx.lineTo(150, 100);
  ctx.stroke();

  //the hump in b

  ctx.arc(175, 75, 25, Math.PI * 0.5, Math.PI * 1.5 * curvepercent, true);

  ctx.stroke();

  //connecting the top of the hump to theline
  ctx.lineTo(150, 50);
  ctx.stroke();

  //line in b
  ctx.moveTo(225, 10);
  ctx.lineTo(225, 100);
  ctx.stroke();

  //the hump in b

  ctx.arc(250, 75, 25, Math.PI * 0.5, Math.PI * 1.5 * curvepercent, true);

  ctx.stroke();

  //connecting the top of the hump to theline
  ctx.lineTo(225, 50);
  ctx.stroke();

  //line in y
  ctx.moveTo(300, 150);
  ctx.lineTo(350, 50);

  //v in y
  ctx.moveTo(325, 100);
  ctx.lineTo(300, 50);

  curvepercent= curvepercent + 0.05
  if (curvepercent > 1) {
    curvepercent = 1
  }
  
});

// reset curvepercent to 0 when you click
gi.addClickHandler(
  function () {
    curvepercent = 0;
  }
)
gi.run();
