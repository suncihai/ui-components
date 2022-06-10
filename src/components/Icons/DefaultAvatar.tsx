type DefaultAvatarProps = React.ComponentPropsWithoutRef<'svg'> & {
  size: number | string;
};

export const DefaultAvatar = (props: DefaultAvatarProps) => {
  const { size } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="25" cy="25" r="25" fill="#E5E5EA" />
      <path
        d="M30.4484 16.0208C30.4484 18.9088 28.0691 21.2746 25.1036 21.2746C22.1381 21.2746 19.7588 18.9088 19.7588 16.0208C19.7588 13.1328 22.1381 10.767 25.1036 10.767C28.0691 10.767 30.4484 13.1328 30.4484 16.0208Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.2388 36.7454C12.9685 30.8582 18.4789 26.5541 25.0093 26.5541C31.5396 26.5541 37.0501 30.8582 38.7798 36.7454"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
