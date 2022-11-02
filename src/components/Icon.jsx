import React from "react";

function Icon(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.Icon}
        </span>
        <span>{props.IconName}</span>
      </dt>
      <dd>{props.IconDescription}</dd>
    </div>
  );
}

export default Icon;
