import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <>
                <aside className="left-sidebar">
                    {/* Sidebar scroll*/}
                    <div className="scroll-sidebar">
                        {/* Sidebar navigation*/}
                        <nav className="sidebar-nav">_
                            <ul id="sidebarnav">
                                <li> 
                                    
                                        <a  className="waves-effect waves-dark" href="/" aria-expanded="false"><i className="fa fa-telegram" /><span className="hide-menu">Thống kê</span></a>
                                    
                                    
                                </li>
                                <li> 
                                   
                                        <a className="waves-effect waves-dark" href="/thue-phong" aria-expanded="false"><i className="fa fa-address-book" /><span className="hide-menu">Thuê phòng</span></a>
                                    
                                </li>
                                <li> <a className="waves-effect waves-dark" href="/dat-phong" aria-expanded="false"><i className="fa fa-id-card" /><span className="hide-menu">Đặt phòng</span></a>
                                </li>
                                <li> <a className="waves-effect waves-dark" href="/lap-hoa-don" aria-expanded="false"><i className="fa fa-file" /><span className="hide-menu">Lập phiếu dịch vụ</span></a>
                                </li>
                                <li> <a className="waves-effect waves-dark" href="/quanly-nhanvien" aria-expanded="false"><i className="fa fa-users" /><span className="hide-menu">Quản lý nhân viên</span></a>
                                </li>
                            </ul>
                        </nav>
                        {/* End Sidebar navigation */}
                    </div>
                    {/* End Sidebar scroll*/}
                </aside>
            </>
        );
    }
}

export default Sidebar;