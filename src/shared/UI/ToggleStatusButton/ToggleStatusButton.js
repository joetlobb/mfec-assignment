import React from 'react';

const ToggleStatusButton = (props) => {
  let toggleCSS = '';
  switch (props.isDone) {
    case true:
      if (!props.isAppleDevice) toggleCSS = "m-auto w-4 h-4 bg-indigo-700 rounded-lg hover:bg-gray-300"
      else toggleCSS = toggleCSS = "m-auto w-4 h-4 bg-indigo-700 rounded-lg";
      break;
    case false:
      if (!props.isAppleDevice) toggleCSS = "m-auto w-4 h-4 bg-white rounded-lg hover:bg-indigo-700"
      else toggleCSS = "m-auto w-4 h-4 bg-white rounded-lg";
      break;
    default: break;
  }

  return (
    <React.Fragment>
      <div className={toggleCSS}
        onClick={() => props.toggle(props.id, props.name)}></div>
    </React.Fragment>
  );
};

export default ToggleStatusButton;

