import React from 'react';
import { Button } from "@material-ui/core";


const SortOption = (props) => {
  return (
    <Button onClick={() => props.changeSortDirection(props.name)}>
      {props.name}
    </Button>
  );
};

export default SortOption;