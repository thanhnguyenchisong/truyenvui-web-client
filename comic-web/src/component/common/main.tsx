import { FC, PropsWithChildren} from "react"


export const Main: FC<PropsWithChildren> = ({children}) => {
    return <div>
        {children}
    </div>
}