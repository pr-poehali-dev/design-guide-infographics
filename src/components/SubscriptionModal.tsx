import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from '@/components/ui/icon';
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface SubscriptionModalProps {
  onClose: () => void;
}

const SubscriptionModal = ({ onClose }: SubscriptionModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const features = [
    'Композиция - теория и практика',
    'Типографика - работа со шрифтами',
    'Колористика - цветовые схемы',
    'Стили карточек для МП',
    'Теория инфографики',
    'Полезные ресурсы дизайнера',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <Icon name="X" size={20} />
          </Button>
          <div className="text-center space-y-2 pr-8">
            <CardTitle className="text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Оформить подписку
            </CardTitle>
            <CardDescription>
              Получите доступ ко всем разделам обучающего курса
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border-2 border-purple-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">Полный доступ</h3>
                <p className="text-sm text-muted-foreground">Все разделы курса</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  4 990 ₽
                </div>
                <Badge className="mt-1 bg-amber-500">Скидка 50%</Badge>
              </div>
            </div>

            <div className="space-y-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={12} className="text-white" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Ваше имя</Label>
              <Input
                id="name"
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="ivan@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="mt-1"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              size="lg"
            >
              <Icon name="CreditCard" size={20} className="mr-2" />
              Оформить за 4 990 ₽
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionModal;
