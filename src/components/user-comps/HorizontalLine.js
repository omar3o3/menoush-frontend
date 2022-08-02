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
      <div style={{ flex: 1, height: "5px", backgroundColor: "#f1f1f3" }} />
      <h1 className="display-4 mx-3" style={{ color: "#f1f1f3" }}>
        {title}
      </h1>
      <div style={{ flex: 1, height: "5px", backgroundColor: "#f1f1f3" }} />
    </div>
  );
}

export default HorizontalLine