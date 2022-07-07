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
import data from "./data.json";
import { ResponsiveTreeMap } from "@nivo/treemap";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Item>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur ad, numquam eveniet earum voluptatibus voluptate vero
            ab labore nesciunt itaque atque quae non, quidem nam alias vitae
            cupiditate neque unde. Aut, nostrum veniam sint modi libero tempora
            iusto ratione fugit quidem consequatur beatae voluptatem aperiam
            reiciendis ipsam, asperiores est earum totam esse amet eius quam!
            Esse iure odio aliquid nobis voluptatum perspiciatis animi quam
            nulla eum laborum. Numquam est repudiandae consequuntur sint earum.
            Consequatur laudantium minus atque nam molestias, minima earum
            ratione esse soluta in odit fuga, aspernatur deleniti perspiciatis
            maxime dignissimos? Quod illum quisquam facilis velit saepe a sit?
          </Item>
        </Grid>
        <Grid item xs={12} lg={6} className="d-flex">
          <div className="d-flex flex-column m-1" sx={{ boxShadow: 4 }}>
            <CardActionArea>
              <h2 className="text-left ms-3 mt-2">Best Sellers: Categories</h2>
            </CardActionArea>
            <div className="d-flex m-3">
              <Link to="/categories">
                <Card className="me-3 h-100">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://i.postimg.cc/d1H3H9wF/category-card-percussion.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <Chip label="#1" variant="outlined" /> Percussions
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
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
                      height="140"
                      image="https://i.postimg.cc/gk6rrjfV/category-card-strings.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <Chip label="#2" variant="outlined" /> Strings
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
              <Link to="/categories">
                <Card className=" h-100">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://i.postimg.cc/vZFTnMsp/category-card-wind.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <Chip label="#3" variant="outlined" /> Accesories
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Item>
            <div>
              <ResponsiveTreeMap
                root={data.root}
                identity="name"
                value="loc"
                innerPadding={3}
                outerPadding={3}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                label="loc"
                labelFormat=".0s"
                labelSkipSize={12}
                labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
                colors={{ scheme: "nivo" }}
                borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
                animate={true}
                motionStiffness={90}
                motionDamping={11}
              />
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className="m-3">
            <DashboardOrders />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
