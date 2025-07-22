import { Calendar, MapPin, Users, DollarSign } from 'lucide-react';
import { Event } from '@/types/event';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EventCardProps {
  event: Event;
  onViewDetails: (event: Event) => void;
}

const EventCard = ({ event, onViewDetails }: EventCardProps) => {
  const formatDate = (date: string, time: string) => {
    const eventDate = new Date(`${date}T${time}`);
    return {
      date: eventDate.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      }),
      time: eventDate.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };
  };

  const { date: formattedDate, time: formattedTime } = formatDate(event.date, event.time);
  const availableSpots = event.capacity - event.registeredCount;
  const isNearlyFull = availableSpots < event.capacity * 0.2;

  return (
    <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-[1.02] overflow-hidden bg-gradient-to-br from-card to-secondary/30">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <Badge 
            className="absolute top-3 left-3 bg-background/90 text-foreground hover:bg-background"
          >
            {event.category}
          </Badge>
          {isNearlyFull && (
            <Badge 
              className="absolute top-3 right-3 bg-event-warning text-white"
            >
              Almost Full
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4 space-y-3">
        <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {event.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-event-primary" />
            <span>{formattedDate} at {formattedTime}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-event-secondary" />
            <span>{event.location.city}, {event.location.country}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-event-info" />
            <span>{event.registeredCount} / {event.capacity} registered</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-event-success" />
            <span>
              {event.price.amount === 0 
                ? 'Free' 
                : `${event.price.amount} ${event.price.currency}`
              }
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {event.tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs"
            >
              {tag}
            </Badge>
          ))}
          {event.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{event.tags.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onViewDetails(event)}
          variant="event" 
          className="w-full"
        >
          View Details & RSVP
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;