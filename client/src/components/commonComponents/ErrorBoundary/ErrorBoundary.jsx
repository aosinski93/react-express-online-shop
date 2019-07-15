import React from 'react';
import {Box, Container, Typography} from "@material-ui/core";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Box p={4}>
            <Typography variant={"h4"}>
              Something went wrong
            </Typography>
          </Box>
        </Container>
      )
    }

    return this.props.children;
  }

};

export default ErrorBoundary;