import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {storage } from '../firebase';



export const APIUploadImage= async (file)=>{
  try {
    const fileName = file.name;
    const fileExtension = fileName.split(".").pop();
    const uniqueFileName = `${file.name}${Date.now()}.${fileExtension}`;
  const storageRef = ref(storage,uniqueFileName);

    // Upload the file
    const snapshot = await uploadBytes(storageRef, file);
    console.log("Uploaded a blob or file!");

    // Get the download URL of the uploaded image
    const downloadURL = await getDownloadURL(storageRef);
    console.log("Download URL:", downloadURL);

    // Return the download URL
    return downloadURL;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error; // Propagate the error
  }
}