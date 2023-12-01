import { type Href } from "@/model/Nav"
import NavLink from "./navlink";
import Search from "../../search";
type props = {
    hrefs: Href[];
}

export default function NavBar({ hrefs }: props) {
    // const [navLinkClass, setNavLinkClass] = useState('');
    // const onToggleMenu = (e) => {
    //     e.name = e.name === 'menu' ? 'close' : 'menu';
    //     setNavLinkClass('close');
    // }

    return <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="flex justify-between items-center w-full">
            <div class="xl:w-1/3">
                Truyen VUI
            </div>
            <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5 top-[100%]">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    {hrefs.map((href) => (
                        <li>
                            <NavLink href={href.href} title={href.title} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center gap-6">
                <Search></Search>
            </div>
            <div className="flex justify-center gap-6">
                <NavLink href="/comic/login" title="Login"></NavLink>
                <NavLink href="/comic/login" title="Sing in"></NavLink>
            </div>
        </div>
        <div class="flex items-center gap-6">
                <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
            </div>
    </nav>
}