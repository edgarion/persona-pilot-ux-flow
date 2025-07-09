import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Globe } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ca', name: 'Català', flag: '🏴󠁥󠁳󠁣󠁴󠁿' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    // Aquí se implementaría la lógica de cambio de idioma
    console.log('Idioma cambiado a:', language.code);
  };

  return (
    <Tooltip>
      <DropdownMenu>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 rounded-xl">
              <Globe className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">{currentLanguage.name}</span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <DropdownMenuContent className="bg-gray-900 border-gray-700" align="end">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className="text-white hover:bg-gray-700 cursor-pointer"
            >
              {language.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <TooltipContent className="bg-gray-900 border-gray-700 text-white">
        <p>Cambiar idioma de la interfaz</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default LanguageSelector;