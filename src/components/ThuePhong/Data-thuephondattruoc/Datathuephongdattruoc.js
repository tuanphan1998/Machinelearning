import React, { Component } from 'react';
import TableDataThuephongdattruoc from './TableDatathuephongdattruoc';
 
class Datathuephongdattruoc extends Component {

    render() { 
        return (
            <div>
                      <div>
                        {
                             this.props.trave.map((value , key) => {
                                if(value.trangthai === 0)
                                {
                                    return   <TableDataThuephongdattruoc 
                                    image={value.image}
                                    maphong={value.maphong}
                                    gia={value.gia}
                                    tenkhach={value.tenkhach}
                                    sdt={value.sdt}
                                    ngaysinh={value.ngaysinh}
                                    trangthai={value.trangthai}
                                    />;
                                }
                            })
                        }
                        </div>
            </div>
        );
    }
}
 
export default Datathuephongdattruoc;