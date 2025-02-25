import React from "react";

const ButtonDownload = ({ url, title }) => {
  return (
    <a href={url} download>
      <button
      // className="button-download"
      >
        {title}
      </button>
    </a>
  );
};

export default ButtonDownload;
