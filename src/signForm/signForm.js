import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  InputAdornment,
} from "@mui/material";

const SignForm = ({ details, objectMakerO }) => {
  const [fullNameE, setFullNameE] = useState("");
  const [fullNameA, setFullNameA] = useState("");
  const [positionE, setPositionE] = useState("");
  const [positionA, setPositionA] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("general");

  const handleChanges = (e, setter, value) => {
    setter(() => e.target.value);
    objectMakerO({ ...details, [value]: e.target.value });
  };

  return (
    <div className="signFormContainer">
      <div>
        <img
          src="https://lh6.googleusercontent.com/SvBybUPhyTeWVAlyC7y1UyumcZnLSp2WtMJ-MHQ5dQsZQwen8oeaPDff9LVeL9OZhiduD3K1sjGCR2TR5yfaRRAi35BA0wnzmiR--DzEFvnkt1hzMtGnjP3gU9__ElXso464qY8H"
          alt="Logo"
        />
      </div>

      <div className="formContainer">
        <div className="inputContianer">
          <TextField
            value={fullNameE}
            onChange={(e) => handleChanges(e, setFullNameE, "fullNameE")}
            label="Full Name"
            size="small"
            fullWidth
          />
        </div>
        <div className="inputContianer">
          <TextField
            value={fullNameA}
            onChange={(e) => handleChanges(e, setFullNameA, "fullNameA")}
            label="الاسم الكامل"
            size="small"
            fullWidth
          />
        </div>
        <div className="inputContianer">
          <FormControl fullWidth size="small">
            <InputLabel id="select-label">department</InputLabel>
            <Select
              labelId="select-label"
              label="department"
              value={department}
              onChange={(e) => handleChanges(e, setDepartment, "department")}
              defaultValue={"general"}
            >
              <MenuItem value={"general"}>General</MenuItem>
              <MenuItem value={"BIMSolutions"}>BIM Solutions</MenuItem>
              <MenuItem value={"expertServices"}>Expert Services</MenuItem>
              <MenuItem value={"designBureau"}>Design Bureau</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="inputContianer">
          <TextField
            value={positionE}
            onChange={(e) => handleChanges(e, setPositionE, "positionE")}
            label="Position"
            size="small"
            fullWidth
          />
        </div>
        <div className="inputContianer">
          <TextField
            value={positionA}
            onChange={(e) => handleChanges(e, setPositionA, "positionA")}
            label="منصب"
            inputProps={{ sx: { color: "black" } }}
            size="small"
            fullWidth
          />
        </div>
        <div className="inputContianer">
          <TextField
            value={phoneNumber}
            onChange={(e) => handleChanges(e, setPhoneNumber, "phoneNumber")}
            label="Phone Number"
            inputProps={{ sx: { color: "black" } }}
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+966</InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignForm;
