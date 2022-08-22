import React from "react";
import TextField from "@mui/material/TextField";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  InputAdornment,
} from "@mui/material";

const SignForm = ({ details, objectMakerO }) => {
  const handleChanges = (e, value) => {
    if (value === "phoneNumber") {
      if (details.phoneNumber.trim().length === 0 && e.target.value === "0") {
        return;
      }
      if (e.target.value.trim().length >= 10) {
        return;
      }
      objectMakerO({
        ...details,
        [value]: e.target.value.replace(/[^0-9]/g, ""),
      });
    } else if (value === "positionA" || value === "fullNameA") {
      objectMakerO({
        ...details,
        [value]: e.target.value.replace(
          /[^\u0621-\u064A\u0660-\u0669\u066E-\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\s]/g,
          ""
        ),
      });
    } else {
      objectMakerO({ ...details, [value]: e.target.value });
    }
  };

  return (
    <div className="signFormContainer">
      <div>
        <img
          src="https://lh3.googleusercontent.com/d/1ijGrkSvZqB7yShwLdGahLbnNInMxUiXx"
          alt="Logo"
        />
      </div>

      <div className="formContainer">
        <div className="inputContianer">
          <TextField
            value={details.fullNameE}
            onChange={(e) => handleChanges(e, "fullNameE")}
            label="Full Name"
            size="small"
            fullWidth
          />
        </div>
        <div className="inputContianer">
          <TextField
            value={details.fullNameA}
            onChange={(e) => handleChanges(e, "fullNameA")}
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
              value={details.department}
              onChange={(e) => handleChanges(e, "department")}
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
            value={details.positionE}
            onChange={(e) => handleChanges(e, "positionE")}
            label="Position"
            size="small"
            fullWidth
          />
        </div>
        <div className="inputContianer">
          <TextField
            value={details.positionA}
            onChange={(e) => handleChanges(e, "positionA")}
            label="منصب"
            inputProps={{ sx: { color: "black" } }}
            size="small"
            fullWidth
          />
        </div>
        <div className="inputContianer">
          <TextField
            value={details.phoneNumber}
            onChange={(e) => handleChanges(e, "phoneNumber")}
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
