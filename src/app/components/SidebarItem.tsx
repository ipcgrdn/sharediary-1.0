import Link from "next/link";
import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon, label, active, href
}) => {
  return (
    <Link href={href} className={twMerge(`flex flex-row rounded-lg
    h-auto items-center w-full gap-x-4 text-base font-medium p-1
    cursor-pointer hover:bg-black/25 transition`,
    active && 'bg-black/20')}>
        <Icon size={26}/>
        <p className="truncate w-full text-base"> {label} </p>
    </Link>
  )
}

export default SidebarItem
