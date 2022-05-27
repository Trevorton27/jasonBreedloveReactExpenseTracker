import React, {useState} from 'react';
import ExpenseItem from "../ExpenseItem";
import App from "../../App";

function DeleteExpenseItem(props) {

    // delete button rendered in ExpenseItem component

    // set state to items from ExpenseItem component
    const [list, setList] = useState(props.items);
    // verify data is in state
    console.log(list);
    // map out array to acquire each item id
    const listID = list.map((item) => (item.id))
    // verify id was imported
    console.log("List ID", listID);

    //handler to pass to button click event
    const deleteExpenseHandler = () => {
        // filter out all id's that don't match the id of the item being deleted
        const newList = list.filter(item => item.id !== listID);
        // check filtered list
        console.log("New List", newList);
        // update state to data returned from filter
        setList(newList);
        //verify click event is being captured through props in Expense Item
        console.log("Clicked in DeleteExpenseComponent")
    };

    return (
        <div>
            <div>
                {/*<button deleteThis={deleteExpenseHandler} className={'btn btn-lg btn-danger'} >test</button>*/}
                {/*// test button click event*/}
                <button onClick={deleteExpenseHandler} className={'btn btn-lg btn-danger'}>Delete</button>
            </div>
        </div>
    );
}

export default DeleteExpenseItem;