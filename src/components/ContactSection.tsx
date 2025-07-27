import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ContactSection() {
  return (
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
  );
}