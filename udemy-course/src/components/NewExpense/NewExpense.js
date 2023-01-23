import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from'./ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            id:Math.random().toString(),
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);
    };
    
    const startEditingHandler =() => {
        setIsEditing(true);
    };

    return(
        <div className ="new-expense">
        {! isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler}/>}
        </div>
    );
};

export default NewExpense;