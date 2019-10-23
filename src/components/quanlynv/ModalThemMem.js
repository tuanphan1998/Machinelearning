import React, { Component } from 'react'

export default class ModalThemMem extends Component {
    render() {
        return (
            <>
                <div className="modal fade" id="myModalThemNV-Content" role="dialog">
        <div className="modal-lg" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" style={{marginTop: '5px'}}>Nhập thông tin nhân viên</h3>
            </div>
            <div className="modal-body">
              <form action="#">
                <label htmlFor="fname">Mã số NV:</label>
                <input type="text" id="name" name="name" placeholder="Nhập mã số nhân viên..." />
                <label htmlFor="fname">Họ Và Tên:</label>
                <input type="text" id="name" name="name" placeholder="Nhập họ và tên..." />
                <label htmlFor="lname">Ngày Sinh:</label>
                <input type="date" id="dateofbirt" name="dateofbirt" />
                <label htmlFor="lname">Giới Tính:</label>
                <select>
                  <option value>Chọn giới tính</option>
                  <option value="nam">Nam</option>
                  <option value="nu">Nữ</option>
                  <option value="khac">Khác</option>
                </select><br /><br />
                <label htmlFor="country">Số Điện Thoại:</label>
                <input type="text" id="phone" name="phone" placeholder="Nhập số điện thoại..." />
                <label htmlFor="address">Bộ phận:</label>
                <input type="text" id="bophan" name="bophan" placeholder="Nhập bộ phận..." />
                <label htmlFor="lname">Chức danh:</label>
                <input type="text" id="chucdanh" name="hucdanh" placeholder="Nhập chức danh..." />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-info" data-dismiss="modal">Thêm nhân viên</button>
              <button type="button" className="btn btn-info" data-dismiss="modal">Hủy</button>
            </div>
          </div>
        </div>
        {/* End model */}
        {/* End content */}
      </div>
    
            </>
        )
    }
}
