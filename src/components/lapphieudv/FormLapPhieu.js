import React, { Component } from 'react'

export default class FormLapPhieu extends Component {
    render() {
        return (
            <>
                <div id="form-lap-phieu">
          <h2 style={{textAlign: 'center', color: 'gray'}}>Phiếu dịch vụ</h2>
          <br /><br />
          <form action="#" id="form-input-dich-vu">
            Tên phòng:<br />
            <input type="text" name="ten" placeholder="Nhập tên phòng..." />
            Tên khách hàng:<br />
            <input type="text" name="ten" placeholder="Nhập tên khách hàng..." />
            Số CMND/Thẻ căn cước:<br />
            <input type="text" name="ten" placeholder="Nhập số CMND/Thẻ căn cước..." />
            Số điện thoại:<br />
            <input type="text" name="ten" placeholder="Nhập số điện thoại..." />
            Dịch vụ:<br />
            <div id="danh-sach-dich-vu" style={{color: 'gray', marginLeft: '16px'}}>
              <input type="checkbox" name defaultValue /> 1.Dịch vụ A.....<br />
              <input type="checkbox" name defaultValue /> 2.Dịch vụ B....<br />
              <input type="checkbox" name defaultValue /> 3.Dịch vụ C...<br />
              <input type="checkbox" name defaultValue /> 4.Dịch vụ D...<br />
              <input type="checkbox" name defaultValue /> 5.Dịch vụ E....<br />
              <input type="checkbox" name defaultValue /> 6.Dịch vụ F<br />
              <input type="checkbox" name defaultValue /> 7.Dịch vụ G<br />
              <input type="checkbox" name defaultValue /> 8.Dịch vụ H<br />
              <input type="checkbox" name defaultValue /> 9.Dịch vụ I<br />
              <input type="checkbox" name defaultValue /> 10.Dịch vụ K<br />
            </div>
            <div id="menu-bottom">
              <button type="button" className="btn btn-info">Thêm phiếu dịch vụ</button>
              <button type="button" className="btn btn-info">Hủy</button>
            </div>
          </form>
        </div>
        
            </>
        )
    }
}
