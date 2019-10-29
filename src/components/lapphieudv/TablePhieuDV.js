import React, { Component } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import {connect} from 'react-redux';
class TablePhieuDV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
      checkbox : '',

    };
  }

  SaveIDroom = () =>  {
    var info  = {};
    info.id = this.state.checkbox;
    info.cmnd = '';
    info.diachi = "";
    info.dv1 = "";
    info.dv2 = "";
    info.dv3 = "";
    info.gioitinh = "";
    info.ngaydatphong = "";
    info.ngaynhanphong = "";
    info.ngaysinh = "";
    info.ngaytraphong = "";
    info.sdt = "";
    info.tenkhach = "";
    info.trangthai = 1;
    this.props.Thaydoigiatri(info);
    this.props.trangthaithaydoi();
    this.props.Dulieukemtheo('thah toán thành công');
  }

  IsChange = (event) => {
    const name = event.target.name;
    const value= event.target.value;
    this.setState({
      [name] : value
    });
    console.log(this.state);
  }

  showdate = () => {
   return this.props.dulieudachon.map((value , key) => {
      if(value.trangthai === 0)
      {
          return(

   <tbody>
     
     <tr>
       <td>
       {key}
       </td>
       <td>
         {value.tenkhach}
       </td>
       <td>
         <p>BCS</p>
         <p>AUTO GTA</p>
         <p>MEOMEOMEO</p>
       </td>
       <td>
         <p>{value.dv1}</p>
         <p>{value.dv2}</p>
         <p>{value.dv3}</p>
       </td>
       <td>
         {(value.dv1) * 15000 + (value.dv2) * 15000 + (value.dv3) * 30000}
       </td>
       <td>{value.ngaynhanphong}</td>
       <td>{this.state.date}</td>
       <td>
       <input type="checkbox" name="checkbox" className="form-check-input"  onChange={(event)=>this.IsChange(event)}   value={value.id}/>Chọn để thanh toán
       </td>
     </tr>
   </tbody>
 
          )
      }
  })
  }


    render() { 
      console.log(this.state.checkbox);
        return (
          <div >
          <table class="table table-striped"  id="table-to-xls">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên khách hàng</th>
                <th scope="col">Tên dịch vụ</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Tổng tiền</th>
                <th scope="col">Ngày nhận phòng</th>
                <th scope="col">Ngày trả phòng</th>
                <th scope="col">Ative</th>
              </tr>
            </thead>
            {this.showdate()}
          </table>
            <ReactHTMLTableToExcel   id="test-table-xls-button"   className="download-table-xls-button"      table="table-to-xls" filename="tablexls" sheet="tablexls"    buttonText="Download as XLS"/>
            <div id="menu-bottom">
                  <button type="button" onClick={()=>this.SaveIDroom()} className="btn btn-info">Thanh toán</button>
            </div>
          </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    Giatrigoc: state.ToanBoPhanTu,
    Thaydoitrangthai : state.Thongbao.trangthai
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    Dulieukemtheo: (gettion) => {
        dispatch({type:'GET_DATA',gettion})
    },
    trangthaithaydoi: () => {
        dispatch({type:'CHANGER_INFO'})
    },
    Thaydoigiatri: (getitem) => {
      dispatch({type:'THAYDOIS',getitem})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TablePhieuDV);