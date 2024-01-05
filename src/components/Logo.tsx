import Image from 'next/image'
import logo from '../images/logos/logo.png'
export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <Image className="h-auto w-12" src={logo} alt="Forensic Global Logo" />
}
//#fddb00
//"#132c6e"
