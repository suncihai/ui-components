import React from 'react';
export declare type ButtonProps = {
    alt?: string;
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    href?: string;
    icon?: boolean;
    smIcon?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLAnchorElement>) => void;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    style?: 'primary' | 'secondary' | 'plus' | 'tradeapp' | 'dark' | 'databox' | 'pill' | 'light' | 'underline';
    cypressId?: string;
    testId?: string;
    type?: 'button' | 'submit' | 'reset' | 'div' | 'a' | 'link';
    rounded?: boolean;
    target?: string;
};
/**
 * Primary UI component for user interaction
 */
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
