import React, { useEffect, useState } from 'react'
import ManageMenu from '../../components/ManageMenu'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import crudService from '../../services/crud.service';
import LoadingIcon from '../../components/LoadingIcon';
import Swal from 'sweetalert2'

const IndustryType = () => {

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [description, setDescription] = useState("");
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const { user, isLoggedIn } = useSelector(state => state.auth);

    const onSubmit = async (event) => {
        event.preventDefault();
        let request = { name, description }
        let response = null;
        if (id) {
            response = await crudService.update(request, "industries/" + id);
        } else {
            response = await crudService.create(request, "industries");
        }
        if (response.status == 200 || response.status == 201) {
            loadItems();
            Swal.fire({
                title: 'Congratulations!',
                text: "Industry type has been updated!",
                icon: "success"
            });
        }
    }

    const handleEdit = async (id) => {
        try {
            setLoading(true);
            const resData = await crudService.getOne("industries/" + id);
            setName(resData.data.name);
            setDescription(resData.data.description);
            setId(resData.data.id);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error("Error fetching data:", error);
        }
    }

    const loadItems = async () => {
        try {
            setLoading(true);
            const resData = await crudService.getAll("industries");
            setItems(resData.data);
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
            <ManageMenu />
            <div className="mt-3 border border-warning" data-aos="fade-right">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                {id ? <h3 className="card-title text-center mb-4">Edit Industry Type</h3>
                                    : <h3 className="card-title text-center mb-4">Create Industry Type</h3>}
                                <form id="registrationForm" onSubmit={onSubmit}>
                                    <input type="hidden" value={id} />
                                    <div className="mb-3">
                                        <label htmlFor="bname" className="form-label">Industry Type Name</label>
                                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="bname" placeholder="Enter industry type name" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="bdescription" className="form-label">Industry Type Description</label>
                                        <textarea onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Enter industry type description" className="form-control" id="bdescription"></textarea>
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
            {loading ? <LoadingIcon /> :
                <div className="card mt-3 border border-warning mb-2">
                    <div className="card-body">
                        <h3 className="card-title text-center mb-2">Industry types</h3>
                        <div className="table-responsive">
                            <table className="table  table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Updated At</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        items.length != 0 ? items.map((item) => {
                                            return <tr key={item.id}>
                                                <th className="fs-6 fw-normal">{item.name}</th>
                                                <td className="fs-6">{item.description}</td>
                                                <td className="fs-6">{item.updatedAt}</td>
                                                <td className="d-flex">
                                                    <button type="button" className="btn btn-outline-warning text-dark fw-medium" onClick={() => handleEdit(item.id)}>Edit</button>
                                                    {/* <button type="button" class="btn btn-outline-secondary">Deactivate</button> */}
                                                </td>
                                            </tr>
                                        }) : <tr>
                                            <td colSpan={4} className="text-center">No result found</td>
                                        </tr>
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default IndustryType