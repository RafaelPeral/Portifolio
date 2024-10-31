import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { avatar_url } from "@/utils/url";

export default function AvatarComponent() {
    return (
        <Avatar>
            <AvatarImage src={avatar_url} alt="Rafael Peral" className="w-10 h-10 rounded-full" />
            <AvatarFallback delayMs={600}>AF</AvatarFallback>
        </Avatar>
    );
}