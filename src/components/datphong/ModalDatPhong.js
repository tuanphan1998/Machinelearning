import React, { Component } from 'react'
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch=>{
  return {
    confirmBookRoom : data=>{
      dispatch({type:"CONFIRM_BOOK",data})
    }
  }
}

export default connect(null,mapDispatchToProps)(class ModalDatPhong extends Component {
  constructor(props){
    super(props);
    this.state={
      ngaynhanphong:'',
      empty:'',
      maphong : this.props.maphong,
      tenkhach : this.props.tenkhach,
      address : this.props.diachi,
      sdt : this.props.sdt,
      cmnd : this.props.cmnd,
      uniqueKey : this.props.uniqueKey,
    }
  }

  isChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  confirmBookRoom = ()=>{
      this.props.confirmBookRoom(this.state);
  }
  render() {
    const {uniqueKey,maphong,tenkhach,diachi,sdt,cmnd} = this.props;
    return (
      <>
        <div className="modal fade" id={uniqueKey} role="dialog">
          <div className="modal-lg" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" style={{ marginTop: '5px' }}>Nhập thông tin đặt phòng</h3>
              </div>
              <div className="modal-body">
                <form action="#">
                  <label htmlFor="fname">Tên phòng:</label>
                  <input type="text" id="name" name="maphong"  onChange={(event)=>this.isChange(event)} defaultValue={maphong} placeholder="Nhập tên phòng..." />
                  <label htmlFor="fname">Họ Và Tên:</label>
                  <input type="text" id="name" name="tenkhach" onChange={(event)=>this.isChange(event)} defaultValue={tenkhach} placeholder="Nhập họ và tên..." />
                  <label htmlFor="address">Địa Chỉ:</label>
                  <input type="text" id="address" name="address" onChange={(event)=>this.isChange(event)} defaultValue={diachi} placeholder="Nhập địa chỉ..." />
                  <label htmlFor="country">Số Điện Thoại:</label>
                  <input type="text" id="phone" name="sdt" onChange={(event)=>this.isChange(event)} defaultValue={sdt} placeholder="Nhập số điện thoại..." />
                  <label htmlFor="lname">Số CMND/Thẻ căn cước:</label>
                  <input type="text" id="cmnd" name="cmnd" onChange={(event)=>this.isChange(event)} defaultValue={cmnd} placeholder="Nhập số CMND/Thẻ căn cước..." />
                  <label htmlFor="fname">Ngày nhận phòng:</label>
                  <input type="date" id="name" name="ngaynhanphong" onChange={(event)=>this.isChange(event)}/>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-info" data-dismiss={this.state.ngaynhanphong == '' ? '' : 'modal'} onClick={()=>
                  this.state.ngaynhanphong == '' ? alert('Cac truong khong duoc de trong! Moi xem lai.') : this.confirmBookRoom()
                }>Đặt phòng</button>
                <button type="button" className="btn btn-info" data-dismiss="modal">Hủy</button>
              </div>
            </div>
            {/* JS cho modal */}
          </div> {/* .tab_container */}
        </div> {/* #container */}
      </>
    )
  }
})
