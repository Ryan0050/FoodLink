'use client'

interface PropsType {
    children?: React.ReactNode
}

export default function Container(props: PropsType) {
    return (
        <>
            <div className="w-full max-w-[1200px] mx-auto my-0">
                {props.children}
            </div>
        </>
    )
}