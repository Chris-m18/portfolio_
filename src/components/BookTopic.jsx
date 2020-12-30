import React from "react";
import "../css/ProjectTopic.scss";

const BookTopic = (props) => {
  return (
    <div className={` ${props.customStyle2} ${props.side} projectTopicDiv`}>
      <img className={`projectImg ${props.customStyle}`} src={props.image} alt={`${props.topic} image`} />
      <div className="textsDiv">
        <h3>{props.topic}</h3>
        <p className="projectPara">{props.paragraph}</p>
        <a href="http://outstanding-wood.surge.sh/" className='upon'>📖</a>
        <a href="https://github.com/Chris-m18/Once-Upon-a-Book" className='code2'>Code</a>

      </div>
     
    </div>
    
  );
};

export default BookTopic;
