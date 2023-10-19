import { Link } from 'react-router-dom';
import './TodoList.css'

export default function TodoList() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const todos = [
        {
            id: 1,
            description: 'Learn Docker',
            done: true,
            targetDate: targetDate
        },
        {
            id: 2,
            description: 'Learn Kubernetes',
            done: false,
            targetDate: targetDate
        },
        {
            id: 3,
            description: 'Learn Full Stack Development',
            done: true,
            targetDate: targetDate
        },
        {
            id: 4,
            description: 'Learn Jenkins',
            done: false,
            targetDate: targetDate
        },
        {
            id: 5,
            description: 'Learn Deployment',
            done: false,
            targetDate: targetDate
        },
    ]

    return (
        <div className="mainContentPage">
            <div className="todoPageHeader">
                <div className="todoPageTitle">
                    <h1>ALL TODOS</h1>
                </div>
                <div className="addNewTodo">
                    <Link className="submit addNew" to='/todo'>+ Add New Todo</Link>
                </div>
            </div>
            <hr></hr>
            <div>
                <table className="todoTable">
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>
                                            <input type="checkbox" checked={todo.done} readOnly />
                                        </td>
                                        <td className='desc'>{todo.description}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                        <td>
                                            <button className='editTodoButton'>
                                                <div className='todoEdit'>
                                                    <img src='/images/edit-icon.png' alt='edit'></img>
                                                    <h4>Edit</h4>
                                                </div>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}