import FinanceLogo from '~/components/FinanceLogo'
import type {ReactNode} from 'react'

export default function AuthLayout({children}: {children: ReactNode}) {
  return (
    <div className='min-h-dvh desktop:p-150 flex flex-col desktop:flex-row gap-20'>
      <div className='desktop:max-w-560 w-full relative desktop:min-h-auth-container bg-grey-900 desktop:rounded-xl'>
        <div className='desktop:absolute inset-0 size-full p-6 desktop:p-10 flex desktop:flex-col justify-center desktop:justify-between'>
          <FinanceLogo />
          <div className='space-y-6 text-white hidden desktop:block'>
            <h3 className='text-preset-1'>Keep track of your money and save for your future</h3>
            <p className='text-preset-4'>
              Personal finance app puts you in control of your spending. Track transactions, set
              budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>

      <main className='flex-1 desktop:min-h-auth-container flex items-center justify-center'>
        <div className='max-w-560 w-full bg-white p-400 rounded-xl'>{children}</div>
      </main>
    </div>
  )
}
