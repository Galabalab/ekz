
import React, { useState } from 'react';
import './Header.css';
import Order from './Order';
const showOrders = (props) => {
  return (
    <div>
      <h2>Моя корзина</h2>
      {props.orders.map(el => (
    <Order oneDelete={props.onDelete} key={el.id} item={el}></Order>
    ))}
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'> 
          <h2>Ваша корзина пуста</h2>
    </div>
  )
}

function Header(props) {
    let[cartOpen, setCatrOpen] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);

    
    const handleLogin = (event) => {
      event.preventDefault();
      const login = document.getElementById('login').value;
      const password = document.getElementById('password').value;
  
      // Проверка введенных данных с хранящимися данными (в этом случае - в localStorage)
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      const user = registeredUsers.find(
        (user) => user.login === login && user.password === password
      );
  
      if (user) {
        // Успешная авторизация
        setLoggedInUser(user);
        setShowLoginModal(false);
        // ... (дополнительные действия)
      } else {
        // Неверный логин или пароль
        alert('Неверный логин или пароль');
      }
    };
  
    const handleRegister = (event) => {
      event.preventDefault();
      const login = document.getElementById('login').value;
      const password = document.getElementById('password').value;
      const email = document.getElementById('email').value;
  
      if (login && password && email) {
        // Получаем данные о зарегистрированных пользователях из localStorage
        let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
  
        // Проверка на дубликат логина
        if (registeredUsers.some((user) => user.login === login)) {
          alert('Пользователь с таким логином уже существует');
          return; // Прекращаем выполнение
        }
  
        // Добавляем нового пользователя в массив
        registeredUsers.push({ login, password, email });
  
        // Сохраняем обновленный массив в localStorage
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  
        // Автоматическая авторизация после регистрации
        setLoggedInUser({ login }); // Автоматически устанавливаем авторизованного пользователя
        setShowRegisterModal(false);
        alert('Регистрация прошла успешно!');
        // ... (дополнительные действия)
      } else {
        // Ошибка регистрации:
        alert('Заполните все поля!');
      }
    }

  return (
    <div className="Header">
      <nav className='menu'>
        <ul className='menu__items'>
                <li className='logo'> Mebelmania </li>
                
            <div  className='menu__item'>
            {loggedInUser ? (
              <span>
                Хороших покупок , {loggedInUser.login}!
                {/* Кнопка выхода */}
                <button onClick={() => setLoggedInUser(null)}>Выйти</button>
              </span>
            ) : (
              <>
                <li onClick={() => setShowLoginModal(true)}>
                  Авторизация
                </li>
                <li onClick={() => setShowRegisterModal(true)}>
                  Регистрация
                </li>
              </>
            )}
                
                <li onClick={() => setCatrOpen(cartOpen = !cartOpen)}> Корзина </li>
                {cartOpen && 
                (
                  <div className='shop-cart'>
                      {props.orders.length > 0 ?
                      showOrders(props) : showNothing() }
                  </div>
                )
                }
            </div>
        </ul>
      </nav>
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowLoginModal(false)}>
              &times;
            </span>
            <h2>Авторизация</h2>
            <form onSubmit={handleLogin}>
              <div className="form">
                <input id="login" type="text" placeholder="Логин" />
                <input id="password" type="password" placeholder="Пароль" />
                <button type="submit">Войти</button>
              </div>
            </form>
            </div>
          </div>
      )}

{showRegisterModal && (
        <div className="modal">
          <div className="modal-content-reg">
            <span className="close" onClick={() => setShowRegisterModal(false)}>
              &times;
            </span>
            <h2>Регистрация</h2>
            <form onSubmit={handleRegister}>
              <div className="form">
                <input id="login" type="text" placeholder="Логин" />
                <input id="password" type="password" placeholder="Пароль" />
                <input id="email" type="email" placeholder="Почта" />
                <button type="submit">Зарегестрироваться</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>

    

  );
}

export default Header;
