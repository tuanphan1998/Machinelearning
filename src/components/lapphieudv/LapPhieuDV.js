import React, { Component } from 'react'
import {Firebaseone} from '../../Firebaseconntion';
import TablePhieuDV from './TablePhieuDV';


class LapPhieuDV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      data2 : [],
      chonphong : ''
    };
  }
  componentWillMount() 
  {
    Firebaseone.on('value',(datas) => {
      var Mang = [];
      var Mang2 = [];
      datas.forEach(element => {
        const id = element.key;
        const maphong = element.val().maphong;
        const dv1 = element.val().dv1;
        const dv2 = element.val().dv2;
        const dv3 = element.val().dv3;
        const trangthai = element.val().trangthai;
        const tenkhach = element.val().tenkhach;
        const ngaynhanphong = element.val().ngaynhanphong;
        const ngaytraphong = element.val().ngaytraphong;
        Mang.push({
          id : id,
          maphong : maphong,
          trangthai : trangthai,

        })
        Mang2.push({
          id  : id,
          dv1 : dv1,
          dv2 : dv2,
          dv3 : dv3,
          trangthai : trangthai,
          maphong : maphong,
          tenkhach : tenkhach,
          ngaynhanphong : ngaynhanphong,
          ngaytraphong : ngaytraphong,
        })
      });
      this.setState({
        data : Mang,
        data2 : Mang2,
      });
    })
  }
  IsChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name] : value
    });
  }
  ShowSelectOptionLapPhieuDV = () => {
    if(this.state.data)
    {
      return this.state.data.map((value , key) => {
          if(value.trangthai === 0)
          {
            return <option value={value.id}>{value.maphong}</option>
          }
      })
    }
  }
  render() {
    var ketqua = [];
    this.state.data2.forEach(element => {
        if(  element.id.indexOf(this.state.chonphong) !== -1)
        {
          ketqua.push(element);
        }
    });
    console.log(ketqua);
    return (
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
              <li className="breadcrumb-item active">Lập phiếu dịch vụ</li>
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
            <li className="active" rel="tab1"> Lập phiếu dịch vụ</li>
          </ul>
        </div>
        <div className="tab_container"> 
          <div id="tab1" className="tab_content"> 
            <div id="form-lap-phieu">
              <h2 style={{textAlign: 'center', color: 'gray'}}>Phiếu dịch vụ</h2>
              <br /><br />
              <form action="#" id="form-input-dich-vu">
                Tên phòng:<br />
                <select name="chonphong" onChange={(event)=>this.IsChange(event)} >
                  <option value>Chọn phòng...</option>
                  {this.ShowSelectOptionLapPhieuDV()}
                </select>
                Chọn dịch vụ:<br />
                <div id="danh-sach-dich-vu" style={{color: 'gray'}}>
               



              <TablePhieuDV dulieudachon={ketqua}/>





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
    );
  }
}

export default LapPhieuDV;