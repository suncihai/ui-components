/// <reference types="react" />
declare type CardProps = {
    type?: 'default' | 'compact' | 'mobile-nav';
    title?: string | React.ReactNode;
    children?: React.ReactNode;
    onRequestClose?: (event?: any) => void;
    className?: string;
};
export default function Card(props: CardProps): JSX.Element;
export {};
