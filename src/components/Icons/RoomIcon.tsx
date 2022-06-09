type RoomIconProps = React.ComponentPropsWithoutRef<'svg'>

export function RoomIcon(props: RoomIconProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 11 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.09238 15.25L0.672363 8.35L4.09238 1.75L5.40776 4.28846M4.35545 6.55L3.30314 8.35L5.26177 12.4448M5.40776 4.28846L7.51239 8.35L5.26177 12.4448M5.40776 4.28846L6.72315 1.75L10.1432 8.35L6.46008 14.95L5.26177 12.4448"
        stroke="currentcolor"
      />
    </svg>
  )
}
