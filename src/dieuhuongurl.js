import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ThongKe from './components/thongke/ThongKe';
import ThuePhong from "./components/ThuePhong/ThuePhong";
import Header from './components/home/Header';
import Sidebar from './components/home/Sidebar';
import DatPhong from './components/datphong/DatPhong';
import QuanLyNV from './components/quanlynv/QuanLyNV';

import LapPhieuDV from './components/lapphieudv/LapPhieuDV';
import { base } from './Firebaseconntion';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Register from './components/auth/Register';

class dieuhuongurl extends Component {
  constructor(props) {
    super(props);
    this.state={
      authentiactied : true,
    }
  }

  componentDidMount() {
    base.auth().onAuthStateChanged(user=>{
      if(user){
        this.setState({authentiactied:true})
        console.log(user.uid)
      }
      else{
        this.setState({authentiactied:false})
      }
    })
  }
  
 render() {
   
   return (
     <Router>
    {/* <div> */}
      <Header authenticated = {this.state.authentiactied}/>
      {this.state.authentiactied ? <Sidebar /> : <Redirect to='/sign-in' />}
      <Route exact path="/" component={ThongKe} />
      <Route path="/thue-phong" component={ThuePhong} />
      <Route path="/dat-phong" component={DatPhong} />
      <Route path="/lap-hoa-don" component={LapPhieuDV} />
      <Route path="/quanly-nhanvien" component={QuanLyNV} />
      <Route path="/sign-in" component={(props)=> <Login authenticated = {this.state.authentiactied} {...props}/>} />
      <Route path="/sign-out" component={Logout} />
      <Route path="/sign-up" component={(props)=> <Register authenticated = {this.state.authentiactied} {...props} />} />
    {/* </div> */}
  </Router>
   )
 }
}

export default dieuhuongurl;