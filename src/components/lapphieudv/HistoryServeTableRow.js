import React, { Component } from 'react'

export default class HistoryServeTableRow extends Component {
    render() {
        return (
            <>
                <tr>
              <td>{this.props.index}</td>
              <td>{this.props.id}</td>
              <td>{this.props.username}</td>
              <td>{this.props.phone}</td>
              <td>
                <p>{this.props.serves}</p>
              </td>
              <td />
            </tr>
            </>
        )
    }
}
