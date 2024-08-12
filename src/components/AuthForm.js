import {
  Form,
  Link,
  useNavigate,
  useSearchParams,
  useActionData,
} from 'react-router-dom';
import React, { useState } from 'react';

const AuthForm = () => {
  const data = useActionData();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const isSubmitting = navigate.state === 'submitting';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const storedData = localStorage.getItem('users');
    const users = storedData ? JSON.parse(storedData) : [];
    // Авторизация
    if (isLogin) {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        alert('Вход успешен!');
        // Можно добавить код для перенаправления на другую страницу после успешной авторизации
        navigate('/myaccaunt'); // Пример перенаправления на страницу dashboard
      } else {
        alert('Неправильный email или пароль');
      }
    } else {
      // Регистрация нового пользователя
      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Регистрация успешна! Теперь можно войти');
      //Можно добавить код для перенаправления на страницу входа
      // navigate('?mode=login');
    }
  };

  return (
    <>
      <Form
        method='post'
        onSubmit={handleFormSubmit}
        className='max-w-[448px] max-h-[1080px]  py-20 mx-auto border-solid border-2 border-black'>
        <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
          {isLogin ? 'Регистрация' : 'Войти'}
        </Link>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}{' '}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='password'>password</label>
          <input
            id='password'
            type='password'
            name='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <div>
          <button
            disabled={isSubmitting}
            type='submit'
            className='w-44 h-12 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white hover:scale-110 transition-all duration-300'>
            {isSubmitting ? 'Submitting...' : 'Save'}
          </button>
        </div>
      </Form>
    </>
  );
};

export default AuthForm;
