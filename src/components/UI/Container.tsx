import { DetailedHTMLProps, HTMLAttributes } from "react"

export type ContainerProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function Container({className='', children, ...props}: ContainerProps) {
    return (
        <div {...props} className={`${className} 2xl:max-w-[80rem] xl:max-w-[75rem] lg:max-w-[70rem] md:max-w-[56rem] md:px-0 px-4 mx-auto w-full`}>
            {children}
        </div>
    )
}