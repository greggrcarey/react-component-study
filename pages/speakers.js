import React from "react";
import SpeakerRenderProps from "../src/components/SpeakersRenderProps";

const Speakers = () => {
  return (
    <SpeakerRenderProps>
      {({ speakers }) => {
        return (
          <div>
            {speakers.map(({ imageSrc, name }) => {
              return (
                <img src={`images/${imageSrc}.jpg`} alt={name} key={imageSrc} />
              );
            })}
          </div>
        );
      }}
    </SpeakerRenderProps>
  );
};

export default Speakers;
