import React, {FC} from "react";


interface DefaultAreaProps {
    title: string,
    type?: string,
    value?: string | number,
    onChange?: () => void
}

export const DefaultArea:FC<DefaultAreaProps> = ({title, type, value, onChange}) => {
    return (
        <div>
            
        </div>
    )
}