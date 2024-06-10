
const uploadFile = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    axios.post('https://api.escuelajs.co/api/v1/files/upload', formData, {
        onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(`Progress: ${percentCompleted}%`);
        }
    })
    .then(response => {
        console.log("Upload successful!", response.data);
    })
    .catch(error => {
        console.error("Upload failed!", error);
    });
};
              