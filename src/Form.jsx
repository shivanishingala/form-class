import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FormControl,
  InputLabel,
  Input,
  styled,
  Box,
  Container,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
} from "@mui/material";
import { userSubmit } from "./redux/Action";
import { useNavigate } from 'react-router-dom';

  class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      formData: {
        fname: "",
        lname: "",
        email: "",
        contry: "",
        hobbie: [],
      },
      editIndex: "",
    };
  }
  componentDidMount() {
    const pathName = window.location.pathname;
    const splitPath = pathName.split("/");
    const index = splitPath[splitPath.length - 1]
    if(index){
      this.setState({
        formData:this.props.reduxData[index] ,
    editIndex:index
      })
    }
   this.setState({
    tableData:[...this.props.reduxData],
   })
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };

  handleSubmit = () => {
    // const array = [...this.state.tableData];
    const array =  this.state.tableData;
    if(this.state.editIndex){
      array[this.state.editIndex] = this.state.formData
    }else{
    array.push(this.state.formData)
  }
    this.props.submitData(array)
    this.setState({
      tableData: [...array],
      formData: {
        fname: "",
        lname: "",
        email: "",
        gender: "",
        hobbie: [],
      },
      editIndex:""
    });
    this.props.navigate('/table');
  };

  handleCheck = (event) => {
    const { value, checked } = event.target;
    const { hobbie } = this.state.formData;
    if (checked) {
      this.setState({
        formData: {
          ...this.state.formData,
          hobbie: [...hobbie, value],
        },
      });
    } else {
      const index = hobbie.indexOf(value);
      if (index !== -1) {
        this.setState({
          formData: {
            ...this.state.formData,
            hobbie: hobbie.filter((item) => item !== value),
          },
        });
      }
    }
  };

  render() {

    return (
      <>
        <MainStyle>
          <Container className="mainContainer">
            <Typography variant="h1" className="heading">
              FORM
            </Typography>

            <Box className="formBox">
              <FormControl className="formControl">
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input
                  id="my-input"
                  value={this.state.formData.fname}
                  name="fname"
                  aria-describedby="my-helper-text"
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl className="formControl">
                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                <Input
                  id="my-input"
                  value={this.state.formData.lname}
                  name="lname"
                  aria-describedby="my-helper-text"
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl className="formControl">
                <InputLabel htmlFor="my-input">Email Address</InputLabel>
                <Input
                  id="my-input"
                  value={this.state.formData.email}
                  name="email"
                  aria-describedby="my-helper-text"
                  onChange={this.handleChange}
                />
              </FormControl>
              <Box className="countryBox">
                <Typography variant="h6">Country</Typography>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Your Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.formData.contry}
                    label="Select Your Country"
                    name="contry"
                    onChange={this.handleChange}
                  >
                    <MenuItem value={"Canada"}>Canada</MenuItem>
                    <MenuItem value={"India"}>India</MenuItem>
                    <MenuItem value={"UK"}>UK</MenuItem>
                    <MenuItem value={"Africa"}>Africa</MenuItem>
                    <MenuItem value={"Indonesia"}>Indonesia</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box className="genderBox">
                <FormControl>
                  <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    className="gender"
                  >
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      name="gender"
                      control={
                        <Radio
                          color="success"
                          onChange={this.handleChange}
                          checked={this.state.formData.gender === "female"}
                        />
                      }
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      name="gender"
                      control={
                        <Radio
                          color="success"
                          onChange={this.handleChange}
                          checked={this.state.formData.gender === "male"}
                        />
                      }
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      name="gender"
                      control={
                        <Radio
                          color="success"
                          onChange={this.handleChange}
                          checked={this.state.formData.gender === "other"}
                        />
                      }
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box className="genderBox">
                <Typography className="gender">Hobbies</Typography>
                <FormControlLabel
                  value="Cricket"
                  name="hobbie"
                  label="Cricket"
                  control={
                    <Checkbox
                      checked={this.state.formData.hobbie?.includes("Cricket")}
                      // onChange={this.handleCheck}
                      onChange={(e)=> this.handleCheck(e)}
                      
                      color="success"
                    />
                  }
                />
                <FormControlLabel
                  value="Watch Movie"
                  name="hobbie"
                  label="Watch Movie"
                  control={
                    <Checkbox
                      checked={this.state.formData.hobbie?.includes(
                        "Watch Movie"
                      )}
                      onChange={this.handleCheck}
                      color="success"
                    />
                  }
                />
                <FormControlLabel
                  value="Music"
                  name="hobbie"
                  label="Music"
                  control={
                    <Checkbox
                      checked={this.state.formData.hobbie?.includes("Music")}
                      onChange={this.handleCheck}
                      color="success"
                    />
                  }
                />
              </Box>
              <Box className="btnBox">
                <Button className="submitBtn" onClick={this.handleSubmit}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Container>
        </MainStyle>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    submitData: (data) => dispatch(userSubmit(data)), 
  }
}
const mapStateToProps = (state) => ({
reduxData:state?.data || [],
})

const FormWithNavigate = (props) => {
  const navigate = useNavigate();
  return <Form {...props} navigate={navigate} />;
};
export default connect(mapStateToProps, mapDispatchToProps)(FormWithNavigate);
const MainStyle = styled(Box)({
  padding: " 50px 100px",
  "& .gender": {
    fontFamily: "Noto Serif, serif",
    fontWeight: 500,
    fontSize: "1.25rem",
    lineHeight: 1.6,
    color: "#000000",
  },
  "& .genderBox": {
    marginTop: "30px",
  },
  "& .countryBox": {
    marginTop: "30px", 
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  "& .btnBox": {
    display: "flex",
    justifyContent: "center",
    marginTop: 100,
  },
  "& .submitBtn": {
    background: "#fca61f",
    color: "#ffffff",
    padding: "8px 43px",
    borderRadius: "45px",
    fontSize: "20px",
    fontWeight: 500,
    textTransform: "none",
    transitionDuration: "0.3s",
    "@media(max-width: 660px)": {
      display: "none",
    },
    "&:hover": {
      background: "#30587b",
    },
  },
  "& .formControl": {
    width: "100%",
    marginTop: "40px",
  },
  "& .formBox": {
    width: "80%",
    marginTop: "50px",
  },
  "& .mainContainer": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "& .heading": {
    color: "#30587b",
    fontWeight: 700,
    fontSize: "4rem",
  },
});
