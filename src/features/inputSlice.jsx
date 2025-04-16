import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    inputs: [{ id: 1, name: "Sibab", age: 18, mobileNumber: 1234567890, gender: "male", maritalStatus: "married", spouseName: "Lily", spouseAge: "18", graduateFrom: "Bachlors of Arts", monthlyEarning: "100000", resident: "Saint Martin", ownHouse: "yes" }]
};

export const inputSlice = createSlice({
    name: "inputs",
    initialState,
    reducers: {
        addInput: (state, action) => {
            const { name, age, mobileNumber, gender, maritalStatus, spouseName, spouseAge, graduateFrom, monthlyEarning, resident, ownHouse } = action.payload;
            const input = {
                id: nanoid(),
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
            };
            state.inputs.push(input);
        },

        // editInput: (state, action) => {
        //     const { id, name, email, password } = action.payload;
        //     const existingInput = state.inputs.find((input) => input.id === id);
        //     if (existingInput) {
        //         existingInput.name = name || existingInput.name;
        //         existingInput.email = email || existingInput.email;
        //         existingInput.password = password || existingInput.password;
        //     }
        // },

        // deleteInput: (state, action) => {
        //     state.inputs = state.inputs.filter((input) => input.id !== action.payload)
        // },
    }
});

export const { addInput, deleteInput, editInput } = inputSlice.actions;
export default inputSlice.reducer;
