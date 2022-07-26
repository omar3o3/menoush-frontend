import React from 'react'

import SubmitDessertForm from './SubmitDessertForm'
import SubmitPhotos from './SubmitPhotos'
import SubmitPhotosTwo from './SubmitPhotosTwo';

function CreateSection() {
  return (
    <div>
      <SubmitDessertForm />
      <br />
      <SubmitPhotos />
      {/* <SubmitPhotosTwo/> */}
      <br />
      <br />
    </div>
  );
}

export default CreateSection