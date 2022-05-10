import { Link } from 'react-router-dom'
import { useState } from 'react'
import Alerta from '../components/Alerta'
import axios from 'axios'

const Registrar = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [alerta, setAlerta] = useState({})
  const [activarAlerta, setactivarAlerta] = useState(false)

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if([nombre, email, password, confirmarPassword].includes('')) {
      setAlerta({
        mensaje: 'Todos los campos son obligatorios',
        error: true
      });
      setactivarAlerta(true);
      return
    }

    if(password !== confirmarPassword) {
      setAlerta({
        mensaje: 'El password no coincide',
        error: true
      });
      setactivarAlerta(true);
      return
    }

    if(password.length < 6) {
      setAlerta({
        mensaje: 'El password debe ser mayor o igual a 6 caracteres',
        error: true
      });
      setactivarAlerta(true);
      return
    }

    // Se crea usuario con ayuda de la REST API

    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/usuarios`;
      const { data } = await axios.post(url, {
        nombre,
        email,
        password
      });
      setAlerta({
        mensaje: data.msg,
        error: false
      });
      setactivarAlerta(true);
      setNombre('');
      setEmail('');
      setPassword('');
      setConfirmarPassword('');
    } catch (error) {
      const { response } = error
      setAlerta({
        mensaje: response.data.msg,
        error: true
      });
      setactivarAlerta(true);
    }
  }



  return (
    <>
      <h1 className='text-sky-600 font-black md:text-6xl text-4xl capitalize text-center'>
        Crea tu cuenta y administra tus <span className='text-slate-700'>Proyectos</span>
      </h1>

      <form
        className='my-10 bg-white w-full px-10 py-5 rounded-md shadow shadow-sky-800'
        onSubmit={handleSubmit}
      >
        {activarAlerta && (
          <Alerta
            alerta={alerta} 
          />
        )}
        <div className='my-5'>
          <label htmlFor='nombre' className='uppercase text-gray-600 block text-xl font-bold'>Nombre</label>
          <input
            id='nombre'
            type='text'
            placeholder="Ej: Andres Cuellar"
            className='w-full mt-1 bg-slate-200 rounded-md p-2 border'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='my-5'>
          <label htmlFor='email' className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
          <input
            id='email'
            type='email'
            placeholder="Ej: felipe@correo.com"
            className='w-full mt-1 bg-slate-200 rounded-md p-2 border'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='my-5'>
          <label htmlFor='password' className='uppercase text-gray-600 block text-xl font-bold'>password</label>
          <input
            id='password'
            type='password'
            placeholder='Escribe una contraseña'
            className='w-full mt-1 bg-slate-200 rounded-md p-2 border'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='my-5'>
          <label htmlFor='passwordConfirm' className='uppercase text-gray-600 block text-xl font-bold'>Confirma tu password</label>
          <input
            id='passwordConfirm'
            type='password'
            placeholder='Confirma la contraseña'
            className='w-full mt-1 bg-slate-200 rounded-md p-2 border'
            value={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
          />
        </div>
        <div className='mt-5 mb-3'>
          <input
            value={'Crear cuenta'}
            type='submit'
            className='w-full mt-1 bg-green-500 hover:bg-green-600 cursor-pointer text-white text-xl font-semibold rounded-md p-2 border transition-colors'
          />
        </div>
        <nav>
          <div className='flex'>
            <p className='mr-1'>¿Ya tienes una cuenta?</p>
            <Link to='/' className='text-sky-900 font-bold hover:underline'>Inicia sesión</Link>
          </div>
        </nav>
      </form>
    </>
  )
}

export default Registrar