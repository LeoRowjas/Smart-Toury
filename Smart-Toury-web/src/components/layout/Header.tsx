
import Image from 'next/image'
import Link from 'next/link'


export function Header() {
  return (
    <div className="container mx-auto">
      
      <header className='flex text-white justify-between pt-5'>
        <nav className='flex items-center'>
          <Image
          width={40}
          height={40}
          alt='logo'
          src="/logo.svg" 
        ></Image>
        <Link className='text-4xl ml-2.5 text-white hover:text-white/80 transition-colors' href='/'>Местный взгляд</Link>
        </nav>

        <nav className='flex items-center gap-2.5'>
          <p>Уже есть аккаунт?</p>
          <Link className='bg-white/15 rounded-3xl p-2.5' href='/auth'>Войти</Link>
        </nav>
      </header>
    </div>
  )
}