import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo, destroyTodo } from './store';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Todos = ()=> {
  const { categories, todos } = useSelector(state => state);
  const { term } = useParams();
  const dispatch = useDispatch();
  const filtered = todos.filter(todo => !term || todo.name.includes(term));

  return (
    <div className='todoList'>
      {
        filtered.length !== todos.length ? (
          <h2>You are filtering { filtered.length } out of { todos.length }</h2>
        ): null
      }
  
        {
          filtered.map( todo => {
            const category = categories.find(category => category.id === todo.categoryId);
            return (
              <div key={ todo.id } id='todo'>
                <div className='cardHeader'>
                  <div className='todoText'>
                <Link to={`/${todo.id}`}>
                  { todo.name }
                </Link>

                ({ category ? category.name : 'none'})
                </div>
                
                <div className='todoButton'
                  onClick= {
                    ()=> {
                      dispatch(destroyTodo(todo));
                    }
                  }
                >
                <FontAwesomeIcon icon={faTrashCan} />
                </div>
            
                </div>
                <select
                  value={ todo.categoryId }
                  onChange = {
                    ev => {
                      const updatedTodo = {...todo, categoryId: ev.target.value * 1};
                      dispatch(updateTodo(updatedTodo));
                    }
                  }
                >
                  {
                    categories.map( category => {
                      return (
                        <option value={ category.id } key={ category.id }>{ category.name }</option>
                      );
                    })
                  }
                </select>
              </div>
            );
          })
        }

    </div>
  )
};

export default Todos;

