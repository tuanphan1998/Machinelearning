import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ThongKe from './components/thongke/ThongKe';
import ThuePhong from "./components/ThuePhong/ThuePhong";
import Header from './components/home/Header';
import Sidebar from './components/home/Sidebar';
import DatPhong from './components/datphong/DatPhong';
import LapPhieuDV from './components/lapphieudv/LapPhieuDV';
import QuanLyNV from './components/quanlynv/QuanLyNV';


class dieuhuongurl extends Component {
 render() {
   
   return (
     <Router>
    {/* <div> */}
      <Header />
      <Sidebar />
      <Route exact path="/" component={ThongKe} />
      <Route path="/thue-phong" component={ThuePhong} />
      <Route path="/dat-phong" component={DatPhong} />
      <Route path="/lap-hoa-don" component={LapPhieuDV} />
      <Route path="/quanly-nhanvien" component={QuanLyNV} />
    {/* </div> */}
  </Router>
   )
 }
}

export default dieuhuongurl;