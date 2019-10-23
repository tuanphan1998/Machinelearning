import React, { Component } from 'react'

export default class LapHoaDon extends Component {
    render() {
        return (
            <>
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
        <h3 className="text-themecolor">Lập hóa đơn</h3>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="javascript:void(0)">Trang chủ</a></li>
          <li className="breadcrumb-item active">Lập hóa đơn</li>
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
        <li className="active" rel="tab1"> Lập hóa đơn</li>
      </ul>
    </div>
    <div className="tab_container"> 
      <div id="tab1" className="tab_content"> 
        <div id="form-lap-phieu">
          <h2 style={{textAlign: 'center', color: 'gray'}}>Hóa Đơn</h2>
          <br /><br />
          <form action="#" id="form-input-dich-vu">
            Tên phòng:<br />
            <select>
              <option value>Chọn phòng...</option>
              <option value="A101">A101</option>
              <option value="B201">B201</option>
              <option value="C102">C102</option>
              <option value="A109">A109</option>
              <option value="A301">A301</option>
            </select>
            Dịch vụ đã sử dụng:<br />
            <div id="danh-sach-dich-vu" style={{color: 'gray'}}>
              <table>
                <tbody><tr>
                    <th style={{width: '40px'}}>#</th>
                    <th>Tên dịch vụ</th>
                    <th>Giá dịch vụ</th>
                    <th>Ghi chú</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Dịch vụ tắm thuốc Bắc...</td>
                    <td>150.000đ</td>
                    <td />
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Dịch vụ ship cơm tận phòng...</td>
                    <td>40.000đ</td>
                    <td />
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Dịch vụ C....</td>
                    <td>250.000đ</td>
                    <td />
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Dịch vụ D.....</td>
                    <td>10.000đ</td>
                    <td />
                  </tr>
                </tbody></table>
            </div>
            <div id="menu-bottom">
              <button type="button" className="btn btn-info">Xuất hóa đơn</button>
              <button type="button" className="btn btn-info">Hủy</button>
            </div>
          </form>
        </div>
      </div>{/* #tab1 */}
    </div> {/* .tab_container */} 
  </div> {/* #container */}
  <footer className="footer">
    © 2019 Copyright by TAM_TUAN_HUNG_VANG
  </footer>
  {/* ============================================================== */}
  {/* End footer */}
  {/* ============================================================== */}
</div>

            </>
        )
    }
}
