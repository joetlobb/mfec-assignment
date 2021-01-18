import React from 'react';

const ToggleStatusButton = (props) => {
  let toggleCSS = "m-auto w-4 h-4 bg-indigo-700 rounded-lg hover:bg-gray-300";
  if (!props.isDone) toggleCSS = "m-auto w-4 h-4 bg-white rounded-lg hover:bg-indigo-700 focus:";

  return (
    <div className={toggleCSS}
      onClick={() => props.toggle(props.id, props.name)}></div>
  );
};

export default ToggleStatusButton;

