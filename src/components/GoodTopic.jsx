import React from "react";
import "../css/ProjectTopic.scss";

const GoodTopic = (props) => {
  return (
    <div className={` ${props.customStyle2} ${props.side} projectTopicDiv`}>
      <img className={`projectImg ${props.customStyle}`} src={props.image} alt={`${props.topic} image`} />
      <div className="textsDiv">
        <h3>{props.topic}</h3>
        <p className="projectPara">{props.paragraph}</p>
        <button>Site</button>
        <button>Site</button>

      </div>
     
    </div>
    
  );
};

export default GoodTopic;
