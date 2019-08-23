import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Input,
  Select,
  Box,
  MenuItem,
  OutlinedInput
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  textField: {
    width: 300,
    minHeight: '56px',
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
            variant='outlined'
            onChange={props.onChange}
            value={props.value || ''}
            className={classes.textField}
            input={<OutlinedInput name={props.name} id={`${props.name}`} />}
          >
            {
              props.data.map(option => {
                return (
                  <MenuItem key={props.data.indexOf(option)} value={option._id}>
                    {option.name.toUpperCase()}
                  </MenuItem>
                );
              })
            }
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
            onChange={props.onChange}
            variant="outlined"
            placeholder={props.placeholder}
            className={classes.textField}
          />
        </FormControl>
      );
  }
};

FormGroup.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default FormGroup;
