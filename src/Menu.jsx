import { Box, styled } from '@mui/material'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <>
      <MainStyle>
      <Box className='linkBox'>
      <NavLink className='link' exact to='/'>Form</NavLink>  
      <NavLink className='link' exact to='/table'>Table</NavLink> 
      </Box>
      </MainStyle>
      </>
    )
  }
}
const MainStyle = styled(Box)({
    "& .link":{
        fontSize:'2rem',
        fontWeight:700,
        textDecoration:'none'
    },
    "& .linkBox":{
        display:'flex',
        gap:'20px',
        margin:'50px 0px 0px 20px'
    },

})
