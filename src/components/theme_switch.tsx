import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "@/hooks/theme_context";
import { Switch } from "@/components/ui/switch";


export default function ThemeSwitch() {
    const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
    return (
        <Switch 
            checked={theme === 'dark'}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
    )
}