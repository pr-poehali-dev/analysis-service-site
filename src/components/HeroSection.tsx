import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
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
  );
}