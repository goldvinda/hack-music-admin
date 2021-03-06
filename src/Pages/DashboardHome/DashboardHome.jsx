import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import DashboardOrders from "../DashboardOrders/DashboardOrders";
import ChartArea from "./ChartArea";
import ChartCardArea from "./ChartCardArea";

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={6}>
          <h2 className="text-left ms-3 mt-2">Revenue decomposition</h2>
          <ChartArea />
          <DashboardOrders />
        </Grid>
        <Grid item xs={12} lg={6} className="d-flex flex-column">
          <div className="d-flex flex-column m-1" sx={{ boxShadow: 4 }}>
            <CardActionArea>
              <h2 className="text-left ms-3 mt-1">Best Sellers: Categories</h2>
            </CardActionArea>
            <div className="d-flex mt-2 me-3">
              <Link to="/categories">
                <Card className="me-3 h-100">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="175"
                      image="https://i.postimg.cc/d1H3H9wF/category-card-percussion.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <Chip label="#1" variant="outlined" />
                        <Typography className="mt-2">Percussions</Typography>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Percussions was the best selling category last month.
                        Accounting for <strong>18.7%</strong> of total revenue.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
              <Link to="/categories">
                <Card className="me-3 h-100">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="175"
                      image="https://i.postimg.cc/gk6rrjfV/category-card-strings.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <Chip label="#2" variant="outlined" />
                        <Typography className="mt-2">Strings</Typography>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Strings was the second best selling category last month.
                        Accounting for <strong>12.1%</strong> of total revenue.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
              <Link to="/categories">
                <Card className="h-100">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="175"
                      image="https://i.postimg.cc/vZFTnMsp/category-card-wind.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <Chip label="#3" variant="outlined" />
                        <Typography className="mt-2">Winds</Typography>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Winds was the third best selling category last
                        month. Accounting for <strong>8.3%</strong> of total revenue.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          </div>
          <div className="m-2">
            
            <h2 className="text-left ms-3 mt-2">
            Sales & Digital Marketing metrics
          </h2>
          <ChartCardArea />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
