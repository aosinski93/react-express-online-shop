import React from 'react';
import {Button} from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const SortOption = (props) => {
  return (
    <Button onClick={() => props.sortBy(props.fieldName)}>
      {props.fieldName} {props[props.fieldName.toLowerCase()] === 'asc' ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
    </Button>
  );
};

export default SortOption;