function uploadPicture() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  const formData = new FormData();

  formData.append('picture', file);

  // Send formData to the server using AJAX or fetch API
  // For example, using fetch API:

  fetch('/uploadPicture', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // Picture uploaded successfully
    } else {
      // Error uploading picture
    }
  })
  .catch(error => {
    console.error(error);
  });
}
