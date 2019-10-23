import React, {Component} from 'react';
import Logo from './Logo';
import AlertInfo from '../Thongbao/AlertInfo';
import {connect} from 'react-redux';
class Header extends Component {

    showdata = () => {
        if(this.props.trangthaithongbao === true)
        {
            return  <AlertInfo/>;
        }
    }
 
    render() {
        return (
            <>
                {/* ============================================================== */}
                {/* Topbar header - style you can find in pages.scss */}
                {/* ============================================================== */}
                <header className="topbar">

                {this.showdata()}
                    <nav className="navbar top-navbar navbar-expand-md navbar-light">
                        {/* ============================================================== */}
                        {/* Logo */}
                        {/* ============================================================== */}
                        <Logo />
                        {/* ============================================================== */}
                        {/* End Logo */}
                        {/* ============================================================== */}
                        <div className="navbar-collapse">
                            {/* ============================================================== */}
                            {/* toggle and nav items */}
                            {/* ============================================================== */}
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark" href="javascript:avoid(0)"><i className="fa fa-bars" /></a> </li>
                                {/* ============================================================== */}
                                {/* Search */}
                                {/* ============================================================== */}
                                <li className="nav-item hidden-xs-down search-box"> <a className="nav-link hidden-sm-down waves-effect waves-dark" href="javascript:avoid(0)"><i className="fa fa-search" /></a>
                                    <form className="app-search">
                                        <input type="text" className="form-control" placeholder="Search & enter" /> <a className="srh-btn" href="javascript:avoid(0)"><i className="fa fa-times" /></a></form>
                                </li>
                            </ul>
                            {/* ============================================================== */}
                            {/* User profile and search */}
                            {/* ============================================================== */}
                            <ul className="navbar-nav my-lg-0">
                                {/* ============================================================== */}
                                {/* Profile */}
                                {/* ============================================================== */}
                                {/* Button trigger modal */}
                                <li className="nav-item dropdown u-pro">
                                    <a className="nav-link dropdown-toggle waves-effect waves-dark profile-pic" href="javascript:avoid(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/images/users/1.jpg" alt="user"  /> <span className="hidden-md-down">THTV &nbsp;<br /></span> </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                {/* ==============================================================
              <!-- End Topbar header */}
                {/* ============================================================== */}
                {/* Left Sidebar - style you can find in sidebar.scss  */}
                {/* ============================================================== */}

            </>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        trangthaithongbao: state.Thongbao.trangthai
    }
}
export default connect(mapStateToProps)(Header);