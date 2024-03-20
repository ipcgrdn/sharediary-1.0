import { twMerge } from "tailwind-merge";

interface SidebarBoxProps {
    children: React.ReactNode;
    className?: string; 
}

const SidebarBox: React.FC<SidebarBoxProps> = ({
    children, className
}) => {
  return (
    <div className={twMerge(`bg-black/15 border shadow-lg
    border-black/10 rounded-lg h-fit w-full`, className)}>
      {children}
    </div>
  )
}

export default SidebarBox
