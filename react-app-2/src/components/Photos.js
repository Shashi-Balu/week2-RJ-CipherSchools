import React, { useEffect, useState } from "react";
import Axios from "axios";
import { getAllPhotos } from "../apis/apis";

const Photos = () => {
    const [photoList, setPhotoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllPhotos()
            .then((response) => {
                let foundPhotos = response.data;
                setPhotoList(foundPhotos);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));

        //https://jsonplaceholder.typicode.com/photos
        //Make an API call t get all photos
        //update state
        //setLoading false

        // fetch("https://jsonplaceholder.typicode.com/photos") //making api
        //     .then((response) => response.json())
        //     .then((json) => setPhotoList(json)) //setting state
        //     .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            {photoList.map((photo, index) => (
                <div key={index}>
                    <img src={photo.url} alt={photo.title} />
                    <h4>{photo.title}</h4>
                </div>
            ))}
        </div>
    );
};

export default Photos;
