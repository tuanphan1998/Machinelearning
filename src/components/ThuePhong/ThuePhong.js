import React, { Component } from 'react';
import Thuephongtructiep from './thephongtructiep';
import Thuephongdattruoc from './thuephongdattruoc';
import Themkhachhang from './themkhachhang';
 
class ThuePhong extends Component {
    render() { 
        return (
            <div>
                    <div id="main-wrapper">
                        {/* <Header/>
                                <Sidebar/> */}
                            <div className="page-wrapper">
                                {/* ============================================================== */}
                                {/* Container fluid  */}
                                {/* ============================================================== */}
                                <div className="container-fluid">
                                {/* ============================================================== */}
                                {/* Bread crumb and right sidebar toggle */}
                                {/* ============================================================== */}
                                <div className="row page-titles">
                                    <div className="col-md-5 align-self-center">
                                    <br />
                                    <h3 className="text-themecolor">Thuê phòng</h3>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                                        <li className="breadcrumb-item active">Thuê phòng</li>
                                    </ol>
                                    </div>
                                </div>
                                {/* ============================================================== */}
                                {/* End Bread crumb and right sidebar toggle */}
                                {/* ============================================================== */}
                                {/* ============================================================== */}
                                {/* Start Page Content */}
                                {/* ============================================================== */}
                                <div id="content">
                                    <ul className="tabs"> 
                                    <li className="active" rel="tab1"> Thuê phòng trực tiếp</li>
                                    <li rel="tab2"> Thuê phòng đặt trước</li>
                                    <li rel="tab3" className="dropbtn"> Thêm khách hàng</li>
                                    </ul>
                                </div>
                                <div className="tab_container"> 
                                    <Thuephongtructiep/>
                                    <Thuephongdattruoc/>
                                    <Themkhachhang/>
                                </div> {/* .tab_container */} 
                                </div> {/* #container */}
                                <footer className="footer">
                                © 2019 Copyright by TAM_TUAN_HUNG_VANG
                                </footer>
                                {/* ============================================================== */}
                                {/* End footer */}
                                {/* ============================================================== */}
                            </div>
                            {/* ============================================================== */}
                            {/* End Page wrapper  */}
                            {/* ============================================================== */}
                            </div>
                            {/* ============================================================== */}
                            {/* End Wrapper */}
                            {/* ============================================================== */}
                            {/* ============================================================== */}
                            {/* All Jquery */}
                            {/* ============================================================== */}
                        </div>          
        );
    }
}
 
export default ThuePhong;