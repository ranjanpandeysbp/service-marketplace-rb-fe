import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

import "./ImagesUpload.css";

const ImagesUpload = ({images, setImages}) => {
    //const [images, setImages] = React.useState([]);
    const maxNumber = 10;
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      //console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
  
    return (
      <div className={`App ${images.length !=0 ? "overflow-auto" : ""}`}>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          acceptType={["jpg", "png", "jpeg"]}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps
          }) => (
            // write your building UI
            <div className="row mb-2">
              <div className="col-md-6 col-sm-12 text-center">
                <button className="btn btn-warning mb-2"
                    style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                >
                    Click or Drop here
                </button>
              </div>
              <div className="col-md-6 col-sm-12 text-center">
                <button className="btn btn-danger mb-2" onClick={onImageRemoveAll}>Remove all images</button>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="row">
                        {imageList.map((image, index) => (
                            <div key={index} className="col-md-4 col-sm-12">
                                    <img src={image.data_url} alt={image.file?.name} width="100"/>
                                    <div className="d-flex justify-content-evenly my-2">
                                        <button className="btn btn-warning" onClick={() => onImageUpdate(index)}>Update</button>
                                        <button className="btn btn-danger" onClick={() => onImageRemove(index)}>Remove</button>
                                    </div>
                            </div>
                        ))}
                    </div>
              </div>
            </div>
          )}
        </ImageUploading>
      </div>
    );
}

export default ImagesUpload