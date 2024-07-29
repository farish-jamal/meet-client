import {
 Github,
 LifeBuoy,
 LogOut,
 MenuIcon,
 Settings,
 User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuGroup,
 DropdownMenuItem,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Dropdown() {
 return (
   <DropdownMenu>
     <DropdownMenuTrigger asChild>
       <Button variant="none"><MenuIcon /></Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent className="w-56">
       <DropdownMenuGroup>
         <DropdownMenuItem>
           <User className="mr-2 h-4 w-4" />
           <span>Profile</span>
         </DropdownMenuItem>
         <DropdownMenuItem>
           <Settings className="mr-2 h-4 w-4" />
           <span>Settings</span>
         </DropdownMenuItem>
       </DropdownMenuGroup>
       <DropdownMenuSeparator />
       <DropdownMenuItem>
         <Github className="mr-2 h-4 w-4" />
         <span>GitHub</span>
       </DropdownMenuItem>
       <DropdownMenuItem>
         <LifeBuoy className="mr-2 h-4 w-4" />
         <span>Support</span>
       </DropdownMenuItem>
       <DropdownMenuSeparator />
       <DropdownMenuItem>
         <LogOut className="mr-2 h-4 w-4" />
         <span>Log out</span>
       </DropdownMenuItem>
     </DropdownMenuContent>
   </DropdownMenu>
 )
}
