import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addInput } from "../features/inputSlice";
import { useNavigate } from "react-router-dom";  // Use useNavigate instead of NavLink
import { nanoid } from "@reduxjs/toolkit";

function Form() {
    // Local state for form inputs
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [gender, setGender] = useState("");
    const [maritalStatus, setMaritalStatus] = useState('');
    const [spouseName, setSpouseName] = useState('');
    const [spouseAge, setSpouseAge] = useState('');
    const [graduateFrom, setGraduateFrom] = useState('');
    const [ownHouse, setOwnHouse] = useState('');
    const [monthlyEarning, setMonthlyEarning] = useState('');
    const [resident, setResident] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();  // useNavigate for programmatic navigation

    const inputHandler = (e) => {
        e.preventDefault();

        // Generate a unique id using nanoid
        const id = nanoid();

        // Dispatch the action to add input to Redux store
        dispatch(addInput({
            id,
            name,
            age,
            mobileNumber,
            gender,
            maritalStatus,
            spouseName,
            spouseAge,
            graduateFrom,
            monthlyEarning,
            resident,
            ownHouse,
        }));

        // Clear form fields
        setName("");
        setAge("");
        setMobileNumber("");
        setGender("");
        setMaritalStatus("");
        setSpouseName("");
        setSpouseAge("");
        setGraduateFrom("");
        setMonthlyEarning("");
        setOwnHouse("");
        setResident("");


        // Redirect to /display after successful form submission
        navigate("/display");

        // console.log(
        //     id,
        //     name,
        //     age,
        //     mobileNumber,
        //     gender,
        //     maritalStatus,
        //     spouseName,
        //     spouseAge,
        //     graduateFrom,
        // ); 

    };

    return (
        <>
            <div className="d-flex">

                <form onSubmit={inputHandler} className="col-7 pt-4 pb-2 shadow">
                    <div className="form-group row">
                        <div className="col-2  align-content-center">
                            <label>Name </label>
                        </div>
                        <div className="col-6">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Enter name"
                            />
                        </div>
                        <label htmlFor="age" className="col-sm-1 col-form-label text-center">Age</label>
                        <div className="col-sm-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder='18'
                                name="age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row  mt-3">
                        <label htmlFor="mobileNumber" className=" col-sm-3 col-form-label ">Mobile Number</label>
                        <div className="col-sm-5">
                            <input
                                type="tel"
                                className="form-control"
                                placeholder='1234567890'
                                name="mobileNumber"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                        </div>

                        <label htmlFor="gender" className="col-sm-1 pt-1 col-form-label align-content-center">Gender</label>
                        <div className="col-sm-3">
                            <select
                                name="gender"
                                className="form-select"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>


                    <div className="row mt-3">
                        <label htmlFor="maritalStatus" className="col-sm-3 align-item-center col-form-label">
                            Marital Status
                        </label>
                        <div className="col-sm-3">
                            <select
                                name="maritalStatus"
                                className="form-select"
                                value={maritalStatus}
                                onChange={(e) => setMaritalStatus(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="Married">Married</option>
                                <option value="Unmarried">Unmarried</option>
                            </select>
                        </div>


                        <label htmlFor="graduateFrom" className="col-sm-3 align-item-center col-form-label ">Graduate From</label>
                        <div className="col-sm-3">
                            <select
                                name="graduateFrom"
                                className="form-select"
                                value={graduateFrom}
                                onChange={(e) => setGraduateFrom(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="Bachelor of Commerce">Bachelor of Commerce</option>
                                <option value="Bachelor of Science">Bachelor of Science</option>
                                <option value="Bachelor of Arts">Bachelor of Arts</option>
                            </select>

                        </div>
                    </div>


                    <div className="row  mt-3">

                        {maritalStatus === 'Married' && (
                            <>
                                <div className="row mt-3">
                                    <label htmlFor="spouseName" className=" col-sm-3 col-form-label">
                                        Spouse Name
                                    </label>
                                    <div className="col-sm-4">
                                        <input
                                            type="text"
                                            name="spouseName"
                                            className="form-control"
                                            placeholder="Enter Spouse Name"
                                            value={spouseName}
                                            onChange={(e) => setSpouseName(e.target.value)}
                                        />
                                    </div>
                                    <label htmlFor="spouseAge" className="text-center col-sm-1 col-form-label">
                                        Age
                                    </label>
                                    <div className="col-sm-2">
                                        <input
                                            type="number"
                                            name="spouseAge"
                                            className="form-control"
                                            value={spouseAge}
                                            onChange={(e) => setSpouseAge(e.target.value)}
                                            placeholder="18"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {gender === 'Male' && (
                            <div className="row p-0 m-0 mt-3">
                                <label htmlFor="monthlyEarning" className="col-sm-3 col-form-label ">Monthly Earning</label>
                                <div className="col-sm-4">
                                    <select
                                        name="monthlyEarning"
                                        className="form-select"
                                        value={monthlyEarning}
                                        onChange={(e) => setMonthlyEarning(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option value="0 to 100000">0 to 100000 </option>
                                        <option value="100000 to 250000">100000 to 250000</option>
                                        <option value="250000 to 500000">250000 to 500000</option>
                                        <option value="500000 to 10000000">500000 to 10000000</option>
                                    </select>
                                </div>

                                <label htmlFor="ownHouse" className="col-sm-2 col-form-label ">Own House</label>
                                <div className="col-sm-3">
                                    <select
                                        name="ownHouse"
                                        className="form-select"
                                        value={ownHouse}
                                        onChange={(e) => setOwnHouse(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>

                                <div className="col-12 d-flex mt-3">
                                    <label htmlFor="resident" className="col-sm-3 mt-3 col-form-label ">Resident</label>
                                    <div className="col-9">
                                        <input
                                            value={resident}
                                            onChange={(e) => setResident(e.target.value)}
                                            type="text"
                                            className="form-control mt-3"
                                            placeholder="Enter residential Address"
                                        />
                                    </div>
                                </div>
                            </div>

                        )}

                    </div>



                    <button type="submit" className="btn mt-4 shadow">
                        Submit
                    </button>
                </form >
                <div className="main-img col-5">
                    <h1 className=" main-heading">Connect with us</h1>
                </div>
            </div >
        </>
    );
}

export default Form;
