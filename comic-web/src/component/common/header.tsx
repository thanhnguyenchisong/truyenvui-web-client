import { type MenuItem } from "@/model/Nav"
import NavBar from "@/component/common/comic/nav/navbar"

var menu: MenuItem[] = [
    {
        title: 'Home',
        href: '/comic'
    },{
        title: 'Genre',
        href: '/comic/genre'
    },{
        title: 'History',
        href: '/comic/history'
    },{
        title: 'My List',
        href: '/comic/my-list'
    }

]

export default function Header() {
    return <NavBar menu={menu}/>
}