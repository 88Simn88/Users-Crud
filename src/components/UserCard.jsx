import './styles/userCards.css'
import React from 'react'



const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm }) => {

  const handleDelete = () => {
      deleteUserById(user.id)
  }



  const handleUpdate = () => {
    setUpdateInfo(user)
  }

  const handleUpdateAndOpen = () => {
    handleUpdate()
    handleOpenForm()
  }


  return (
    <article className='user'>

        <h2 className='user__name'>{user.first_name} {user.last_name}</h2>
        <ul className='user__list'>
            <li className='user__item'>
              <span className='user__label'>Email:</span>
              <span className='user__value'>{user.email}</span>
            </li>
            <li className='user__item'>
              <span className='user__label'>Birthday</span>
              <span className='user_value'>{user.birthday}</span>
            </li>
        </ul>
        <footer className='user__footer'>
            <button className='user__btn user__delete' onClick={handleDelete}><i className='bx bx-trash user__icons'></i> </button>
            <button className='user__btn user__update' onClick={handleUpdateAndOpen}><i className='bx bx-edit-alt user__icons'></i></button>
        </footer>
    </article>
  )
}

export default UserCard