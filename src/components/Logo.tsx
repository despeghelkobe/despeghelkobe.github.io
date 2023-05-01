import { useNavigate } from 'react-router-dom'

export default ({ position }: { position: string }) => {
  const navigate = useNavigate()
  return (
    <button
      className={`h-full border border-y-0 border-transparent focus:outline-none focus-visible:border-gray-300 focus-visible:shadow-inner active:shadow-inner
      ${
        position === 'footer'
          ? 'border border-y focus-visible:border-gray-400'
          : ''
      }`}
      onClick={() => navigate('/')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52.5 52"
        className="h-full"
      >
        <g id="logo" transform="translate(-1206 -843)">
          <rect
            id="Rectangle_1"
            data-name="Rectangle 1"
            width="52"
            height="52"
            transform="translate(1206 843)"
            fill="none"
          />
          <g id="Group_1" data-name="Group 1" transform="translate(14 9)">
            <text
              id="KOBE"
              transform="translate(1192 843)"
              fill="#707070"
              font-size="20"
              font-family="SegoeUI, Segoe UI"
              letter-spacing="0.054em"
            >
              <tspan x="0.689" y="22">
                KOBE
              </tspan>
            </text>
            <text
              id="despeghel"
              transform="translate(1193.5 862)"
              fill="#707070"
              font-size="10"
              font-family="SegoeUI, Segoe UI"
              letter-spacing="-0.02em"
            >
              <tspan x="-0.084" y="11">
                DESPEGHEL
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </button>
  )
}
