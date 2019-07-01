import React, { Component } from "react";
import { Container, Grid, Box, Card, CardContent, Typography } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <Box mt={4}>
        <Container>
          <Grid container>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Typography variant='h3'>Electronic store</Typography>
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={12}>
              <Box m={4}>
                <Typography variant='h4' align='center'>Hot deals</Typography>
                <Grid container>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Card>
                      <CardContent>
                        Device card
                    </CardContent>
                    </Card>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Card>
                      <CardContent>
                        Device card
                    </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default Home;
