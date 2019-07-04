import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Input,
  Select,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    width: 300,
    marginTop: 10,
    marginBottom: 10
  }
}));

const FormGroup = props => {
  const classes = useStyles();

  switch (props.name) {
    case "description":
      return (
        <TextField
          multiline={true}
          rows={2}
          rowsMax={4}
          id={`${props.name}`}
          name={`${props.name}`}
          label={props.labelText}
          value={props.value}
          onChange={props.onChange}
          className={classes.textField}
          variant="outlined"
        />
      );
    case "manufacturer":
    case "category":
      return (
        <Box mt={2}>
          <InputLabel htmlFor={`${props.name}`} className="input-label">
            {props.labelText}
          </InputLabel>

          <Select
            native
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            id={`${props.name}`}
            className={classes.textField}
          >
            {props.data.map(option => {
              return (
                <option key={props.data.indexOf(option)} value={option._id}>
                  {option.name.toUpperCase()}
                </option>
              );
            })}
          </Select>
        </Box>
      );
    case "image":
      return (
        <div className="form-group">
          <InputLabel htmlFor={`${props.name}`} className="input-label">
            {props.labelText}
          </InputLabel>
          <Input
            type={props.type}
            id={`${props.name}`}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      );
    default:
      return (
        <FormControl fullWidth>
          <TextField
            id={`${props.name}`}
            type={props.type}
            name={`${props.name}`}
            label={props.labelText}
            value={props.value}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            variant="outlined"
            placeholder={props.placeholder}
            className={classes.textField}
          />
        </FormControl>
      );
  }
};

export default FormGroup;
