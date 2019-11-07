import React, { Component } from 'react'
import UserTableRow from './UserTableRow'
import ModalThemMem from './ModalThemMem'
import { userFirebase } from '../../Firebaseconntion'
export default class QuanLyUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      users : [],
      isAdmin : false,
    }
  }
  componentWillMount() {
      userFirebase.on('value',users=>{
        var Mang = [];
        users.forEach(element => {
        const keys = element.key;
        const gioitinh = element.val().gioitinh;
        const displayName = element.val().displayName;
        const manv = element.val().manv;
        const ngaysinh = element.val().ngaysinh;
        const isAdmin = element.val().isAdmin;
        const phoneNumber = element.val().phoneNumber;
        const bophan = element.val().bophan;
        Mang.push({
          keys : keys,
          gioitinh : gioitinh,
          displayName : displayName,
          manv : manv,
          ngaysinh : ngaysinh,
          isAdmin : isAdmin,
          phoneNumber : phoneNumber,
          bophan : bophan,
        })
      });
      this.setState({
        users : Mang
      });
    })
  }

  componentDidMount() {
    this.state.users.map((user,key)=>{
      if(user.isAdmin === true){
        this.setState({isAdmin : true})
      }
    })
  }
  
  
  showUsers = users=>{
    let result = null;
    result = users.map((user,key)=>{
      return <UserTableRow index = {key} key={key} id={user.manv}
      uid = {user.keys}
      username = {user.displayName}
      dob={user.ngaysinh}
      gender={user.gioitinh}
      phone={user.phoneNumber}
      job={user.isAdmin}
      role={user.bophan}
      />
    })
    return result;
  }
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
        <h3 className="text-themecolor">Quản lý nhân viên</h3>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
          <li className="breadcrumb-item active">Quản lý nhân viên</li>
        </ol>
      </div>
    </div>
    {/* ============================================================== */}
    {/* End Bread crumb and right sidebar toggle */}
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* Start Page Content */}
    {/* ============================================================== */}
    <div id="content-nhan-vien">
    <div id="menu-them-nhan-vien">
        <button className="btn btn-info" id="btnThemNV">Thêm nhân viên</button>
      </div>
      <div className="card-body-nhan-vien">
        <h4 className="card-title">Danh sách nhân viên</h4>
        {/* <h6 class="card-subtitle">Add class <code>.table</code></h6> */}
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã số NV</th>
                <th>Họ tên</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Số điện thoại</th>
                <th>Bộ phận</th>
                <th>Chức danh</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {/* <UserTableRow index = "1" id="NV01"
              username = "Thào A Vảng"
              dob="19/05/1998"
              gender="Nam"
              phone="0123268755"
              job="Lễ Tân"
              role="Nhân viên"
              /> */}
              {this.showUsers(this.state.users)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Model them nhan vien */}
      {/* Satrt model */}
      <ModalThemMem />
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
  
            </>
        )
    }
}
