import React, { Component } from 'react';
import ThemmoikhongAi from './Data-Thembangai/ThemmoikhongAi';
import ThemmoibangAI from './Data-Thembangai/ThemmoibangAI';
import TableData from './Data-showthemkhachhang/TableData';
import {Firebaseone} from '../../Firebaseconntion';
class themkhachhang extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        };
    }

    componentWillMount() {
        Firebaseone.on('value',(datas) => {
          var Mang = [];
          datas.forEach(element => {
            const keys = element.key;
            const image = element.val().image;
            const loaiphong = element.val().loaiphong;
            const maphong = element.val().maphong;
            const ngaydatphong = element.val().ngaydatphong;
            const ngaytraphong = element.val().ngaytraphong;
            const trangthai = element.val().trangthai;
            const gia = element.val().gia;
            const tenkhach = element.val().tenkhach;
            const sdt = element.val().sdt;
            const diachi = element.val().diachi;
            const cmnd = element.val().cmnd;
            const ngaysinh = element.val().ngaysinh;
            const gioitinh = element.val().gioitinh;
            Mang.push({
                keys : keys,
              image : image,
              loaiphong : loaiphong,
              maphong : maphong,
              ngaydatphong : ngaydatphong,
              ngaytraphong : ngaytraphong,
              trangthai : trangthai,
              gia : gia,
              sdt : sdt,
              diachi : diachi,
              tenkhach : tenkhach,
              cmnd : cmnd,
              ngaysinh : ngaysinh,
              gioitinh : gioitinh
            })
          });
          this.setState({
            data : Mang
          });
        })
      }


      showdatahehe = () => {
        if(this.state.data)
        {
          return  this.state.data.map((value , key) => {
               if(value.trangthai === 2)
               {
                   return (
                    <TableData button={value} id={key} maphong={value.maphong} sdt={value.sdt} tenkhach={value.tenkhach} diachi={value.diachi} cmnd={value.cmnd} ngaysinh={value.ngaysinh} gioitinh={value.gioitinh}/>
                   )
               }
          })
        }
     }


    render() {
        return (
            <div>
                 <div id="tab3" className="tab_content">
                    <div id="khung-them-khach-hang">
                        <div className="container">
                        {/* Modal */}
                        <div className="modal fade" id="myModalThemBangTay-Content" role="dialog">
                            <div className="modal-lg" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                            {/* Modal content*/}
                                 <ThemmoikhongAi/>
                            </div>
                        </div>
                        </div>
                        <button type="button" className="btn btn-info" id="modalThemBangTay">Thêm bằng tay</button>
                        <button type="button" className="btn btn-info" id="modalThemBangAI">Thêm băng AI</button>
                    </div>
                    {/* Start Them bang AI */}
                       <ThemmoibangAI/>
                    {/* End */}
                    <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên phòng</th>
                                        <th scope="col">Số điện thoại</th>
                                        <th scope="col">Khách hàng</th>
                                        <th scope="col">Địa chỉ</th>
                                        <th scope="col">Số chứng minh nhân dân</th>
                                        <th scope="col">Ngày sinh</th>
                                        <th scope="col">giới tính</th>
                                        <th scope="col">Kích hoạt</th>
                                    </tr>
                                </thead>
                               
                             {this.showdatahehe()}
                               
                     </table>
                    </div>
            </div>
        );
    }
}

export default themkhachhang;