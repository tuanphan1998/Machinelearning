import React, { Component } from 'react'

export default class ModalDatPhong extends Component {
    render() {
        return (
            <>
                <div className="modal fade" id="myModalDatPhong" role="dialog">
        <div className="modal-lg" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" style={{marginTop: '5px'}}>Nhập thông tin đặt phòng</h3>
            </div>
            <div className="modal-body">
              <form action="#">
                <label htmlFor="fname">Tên phòng:</label>
                <input type="text" id="name" name="name" placeholder="Nhập tên phòng..." />
                <label htmlFor="fname">Họ Và Tên:</label>
                <input type="text" id="name" name="name" placeholder="Nhập họ và tên..." />
                <label htmlFor="address">Địa Chỉ:</label>
                <input type="text" id="address" name="address" placeholder="Nhập địa chỉ..." />
                <label htmlFor="country">Số Điện Thoại:</label>
                <input type="text" id="phone" name="phone" placeholder="Nhập số điện thoại..." />
                <label htmlFor="lname">Số CMND/Thẻ căn cước:</label>
                <input type="text" id="cmnd" name="cmnd" placeholder="Nhập số CMND/Thẻ căn cước..." />
                <label htmlFor="fname">Ngày nhận phòng:</label>
                <input type="date" id="name" name="name" />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-info" data-dismiss="modal">Đặt phòng</button>
              <button type="button" className="btn btn-info" data-dismiss="modal">Hủy</button>
            </div>
          </div>
          {/* JS cho modal */}
        </div> {/* .tab_container */} 
      </div> {/* #container */}
      
            </>
        )
    }
}
