import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";
import React from 'react'
import Javascript from '../Image/Javascript.png'
import Reactjs from '../Image/Reactjs.png' 
import Css from '../Image/Css.png'
import Sass from '../Image/Sass.png'
import Ruby from '../Image/Ruby.png'
import Mongodb from '../Image/Mongodb.png'
import Nodejs from '../Image/Nodejs.png'
import Api from '../Image/Api.png'
import sql from '../Image/sql.png'
import Aws from '../Image/Aws.png'
import Git from '../Image/Git.png'
import Github from  '../Image/Github.png'




const icon = [
  Javascript,
  Reactjs,
  Css,
  Sass,
  Ruby,
  Mongodb,
  Nodejs,
  Api,
  sql,
  Aws,
  Git,
  Github,





]

 export default function Skills() {
   return (
     <div>
       <div style={{ height: "500px" }}>
  <Marquee velocity={20} minScale={0.7} resetAfterTries={200} scatterRandomly>
    {times(15, Number).map((id) => (
      <Motion
        key={`child-${id}`}
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}
      >
        <div
          // style={{
          //   width: "50px",
          //   height: "50px",
          //   borderRadius: "50%",
          //   backgroundColor: "blue",
          //   textAlign: "center",
          //   lineHeight: "50px",
          // }}
        >
           <img src={icon[id]} alt="" />
        </div>
      
      </Motion>
    ))}
  </Marquee>
</div>;
     </div>
   )
 }
 
