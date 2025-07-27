import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Activity" className="h-6 w-6 text-primary" />
              <h3 className="font-['Montserrat'] text-xl font-bold">НутриАнализ</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Профессиональный разбор анализов крови и персональные рекомендации 
              от интегративного нутрициолога
            </p>
          </div>

          <div>
            <h4 className="font-['Montserrat'] font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Общий анализ крови</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Биохимия крови</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Гормональный профиль</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Витамины и микроэлементы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Montserrat'] font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">О специалисте</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Стоимость</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Montserrat'] font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>+7 (999) 123-45-67</div>
              <div>elena@nutrianaliz.ru</div>
              <div>@nutrianaliz_elena</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 НутриАнализ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}