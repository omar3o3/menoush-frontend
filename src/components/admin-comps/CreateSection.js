import React, { useState } from "react";

import Alert from "react-bootstrap/Alert";

import SubmitDessertForm from "./SubmitDessertForm";
import SubmitPhotos from "./SubmitPhotos";
import SubmitPreviewImage from "./SubmitPreviewImage";

function CreateSection() {
  const [showSubmissionState, setShowSubmissionState] = useState(false);

  const changeSubmissionStateTrue = () => {
    setShowSubmissionState(true);
    setTimeout(changeSubmissionStateToFalse, 2000);
  };

  const changeSubmissionStateToFalse = () => {
    setShowSubmissionState(false);
  };

  return (
    <div>
      {showSubmissionState ? (
        <span className="text-center">
          <Alert variant={"success"} className="fs-3 sticky-top">
            Submission recieved!
          </Alert>
        </span>
      ) : null}
      <SubmitDessertForm
        changeSubmissionStateTrue={changeSubmissionStateTrue}
      />
      <br />
      <SubmitPhotos changeSubmissionStateTrue={changeSubmissionStateTrue} />
      <br />
      <SubmitPreviewImage
        changeSubmissionStateTrue={changeSubmissionStateTrue}
      />
      <br />
    </div>
  );
}

export default CreateSection;
