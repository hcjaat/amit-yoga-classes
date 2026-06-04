import { HiArrowPath } from 'react-icons/hi2'

import { cn } from '@/lib/utils'

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <HiArrowPath
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  )
}

export { Spinner }
