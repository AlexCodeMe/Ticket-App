import Link from "next/link"
import { faTicket, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
        <div className="flex items-center gap-8">
            <Link href="/">
                <FontAwesomeIcon icon={ faHome } className='icon' />
            </Link>
            <Link href="/TicketPage/new">
                <FontAwesomeIcon icon={ faTicket } className='icon' />
            </Link>
        </div>
        <div>
            <p className="text-default-text">email@email.com</p>
        </div>
    </nav>
  )
}

export default Nav