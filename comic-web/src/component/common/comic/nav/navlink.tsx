import {type Href } from '@/model/Nav'

export default function NavLink({title, href, desc}: Href) {
    return <a href={href} className="font-medium rounded-lg px-1 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900">{title}</a>
}