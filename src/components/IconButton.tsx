import React, {ButtonHTMLAttributes, ReactNode} from 'react';

type IconButtonProps = {
  icon: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>
const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({icon, ...props}, ref) => {
  return (
    <button ref={ref} className="bg-gray-400 hover:bg-gray-500 font-bold p-4 rounded-full inline-flex items-center opacity-70" {...props}>
      {icon}
    </button>
  );
});

export default IconButton;
