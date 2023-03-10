import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const Form = (props) => {
  // eslint-disable-next-line
  const handleFormClick = (e) => {
    props.obj.push(e.target.value);
    console.log(props.obj);
  };

  const handleFormSearch = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="col-4">
      <div className="card card-default" data-v-ce9038c6="">
        <div className="card-header" data-v-ce9038c6="">
          <div className="card-title" data-v-ce9038c6="">
            Add Family Member
          </div>
        </div>
        <div className="card-body" data-v-ce9038c6="">
          <div className="card-body">
            <div className="form-elements">
              <div className="form-element">
                <TextField
                  id="form-element"
                  label="Name"
                  onChange={(e) => handleFormSearch(e)}
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="form-element">
                <TextField
                  id="form-element"
                  onChange={(e) => handleFormSearch(e)}
                  label="Spouse"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="form-element">
                <TextField
                  id="form-element"
                  label="Birth"
                  onChange={(e) => handleFormSearch(e)}
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="form-element">
                <TextField
                  id="form-element"
                  label="Location"
                  onChange={(e) => handleFormSearch(e)}
                  variant="outlined"
                  size="small"
                />
              </div>
              <Button
                onClick={(e) => handleFormSearch(e)}
                type="submit"
                size="large"
                className="input-group-text"
              >
                Add Family
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
