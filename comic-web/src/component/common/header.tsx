import { type Href } from "@/model/Nav"
import NavBar from "@/component/common/comic/nav/navbar"
import { NavbarDark } from "./comic/nav/test"

var menu: Href[] = [
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
    },{
        title: 'Search',
        href: '/comic/search-advance'
    }

]

export default function Header() {
    return <NavbarDark />
}