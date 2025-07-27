import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] text-4xl font-bold text-gray-900 mb-4">Стоимость услуг</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачные цены на профессиональный разбор анализов с персональными рекомендациями
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 border-gray-200 hover:border-primary/30 transition-all">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="font-['Montserrat'] text-2xl">Базовый разбор</CardTitle>
              <CardDescription>Расшифровка общего анализа крови</CardDescription>
              <div className="text-3xl font-bold text-gray-900 mt-4">
                2 500 ₽
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" className="h-5 w-5 text-blue-600 mr-3" />
                  Разбор ОАК (15+ показателей)
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-5 w-5 text-blue-600 mr-3" />
                  Письменное заключение
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-5 w-5 text-blue-600 mr-3" />
                  Базовые рекомендации
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-5 w-5 text-blue-600 mr-3" />
                  Срок выполнения: 2-3 дня
                </li>
              </ul>
              <Button className="w-full mt-6" variant="outline">
                Выбрать план
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary shadow-lg transform scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Популярный
              </span>
            </div>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Microscope" className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-['Montserrat'] text-2xl">Расширенный разбор</CardTitle>
              <CardDescription>ОАК + биохимия + консультация</CardDescription>
              <div className="text-3xl font-bold text-primary mt-4">
                5 500 ₽
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" className="h-5 w-5 text-primary mr-3" />
                  ОАК + биохимия (30+ показателей)
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-5 w-5 text-primary mr-3" />
                  Онлайн-консультация 45 мин
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-5 w-5 text-primary mr-3" />
                  Персональные рекомендации
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-5 w-5 text-primary mr-3" />
                  План коррекции питания
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-5 w-5 text-primary mr-3" />
                  Срок выполнения: 1-2 дня
                </li>
              </ul>
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                Выбрать план
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 hover:border-secondary/30 transition-all">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="font-['Montserrat'] text-2xl">VIP разбор</CardTitle>
              <CardDescription>Полный анализ + сопровождение</CardDescription>
              <div className="text-3xl font-bold text-gray-900 mt-4">
                12 000 ₽
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" className="h-5 w-5 text-secondary mr-3" />
                  Полный спектр анализов (50+ показателей)
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-5 w-5 text-secondary mr-3" />
                  Консультация 90 минут
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-5 w-5 text-secondary mr-3" />
                  Индивидуальная диета
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-5 w-5 text-secondary mr-3" />
                  Схема добавок
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-5 w-5 text-secondary mr-3" />
                  Сопровождение 1 месяц
                </li>
              </ul>
              <Button className="w-full mt-6" variant="outline">
                Выбрать план
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Не знаете, какой план выбрать? Получите бесплатную консультацию
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            <Icon name="Phone" className="mr-2" size={20} />
            Бесплатная консультация
          </Button>
        </div>
      </div>
    </section>
  );
}