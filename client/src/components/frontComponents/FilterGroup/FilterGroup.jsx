import React from 'react';
import {Box, Typography, List, ListItem, Button} from "@material-ui/core";
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  active: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff'
  },
  filterGroup: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`
  }
}));

const FilterGroup = (props) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.filterGroup}>Filter by {props.filterName}</Typography>
      <List component={'ul'}>
        {props.filterValues.map(item =>
          <ListItem component={'li'} key={`${item}-option`}>
            <Button onClick={() => props.setFilter(props.filterName, item)}
                    className={` ${props.className} ${props.activeFilters[props.filterName] === item ? classes.active : ''} `}>
              {item}
            </Button>
          </ListItem>
        )}
      </List>
    </Box>
  );
};

FilterGroup.propTypes = {
  filterName: PropTypes.string,
  filterValues: PropTypes.array,
  activeFilters: PropTypes.array
};
export default FilterGroup;