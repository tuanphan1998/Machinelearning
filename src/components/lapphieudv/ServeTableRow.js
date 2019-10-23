import React, { Component } from 'react'

export default class ServeTableRow extends Component {
    render() {
        return (
            <>
                <tr>
                    <td>{this.props.index}</td>
                    <td>{this.props.serviceName}</td>
                    <td>{this.props.price}đ</td>
                    <td>
                      <input type="checkbox" name defaultValue />
                    </td>
                  </tr>
            </>
        )
    }
}
