import React from "react";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";

const SmallTable = () => {
  return (
    <Box>
      <table
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
      >
       <tr align="center" style={{border: 'none', height: '1rem'}}>
          <Grid container>
            {/* <Grid item sm={12} style={{borderBottom: '1px solid #00DDB1', width: '100%',padding: "12px 0",fontSize:"24px"}}>أدوات تقديم متنوعه</Grid> */}
            <Grid item sm={2} style={{borderLeft: '1px solid #00DDB1', width: '100%',  borderBottom: '0px solid #00DDB1', fontSize: '.7rem', paddingTop: '.7rem'}}>واجبات</Grid>
            <Grid item sm={3} style={{borderLeft: '1px solid #00DDB1', width: '100%', height: '3rem', fontSize: '.7rem',  borderBottom: '0px solid #00DDB1', lineHeight: 1.2}}>
              بحوث      
              <div> مشروعات </div>
              التقارير</Grid>
            <Grid item sm={2} style={{borderLeft: '1px solid #00DDB1', width: '100%', height: '3rem', borderBottom: '0px solid #00DDB1', fontSize: '.7rem', lineHeight: 1.2, paddingTop: '1rem'}}>
              أنشطه
               ومشاركه
               </Grid>
               <Grid item sm={2} style={{borderLeft: '1px solid #00DDB1', width: '100%', height: '3rem', borderBottom: '0px solid #00DDB1', fontSize: '.7rem', lineHeight: 1.2, paddingTop: '1rem'}}>
                 أدوات
               </Grid>
            <Grid item sm={3} style={{borderBottom: '0px solid #00DDB1', height: '3rem', paddingTop: '.7rem', fontSize: '.7rem'}}>المجموع</Grid>
            <Grid item sm={2}  style={{borderLeft: '1px solid #00DDB1'}}>10</Grid> 
            <Grid item sm={3} style={{borderLeft: '1px solid #00DDB1'}}>10</Grid> 
            <Grid item sm={2} style={{borderLeft: '1px solid #00DDB1'}}>10</Grid> 
            <Grid item sm={2} style={{borderLeft: '1px solid #00DDB1'}}>10</Grid> 
            <Grid item sm={3} >
              40
              </Grid> 
          </Grid>
        </tr>

      </table>
    </Box>
  );
};

export default SmallTable;