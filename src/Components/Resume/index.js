import React from "react";
import { StyledResume, StyledButton } from "./styledResume";

const Resume = () => {
  const pdfUrl = "/sample.pdf";
  return (
    <StyledResume>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <StyledButton className="custom-button" href={pdfUrl} download="sample.pdf">
          Download CV
        </StyledButton>
        <img src="./sample1.jpg" alt="Resume" />
        <br />
        <StyledButton className="custom-button" href={pdfUrl} download="sample.pdf">
          Download CV
        </StyledButton>
      </div>
    </StyledResume>
  );
};

export default Resume;
