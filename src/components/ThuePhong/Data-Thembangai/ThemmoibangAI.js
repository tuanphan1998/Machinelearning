import React, { Component } from 'react';
import {connect} from 'react-redux';
import request from 'superagent';
import Viewdata from './Data-traveketquathembangai/Viewdata';
import mahoan from './Data-traveketquathembangai/mahoan.json';
import {Firebaseone} from '../../../Firebaseconntion';
class ThemmoibangAI extends Component {
    constructor(props){
        super(props);
        this.state = {
            image_url : '',
            data : '',
            datass : [],
            Sđt : '',
            NameRoom : '',
            datas : [process.env.REACT_APP_API_KEY],
        };
    }

    isChange = (event) => {
        const value = event.target.value;
        this.setState({
            image_url : event.target.value,
            data : event.target.value,
        })
        console.log(value);
        
        }
        

        IsChange2 = (event) =>  {
            const name = event.target.name;
            const value = event.target.value;
            this.setState({
                [name] : value
            });
        }

        Haller = () => {
            if(this.state.image_url === "")
            {
              alert('Yêu cầu bạn nhập thông tin');
            }
            else
            {
              var info = {};
              info.image_url = this.state.image_url;
              request
              .post('https://api.openfpt.vn/cmt')
              .set('Content-Type', 'application/x-www-form-urlencoded')
              .set('api_key',this.state.datas)
              .send({image_url: this.state.image_url})
              .send({face:1})
              .end(function(err, res){
              if(err)
              {
                  alert("ban hết hạn số lượt gọi");
              }
              else
              {
                var items = JSON.parse(res.text);
                  if(res.body.errorCode === 3)
                  {
                      alert('hệ thống không tìm thấy CMT trong ảnh hoặc ảnh có chất lượng kém (quá mờ, quá tối/sáng).');
                  }
                  else if (res.body.errorCode === 1)
                  {
                      alert('Sai thông số trong request (ví dụ không có key hoặc ảnh trong request body).');
                  }
                  else if (res.body.errorCode === 2)
                  {
                      alert('CMT trong ảnh bị thiếu góc nên không thể crop về dạng chuẩn.');
                  }
                  else if (res.body.errorCode === 5)
                  {
                      alert(' Request sử dụng key image_url nhưng giá trị bỏ trống.');
                  }
                  else if (res.body.errorCode === 6)
                  {
                      alert('Request sử dụng key image_url nhưng hệ thống không thể mở được URL này.');
                  }
                  else if (res.body.errorCode === 7)
                  {
                      alert('File gửi lên không phải là file ảnh.');
                  }
                  else if (res.body.errorCode === 8)
                  {
                      alert(' File ảnh gửi lên bị hỏng hoặc format không được hỗ trợ.');
                  }
                  else if (res.body.errorCode === 9)
                  {
                      alert(' Request sử dụng key image_base64 nhưng giá trị bỏ trống.');
                  }
                  else if (res.body.errorCode === 10)
                  {
                      alert('Request sử dụng key image_base64 nhưng string cung cấp không hợp lệ.');
                  }
                  else
                  {
                    localStorage.setItem('mahoan',JSON.stringify(items.data[0]));
                    console.log(items.data[0]);
                    window.location.reload();
                  }
              }
              });
            }
            
        }

