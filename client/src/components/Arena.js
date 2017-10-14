import React, { Component } from 'react'
import { Card, CardTitle, CardText, SVGIcon } from 'react-md'

const SeatIcon = props => (
  <SVGIcon {...props}>
    <path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z" />
  </SVGIcon>
)

class Arena extends Component {
  render() {
    const numRows = this.props.numRows
    const numTickets = this.props.numTickets
    const seatsPerRow = Math.ceil(numTickets / numRows)

    // only in Event component
    const tickets = this.props.tickets
    const selectSeat = this.props.selectSeat
    const selectedSeat = this.props.selectedSeat

    let rows = []
    for(let i = 0; i < numRows; i++) {
      let seats = []
      for(let j = 0; j < seatsPerRow; j++) {
        const seatIndex = j*numRows+i
        if (seatIndex < numTickets) {
          if (tickets.length > 0) {
            const identifier = tickets[seatIndex].identifier
            const isSold = tickets[seatIndex].isSold
            const isSelected = identifier == selectedSeat

            if (isSold) {
              seats.push(<td key={j}><SeatIcon style={{color: 'red'}}/></td>)
            } else if (isSelected) {
              seats.push(<td key={j}><SeatIcon style={{color: 'teal'}}/></td>)
            } else {
              seats.push(
                <td key={j} onClick={selectSeat.bind(this, identifier)}>
                  <SeatIcon/>
                </td>
              )
            }
          } else {
            seats.push(<td key={j}><SeatIcon/></td>)
          }
        } else {
          seats.push(<td key={j}></td>)
        }
      }
      rows.push(<tr key={i}>{seats}</tr>)
    }

    return (
      <Card>
        <CardTitle title="Arena"/>
        <CardText>
          <table>
            <tbody>
              {rows}
            </tbody>
          </table>
        </CardText>
      </Card>
    )
  }
}

export default Arena