import React from 'react'

import SubmitDessertForm from './SubmitDessertForm'
import SubmitPhotos from './SubmitPhotos'

function CreateSection() {
  return (
    <div>
      <SubmitDessertForm />
      <br />
      <SubmitPhotos />
      <br />
      <br />
    </div>
  );
}

export default CreateSection