         // WARNING! To be deprecated in React v17. Use componentDidMount instead.
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
              Mang.push({
                  keys : keys,
                image : image,
                loaiphong : loaiphong,
                maphong : maphong,
                ngaydatphong : ngaydatphong,
                ngaytraphong : ngaytraphong,
                trangthai : trangthai,
                gia : gia,
                tenkhach : tenkhach
              })
            });
            this.setState({
              datass : Mang
            });
          })



        if(localStorage.getItem('mahoan') === null)
        {
            localStorage.setItem('mahoan',JSON.stringify(mahoan));
        }
        else
        {
            var template = JSON.parse(localStorage.getItem('mahoan'));
            this.setState({
                data : template
            })
        }

        }
        componentDidMount() {
        if(localStorage.getItem('mahoan') === null)
        {
            localStorage.setItem('mahoan',JSON.stringify(mahoan));
        }
        else
        {
            var template = JSON.parse(localStorage.getItem('mahoan'));
            this.setState({
                data : template
            })
        
        }
        }

        ButtonsClean2 = () => {
            if(window.confirm('Bạn muốn thực hiện quy trình làm sạch dữ liệu nền [YES]'))
            {
                setTimeout(function(){
                    window.location.reload();
                    localStorage.removeItem('mahoan');
                }, 3000);   
            }
        }

        ButtonsClean = () => {
            if(window.confirm('Bạn muốn thực hiện quy trình tải dữ liệu lên [YES]'))
            {
                let d = new Date();
                let nam =  d.getFullYear();
                let thang = d.getMonth() + 1;
                let ngay = d.getDate();
                var data = {};
                data.maphong = this.state.NameRoom.slice(5);
                data.sdt = this.state.Sđt;
                data.tenkhach = this.state.data.name;
                data.diachi = this.state.data.home;
                data.cmnd = this.state.data.id;
                data.ngaysinh = this.state.data.dob;
                data.gioitinh = this.state.data.sex;
                data.ngaydat = ngay+"/"+thang+"/"+nam;
                data.trangthai = 2;

                this.props.Thongtinduocguile(data);
                this.props.trangthaithaydoi();
                this.props.Dulieukemtheo('thêm mới   ' + this.state.data.name + '    thành công');
            }
        }

        showcascphongconhoatdong = () => {
            if(this.state.datass)
            {
               return this.state.datass.map((value , key) => {
                    if(value.trangthai === 1)
                    {
                        return <option>{value.maphong}*{value.keys}</option>
                    }
                })
            }
        }


       

        


    render() { 
        return (
            <div className="container-AI">
            {/* Modal */}
            <div className="modal fade" id="myModalThemBangAI-Content" role="dialog">
            <div className="modal-lg" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '1000px', height: '800px'}}>
                {/* Modal content*/}
                <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title" style={{marginTop: '5px'}}>Thêm tự động bằng AI</h3>
                </div>
                <div className="modal-body">
                    <form action="#">
                    <label htmlFor="fname">Địa chỉ ảnh:</label>
                    <input type="text" id="name"  name="image_url" onChange={(event)=>this.isChange(event)} placeholder="Nhập địa chỉ ảnh CMND/Thẻ căn cước..." />
                    <button type="button" className="btn btn-dark" onClick={()=>this.Haller()}>Getdata</button>
                    <button type="button" className="btn btn-dark" onClick={()=>this.ButtonsClean2()}>Clear</button>
                        <h3 style={{textAlign: 'center'}}>Kết quả:</h3>


                        <Viewdata dulieuchungminhnhdandan={this.state.data}/>

                            

                    </form>
                    <div style={{marginTop: '20px', textAlign: 'right'}}>
                    <button className="btn btn-outline-info fa fa-plus-square" onClick={()=>this.ButtonsClean()}  data-dismiss="modal" ></button>
                   

                    <button type="button" className="btn btn-outline-warning fa fa-id-card" data-toggle="modal" data-target="#exampleModal"></button>



                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"> phòng muốn đặt của khách</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">


                            <div className="form-group">
                            <label htmlFor="usr">Sđt:</label>
                            <input type="text" name="Sđt" onChange={(event)=>this.IsChange2(event)} className="form-control" id="usr" />
                            </div>


                            <div className="form-group">
                            <label htmlFor="exampleFormControlSelect2">Số phòng còn trống</label>
                            <select multiple className="form-control" onChange={(event)=>this.IsChange2(event)} name="NameRoom" id="exampleFormControlSelect2">
                            {this.showcascphongconhoatdong()}
                            </select>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            <button type="button" className="btn btn-primary">Lưu lại</button>
                        </div>
                        </div>
                    </div>
                    </div>



                    <button className="btn btn-outline-info fa fa-times-circle" data-dismiss="modal"></button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
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
            dispatch({type:'PUSHDATA',getitem})
        },
        
        Dulieukemtheo: (gettion) => {
            dispatch({type:'GET_DATA',gettion})
        },
        trangthaithaydoi: () => {
            dispatch({type:'CHANGER_INFO'})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemmoibangAI)