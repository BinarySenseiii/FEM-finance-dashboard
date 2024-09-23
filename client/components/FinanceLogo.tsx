import {Logo} from '~/assets/svg'
import Link from 'next/link'

const FinanceLogo = () => {
  return (
    <Link
      href='/'
      aria-label='Finance Home'>
      <Logo />
    </Link>
  )
}

export default FinanceLogo
