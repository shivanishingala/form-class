import React, { Component } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  TableCell,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Container,
  Box,
  styled,
  Button,
} from "@mui/material";
import { connect } from "react-redux";
import { userDelete } from "./redux/Action";
import { Link } from "react-router-dom";

 class TableData extends Component {
  constructor(props){
    super(props)
  }
  onDelete = (id) => {   
    const newAraay = this.props.reduxData.filter((ele,idx) => idx !== id )
   this.props.deleteData(newAraay)
  };
  render() {
    return (
      <>
        <TableStyle>
          <Typography className="heading">TABLE</Typography>
          <Container sx={{ padding: "80px 0px" }}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
              className="table"
            >
              <TableHead>
                <TableRow
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    textAlign: "left",
                  }}
                >
                  <TableCell>FIRST NAME</TableCell>
                  <TableCell>LAST NAME</TableCell>
                  <TableCell>EMAIL</TableCell>
                  <TableCell>CONTRY</TableCell>
                  <TableCell>GENDER</TableCell>
                  <TableCell>HOBBIES</TableCell>
                  <TableCell>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.reduxData.map((item, idx) => {
                  return (
                    <TableRow
                      key={idx}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        textAlign: "left",
                      }}
                    >
                      <TableCell>{item.fname}</TableCell>
                      <TableCell>{item.lname}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.contry}</TableCell>
                      <TableCell>{item.gender}</TableCell>
                      <TableCell>{item.hobbie}</TableCell>
                      <TableCell>
                        <Box className="btnBox">
                          <Link to={`/edit/${idx}`}
                            className="editBtn"
                          >
                            <EditIcon />
                          </Link>
                          <Button
                            className="deletBtn"
                            onClick={() => this.onDelete(idx)}
                          >
                            <DeleteIcon />
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Container>
        </TableStyle>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
deleteData:(data) => dispatch(userDelete(data))
})
const mapStateToProps = (state) => ({
  reduxData:state?.data || []
})
export default connect(mapStateToProps,mapDispatchToProps)(TableData);
const TableStyle = styled(Box)({
  "& .btnBox": {
    display: "flex",
    gap: "10px",
  },
  "& .deletBtn": {
    background: "#30587b",
    color: "#fff",
    "&:hover": {
      background: "red",
    },
  },
  "& .editBtn": {
    background: "#30587b",
    color: "#fff",
    "&:hover": {
      background: "green",
    },
  },
  "& .heading": {
    color: "#30587b",
    fontWeight: 700,
    fontSize: "4rem",
    textAlign: "center",
    padding: "20px",
  },
});
