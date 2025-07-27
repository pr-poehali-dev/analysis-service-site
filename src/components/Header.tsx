import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Activity" className="h-8 w-8 text-primary" />
          <h1 className="font-['Montserrat'] text-2xl font-bold text-primary">НутриАнализ</h1>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О специалисте</a>
          <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">Стоимость</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          <Button className="bg-primary hover:bg-primary/90 text-white">Записаться</Button>
        </div>
        <Button variant="ghost" className="md:hidden">
          <Icon name="Menu" size={24} />
        </Button>
      </nav>
    </header>
  );
}