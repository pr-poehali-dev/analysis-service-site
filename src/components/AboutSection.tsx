import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
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
  );
}