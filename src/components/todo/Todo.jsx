import { Link } from 'react-router-dom'
import './Todo.css'

export default function Todo() {
    return (
        <div className='mainContentPage'>
            <div className="todoPageHeader">
                <div className="todoPageTitle">
                    <h1>TODO</h1>
                </div>
            </div>
            <hr></hr>
            <div className='todoContainer'>
                <form>
                    <fieldset>
                        <label>Description</label>
                        <input type='text' placeholder='What do you want to do?'></input>
                    </fieldset>
                    <fieldset>
                        <label>Target Date</label>
                        <input type='date'></input>
                    </fieldset>
                </form>
                <div className='formButtons'>
                    <button className='submit formButton deleteButton'>Delete Todo</button>
                    <button className='submit formButton' type='submit'>Save</button>
                </div>

            </div>
        </div>
    )
}