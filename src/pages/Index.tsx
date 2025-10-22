import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [kerning, setKerning] = useState([0]);
  const [tracking, setTracking] = useState([0]);
  const [lineHeight, setLineHeight] = useState([1.5]);
  const [hue, setHue] = useState([240]);
  const [saturation, setSaturation] = useState([100]);
  const [lightness, setLightness] = useState([50]);

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
    { name: 'Монохромная', description: 'Оттенки одного цвета' },
    { name: 'Комплементарная', description: 'Противоположные цвета' },
    { name: 'Триадная', description: 'Три равноудаленных цвета' },
    { name: 'Аналоговая', description: 'Соседние цвета на круге' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Инфографика МП
            </span>
          </div>
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
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
                    <CardTitle>Виды симметрии</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {['Вертикальная', 'Горизонтальная', 'Диагональная', 'Радиальная'].map((type) => (
                        <div key={type} className="p-6 border-2 border-purple-200 rounded-xl bg-gradient-to-br from-purple-50 to-white">
                          <div className="h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg mb-3 flex items-center justify-center">
                            <Icon name="Grid3x3" size={48} className="text-purple-400" />
                          </div>
                          <h3 className="font-semibold text-center">{type}</h3>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Визуальный вес элементов</CardTitle>
                    <CardDescription>Размер, цвет и положение влияют на восприятие важности</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end justify-center gap-4 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg shadow-md" />
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg shadow-lg" />
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-lg shadow-sm" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Фокусные центры</CardTitle>
                    <CardDescription>Управление вниманием пользователя</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {['Правило третей', 'Z-паттерн', 'F-паттерн', 'Золотое сечение'].map((rule) => (
                        <div key={rule} className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg">
                          <Icon name="Eye" className="text-purple-600" />
                          <span className="font-medium">{rule}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="practice" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Интерактивное упражнение</CardTitle>
                    <CardDescription>Расположите элементы, соблюдая визуальный баланс</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-96 border-2 border-dashed border-purple-300 rounded-xl bg-gradient-to-br from-purple-50/50 to-indigo-50/50 grid grid-cols-3 gap-px p-4">
                      <div className="col-span-3 text-center text-sm text-muted-foreground mb-4">
                        Перетащите элементы для создания гармоничной композиции
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="h-20 w-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg shadow-lg cursor-move hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="h-16 w-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-lg cursor-move hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="h-24 w-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg cursor-move hover:scale-110 transition-transform" />
                      </div>
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
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label>Кернинг: {kerning[0]}</Label>
                      </div>
                      <Slider value={kerning} onValueChange={setKerning} min={-5} max={5} step={0.1} className="mb-4" />
                      <p className="text-2xl font-semibold" style={{ letterSpacing: `${kerning[0]}px` }}>
                        ТИПОГРАФИКА
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label>Трекинг: {tracking[0]}</Label>
                      </div>
                      <Slider value={tracking} onValueChange={setTracking} min={-2} max={10} step={0.1} className="mb-4" />
                      <p className="text-lg" style={{ letterSpacing: `${tracking[0]}px` }}>
                        Расстояние между всеми символами в тексте
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label>Интерлиньяж: {lineHeight[0].toFixed(1)}</Label>
                      </div>
                      <Slider value={lineHeight} onValueChange={setLineHeight} min={1} max={3} step={0.1} className="mb-4" />
                      <p className="text-base" style={{ lineHeight: lineHeight[0] }}>
                        Межстрочное расстояние влияет на читаемость текста. Оптимальное значение зависит от размера шрифта и длины строки.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Виды шрифтов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border-2 border-purple-200 rounded-lg bg-gradient-to-br from-white to-purple-50">
                        <Badge className="mb-2 bg-indigo-600">Гротески</Badge>
                        <p className="text-lg font-sans">Современный чистый стиль</p>
                        <p className="text-sm text-muted-foreground mt-1">Для заголовков и UI</p>
                      </div>
                      <div className="p-4 border-2 border-purple-200 rounded-lg bg-gradient-to-br from-white to-purple-50">
                        <Badge className="mb-2 bg-purple-600">Антиквы</Badge>
                        <p className="text-lg font-serif">Классический элегантный</p>
                        <p className="text-sm text-muted-foreground mt-1">Для длинных текстов</p>
                      </div>
                      <div className="p-4 border-2 border-purple-200 rounded-lg bg-gradient-to-br from-white to-purple-50">
                        <Badge className="mb-2 bg-amber-600">Декоративные</Badge>
                        <p className="text-lg font-bold italic">Выразительные акценты</p>
                        <p className="text-sm text-muted-foreground mt-1">Для заголовков</p>
                      </div>
                      <div className="p-4 border-2 border-purple-200 rounded-lg bg-gradient-to-br from-white to-purple-50">
                        <Badge className="mb-2 bg-pink-600">Моноширинные</Badge>
                        <p className="text-lg font-mono">Технический стиль</p>
                        <p className="text-sm text-muted-foreground mt-1">Для кода и данных</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="practice" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Настройте типографику карточки</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label>Размер заголовка</Label>
                          <Slider defaultValue={[32]} min={20} max={48} step={1} className="mt-2" />
                        </div>
                        <div>
                          <Label>Размер текста</Label>
                          <Slider defaultValue={[16]} min={12} max={24} step={1} className="mt-2" />
                        </div>
                        <div>
                          <Label>Отступы</Label>
                          <Slider defaultValue={[16]} min={8} max={32} step={2} className="mt-2" />
                        </div>
                      </div>
                      <div className="p-6 border-2 border-purple-200 rounded-xl bg-white">
                        <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                          Премиум товар
                        </h3>
                        <p className="text-base text-muted-foreground mb-4">
                          Высокое качество по доступной цене
                        </p>
                        <div className="flex items-center gap-4">
                          <Icon name="Star" size={20} className="text-amber-500" />
                          <Icon name="Heart" size={20} className="text-pink-500" />
                          <Icon name="ShoppingCart" size={20} className="text-purple-600" />
                        </div>
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
                    <CardTitle>Цветовые схемы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {colorSchemes.map((scheme) => (
                        <div key={scheme.name} className="p-4 border-2 border-purple-200 rounded-lg">
                          <h3 className="font-semibold mb-2">{scheme.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{scheme.description}</p>
                          <div className="flex gap-2">
                            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
                            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600" />
                            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Распространенные ошибки</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { error: 'Неоновые цвета', desc: 'Слишком яркие, режут глаз' },
                        { error: 'Грязные оттенки', desc: 'Низкая насыщенность + темнота' },
                        { error: 'Плохой контраст', desc: 'Текст сливается с фоном' },
                        { error: 'Слишком много цветов', desc: 'Более 3-4 основных цветов' },
                      ].map((item) => (
                        <div key={item.error} className="flex items-start gap-3 p-3 border border-red-200 rounded-lg bg-red-50/30">
                          <Icon name="AlertCircle" className="text-red-500 mt-0.5" size={20} />
                          <div>
                            <p className="font-semibold text-red-900">{item.error}</p>
                            <p className="text-sm text-red-700">{item.desc}</p>
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
                    <CardDescription>Настройте цветовую схему карточки</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label>Оттенок (Hue): {hue[0]}°</Label>
                          <Slider value={hue} onValueChange={setHue} min={0} max={360} className="mt-2" />
                        </div>
                        <div>
                          <Label>Насыщенность: {saturation[0]}%</Label>
                          <Slider value={saturation} onValueChange={setSaturation} min={0} max={100} className="mt-2" />
                        </div>
                        <div>
                          <Label>Светлота: {lightness[0]}%</Label>
                          <Slider value={lightness} onValueChange={setLightness} min={0} max={100} className="mt-2" />
                        </div>
                        <div 
                          className="h-24 rounded-lg border-2 border-purple-200"
                          style={{ 
                            backgroundColor: `hsl(${hue[0]}, ${saturation[0]}%, ${lightness[0]}%)`
                          }}
                        />
                      </div>
                      <div 
                        className="p-8 rounded-xl relative overflow-hidden"
                        style={{ 
                          backgroundColor: `hsl(${hue[0]}, ${saturation[0]}%, ${lightness[0]}%)`
                        }}
                      >
                        <div className="relative z-10">
                          <h3 
                            className="text-2xl font-bold mb-2"
                            style={{ 
                              color: lightness[0] > 50 ? '#000' : '#fff'
                            }}
                          >
                            Товар премиум
                          </h3>
                          <p 
                            className="text-sm mb-4"
                            style={{ 
                              color: lightness[0] > 50 ? '#333' : '#ddd'
                            }}
                          >
                            Лучшее качество
                          </p>
                          <Button 
                            className="text-white"
                            style={{ 
                              backgroundColor: `hsl(${(hue[0] + 180) % 360}, ${saturation[0]}%, ${50}%)`
                            }}
                          >
                            Купить
                          </Button>
                        </div>
                      </div>
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
                Стили карточек
              </h2>
              <p className="text-muted-foreground">Популярные стилистические направления</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-50 to-white p-8 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-24 h-24 mx-auto rounded-lg border-2 border-gray-300" />
                    <p className="text-sm font-medium">Продукт</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Минимализм</CardTitle>
                  <CardDescription>
                    Чистота, простота, много белого пространства. Фокус на продукте.
                  </CardDescription>
                </CardHeader>
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
                  <CardTitle>Абстракционизм</CardTitle>
                  <CardDescription>
                    Смелые формы, яркие градиенты, геометрия. Привлекает внимание.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-amber-50 to-orange-100 p-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-amber-200 to-orange-300 shadow-2xl" />
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-white/50 backdrop-blur-sm" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Реализм</CardTitle>
                  <CardDescription>
                    Фотореалистичные изображения, натуральные цвета, четкие детали.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-slate-100 to-blue-100 p-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-slate-300 to-blue-400 shadow-xl" />
                    <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-amber-400" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Неореализм</CardTitle>
                  <CardDescription>
                    Сочетание реалистичности с современной графикой и эффектами.
                  </CardDescription>
                </CardHeader>
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
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {marketplaces.map((mp) => (
                    <div key={mp.name} className="p-4 border-2 border-purple-200 rounded-lg bg-gradient-to-br from-purple-50 to-white text-center">
                      <Icon name="ShoppingBag" className="mx-auto mb-2 text-purple-600" size={32} />
                      <h3 className="font-semibold mb-1">{mp.name}</h3>
                      <Badge variant="secondary">{mp.size}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Программы для создания макетов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border-2 border-indigo-200 rounded-lg bg-gradient-to-br from-indigo-50 to-white">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Palette" className="text-indigo-600" />
                      Adobe Photoshop
                    </h3>
                    <p className="text-sm text-muted-foreground">Профессиональная обработка изображений</p>
                  </div>
                  <div className="p-4 border-2 border-purple-200 rounded-lg bg-gradient-to-br from-purple-50 to-white">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Figma" className="text-purple-600" />
                      Figma
                    </h3>
                    <p className="text-sm text-muted-foreground">Современный UI/UX дизайн в браузере</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Суть инфографики</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Инфографика карточек товаров — это визуальное представление ключевых характеристик и преимуществ продукта. 
                    Цель: быстро и эффективно донести информацию до покупателя, выделить товар среди конкурентов.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <Icon name="Target" className="text-green-600 mb-2" />
                      <p className="text-sm font-medium">Привлечь внимание</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                      <Icon name="MessageCircle" className="text-blue-600 mb-2" />
                      <p className="text-sm font-medium">Донести информацию</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                      <Icon name="TrendingUp" className="text-purple-600 mb-2" />
                      <p className="text-sm font-medium">Увеличить продажи</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Полезные ресурсы для дизайнера</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Unsplash', desc: 'Бесплатные стоковые фотографии', icon: 'Image' },
                    { name: 'Coolors', desc: 'Генератор цветовых палитр', icon: 'Palette' },
                    { name: 'Remove.bg', desc: 'Удаление фона с изображений', icon: 'Scissors' },
                    { name: 'Midjourney', desc: 'AI генерация изображений', icon: 'Sparkles' },
                  ].map((resource) => (
                    <div key={resource.name} className="flex items-center gap-4 p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50/50 transition-colors">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                        <Icon name={resource.icon as any} className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{resource.name}</h3>
                        <p className="text-sm text-muted-foreground">{resource.desc}</p>
                      </div>
                      <Icon name="ExternalLink" className="text-muted-foreground" />
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
