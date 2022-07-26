import React from 'react'

import SubmitDessertForm from './SubmitDessertForm'
import SubmitPhotos from './SubmitPhotos'
import SubmitPreviewImage from './SubmitPreviewImage'
// import SubmitPhotosTwo from './SubmitPhotosTwo';

function CreateSection() {
  return (
    <div>
      <SubmitDessertForm />
      <br />
      <SubmitPhotos />
      <br />
      <SubmitPreviewImage/>
      <br />
    </div>
  );
}

export default CreateSection