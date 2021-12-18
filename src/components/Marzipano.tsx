import React, {ReactNode} from 'react'

export interface MarzipanoProps {
  className?: string,
  style?: any,
  children?: ReactNode
}

const Marzipano = React.forwardRef<HTMLDivElement, MarzipanoProps>(({ className = '', style, children, ...props }, ref): React.ReactElement => {
  return (
    <div
      className={`relative h-screen w-full ${className}`.trim()}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})

export default Marzipano
