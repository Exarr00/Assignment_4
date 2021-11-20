import React from 'react'
import AccountBalance from './AccountBalance';
import Navibar from './Navbar/Navbar';

const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0, 10);
            return (
                <li className="list-group-item list-group-item-primary" key={credit.id}>
                    ${credit.amount} &nbsp;{credit.description} &nbsp;{date}
                </li>)
        })
    }
    return (
        <div>
            <Navibar />
            <div className="credit">
                <h1>Credits</h1>
                <ul className="list-group">
                    {creditsView()}
                </ul>
                <form onSubmit={props.addCredit}>
                    <input type="number" step="0.01" name="amount" placeholder="Amount"/>
                    <input type="text" name="description" placeholder="Description"/>
                    <br/>
                    <button className="btn btn-block btn-primary"type="submit">Add Credit</button>
                </form>
                <AccountBalance accountBalance={props.accountBalance} />
            </div>
        </div>

    )
}

export default Credits
