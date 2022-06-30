import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState(true)

  const [enterMail, setEnterMail] = useState("")
  const [enterPassword, setEnterPassword] = useState("")


  return (
    <div className="">
      <Head>
        <title>Login</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full p-10 lg:p-20 flex items-center justify-center">


        {(status) ?
          (<div className="w-full md:w-[400px] flex flex-col items-center">

            <h1 className="text-3xl font-bold mb-16">
              Nova Conta
            </h1>

            <a href="#" className='px-6 py-2 border bg-[rgba(0,0,0,0.2] w-full text-center rounded-lg bg-[#F5F5F5] font-semibold text-base shadow-md mb-12 hover:bg-slate-100'>
              Crie sua conta com o <span className='font-bold'>Google</span>
            </a>
            <div className='flex text-center'>
              <span className='w-8 flex flex-col justify-baseline pt-5 lg:pt-3 mr-2'><hr /></span>
              <p className='mb-16'>
                ou crie uma conta usando e-mail e senha
              </p>
              <span className='w-8 flex flex-col justify-baseline  pt-5 lg:pt-3 ml-2'><hr /></span>

            </div>


            <form className='w-full mb-8 lg:mb-16'>

              <label for="name" className='block font-bold'>
                Nome Completo
              </label>
              <input type="text" name="name" placeholder='Seu nome aqui' className='w-full border border-[#C1C1C1] px-4 py-3 rounded-lg mt-2 mb-5' value={name} onChange={e => setName(e.target.value)} required></input>

              <label for="phone" className='block font-bold'>
                Telefone
              </label>
              <input type="tel" name="phone" placeholder='(DDD) 9 9999-9999' className='w-full border border-[#C1C1C1] px-4 py-3 rounded-lg mt-2 mb-5' value={phone} onChange={e => setPhone(e.target.value)} required></input>

              <label for="mail" className='block font-bold'>
                E-mail
              </label>
              <input type="mail" name="mail" placeholder='email@email.com' className='w-full border border-[#C1C1C1] px-4 py-3 rounded-lg mt-2 mb-5' value={mail} onChange={e => setMail(e.target.value)} required></input>

              <div className='flex flex-row justify-end -mb-6'>
                <a href="#" className='text-blue-700 underline'>Esqueceu sua senha?</a>
              </div>

              <label for="password" className='block font-bold'>
                Senha
              </label>
              <input type="password" name="password" placeholder='**********' className='w-full border border-[#C1C1C1] px-4 py-3 rounded-lg mt-2 mb-5' value={password} onChange={e => setPassword(e.target.value)}></input>

              <input type="checkbox" name="check" className='mr-2 mb-8' />
              <label for="check" className=''>
                Eu aceito os ‎
                <a href="#" className='text-blue-700 underline'>
                  Termos & Condições de uso
                </a>
              </label>

              <button type='submit' className='block text-center w-full px-6 py-4 bg-green-600 rounded-lg text-white font-bold hover:bg-green-900'>
                Criar Conta
              </button>
            </form>
            <p className='mb-5'>
              Já tem uma conta? ‎
              <a href="" className='text-blue-700 underline' onClick={() => setStatus(!status)}>
                Entre aqui
              </a>
            </p>
          </div>)

          :

          (<div className="w-full md:w-[400px] flex flex-col items-center">

            <h1 className="text-3xl font-bold mb-16">
              Entrar
            </h1>

            <a href="#" className='px-6 py-2 border bg-[rgba(0,0,0,0.2] w-full text-center rounded-lg bg-[#F5F5F5] font-semibold text-base shadow-md mb-12 hover:bg-slate-100'>
              Entre com sua conta <span className='font-bold'>Google</span>
            </a>
            <div className='flex text-center'>
              <span className='w-8 flex flex-col justify-baseline pt-5 lg:pt-3 mr-2'><hr /></span>
              <p className='mb-16'>
                ou entre com seu e-mail e senha
              </p>
              <span className='w-8 flex flex-col justify-baseline  pt-5 lg:pt-3 ml-2'><hr /></span>

            </div>


            <form className='w-full mb-8 lg:mb-16'>


              <label for="mail" className='block font-bold'>
                E-mail
              </label>
              <input type="mail" name="mail" placeholder='email@email.com' className='w-full border border-[#C1C1C1] px-4 py-3 rounded-lg mt-2 mb-5' value={enterMail} onChange={e => setEnterMail(e.target.value)} required></input>

              <div className='flex flex-row justify-end -mb-6'>
                <a href="#" className='text-blue-700 underline'>Esqueceu sua senha?</a>
              </div>

              <label for="password" className='block font-bold'>
                Senha
              </label>
              <input type="password" name="password" placeholder='**********' className='w-full border border-[#C1C1C1] px-4 py-3 rounded-lg mt-2 mb-5' value={enterPassword} onChange={e => setEnterPassword(e.target.value)} required></input>

              <button type='submit' className='block text-center w-full px-6 py-4 bg-green-600 rounded-lg text-white font-bold hover:bg-green-900'>
                Criar Conta
              </button>
            </form>
            <p className='mb-5'>
              Novo por aqui? ‎
              <a href="" className='text-blue-700 underline' onClick={() => setStatus(status)}>
                Crie sua conta agora!
              </a>
            </p>
          </div>)
        }
      </main>

      <footer className="">

      </footer>
    </div>
  )
}
