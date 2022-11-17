import React from 'react';

type Props = {
    children?: JSX.Element,
    className?: string,
    size: number
}

export const ImageWrap: React.FC<Props> = ({children, size, className}) => {
    return (
        <div
            className={className}
            style={{
                height: size,
                width: size
            }}
        >
        {children}
    </div>
    )
}