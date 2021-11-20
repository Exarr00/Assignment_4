import React from 'react'
import AccountBalance from './AccountBalance';
import Navibar from './Navbar/Navbar';

const Debits = (props) => {
    let debitsView = () => {
        const { debits } = props;
        return debits.map((debit) => {
            let date = debit.date.slice(0, 10);
            return (
                <li className="list-group-item list-group-item-primary" key={debit.id}>
                    ${debit.amount} &nbsp;{debit.description} &nbsp;{date}
                </li>)
        })
    }
    return (
        <div>
            <Navibar />
            <div className="debit">
                <h1>Debits</h1>
                <ul className="list-group">
                    {debitsView()}
                </ul>
                <form onSubmit={props.addDebit}>
                    <input type="number" step="0.01" name="amount" placeholder="Amount"/>
                    <input type="text" name="description" placeholder="Description"/>
                    <br/>
                    <button className="btn btn-block btn-primary"type="submit">Add Debit</button>
                </form>
                <AccountBalance accountBalance={props.accountBalance} />
            </div>
        </div>

    )
}

export default Debits

