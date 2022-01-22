import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <div className="">
    
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <div className="boxSubDiv">
              <section className="boxSec1">
                {" "}
                <MenuBookIcon sx={{ fontSize: 50 }} />{" "}
              </section>
              <section className="boxSec2">
                  {" "}
                  <h3>
                    {" "}
                    <Link to="#"> النظام التعليمي </Link>{" "}
                  </h3>{" "}
                <p>عدد الأنظمة : </p>
              </section>
            </div>
          </Grid >
          <Grid item xs={12} sm={6} md={4}>
            <div className="boxSubDiv">
              <section className="boxSec1">
                {" "}
                <MenuBookIcon sx={{ fontSize: 50 }} />{" "}
              </section>
              <section className="boxSec2">
                  {" "}
                  <h3>
                    <Link to="#">النوع </Link>{" "}
                  </h3>{" "}
                <p className="myP"> عدد الأنظمة :</p>
              </section>
            </div>
          </Grid >
          <Grid item xs={12} sm={6} md={4}>
            <div className="boxSubDiv">
              <section className="boxSec1">
                {" "}
                <MenuBookIcon sx={{ fontSize: 50 }} />{" "}
              </section>
              <section className="boxSec2">
                  {" "}
                  <h3>
                    {" "}
                    <Link to="#"> الأقسام </Link>{" "}
                  </h3>{" "}
                <p className="myP"> عدد الأنظمة : </p>
              </section>
            </div>
          </Grid >
          <Grid item xs={12} sm={6} md={4}>
            <div className="boxSubDiv">
              <section className="boxSec1">
                {" "}
                <MenuBookIcon sx={{ fontSize: 50 }} />{" "}
              </section>
              <section className="boxSec2">
                  {" "}
                  <h3>
                    <Link to="#"> اللغة العربية </Link>{" "}
                  </h3>{" "}
                <p className="myP"> عدد الأنظمة : </p>
              </section>
            </div>
          </Grid >
          <Grid item xs={12} sm={6} md={4}>
            <div className="boxSubDiv">
              <section className="boxSec1">
                {" "}
                <MenuBookIcon sx={{ fontSize: 50 }} />{" "}
              </section>
              <section className="boxSec2">
                  {" "}
                  <h3>
                    <Link to="#"> الفصول</Link>{" "}
                  </h3>{" "}
                <p className="myP"> عدد الأنظمة : </p>
              </section>
            </div>
          </Grid >
          <Grid item xs={12} sm={6} md={4}>
            <div className="boxSubDiv">
              <section className="boxSec1">
                {" "}
                <MenuBookIcon sx={{ fontSize: 50 }} />{" "}
              </section>
              <section className="boxSec2">
                  <h3>
                    <Link to="#"> الصفوف الدراسية </Link>{" "}
                  </h3>{" "}
                <p className="myP"> عدد الأنظمة : </p>
              </section>
            </div>
          </Grid >
        </Grid>
    </div>
  );
}
