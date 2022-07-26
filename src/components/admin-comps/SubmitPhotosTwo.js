import React from 'react'

function SubmitPhotosTwo() {

    let handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();

      const englishValue = document.getElementById("english_name").value;

      formData.append("[english_name]", englishValue);
      // formData.append("dessert[images]", e.target.images.files[0]);
    //   console.log(e.target.images.files.length);

    let imagesLength = e.target.images.files.length
    let eachImage = e.target.images.files

        for (var x = 0; x < imagesLength; x++) {
          formData.append("images", eachImage[x]);
        }

      submitToApi(formData);
    }

    let submitToApi = (data) =>{
        fetch("/add-images" , {
            method: "POST",
            body: data
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
    
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="english_name">Enter Id</label>
        <input type="text" name="english_name" id="english_name" />
        <br />

        <label htmlFor="images">Upload a Image</label>
        <input type="file" multiple="multiple" name="images" id="images" />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitPhotosTwo