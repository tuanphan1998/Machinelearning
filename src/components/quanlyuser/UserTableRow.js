import React, { Component } from 'react'

export default class UserTableRow extends Component {
  render() {
    const job = this.props.job === true ? 'Admin' : 'Nhan Vien';
    const gender = this.props.gender == 1 ? 'Male' : 'Female';
        return (
            <>
                <tr>
                <td>{this.props.index}</td>
                <td>{this.props.uid}</td>
                <td>{this.props.username}</td>
                <td>{this.props.dob}</td>
                <td>{gender}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.role}</td>
                <td>{job}</td>
                <td>
                  <button id="sua-nhan-vien" className="btn btn-info">Sửa</button>
                  <button id="xoa-nhan-vien" className="btn btn-info">Xóa</button>
                </td>
              </tr>
            </>
        )
    }
}
