import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { Label } from "@/components/ui/label";
import SubscriptionModal from '@/components/SubscriptionModal';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showSubscription, setShowSubscription] = useState(false);
  
  const [kerning, setKerning] = useState([0]);
  const [tracking, setTracking] = useState([0]);
  const [lineHeight, setLineHeight] = useState([1.5]);
  
  const [headingSize, setHeadingSize] = useState([32]);
  const [textSize, setTextSize] = useState([16]);
  const [padding, setPadding] = useState([16]);
  const [selectedFont, setSelectedFont] = useState('sans');
  const [selectedIcon, setSelectedIcon] = useState(0);
  
  const [hue, setHue] = useState([240]);
  const [saturation, setSaturation] = useState([100]);
  const [lightness, setLightness] = useState([50]);
  const [textHue, setTextHue] = useState([240]);
  const [bgHue, setBgHue] = useState([0]);

  const sections = [
    { id: 'home', title: 'Главная', icon: 'Home' },
    { id: 'composition', title: 'Композиция', icon: 'Layout' },
    { id: 'typography', title: 'Типографика', icon: 'Type' },
    { id: 'colors', title: 'Колористика', icon: 'Palette' },
    { id: 'styles', title: 'Стили', icon: 'Sparkles' },
    { id: 'theory', title: 'Теория', icon: 'BookOpen' },
  ];

  const skills = [
    'Создание визуально привлекательных карточек товаров',
    'Понимание композиции и визуальной иерархии',
    'Работа с типографикой и цветовыми схемами',
    'Применение различных стилей дизайна',
    'Знание стандартов маркетплейсов',
  ];

  const marketplaces = [
    { name: 'Wildberries', size: '900×1200px' },
    { name: 'Ozon', size: '1200×1200px' },
    { name: 'Яндекс Маркет', size: '900×1200px' },
  ];

  const colorSchemes = [
    { name: 'Монохромная', description: 'Оттенки одного цвета', colors: [240, 240, 240] },
    { name: 'Комплементарная', description: 'Противоположные цвета', colors: [240, 60, 180] },
    { name: 'Триадная', description: 'Три равноудаленных цвета', colors: [0, 120, 240] },
    { name: 'Аналоговая', description: 'Соседние цвета на круге', colors: [210, 240, 270] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      {showSubscription && <SubscriptionModal onClose={() => setShowSubscription(false)} />}
      
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Инфографика МП
            </span>
          </div>
          <Button 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            onClick={() => setShowSubscription(true)}
          >
            <Icon name="CreditCard" size={16} className="mr-2" />
            Купить подписку
          </Button>
        </div>
      </header>

      <nav className="sticky top-16 z-40 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'default' : 'ghost'}
                className={activeSection === section.id ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : ''}
                onClick={() => setActiveSection(section.id)}
              >
                <Icon name={section.icon as any} size={16} className="mr-2" />
                {section.title}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Гид по дизайну инфографики
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Профессиональное обучение созданию эффективных карточек товаров для маркетплейсов
              </p>
            </div>

            <Card className="border-2 border-purple-100 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" className="text-purple-600" />
                  Навыки, которые вы получите
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {sections.filter(s => s.id !== 'home').map((section) => (
                <Card 
                  key={section.id}
                  className="cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-purple-200 bg-gradient-to-br from-white to-purple-50/20"
                  onClick={() => setActiveSection(section.id)}
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-4">
                      <Icon name={section.icon as any} size={24} className="text-white" />
                    </div>
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription>
                      {section.id === 'composition' && 'Основы визуальной композиции и баланса'}
                      {section.id === 'typography' && 'Работа со шрифтами и текстом'}
                      {section.id === 'colors' && 'Теория цвета и цветовые схемы'}
                      {section.id === 'styles' && 'Популярные стили дизайна'}
                      {section.id === 'theory' && 'Базовые знания и ресурсы'}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'composition' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-2">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Композиция
              </h2>
              <p className="text-muted-foreground">Изучите основы визуального баланса и гармонии</p>
            </div>

            <Tabs defaultValue="theory" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="theory">Теория</TabsTrigger>
                <TabsTrigger value="practice">Практика</TabsTrigger>
              </TabsList>

              <TabsContent value="theory" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Виды симметрии в карточках</CardTitle>
                    <CardDescription>Симметрия создает баланс и гармонию в композиции</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-6 border-2 border-purple-200 rounded-xl bg-gradient-to-br from-purple-50 to-white">
                        <div className="h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg mb-3 flex items-center justify-center relative">
                          <div className="absolute inset-0 flex">
                            <div className="w-1/2 border-r-2 border-dashed border-purple-300" />
                          </div>
                          <div className="flex gap-4 z-10">
                            <div className="w-12 h-12 bg-indigo-500 rounded-lg" />
                            <div className="w-12 h-12 bg-indigo-500 rounded-lg" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-center">Вертикальная</h3>
                        <p className="text-xs text-center text-muted-foreground mt-1">Зеркальное отражение относительно вертикальной оси</p>
                      </div>

                      <div className="p-6 border-2 border-purple-200 rounded-xl bg-gradient-to-br from-purple-50 to-white">
                        <div className="h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg mb-3 flex items-center justify-center relative">
                          <div className="absolute inset-0 flex flex-col">
                            <div className="h-1/2 border-b-2 border-dashed border-purple-300" />
                          </div>
                          <div className="flex flex-col gap-4 z-10">
                            <div className="w-12 h-4 bg-purple-500 rounded" />
                            <div className="w-12 h-4 bg-purple-500 rounded" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-center">Горизонтальная</h3>
                        <p className="text-xs text-center text-muted-foreground mt-1">Зеркальное отражение относительно горизонтальной оси</p>
                      </div>

                      <div className="p-6 border-2 border-purple-200 rounded-xl bg-gradient-to-br from-purple-50 to-white">
                        <div className="h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg mb-3 flex items-center justify-center relative">
                          <div className="absolute inset-0">
                            <div className="w-full h-full border-2 border-dashed border-purple-300" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }} />
                          </div>
                          <div className="grid grid-cols-2 gap-2 z-10">
                            <div className="w-8 h-8 bg-pink-500 rounded-lg" />
                            <div className="w-8 h-8 bg-transparent" />
                            <div className="w-8 h-8 bg-transparent" />
                            <div className="w-8 h-8 bg-pink-500 rounded-lg" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-center">Диагональная</h3>
                        <p className="text-xs text-center text-muted-foreground mt-1">Отражение относительно диагональной оси</p>
                      </div>

                      <div className="p-6 border-2 border-purple-200 rounded-xl bg-gradient-to-br from-purple-50 to-white">
                        <div className="h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg mb-3 flex items-center justify-center relative">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-full border-4 border-dashed border-purple-300" />
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full" />
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-amber-500 rounded-full" />
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-amber-500 rounded-full" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-center">Радиальная</h3>
                        <p className="text-xs text-center text-muted-foreground mt-1">Элементы расположены вокруг центральной точки</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Визуальный вес элементов</CardTitle>
                    <CardDescription>Размер, цвет, контраст и положение влияют на восприятие важности</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-end justify-center gap-4 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg shadow-md mb-2" />
                        <p className="text-xs text-muted-foreground">Средний</p>
                      </div>
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg shadow-lg mb-2" />
                        <p className="text-xs font-bold">Тяжелый</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-lg shadow-sm mb-2" />
                        <p className="text-xs text-muted-foreground">Легкий</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="p-3 bg-white rounded-lg border">
                        <p className="text-sm font-semibold mb-1">Размер</p>
                        <p className="text-xs text-muted-foreground">Крупные элементы тяжелее мелких</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border">
                        <p className="text-sm font-semibold mb-1">Цвет</p>
                        <p className="text-xs text-muted-foreground">Темные и яркие цвета тяжелее светлых</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border">
                        <p className="text-sm font-semibold mb-1">Положение</p>
                        <p className="text-xs text-muted-foreground">Верхние элементы кажутся тяжелее нижних</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Фокусные центры и иерархия</CardTitle>
                    <CardDescription>Как направить взгляд человека куда нужно</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border-2 border-purple-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="Eye" className="text-purple-600" />
                          <span className="font-semibold">Правило третей</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Важные элементы на пересечении линий, делящих макет на трети</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border-2 border-purple-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="TrendingDown" className="text-purple-600" />
                          <span className="font-semibold">Z-паттерн</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Взгляд движется слева направо, сверху вниз по Z-образной траектории</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border-2 border-purple-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="Layers" className="text-purple-600" />
                          <span className="font-semibold">F-паттерн</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Для текстовых блоков: горизонтальное движение вверху, вертикальное слева</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border-2 border-purple-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="Sparkles" className="text-purple-600" />
                          <span className="font-semibold">Золотое сечение</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Математическая пропорция 1:1.618 для гармоничного расположения</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Направляющие</CardTitle>
                    <CardDescription>Для чего нужны и как использовать</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border-2 border-purple-200 relative">
                      <div className="absolute inset-4 border-2 border-dashed border-purple-400 opacity-30" />
                      <div className="absolute inset-4 flex justify-center">
                        <div className="border-l-2 border-dashed border-purple-400 opacity-30" />
                      </div>
                      <div className="absolute inset-4 flex items-center">
                        <div className="w-full border-t-2 border-dashed border-purple-400 opacity-30" />
                      </div>
                      <div className="relative z-10 space-y-3">
                        <div className="flex items-center gap-2">
                          <Icon name="AlignCenter" className="text-purple-600" />
                          <span className="text-sm font-semibold">Выравнивание элементов</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Grid3x3" className="text-purple-600" />
                          <span className="text-sm font-semibold">Создание сетки</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Ruler" className="text-purple-600" />
                          <span className="text-sm font-semibold">Контроль отступов</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Maximize2" className="text-purple-600" />
                          <span className="text-sm font-semibold">Соблюдение пропорций</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="practice" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Интерактивное упражнение: Баланс композиции</CardTitle>
                    <CardDescription>Расположите элементы так, чтобы композиция была сбалансированной</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-96 border-2 border-dashed border-purple-300 rounded-xl bg-gradient-to-br from-purple-50/50 to-indigo-50/50 p-4">
                      <div className="absolute inset-4 border-2 border-dashed border-purple-200 opacity-50" />
                      <div className="absolute left-1/2 top-4 bottom-4 border-l-2 border-dashed border-purple-200 opacity-50" />
                      <div className="absolute top-1/2 left-4 right-4 border-t-2 border-dashed border-purple-200 opacity-50" />
                      
                      <div className="absolute top-4 left-0 right-0 text-center text-sm text-muted-foreground z-10">
                        Перетащите элементы для создания гармоничной композиции
                      </div>
                      
                      <div className="relative h-full flex items-center justify-around pt-8">
                        <div className="h-20 w-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg shadow-lg cursor-move hover:scale-110 transition-transform flex items-center justify-center text-white font-bold">
                          A
                        </div>
                        <div className="h-16 w-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-lg cursor-move hover:scale-110 transition-transform flex items-center justify-center text-white font-bold">
                          B
                        </div>
                        <div className="h-24 w-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg cursor-move hover:scale-110 transition-transform flex items-center justify-center text-white font-bold">
                          C
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                      <p className="text-sm">
                        <strong>💡 Подсказка:</strong> Самый крупный элемент (C) имеет больший визуальный вес. 
                        Попробуйте сбалансировать его с помощью двух меньших элементов на противоположной стороне.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'typography' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-2">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Типографика
              </h2>
              <p className="text-muted-foreground">Искусство работы с текстом и шрифтами</p>
            </div>

            <Tabs defaultValue="theory" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="theory">Теория</TabsTrigger>
                <TabsTrigger value="practice">Практика</TabsTrigger>
              </TabsList>

              <TabsContent value="theory" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Параметры шрифта</CardTitle>
                    <CardDescription>Настройте параметры и посмотрите как они влияют на текст</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label>Кернинг: {kerning[0]}</Label>
                        <span className="text-xs text-muted-foreground">Расстояние между отдельными парами букв</span>
                      </div>
                      <Slider value={kerning} onValueChange={setKerning} min={-5} max={5} step={0.1} className="mb-4" />
                      <p className="text-2xl font-semibold" style={{ letterSpacing: `${kerning[0]}px` }}>
                        ТИПОГРАФИКА
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label>Трекинг: {tracking[0]}</Label>
                        <span className="text-xs text-muted-foreground">Расстояние между всеми символами</span>
                      </div>
                      <Slider value={tracking} onValueChange={setTracking} min={-2} max={10} step={0.1} className="mb-4" />
                      <p className="text-lg" style={{ letterSpacing: `${tracking[0]}px` }}>
                        Расстояние между всеми символами в тексте
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label>Интерлиньяж: {lineHeight[0].toFixed(1)}</Label>
                        <span className="text-xs text-muted-foreground">Межстрочное расстояние</span>
                      </div>
                      <Slider value={lineHeight} onValueChange={setLineHeight} min={1} max={3} step={0.1} className="mb-4" />
                      <p className="text-base" style={{ lineHeight: lineHeight[0] }}>
                        Межстрочное расстояние влияет на читаемость текста. Оптимальное значение зависит от размера шрифта и длины строки. Слишком маленький интерлиньяж делает текст трудночитаемым.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Виды шрифтов</CardTitle>
                    <CardDescription>Основные категории шрифтов и их применение</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border-2 border-purple-200 rounded-lg bg-gradient-to-br from-white to-purple-50">
                        <Badge className="mb-2 bg-indigo-600">Гротески (Sans-serif)</Badge>
                        <p className="text-lg font-sans mb-2">Современный чистый стиль</p>
                        <p className="text-sm text-muted-foreground">✓ Заголовки и UI элементы</p>
                        <p className="text-sm text-muted-foreground">✓ Веб и мобильные приложения</p>
                      </div>
                      <div className="p-4 border-2 border-purple-200 rounded-lg bg-gradient-to-br from-white to-purple-50">
                        <Badge className="mb-2 bg-purple-600">Антиквы (Serif)</Badge>
                        <p className="text-lg font-serif mb-2">Классический элегантный</p>
                        <p className="text-sm text-muted-foreground">✓ Длинные тексты и статьи</p>
                        <p className="text-sm text-muted-foreground">✓ Печатные издания</p>
                      </div>
                      <div className="p-4 border-2 border-purple-200 rounded-lg bg-gradient-to-br from-white to-purple-50">
                        <Badge className="mb-2 bg-amber-600">Декоративные</Badge>
                        <p className="text-lg font-bold italic mb-2">Выразительные акценты</p>
                        <p className="text-sm text-muted-foreground">✓ Логотипы и бренднейминг</p>
                        <p className="text-sm text-muted-foreground">✓ Акцентные заголовки</p>
                      </div>
                      <div className="p-4 border-2 border-purple-200 rounded-lg bg-gradient-to-br from-white to-purple-50">
                        <Badge className="mb-2 bg-pink-600">Моноширинные</Badge>
                        <p className="text-lg font-mono mb-2">Технический стиль</p>
                        <p className="text-sm text-muted-foreground">✓ Код и таблицы данных</p>
                        <p className="text-sm text-muted-foreground">✓ Технические документы</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="practice" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Настройте типографику карточки</CardTitle>
                    <CardDescription>Попробуйте создать гармоничную типографическую композицию</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label>Размер заголовка: {headingSize[0]}px</Label>
                          <Slider value={headingSize} onValueChange={setHeadingSize} min={20} max={48} step={1} className="mt-2" />
                        </div>
                        <div>
                          <Label>Размер текста: {textSize[0]}px</Label>
                          <Slider value={textSize} onValueChange={setTextSize} min={12} max={24} step={1} className="mt-2" />
                        </div>
                        <div>
                          <Label>Отступы: {padding[0]}px</Label>
                          <Slider value={padding} onValueChange={setPadding} min={8} max={32} step={2} className="mt-2" />
                        </div>
                        <div>
                          <Label>Шрифт</Label>
                          <div className="flex gap-2 mt-2">
                            <Button 
                              variant={selectedFont === 'sans' ? 'default' : 'outline'} 
                              onClick={() => setSelectedFont('sans')}
                              className="flex-1"
                            >
                              Sans
                            </Button>
                            <Button 
                              variant={selectedFont === 'serif' ? 'default' : 'outline'} 
                              onClick={() => setSelectedFont('serif')}
                              className="flex-1"
                            >
                              Serif
                            </Button>
                            <Button 
                              variant={selectedFont === 'mono' ? 'default' : 'outline'} 
                              onClick={() => setSelectedFont('mono')}
                              className="flex-1"
                            >
                              Mono
                            </Button>
                          </div>
                        </div>
                        <div>
                          <Label>Выберите подходящую иконку</Label>
                          <p className="text-xs text-muted-foreground mb-2">Какая иконка лучше подходит для премиум товара?</p>
                          <div className="grid grid-cols-3 gap-2 mt-2">
                            {[0, 1, 2].map((idx) => (
                              <div 
                                key={idx}
                                className={`p-4 border-2 rounded-lg cursor-pointer transition-all text-center ${ 
                                  selectedIcon === idx 
                                    ? 'border-indigo-600 bg-indigo-50' 
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                                onClick={() => setSelectedIcon(idx)}
                              >
                                <Icon 
                                  name={idx === 0 ? 'Star' : idx === 1 ? 'Heart' : 'Award'} 
                                  className={`mx-auto ${selectedIcon === idx ? 'text-indigo-600' : 'text-gray-400'}`}
                                  size={32}
                                />
                                <p className="text-xs mt-1">
                                  {idx === 0 ? 'Звезда' : idx === 1 ? 'Сердце' : 'Награда'}
                                </p>
                              </div>
                            ))}
                          </div>
                          {selectedIcon === 2 && (
                            <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded text-xs text-green-700">
                              ✓ Правильно! Иконка награды лучше передает премиальность
                            </div>
                          )}
                        </div>
                      </div>
                      <div 
                        className="border-2 border-purple-200 rounded-xl bg-white"
                        style={{ padding: `${padding[0]}px` }}
                      >
                        <h3 
                          className={`font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent ${
                            selectedFont === 'serif' ? 'font-serif' : selectedFont === 'mono' ? 'font-mono' : 'font-sans'
                          }`}
                          style={{ fontSize: `${headingSize[0]}px` }}
                        >
                          Премиум товар
                        </h3>
                        <p 
                          className={`text-muted-foreground mb-4 ${
                            selectedFont === 'serif' ? 'font-serif' : selectedFont === 'mono' ? 'font-mono' : 'font-sans'
                          }`}
                          style={{ fontSize: `${textSize[0]}px` }}
                        >
                          Высокое качество по доступной цене
                        </p>
                        <div className="flex items-center gap-4">
                          <Icon 
                            name={selectedIcon === 0 ? 'Star' : selectedIcon === 1 ? 'Heart' : 'Award'} 
                            size={28} 
                            className="text-indigo-600" 
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Правило внутренних и внешних отступов</CardTitle>
                    <CardDescription>Внешние отступы должны быть больше внутренних для лучшей группировки</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-8 bg-red-50 border-2 border-red-200 rounded-lg">
                        <Badge variant="destructive" className="mb-4">Неправильно</Badge>
                        <div className="bg-white p-2 rounded">
                          <div className="bg-indigo-100 p-2 rounded mb-2">
                            <p className="text-sm">Элемент 1</p>
                          </div>
                          <div className="bg-indigo-100 p-2 rounded">
                            <p className="text-sm">Элемент 2</p>
                          </div>
                        </div>
                        <p className="text-xs text-red-700 mt-2">Все отступы одинаковые — нет визуальной группировки</p>
                      </div>
                      <div className="p-8 bg-green-50 border-2 border-green-200 rounded-lg">
                        <Badge className="mb-4 bg-green-600">Правильно</Badge>
                        <div className="bg-white p-6 rounded">
                          <div className="bg-indigo-100 p-3 rounded mb-6">
                            <p className="text-sm">Элемент 1</p>
                          </div>
                          <div className="bg-indigo-100 p-3 rounded">
                            <p className="text-sm">Элемент 2</p>
                          </div>
                        </div>
                        <p className="text-xs text-green-700 mt-2">Внешние отступы больше внутренних — элементы сгруппированы</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'colors' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-2">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Колористика
              </h2>
              <p className="text-muted-foreground">Теория цвета и цветовые гармонии</p>
            </div>

            <Tabs defaultValue="theory" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="theory">Теория</TabsTrigger>
                <TabsTrigger value="practice">Практика</TabsTrigger>
              </TabsList>

              <TabsContent value="theory" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Теория цвета</CardTitle>
                    <CardDescription>Основы работы с цветом в дизайне</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-full h-24 bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 rounded-lg mb-2" />
                        <p className="text-sm font-semibold">Основные цвета</p>
                        <p className="text-xs text-muted-foreground">Красный, желтый, синий</p>
                      </div>
                      <div className="text-center">
                        <div className="w-full h-24 bg-gradient-to-br from-orange-500 via-green-500 to-purple-500 rounded-lg mb-2" />
                        <p className="text-sm font-semibold">Вторичные цвета</p>
                        <p className="text-xs text-muted-foreground">Оранжевый, зеленый, фиолетовый</p>
                      </div>
                      <div className="text-center">
                        <div className="w-full h-24 bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 rounded-lg mb-2" />
                        <p className="text-sm font-semibold">Нейтральные</p>
                        <p className="text-xs text-muted-foreground">Черный, белый, серый</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Цветовые схемы</CardTitle>
                    <CardDescription>Примеры гармоничных цветовых сочетаний</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {colorSchemes.map((scheme) => (
                        <div key={scheme.name} className="p-4 border-2 border-purple-200 rounded-lg">
                          <h3 className="font-semibold mb-2">{scheme.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{scheme.description}</p>
                          <div className="flex gap-2">
                            {scheme.colors.map((hue, idx) => (
                              <div 
                                key={idx}
                                className="flex-1 h-12 rounded-lg shadow-md" 
                                style={{ backgroundColor: `hsl(${hue}, 70%, 50%)` }}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Распространенные ошибки в колористике</CardTitle>
                    <CardDescription>Чего следует избегать при работе с цветом</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { error: 'Неоновые цвета', desc: 'Слишком яркие цвета (100% насыщенность) режут глаз', example: 'hsl(300, 100%, 50%)' },
                        { error: 'Грязные оттенки', desc: 'Низкая насыщенность + темнота создает грязь', example: 'hsl(40, 20%, 30%)' },
                        { error: 'Плохой контраст', desc: 'Текст сливается с фоном, нечитаемо', example: 'hsl(210, 50%, 70%)' },
                        { error: 'Слишком много цветов', desc: 'Более 3-4 основных цветов создают хаос', example: 'hsl(180, 70%, 50%)' },
                      ].map((item) => (
                        <div key={item.error} className="flex items-start gap-3 p-3 border border-red-200 rounded-lg bg-red-50/30">
                          <div className="w-12 h-12 rounded-lg flex-shrink-0" style={{ backgroundColor: item.example }} />
                          <div className="flex-1">
                            <div className="flex items-start gap-2">
                              <Icon name="AlertCircle" className="text-red-500 mt-0.5 flex-shrink-0" size={20} />
                              <div>
                                <p className="font-semibold text-red-900">{item.error}</p>
                                <p className="text-sm text-red-700">{item.desc}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="practice" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Интерактивный подбор цвета</CardTitle>
                    <CardDescription>Настройте цветовую схему карточки с помощью цветового круга</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label>Цвет текста: {textHue[0]}°</Label>
                          <Slider value={textHue} onValueChange={setTextHue} min={0} max={360} className="mt-2" />
                          <div 
                            className="h-12 rounded-lg border-2 border-purple-200 mt-2"
                            style={{ backgroundColor: `hsl(${textHue[0]}, 70%, 50%)` }}
                          />
                        </div>
                        <div>
                          <Label>Цвет фона: {bgHue[0]}°</Label>
                          <Slider value={bgHue} onValueChange={setBgHue} min={0} max={360} className="mt-2" />
                          <div 
                            className="h-12 rounded-lg border-2 border-purple-200 mt-2"
                            style={{ backgroundColor: `hsl(${bgHue[0]}, 30%, 95%)` }}
                          />
                        </div>
                        
                        <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border-2 border-purple-200">
                          <p className="text-sm font-semibold mb-2">Цветовой круг (HSL)</p>
                          <div className="w-full h-8 rounded-full" style={{
                            background: 'linear-gradient(to right, hsl(0, 70%, 50%), hsl(60, 70%, 50%), hsl(120, 70%, 50%), hsl(180, 70%, 50%), hsl(240, 70%, 50%), hsl(300, 70%, 50%), hsl(360, 70%, 50%))'
                          }} />
                          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                            <span>0°</span>
                            <span>120°</span>
                            <span>240°</span>
                            <span>360°</span>
                          </div>
                        </div>
                      </div>
                      
                      <div 
                        className="p-8 rounded-xl relative overflow-hidden min-h-[300px] flex flex-col justify-center"
                        style={{ backgroundColor: `hsl(${bgHue[0]}, 30%, 95%)` }}
                      >
                        <div className="relative z-10">
                          <h3 
                            className="text-2xl font-bold mb-2"
                            style={{ color: `hsl(${textHue[0]}, 70%, 40%)` }}
                          >
                            Товар премиум
                          </h3>
                          <p 
                            className="text-sm mb-4"
                            style={{ color: `hsl(${textHue[0]}, 50%, 50%)` }}
                          >
                            Лучшее качество для вас
                          </p>
                          <Button 
                            className="text-white"
                            style={{ backgroundColor: `hsl(${textHue[0]}, 70%, 50%)` }}
                          >
                            Купить сейчас
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm">
                        <strong>💡 Совет:</strong> Используйте комплементарные цвета (противоположные на круге, разница ~180°) 
                        для создания контраста. Например, если текст синий (240°), фон может быть оранжевым (30-60°).
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'styles' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-2">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Стили карточек для маркетплейсов
              </h2>
              <p className="text-muted-foreground">Популярные стилистические направления</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-50 to-white p-8 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-24 h-24 mx-auto rounded-lg border-2 border-gray-300" />
                    <p className="text-sm font-medium text-gray-600">Продукт</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Minus" className="text-gray-600" />
                    Минимализм
                  </CardTitle>
                  <CardDescription>
                    <strong>Основные принципы:</strong> Чистота, простота, много белого пространства. 
                    Фокус полностью на продукте без отвлекающих элементов.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Простые геометрические формы</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Нейтральная цветовая палитра</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Минимум текста и деталей</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 p-8 flex items-center justify-center">
                  <div className="space-y-2">
                    <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm" />
                    <div className="flex gap-2">
                      <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm" />
                      <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Sparkles" className="text-purple-600" />
                    Абстракционизм
                  </CardTitle>
                  <CardDescription>
                    <strong>Основные принципы:</strong> Смелые формы, яркие градиенты, необычная геометрия. 
                    Привлекает внимание и выделяется среди конкурентов.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Яркие градиенты и цвета</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Абстрактные геометрические фигуры</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Креативные композиции</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-amber-50 to-orange-100 p-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-amber-200 to-orange-300 shadow-2xl" />
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-white/50 backdrop-blur-sm" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Camera" className="text-amber-600" />
                    Реализм
                  </CardTitle>
                  <CardDescription>
                    <strong>Основные принципы:</strong> Фотореалистичные изображения, натуральные цвета, 
                    четкие детали. Показывает товар таким, каким он является.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Качественные фотографии товара</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Естественное освещение и тени</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Реалистичная цветопередача</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-slate-100 to-blue-100 p-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-slate-300 to-blue-400 shadow-xl" />
                    <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-amber-400" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Layers" className="text-blue-600" />
                    Неореализм
                  </CardTitle>
                  <CardDescription>
                    <strong>Основные принципы:</strong> Сочетание реалистичности с современной графикой, 
                    3D-эффектами и стилизацией. Баланс между реальностью и дизайном.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>3D-рендеры и визуализации</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Стилизованные фотографии</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Графические элементы + фото</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'theory' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-2">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Теория инфографики
              </h2>
              <p className="text-muted-foreground">Базовые знания и полезные ресурсы</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Размеры карточек маркетплейсов</CardTitle>
                <CardDescription>Стандартные размеры для популярных площадок</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {marketplaces.map((mp) => (
                    <div key={mp.name} className="p-4 border-2 border-purple-200 rounded-lg bg-gradient-to-br from-purple-50 to-white text-center">
                      <Icon name="ShoppingBag" className="mx-auto mb-2 text-purple-600" size={32} />
                      <h3 className="font-semibold mb-1">{mp.name}</h3>
                      <Badge variant="secondary">{mp.size}</Badge>
                      <p className="text-xs text-muted-foreground mt-2">
                        {mp.name === 'Ozon' ? 'Квадратный формат' : 'Вертикальный формат'}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Программы для создания макетов</CardTitle>
                <CardDescription>Профессиональные инструменты дизайнера</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border-2 border-indigo-200 rounded-lg bg-gradient-to-br from-indigo-50 to-white">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Palette" className="text-indigo-600" />
                      Adobe Photoshop
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">Профессиональная обработка изображений и создание растровой графики</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-1">
                        <Icon name="Check" size={12} className="text-green-600" />
                        <span>Работа с фотографиями</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Check" size={12} className="text-green-600" />
                        <span>Ретушь и коллажирование</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-2 border-purple-200 rounded-lg bg-gradient-to-br from-purple-50 to-white">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Figma" className="text-purple-600" />
                      Figma
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">Современный UI/UX дизайн в браузере с совместной работой</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-1">
                        <Icon name="Check" size={12} className="text-green-600" />
                        <span>Векторная графика</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Check" size={12} className="text-green-600" />
                        <span>Командная работа онлайн</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Суть инфографики для маркетплейсов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Инфографика карточек товаров — это визуальное представление ключевых характеристик и преимуществ продукта. 
                    Цель: быстро и эффективно донести информацию до покупателя, выделить товар среди конкурентов и повысить конверсию.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 mb-4">
                    <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <Icon name="Target" className="text-green-600 mb-2" size={24} />
                      <p className="text-sm font-medium mb-1">Привлечь внимание</p>
                      <p className="text-xs text-muted-foreground">Выделиться среди сотен товаров</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                      <Icon name="MessageCircle" className="text-blue-600 mb-2" size={24} />
                      <p className="text-sm font-medium mb-1">Донести информацию</p>
                      <p className="text-xs text-muted-foreground">Показать преимущества товара</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                      <Icon name="TrendingUp" className="text-purple-600 mb-2" size={24} />
                      <p className="text-sm font-medium mb-1">Увеличить продажи</p>
                      <p className="text-xs text-muted-foreground">Повысить конверсию в покупку</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border-2 border-amber-200">
                    <p className="text-sm font-semibold mb-2">Ключевые элементы эффективной инфографики:</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Качественное изображение продукта</li>
                      <li>• Четкие и читаемые тексты с преимуществами</li>
                      <li>• Визуальные акценты на важных характеристиках</li>
                      <li>• Грамотная композиция и цветовая схема</li>
                      <li>• Соответствие стилю бренда и категории товара</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Полезные ресурсы для дизайнера</CardTitle>
                <CardDescription>Инструменты и сервисы для создания качественной инфографики</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Unsplash', desc: 'Бесплатные стоковые фотографии высокого качества', icon: 'Image', category: 'Стоковые фото' },
                    { name: 'Pexels', desc: 'Бесплатные фото и видео для коммерческого использования', icon: 'Camera', category: 'Стоковые фото' },
                    { name: 'Coolors', desc: 'Генератор цветовых палитр и подбор гармоничных сочетаний', icon: 'Palette', category: 'Цветовые схемы' },
                    { name: 'Adobe Color', desc: 'Профессиональный инструмент для работы с цветовым кругом', icon: 'Droplet', category: 'Цветовые схемы' },
                    { name: 'Remove.bg', desc: 'Автоматическое удаление фона с изображений', icon: 'Scissors', category: 'Обработка фото' },
                    { name: 'Midjourney', desc: 'AI генерация уникальных изображений по текстовому описанию', icon: 'Sparkles', category: 'AI Нейросети' },
                    { name: 'Topaz AI', desc: 'Улучшение качества и увеличение разрешения фотографий', icon: 'Zap', category: 'AI Нейросети' },
                  ].map((resource) => (
                    <div key={resource.name} className="flex items-center gap-4 p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50/50 transition-colors cursor-pointer">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <Icon name={resource.icon as any} className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{resource.name}</h3>
                          <Badge variant="secondary" className="text-xs">{resource.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{resource.desc}</p>
                      </div>
                      <Icon name="ExternalLink" className="text-muted-foreground flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="mt-16 border-t bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Гид по инфографике маркетплейсов
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
