import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const streams = [
    {
      id: 1,
      title: "GTA 5 RP - Новые приключения в Los Santos",
      thumbnail: "https://cdn.poehali.dev/projects/8b5a1f7f-a3b5-434c-b4d1-7d3677c172d4/files/23e9076c-1938-4197-b968-18c116b3df89.jpg",
      viewers: "45.2K",
      duration: "5ч 32м",
      date: "2 дня назад",
      game: "GTA 5 RP"
    },
    {
      id: 2,
      title: "CS2 - Рейтинг с подписчиками",
      thumbnail: "https://cdn.poehali.dev/projects/8b5a1f7f-a3b5-434c-b4d1-7d3677c172d4/files/19f58eb9-e790-49cc-ba77-33545ecc407d.jpg",
      viewers: "38.7K",
      duration: "4ч 15м",
      date: "5 дней назад",
      game: "Counter-Strike 2"
    },
    {
      id: 3,
      title: "Just Chatting - Общаемся с чатом",
      thumbnail: "https://cdn.poehali.dev/projects/8b5a1f7f-a3b5-434c-b4d1-7d3677c172d4/files/306f7e5d-7752-4817-a612-f55aeceeb298.jpg",
      viewers: "52.1K",
      duration: "3ч 45м",
      date: "1 неделю назад",
      game: "Just Chatting"
    }
  ];

  const stats = [
    { label: "Подписчиков", value: "2.5М+", icon: "Users" },
    { label: "Стримов", value: "1200+", icon: "Video" },
    { label: "Часов в эфире", value: "5000+", icon: "Clock" },
    { label: "Средний онлайн", value: "45K", icon: "TrendingUp" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/8b5a1f7f-a3b5-434c-b4d1-7d3677c172d4/files/19f58eb9-e790-49cc-ba77-33545ecc407d.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background"></div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-lg px-6 py-2 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              🔴 LIVE сейчас на Twitch
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              БРАТИШКИН
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Официальный блог Вовы Братишкина. Стримы, развлечения и общение с лучшим комьюнити!
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 animate-glow">
                <Icon name="Tv" size={24} className="mr-2" />
                Смотреть стримы
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
                <Icon name="Users" size={24} className="mr-2" />
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <Icon name={stat.icon as any} size={32} className="mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-foreground flex items-center gap-3">
              <Icon name="Video" size={36} className="text-primary" />
              Последние стримы
            </h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Все стримы
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streams.map((stream, index) => (
              <Card 
                key={stream.id} 
                className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={stream.thumbnail} 
                    alt={stream.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Icon name="Eye" size={16} />
                    {stream.viewers}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                    {stream.duration}
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                    {stream.game}
                  </Badge>
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {stream.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{stream.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-4xl font-bold text-foreground flex items-center gap-3">
              <Icon name="User" size={36} className="text-primary" />
              О стримере
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-20 animate-glow"></div>
              <img 
                src="https://cdn.poehali.dev/projects/8b5a1f7f-a3b5-434c-b4d1-7d3677c172d4/files/26371e9f-ff59-4a5b-b7ef-a41a5edd513f.jpg"
                alt="Братишкин"
                className="relative rounded-2xl w-full shadow-2xl border border-primary/30"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Владимир "Братишкин" Борисов
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Один из самых популярных русскоязычных стримеров на Twitch. 
                Известен своими развлекательными стримами по различным играм, 
                включая GTA 5 RP, CS:GO, и Just Chatting форматы.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Trophy" size={24} className="text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Достижения</h4>
                    <p className="text-muted-foreground">
                      Более 2.5 миллионов подписчиков на Twitch, множество наград 
                      от стриминговых платформ
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Heart" size={24} className="text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Комьюнити</h4>
                    <p className="text-muted-foreground">
                      Активное и дружелюбное сообщество, регулярные взаимодействия 
                      с подписчиками
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Gamepad2" size={24} className="text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Контент</h4>
                    <p className="text-muted-foreground">
                      Разнообразный контент: от шутеров до ролевых игр, 
                      всегда с юмором и позитивом
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button className="bg-[#9146FF] hover:bg-[#772CE8]">
                  <Icon name="Tv" size={20} className="mr-2" />
                  Twitch
                </Button>
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                  <Icon name="Youtube" size={20} className="mr-2" />
                  YouTube
                </Button>
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Telegram
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary mb-1">БРАТИШКИН</h3>
              <p className="text-sm text-muted-foreground">
                © 2024 Все права защищены
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button size="sm" variant="ghost" className="hover:text-primary">
                <Icon name="Mail" size={20} />
              </Button>
              <Button size="sm" variant="ghost" className="hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button size="sm" variant="ghost" className="hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;