import React, { useEffect, useState } from 'react'
import crudService from '../../services/crud.service';
import commonService from '../../services/common.service';
import LoadingIcon from '../../components/LoadingIcon';
import Swal from 'sweetalert2'
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';
import Select from 'react-select';

const Provider = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [mobile, setMobile] = useState("");
    const [altNumber, setAltNumber] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [industryTypeId, setIndustryTypeId] = useState("");
    const [businessTypeId, setBusinessTypeId] = useState("");
    const [email1, setEmail1] = useState("");
    const [email2, setEmail2] = useState("");
    const [addressLine, setAddressLine] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [googleEmbed, setGoogleEmbed] = useState("");
    const [operationTiming, setOperationTiming] = useState("");
    const [categories, setCategories] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [businesses, setBusinesses] = useState([]);
    const [category, setCategory] = useState({});
    const [industry, setIndustry] = useState({});
    const [business, setBusiness] = useState({});
    const [loading, setLoading] = useState(false);

    const { user, isLoggedIn } = useSelector(state => state.auth);

    const setUserCategoryChoice = (choice) => {
        setCategoryId(choice.value);
    }

    const setUserIndustryChoice = (choice) => {
        setIndustryTypeId(choice.value);
    }

    const setUserBusinessChoice = (choice) => {
        setBusinessTypeId(choice.value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        let request = {
            title, description, mobile, altNumber, email1, email2,
            categoryId, industryTypeId, businessTypeId, addressLine, street,
            city, district, pinCode, state, country, googleEmbed
        }
        let response = await commonService.onboardBusiness(request, "onboard/business");

        if (response.status == 201) {
            Swal.fire({
                title: 'Congratulations!',
                text: "Business registered successfully!",
                icon: "success",
                html: `
                    <br/><b>Please click on the link below to add more details about your business</b><br/>
                `,
                showDenyButton: true,
                confirmButtonText: "Proceed",
                denyButtonText: "Remind later"
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    navigate(`/onboard/businessdetails/${response.data.id}`);
                }
            });
        }
    }

    const loadItems = async () => {
        try {
            let items = [];
            setLoading(true);
            let resData = await crudService.getAll("common/categories");
            for (let i = 0; i < resData?.data?.length; i++) {
                items.push({ value: resData.data[i].id, label: resData.data[i].name })
            }
            setCategories(items);
            items = [];
            resData = await crudService.getAll("common/industries");
            for (let i = 0; i < resData?.data?.length; i++) {
                items.push({ value: resData.data[i].id, label: resData.data[i].name })
            }
            setIndustries(items);
            items = [];
            resData = await crudService.getAll("common/businesses");
            for (let i = 0; i < resData?.data?.length; i++) {
                items.push({ value: resData.data[i].id, label: resData.data[i].name })
            }
            setBusinesses(items);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        loadItems();
    }, []);

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return (
        <div className="smp-container mx-auto">
            <div className="mt-3 border border-warning" data-aos="fade-right">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">Onboard your business</h3>
                                <form id="registrationForm" onSubmit={onSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="bname" className="form-label">Business title</label>
                                        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="form-control" id="bname" placeholder="Enter business title" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="bdescription" className="form-label">Business Description</label>
                                        <textarea onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Enter business description" className="form-control" id="bdescription"></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="mobile" className="form-label">Mobile</label>
                                                <input onChange={(e) => setMobile(e.target.value)} value={mobile} type="text" className="form-control" id="mobile" placeholder="Enter mobile number" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="altNum" className="form-label">Alternate number</label>
                                                <input onChange={(e) => setAltNumber(e.target.value)} value={altNumber} type="text" className="form-control" id="altNum" placeholder="Enter alternate number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input onChange={(e) => setEmail1(e.target.value)} value={email1} type="text" className="form-control" id="email" placeholder="Enter your email" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="altEmail" className="form-label">Alternate email</label>
                                                <input onChange={(e) => setEmail2(e.target.value)} value={email2} type="text" className="form-control" id="altEmail" placeholder="Enter alternate email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="operationTiming" className="form-label">Business Operating Time</label>
                                        <textarea onChange={(e) => setOperationTiming(e.target.value)} value={operationTiming} placeholder="Enter operating time" className="form-control" id="operationTiming"></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="businesses" className="form-label">Choose your business type</label>
                                                <Select name="name" id="businesses" required options={businesses} onChange={(choice) => setUserBusinessChoice(choice)} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="industries" className="form-label">Choose your business industry</label>
                                                <Select name="name" id="industries" required options={industries} onChange={(choice) => setUserIndustryChoice(choice)} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="categories" className="form-label">Choose your business category</label>
                                                <Select name="name" id="categories" required options={categories} onChange={(choice) => setUserCategoryChoice(choice)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <h5 className="text-center">Address information</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="addressLine" className="form-label">Address Line</label>
                                                <input onChange={(e) => setAddressLine(e.target.value)} value={addressLine} type="text" className="form-control" id="addressLine" placeholder="Enter address line" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="street" className="form-label">Street</label>
                                                <input onChange={(e) => setStreet(e.target.value)} value={street} type="text" className="form-control" id="street" placeholder="Enter street" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="city" className="form-label">City</label>
                                                <input onChange={(e) => setCity(e.target.value)} value={city} type="text" className="form-control" id="city" placeholder="Enter city" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="district" className="form-label">District</label>
                                                <input onChange={(e) => setDistrict(e.target.value)} value={district} type="text" className="form-control" id="district" placeholder="Enter district" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="pinCode" className="form-label">Pincode</label>
                                                <input onChange={(e) => setPinCode(e.target.value)} value={pinCode} type="text" className="form-control" id="pinCode" placeholder="Enter pincode" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="state" className="form-label">State</label>
                                                <input onChange={(e) => setState(e.target.value)} value={state} type="text" className="form-control" id="state" placeholder="Enter state" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="country" className="form-label">Country</label>
                                                <input onChange={(e) => setCountry(e.target.value)} value={country} type="text" className="form-control" id="country" placeholder="Enter country" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="googleEmbed" className="form-label">Google embed link</label>
                                                <input onChange={(e) => setGoogleEmbed(e.target.value)} value={googleEmbed} type="text" className="form-control" id="googleEmbed" placeholder="Enter google embed link" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center d-grid">
                                        <button type="submit" className="btn btn-warning">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Provider