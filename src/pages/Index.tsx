import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const products = [
    {
      id: 1,
      title: 'Классическая печать',
      description: 'Круглая или прямоугольная печать для документов',
      price: 'от 1500 ₽',
      icon: 'Stamp'
    },
    {
      id: 2,
      title: 'Сургучная печать',
      description: 'Элегантная восковая печать с вашим дизайном',
      price: 'от 2500 ₽',
      icon: 'Award'
    },
    {
      id: 3,
      title: 'Автоматический штамп',
      description: 'Быстрый штамп с автоматической краской',
      price: 'от 1200 ₽',
      icon: 'Zap'
    },
    {
      id: 4,
      title: 'Печать с логотипом',
      description: 'Индивидуальный дизайн под ваш бренд',
      price: 'от 2000 ₽',
      icon: 'Sparkles'
    }
  ];

  const features = [
    {
      icon: 'Palette',
      title: 'Индивидуальный дизайн',
      description: 'Создаём уникальные печати по вашим эскизам'
    },
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'Доставим по всей России за 3-5 дней'
    },
    {
      icon: 'ShieldCheck',
      title: 'Гарантия качества',
      description: 'Используем только профессиональные материалы'
    },
    {
      icon: 'CreditCard',
      title: 'Удобная оплата',
      description: 'Принимаем все виды платежей'
    }
  ];

  const portfolio = [
    { title: 'Корпоративная печать', description: 'Для ООО "Прогресс"' },
    { title: 'Сургучная печать', description: 'Для свадебных приглашений' },
    { title: 'Печать нотариуса', description: 'Официальная печать' },
    { title: 'Штамп "Оплачено"', description: 'Для бухгалтерии' },
    { title: 'Печать с QR-кодом', description: 'Современное решение' },
    { title: 'Декоративная печать', description: 'Для творческих проектов' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Stamp" size={32} className="text-primary" />
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                STAMPS & SEALS
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="hover:text-primary transition-colors">О компании</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Примеры работ</a>
              <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:block">Заказать</Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTEyVjE4aDEydjEyem0wIDEyaC0xMlYzMGgxMnYxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Печати и штампы с индивидуальным дизайном
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Создаём уникальные печати для вашего бизнеса. От классических штампов до элегантных сургучных печатей.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="FileText" className="mr-2" size={20} />
                Каталог продукции
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Каталог продукции
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор печатей и штампов для любых целей. Все изделия изготавливаются на заказ с учётом ваших пожеланий.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={product.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-display">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button size="sm" className="group-hover:bg-secondary transition-colors">
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">О компании</h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Мы специализируемся на производстве печатей и штампов с 2010 года. За это время мы создали более 50 000 уникальных изделий для клиентов по всей России.
              </p>
              <p className="text-lg mb-4 text-muted-foreground">
                Наша команда профессионалов использует современное оборудование и качественные материалы, чтобы каждая печать служила долгие годы.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Особая гордость — сургучные печати ручной работы, которые придают особую изысканность вашим документам и приглашениям.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">13+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50k+</div>
                  <div className="text-sm text-muted-foreground">изделий</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 flex items-center justify-center">
                <Icon name="Award" size={200} className="text-white opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Примеры работ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Посмотрите на некоторые из наших проектов — от корпоративных печатей до уникальных сургучных дизайнов.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon name="Image" size={64} className="text-primary/30" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-display">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Доставка и оплата</h2>
              <p className="text-lg text-muted-foreground">
                Удобные способы получения и оплаты вашего заказа
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Truck" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="font-display">Доставка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <p className="text-muted-foreground">Почта России — от 300 ₽, 5-10 дней</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <p className="text-muted-foreground">СДЭК — от 350 ₽, 3-5 дней</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <p className="text-muted-foreground">Курьером по Москве — 500 ₽, 1-2 дня</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <p className="text-muted-foreground">Самовывоз — бесплатно</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name="CreditCard" size={24} className="text-secondary" />
                  </div>
                  <CardTitle className="font-display">Оплата</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <p className="text-muted-foreground">Банковские карты онлайн</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <p className="text-muted-foreground">Безналичный расчёт для юр. лиц</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <p className="text-muted-foreground">Наличные при получении</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <p className="text-muted-foreground">СБП (Система быстрых платежей)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Закажите печать с индивидуальным дизайном или получите консультацию
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="font-display">Оставьте заявку</CardTitle>
                  <CardDescription>Мы свяжемся с вами в течение 30 минут</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван Иванов"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ivan@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Опишите ваш заказ</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Расскажите, какую печать вы хотите заказать..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display text-lg">Контактная информация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Адрес</p>
                        <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">info@stamps-seals.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Режим работы</p>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                        <p className="text-muted-foreground">Сб-Вс: выходной</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-primary to-secondary text-white">
                  <CardHeader>
                    <CardTitle className="font-display text-white">Получите скидку 10%</CardTitle>
                    <CardDescription className="text-white/90">
                      При первом заказе через сайт
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90 mb-4">
                      Укажите промокод <span className="font-bold text-lg">FIRST10</span> при оформлении заказа
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Stamp" size={28} className="text-primary" />
                <span className="text-xl font-display font-bold">STAMPS & SEALS</span>
              </div>
              <p className="text-white/70">
                Производство печатей и штампов с индивидуальным дизайном с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Классические печати</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сургучные печати</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Автоматические штампы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Печати с логотипом</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#delivery" className="hover:text-primary transition-colors">Доставка и оплата</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Примеры работ</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Свяжитесь с нами</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@stamps-seals.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 123
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 STAMPS & SEALS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
