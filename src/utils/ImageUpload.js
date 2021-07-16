import React,{ useState } from 'react'
import { Button } from "@material-ui/core";
import { db, storage } from "./firebase";

export default function ImageUpload() {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]); 
        }
    };

    const handleUpload =() => {
        const uploadTask = storage.ref('images/${image.name}').put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress function...
                const progess = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progess);
                },
                (error) => {
                    //Error function
                    alert(error.messagge);
                },
                () => {
                    //complete function
                    storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        //post image inside db
                        db.collection("users").collection("posts").add({
                            // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageurl: url,
                            // username: username
                        })
                    })
                }
        )
    }

    return (
        <div>
            <input type="text" placeholder="Enter a caption" onChange={event => setCaption(event.target.value)} value={caption}/>
            <input type="file" id="file-input" onChange={handleChange}/>
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}
