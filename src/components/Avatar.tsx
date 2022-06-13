import { ImgHTMLAttributes } from "react";

import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;// Não é obrigatorios por isso o ?
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    return (
        <img className={hasBorder ? styles.avatarWhithBorder : styles.avatar} 
            {...props}
        />
    )
}