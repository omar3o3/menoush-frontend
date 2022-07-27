import React from 'react'

import SubmitDessertForm from './SubmitDessertForm'
import SubmitPhotos from './SubmitPhotos'
import SubmitPreviewImage from './SubmitPreviewImage'

function CreateSection() {
  return (
    <div>
      {/* <img src={} alt="account-logo" /> */}
      <SubmitDessertForm />
      <br />
      <SubmitPhotos />
      <br />
      <SubmitPreviewImage />
      <br />
    </div>
  );
}

export default CreateSection