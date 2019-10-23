import React, { Component } from 'react'

export default class UserTableRow extends Component {
    render() {
        return (
            <>
                <tr>
                <td>{this.props.index}</td>
                <td>{this.props.id}</td>
                <td>{this.props.username}</td>
                <td>{this.props.dob}</td>
                <td>{this.props.gender}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.job}</td>
                <td>{this.props.role}</td>
                <td>
                  <button id="sua-nhan-vien" className="btn btn-info">Sửa</button>
                  <button id="xoa-nhan-vien" className="btn btn-info">Xóa</button>
                </td>
              </tr>
            </>
        )
    }
}
