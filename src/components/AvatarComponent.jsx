import React from "react";
const AvatarComponent = ({ src, alt, size }) => {
  const avatarStyle = {
    width: size || "50px",
    height: size || "50px",
    borderRadius: "50%",
    overflow: "hidden",
    display: "inline-block",
    border: "2px solid #ccc",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div style={avatarStyle}>
      <img src={src} alt={alt} style={imgStyle} />
    </div>
  );
};

export default AvatarComponent;
