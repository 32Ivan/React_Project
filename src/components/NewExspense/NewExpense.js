import React, { useState } from'react';
import './NewExpense.css';
import ExspenseForm from './ExspenseForm';


const NewExpense =(props)=>{

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpeseData) =>{
        const expenseData = {
          ...enteredExpeseData,
          id: Math.random().toString
        };
        props.onAddExpense(expenseData);
        setIsEditing(false)
    };

    const startEditingHandler = () =>{
        setIsEditing(true);
    }
    const stopEditingHandler = () =>{
        setIsEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
            {isEditing && <ExspenseForm  onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
            
        </div>
    );
}

export default NewExpense;