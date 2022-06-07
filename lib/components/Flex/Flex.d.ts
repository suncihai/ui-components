/// <reference types="react" />
export declare type FlexProps = {
    content?: 'around' | 'between' | 'evenly' | 'end' | 'start' | 'center';
    children: React.ReactNode;
    direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
    align?: 'start' | 'end' | 'baseline' | 'stretch' | 'center';
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
export default function Flex(props: FlexProps): JSX.Element;
