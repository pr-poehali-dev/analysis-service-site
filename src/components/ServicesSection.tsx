import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональный анализ различных типов лабораторных исследований 
            с персональными рекомендациями
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 border-gray-100 hover:border-primary/20 transition-colors group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name="Droplets" className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-['Montserrat']">Общий анализ крови</CardTitle>
              <CardDescription>
                Расшифровка основных показателей: гемоглобин, лейкоциты, тромбоциты, СОЭ
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                  Оценка анемии
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                  Состояние иммунитета
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                  Риск кровотечений
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-primary/20 transition-colors group">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <Icon name="Zap" className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle className="font-['Montserrat']">Биохимия крови</CardTitle>
              <CardDescription>
                Анализ функций печени, почек, поджелудочной железы, липидного профиля
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-secondary mr-2" />
                  Функции органов
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-secondary mr-2" />
                  Метаболизм
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-secondary mr-2" />
                  Сердечно-сосудистые риски
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-primary/20 transition-colors group">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                <Icon name="Sun" className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle className="font-['Montserrat']">Витамины и микроэлементы</CardTitle>
              <CardDescription>
                Оценка дефицитов витаминов D, B12, фолиевой кислоты, железа, цинка
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-orange-600 mr-2" />
                  Дефициты витаминов
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-orange-600 mr-2" />
                  Минеральный статус
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-orange-600 mr-2" />
                  Рекомендации по добавкам
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-primary/20 transition-colors group">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Icon name="Target" className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="font-['Montserrat']">Гормональный профиль</CardTitle>
              <CardDescription>
                Анализ щитовидной железы, половых гормонов, кортизола, инсулина
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-purple-600 mr-2" />
                  Функция щитовидной железы
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-purple-600 mr-2" />
                  Репродуктивное здоровье
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-purple-600 mr-2" />
                  Стрессовые маркеры
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-primary/20 transition-colors group">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Icon name="Shield" className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="font-['Montserrat']">Маркеры воспаления</CardTitle>
              <CardDescription>
                СРБ, ферритин, гомоцистеин и другие показатели воспалительного процесса
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-blue-600 mr-2" />
                  Скрытые воспаления
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-blue-600 mr-2" />
                  Аутоиммунные риски
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-blue-600 mr-2" />
                  Профилактика болезней
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-primary/20 transition-colors group">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Icon name="Heart" className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="font-['Montserrat']">Комплексная консультация</CardTitle>
              <CardDescription>
                Полный разбор всех анализов с персональными рекомендациями по питанию
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                  Индивидуальный план
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                  Рекомендации по питанию
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                  Последующая поддержка
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}