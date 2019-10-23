import React, { Component } from 'react';
 
class TableDataThuephongdattruoc extends Component {

    trangthai = () => {
        if(this.props.trangthai === 0)
        {
            return("đang thuê");
        }
        else
        {
            return("sẵn sàng");
        }
    }
    render() {
        return (
            <div id="phong">
                             <img src={this.props.image} alt="demo3" />
                            <h2>{this.props.maphong}</h2>
                            <h4>{this.props.gia}</h4>
                            <h4>{this.props.tenkhach}</h4>
                            <h4>{this.props.sdt}</h4>
                            <h4>{this.props.ngaysinh}</h4>
                            <h5 id="trangthaiphong-sansang">{this.trangthai()}</h5>
                            <input type="submit" name="thuephong" defaultValue="Thuê phòng" />
            </div>
        );
    }
}
 
export default TableDataThuephongdattruoc;