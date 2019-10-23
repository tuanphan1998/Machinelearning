import React, { Component } from 'react';
import {connect} from 'react-redux';
class TableData extends Component {

  
  Buttonkiemtrakey = () => {
    var info = {};
    info.key = this.props.button.keys;
    info.trangthai = 0;
    this.props.Thongtinduocguile(info);
    this.props.trangthaithaydoi();
    this.props.Dulieukemtheo('Chuyển khách   ' + this.props.tenkhach + '    sang trạng thái Đang thuê');
  }


    render() { 
        return (
            <tbody>
                  <tr>
                       <th scope="row">{this.props.id}</th>
                       <td>{this.props.maphong}</td>
                       <td>{this.props.sdt}</td>
                       <td>{this.props.tenkhach}</td>
                       <td>{this.props.diachi}</td>
                       <td>{this.props.cmnd}</td>
                       <td>{this.props.ngaysinh}</td>
                       <td>{this.props.gioitinh}</td>
                       <td>
                       <button type="button" onClick={()=>this.Buttonkiemtrakey()} className="btn btn-primary fa fa-check-circle-o"></button>
                
                       </td>
                   </tr>
            </tbody>
           
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
      Dataorigin: state.Trangthaipushkhongai,
      Thaydoitrangthai : state.Thongbao.trangthai
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      Thongtinduocguile: (getitem) => {
          dispatch({type:'TRANGTHAITHAYDOI',getitem})
      },
      
      Dulieukemtheo: (gettion) => {
          dispatch({type:'GET_DATA',gettion})
      },
      trangthaithaydoi: () => {
          dispatch({type:'CHANGER_INFO'})
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableData);