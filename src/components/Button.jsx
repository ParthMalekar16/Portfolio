import { Children } from "react";


export const Button = ({className ="", size = "default", children}) => {
    const baseClass = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) bg-(--color-primary) text-(--color-primary-foreground) hover:bg-(--color-primary)/90 shadow-(--color-primary)/25";
    const sizeClasses = {
        sm: "px-4 py-3 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };
    const classes = `${baseClass} ${sizeClasses[size]} ${className}`;
    return(
        <button className={classes}>
            <span className="relative flex item-center justify-center gap-2">{children}</span>
        </button>
    );
};