import './ExpenseItem.css'

function ExpenseItem(){
    const expenseDate = new Date(2020, 9, 5);
    const expenseAmount = 10; 
    const expenseDescription = 'Car Lamborgini';

    return (<div className='expense-item'>
        <div> {expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2> {expenseDescription}</h2>
            <div className='expense-item__price'> {expenseAmount} IDR </div>
        </div>
    </div>);
}

export default ExpenseItem;