import type {ReactNode} from 'react'

export default function AuthLayout({children}: {children: ReactNode}) {
  return (
    <div className='min-h-dvh desktop:p-150 flex flex-col desktop:flex-row gap-20'>
      <div className='desktop:max-w-560 w-full desktop:h-auth-container bg-grey-900 desktop:rounded-xl'>
        ss
      </div>
      <main className='flex-1 desktop:h-auth-container flex items-center justify-center'>
        <div className='max-w-560 w-full bg-white p-400 rounded-xl'>{children}</div>
      </main>
    </div>
  )
}
