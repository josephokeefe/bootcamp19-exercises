import React from "react";
import { Photo, PhotoContainer } from "./styles";
import Avatar from "react-avatar";

const OtherApp = ({ imageLink, radius, name }) => (
  <PhotoContainer radius={radius}>
    {!imageLink ? (
      <Avatar maxInitials={3} name={name} size={2 * radius} round />
    ) : (
      <Photo src={imageLink} radius={radius} />
    )}
  </PhotoContainer>
);

export default OtherApp;
