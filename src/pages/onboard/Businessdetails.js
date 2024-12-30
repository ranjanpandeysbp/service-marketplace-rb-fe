import React, { useEffect, useState } from 'react'
import commonService from '../../services/common.service';
import LoadingIcon from '../../components/LoadingIcon';
import Swal from 'sweetalert2'
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import ImagesUpload from '../../components/ImagesUpload';
import axios from 'axios';

const Businessdetails = () => {

        const navigate = useNavigate();
        const {businessDetailId} = useParams();
        console.log(businessDetailId);
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [unitPrice, setUnitPrice] = useState("");
        const [images, setImages] = React.useState([]);
        const [loading, setLoading] = useState(false);
    
        const onSubmit = async () => {
            if(!title || !description || !unitPrice || images.length === 0){
                Swal.fire({
                    title: 'Error occurred!',
                    text: "One or more mandatory fields are empty!",
                    icon: "error"
                })
                return;
            }
            setLoading(true);
            let request = {
                title, description, unitPrice, businessDetailId
            }
            //Call API to register single business item
            let response = await commonService.addBusinessItem(request, "onboard/businessItem");
            if (response.status == 201) {
            //Call API to save all images of new business item

                const config = {
                    headers: {
                    "Content-Type": "multipart/form-data",
                    },
                };
          
                const formData = new FormData();
                images.forEach((image, index) => {
                    formData.append('images', image.file); // Correctly append multiple images with the field name 'images[]'
                });
                axios
                    .post(
                    `http://localhost:8080/api/v1/images/addall/new/${response.data}`,
                    formData,
                    config
                    )
                    .then((response) => {
                        setLoading(false);
                        if(response.status === 201){
                            setTitle("");
                            setDescription("");
                            setUnitPrice("");
                            setImages([]);
                            Swal.fire({
                                title: 'Congratulations!',
                                text: "Business item registered successfully!",
                                icon: "success",
                                html: `
                                    <br/><b>You can continue to add more business items by filling the form.</b><br/>
                                `,
                                showDenyButton: true,
                                confirmButtonText: "Proceed",
                                denyButtonText: "Remind later"
                            })
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        console.log(error);
                        Swal.fire({
                            title: 'Error occurred!',
                            text: "Business Item cannot be registered, please try again later",
                            icon: "error"
                        })
                    });
                };
 
            }
    
  return (
    <div className="smp-container mx-auto">
            <div className="mt-3 border border-warning" data-aos="fade-right">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">Add your business components</h3>
                                <div id="itemAdd" >
                                    <div className="mb-3">
                                        <label htmlFor="bname" className="form-label">Business title</label>
                                        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="form-control" id="bname" placeholder="Enter business title" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="bdescription" className="form-label">Business Description</label>
                                        <textarea onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Enter business description" className="form-control" id="bdescription"></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label htmlFor="unitPrice" className="form-label">Unit Price</label>
                                                <input onChange={(e) => setUnitPrice(e.target.value)} value={unitPrice} type="text" className="form-control" id="unitPrice" placeholder="Enter unit price" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p className='text-muted'>You can upload a maximum of 10 images each of maximum of 5MB</p>
                                            <ImagesUpload images={images} setImages={setImages}/>
                                        </div>
                                    </div>
                                    <div className="text-center d-grid">
                                        {loading && <LoadingIcon />}
                                        <button onClick={()=>onSubmit()} className="btn btn-warning">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Businessdetails