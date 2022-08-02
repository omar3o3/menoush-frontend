import React from 'react'

function HorizontalLine({title}) {
  return (
    <div
      className="my-3"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1, height: "5px", backgroundColor: "black" }} />
      <h1 className="display-4 mx-3">{title}</h1>
      <div style={{ flex: 1, height: "5px", backgroundColor: "black" }} />
    </div>
  );
}

export default HorizontalLine