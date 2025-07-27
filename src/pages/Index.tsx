import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 font-['Open_Sans']">
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

      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-['Montserrat'] text-5xl font-bold text-gray-900 leading-tight">
                  Персональный разбор
                  <span className="text-primary block">анализов крови</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Получите профессиональную расшифровку ваших анализов и индивидуальные рекомендации 
                  от интегративного нутрициолога
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 text-lg px-8 py-4">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Узнать больше
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Анализов расшифровано</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="space-y-6">
                  <div className="text-center">
                    <img 
                      src="/img/8cbd4e9f-2f8e-4a3b-8ddc-2150b13d8379.jpg" 
                      alt="Профессиональная консультация нутрициолога" 
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-['Montserrat'] text-xl font-semibold text-gray-900">
                      Комплексный анализ показателей
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">Гемоглобин</span>
                      <span className="text-primary font-semibold">138 г/л ✓</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="text-sm font-medium">Витамин D</span>
                      <span className="text-yellow-600 font-semibold">18 нг/мл ⚠</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">Ферритин</span>
                      <span className="text-primary font-semibold">45 мкг/л ✓</span>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <p className="text-sm text-gray-600">+ персональные рекомендации</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </section>

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

        <section id="about" className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-['Montserrat'] text-4xl font-bold text-gray-900">
                  О специалисте
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-primary">Елена Петрова</strong> — сертифицированный интегративный нутрициолог 
                    с 5-летним опытом работы в области персонализированного питания и анализа лабораторных показателей.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Специализируется на выявлении скрытых дефицитов и дисбалансов в организме через 
                    детальный анализ биохимических показателей. Помогает клиентам восстановить здоровье 
                    через корректировку питания и образа жизни.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-['Montserrat'] text-xl font-semibold text-gray-900">Образование и сертификаты:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Icon name="GraduationCap" className="h-5 w-5 text-primary mr-3" />
                      Диплом нутрициолога (Институт интегративной медицины)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Icon name="Award" className="h-5 w-5 text-secondary mr-3" />
                      Сертификат функциональной диагностики
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Icon name="BookOpen" className="h-5 w-5 text-orange-600 mr-3" />
                      Повышение квалификации по микронутриентологии
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-gray-600">Консультаций проведено</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-secondary">95%</div>
                    <div className="text-sm text-gray-600">Положительных отзывов</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto flex items-center justify-center">
                      <Icon name="User" className="h-16 w-16 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] text-2xl font-bold text-gray-900">Елена Петрова</h3>
                      <p className="text-primary font-medium">Интегративный нутрициолог</p>
                    </div>
                    
                    <blockquote className="text-gray-600 italic mt-6">
                      "Каждый анализ — это уникальная история организма. Моя задача — расшифровать эту историю 
                      и помочь вам восстановить здоровье естественным путем."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section id="contact" className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-['Montserrat'] text-4xl font-bold text-gray-900 mb-4">Записаться на консультацию</h2>
                <p className="text-xl text-gray-600">
                  Начните путь к здоровью с профессионального разбора ваших анализов
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <Card className="bg-white border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="font-['Montserrat'] text-2xl">Свяжитесь с нами</CardTitle>
                    <CardDescription>Выберите удобный способ связи</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name="Phone" className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Телефон</div>
                          <div className="text-gray-600">+7 (999) 123-45-67</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon name="Mail" className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Email</div>
                          <div className="text-gray-600">elena@nutrianaliz.ru</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Icon name="MessageSquare" className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Telegram</div>
                          <div className="text-gray-600">@nutrianaliz_elena</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Icon name="Clock" className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Часы работы</div>
                          <div className="text-gray-600">Пн-Пт: 9:00-18:00</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <h3 className="font-medium text-gray-900 mb-4">Как проходит консультация:</h3>
                      <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">1</div>
                          <div>Отправляете анализы в удобном формате</div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">2</div>
                          <div>Получаете детальную расшифровку</div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">3</div>
                          <div>Проводим онлайн-консультацию с рекомендациями</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-8">
                  <Card className="bg-white border-0 shadow-xl">
                    <CardHeader>
                      <CardTitle className="font-['Montserrat']">Быстрая запись</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12">
                        <Icon name="Calendar" className="mr-2" />
                        Записаться через WhatsApp
                      </Button>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12">
                        <Icon name="MessageSquare" className="mr-2" />
                        Записаться через Telegram
                      </Button>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12">
                        <Icon name="Phone" className="mr-2" />
                        Заказать звонок
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                    <CardContent className="p-6">
                      <div className="text-center space-y-3">
                        <Icon name="Gift" className="h-8 w-8 text-primary mx-auto" />
                        <h3 className="font-['Montserrat'] font-semibold text-gray-900">
                          Специальное предложение
                        </h3>
                        <p className="text-sm text-gray-600">
                          При записи до конца месяца — скидка 15% на первую консультацию
                        </p>
                        <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white">
                          Воспользоваться предложением
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}