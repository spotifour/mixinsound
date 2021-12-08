import React, { useState, useMemo } from "react";
import "./projectIdeas.css";
import { projectInfo } from "../const";

function ProjectIdeas() {
  const [projectIdeasSection, setProjectIdeasSection] = useState("overview");
  const buttons = useMemo(
    () =>
      Object.keys(projectInfo).map((section) => {
        console.log(section);
        const buttonStyles =
          section === projectIdeasSection ? { backgroundColor: "#fff", color: "#000000", borderColor: "#000000" } : {};
        let buttonText = "";
        switch (section) {
          case "overview":
            buttonText = "1. Overview";
            break;
          case "motivation":
            buttonText = "2. Motivation";
            break;
          case "description":
            buttonText = "3. Description";
            break;
          case "toolsAndTechnologies":
            buttonText = "4. Tools and technologies";
            break;
          case "outcome":
            buttonText = "5. Outcome";
            break;
          default:
            break;
        }
        return (
          <button
            style={buttonStyles}
            className="projectIdeasButton"
            onClick={() => setProjectIdeasSection(section)}
          >
            {buttonText}
          </button>
        );
      }),
    [projectIdeasSection]
  );

  return (
    <div id="projectIdeas">
      <h2 className="sectionName">Project Ideas</h2>
      <div className="projectIdeasMain">
        <div className="projectIdeasButtons">
          {buttons}
        </div>
        <div className="projectIdeasText">
          {projectInfo[projectIdeasSection]}
        </div>
      </div>
    </div>
  );
}

export default ProjectIdeas;