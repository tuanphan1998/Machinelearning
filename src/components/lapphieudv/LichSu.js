import React, { Component } from 'react'
import HistoryServeTableRow from './HistoryServeTableRow'
export default class LichSu extends Component {
    render() {
        return (
            <>
                <div id="tab2" className="tab_content">
        <h3 style={{textAlign: 'center'}}>Lịch sử lập phiếu dịch vụ</h3><br />
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên phòng</th>
              <th>Tên khách hàng</th>
              <th>Số điện thoại</th>
              <th>Dịch vụ đã đăng ký</th>
              <th>Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            <HistoryServeTableRow index = "1" id="KH01"
              username="LQTam"
              phone="0962743002"
              serves="Dich vu A"
            />
            <HistoryServeTableRow index = "1" id="KH01"
              username="LQTam"
              phone="0962743002"
              serves="Dich vu A"
            />
          </tbody>
        </table>
      </div>{/* #tab2 */}
    
            </>
        )
    }
}
