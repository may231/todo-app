import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { destroyCategory } from './store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Categories = ()=> {
  const { categories, todos } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <>
      {
        categories.map( category => {
          const filtered = todos.filter(todo => todo.categoryId === category.id);
          return (
            <div key={ category.id } className='category'>
             <div className='categoryText'> 
              <p>{ category.name }({ filtered.length })</p>
              </div>
              <div className='categoryButton'
                disabled={ filtered.length }
                onClick={
                  ()=> dispatch(destroyCategory(category)) 
                }
              >
              <FontAwesomeIcon icon={faTrashCan} />
              </div>
            </div>
          );
        })
      }
</>
  );
};

export default Categories;
