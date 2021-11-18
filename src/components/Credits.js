import React from 'react'
import AccountBalance from './AccountBalance';
import Navibar from './Navbar/Navbar';

const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0,10);
            return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
        }) 
    }
    return (
    	<div>
           <Navibar />  
    	   <h1>Credits</h1>
    	   {creditsView()}
           <form onSubmit={props.addCredit}>
             <input type="text" name="description" />
             <input type="number" name="amount" />
             <button type="submit">Add Credit</button>
           </form>
           <AccountBalance accountBalance={props.accountBalance}/>
    	</div>

    )
}

export default Credits
