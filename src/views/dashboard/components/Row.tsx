import React from 'react'
import cn from 'classnames'

export default function Row({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[]
  className?: string
}) {
  return <div className={cn(`flex mb-6 ${className}`)}>{children}</div>
}
