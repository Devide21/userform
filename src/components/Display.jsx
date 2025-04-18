import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { deleteInput, editInput } from "../features/inputSlice";
import { Link, useNavigate } from "react-router";



const DisplayInputs = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1); // Navigate back
    };
    const dispatch = useDispatch();
    const inputs = useSelector((state) => state.inputs.inputs);

    // const [isEditing, setIsEditing] = useState(null);
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        age: "",
        mobileNumber: "",
        gender: "",
        maritalStatus: "",
        spouseName: "",
        spouseAge: "",
        graduateFrom: "",
        monthlyEarning: "",
        ownHouse: "",
        resident: "",
    });

    // const handleEditClick = (input) => {
    //     setIsEditing(input.id);
    //     setFormData(input); // Prefill the form with the input data
    // };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSave = () => {
    //     dispatch(editInput(formData));
    //     setIsEditing(null);
    // };

    return (
        <div>
            <h1 className="">List of Users Deatils</h1>
            <div className="table-responsive">
                <table className="table shadow table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Marital Status</th>
                            <th scope="col">Spouse Name</th>
                            <th scope="col">Spouse Age</th>
                            <th scope="col">Graduation</th>
                            <th scope="col">Earning</th>
                            <th scope="col">Own House</th>
                            <th scope="col">Resident</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inputs.map((input) => (
                            <tr key={input.id}>
                                <td>{input.name}</td>
                                <td>{input.age}</td>
                                <td>{input.mobileNumber}</td>
                                <td>{input.gender}</td>
                                <td>{input.maritalStatus}</td>
                                <td>{input.spouseName}</td>
                                <td>{input.spouseAge}</td>
                                <td>{input.graduateFrom}</td>
                                <td>{input.monthlyEarning}</td>
                                <td>{input.ownHouse}</td>
                                <td>{input.resident}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Link to="/">
                <a href="/">
                    <button className="me-4 shadow">Go to Form</button>
                </a>
            </Link>
            <button className="shadow" onClick={goBack}>Go Back</button>
        </div>
    );
};

export default DisplayInputs;
