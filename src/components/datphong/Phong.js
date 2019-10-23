import React, { Component } from 'react';
 
class Phong extends Component {

    render() { 
        return (
            <div>
                {
                      this.props.ketquas.map((value , key) => {
                        if(value.trangthai === 1)
                        {
                            return(
                                <div id="phong">
                                <img src={value.image} alt="khach san"/>
                                <h2>{value.maphong}</h2>
                                <h4>{value.gia}</h4>
                                <h5>sẵn sàng</h5>
                                <input type="submit" name="thuephong" defaultValue="Đặt phòng" />
                                </div>
                            )
                        }
                })
                }
            </div>
        );
    }
}
 
export default Phong;