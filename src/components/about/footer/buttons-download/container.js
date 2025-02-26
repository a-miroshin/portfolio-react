import React from "react";

import ButtonDownload from "./button";
import cvUrl from "../../../../assets/downloads/Alexander_Miroshin_CV.pdf";
import PortfolioUrl from "../../../../assets/downloads/Alexander_Miroshin_Portfolio.pdf";

import "./buttons-download.css";

const ButtonsDownloadContainer = () => {
  return (
    <div className="buttons-download-container">
      <ButtonDownload url={cvUrl} title="Download CV" />
      <ButtonDownload url={PortfolioUrl} title="Download portfolio" />
    </div>
  );
};

export default ButtonsDownloadContainer;
