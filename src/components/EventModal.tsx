import { useState } from 'react';
import { X, Calendar, MapPin, Users, DollarSign, Phone, Mail, Clock } from 'lucide-react';
import { Event, RSVP } from '@/types/event';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
  const { toast } = useToast();
  const [showRSVPForm, setShowRSVPForm] = useState(false);
  const [rsvpData, setRSVPData] = useState({
    attendeeName: '',
    attendeeEmail: '',
    attendeePhone: '',
    message: ''
  });

  if (!isOpen || !event) return null;

  const formatDate = (date: string, time: string) => {
    const eventDate = new Date(`${date}T${time}`);
    return {
      fullDate: eventDate.toLocaleDateString('en-US', { 
        weekday: 'long',
        year: 'numeric',
        month: 'long', 
        day: 'numeric' 
      }),
      time: eventDate.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };
  };

  const { fullDate, time } = formatDate(event.date, event.time);
  const availableSpots = event.capacity - event.registeredCount;

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rsvpData.attendeeName || !rsvpData.attendeeEmail) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate RSVP submission
    const newRSVP: RSVP = {
      eventId: event.id,
      attendeeName: rsvpData.attendeeName,
      attendeeEmail: rsvpData.attendeeEmail,
      attendeePhone: rsvpData.attendeePhone,
      message: rsvpData.message,
      registrationDate: new Date().toISOString()
    };

    // In a real app, this would be sent to a backend
    console.log('RSVP Submitted:', newRSVP);

    toast({
      title: "RSVP Confirmed!",
      description: `You're registered for ${event.title}. Check your email for confirmation details.`,
    });

    // Reset form and close modal
    setRSVPData({ attendeeName: '', attendeeEmail: '', attendeePhone: '', message: '' });
    setShowRSVPForm(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 bg-background/10 hover:bg-background/20 text-white border border-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="absolute bottom-4 left-4 text-white">
            <Badge className="mb-2 bg-background/20 text-white border-white/20">
              {event.category}
            </Badge>
            <h2 className="text-3xl font-bold">{event.title}</h2>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">About This Event</h3>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Event Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-event-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Date & Time</p>
                      <p className="text-sm text-muted-foreground">{fullDate}</p>
                      <p className="text-sm text-muted-foreground">{time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-event-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{event.location.venue}</p>
                      <p className="text-sm text-muted-foreground">{event.location.address}</p>
                      <p className="text-sm text-muted-foreground">{event.location.city}, {event.location.country}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-event-info mt-0.5" />
                    <div>
                      <p className="font-medium">Attendance</p>
                      <p className="text-sm text-muted-foreground">{event.registeredCount} registered</p>
                      <p className="text-sm text-muted-foreground">{availableSpots} spots available</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-event-success mt-0.5" />
                    <div>
                      <p className="font-medium">Price</p>
                      <p className="text-sm text-muted-foreground">
                        {event.price.amount === 0 
                          ? 'Free Event' 
                          : `${event.price.amount} ${event.price.currency}`
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Organizer Info */}
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-semibold mb-3">Organizer</h3>
                <div className="space-y-2">
                  <p className="font-medium">{event.organizer.name}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${event.organizer.email}`} className="hover:text-primary">
                      {event.organizer.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <a href={`tel:${event.organizer.phone}`} className="hover:text-primary">
                      {event.organizer.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* RSVP Section */}
              <div className="space-y-4">
                {!showRSVPForm ? (
                  <Button 
                    variant="rsvp" 
                    className="w-full" 
                    size="lg"
                    onClick={() => setShowRSVPForm(true)}
                    disabled={availableSpots === 0}
                  >
                    {availableSpots === 0 ? 'Event Full' : 'RSVP Now'}
                  </Button>
                ) : (
                  <form onSubmit={handleRSVP} className="space-y-4">
                    <h3 className="font-semibold">RSVP for this event</h3>
                    
                    <div>
                      <Input
                        placeholder="Your full name *"
                        value={rsvpData.attendeeName}
                        onChange={(e) => setRSVPData({...rsvpData, attendeeName: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email address *"
                        value={rsvpData.attendeeEmail}
                        onChange={(e) => setRSVPData({...rsvpData, attendeeEmail: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <Input
                        type="tel"
                        placeholder="Your phone number"
                        value={rsvpData.attendeePhone}
                        onChange={(e) => setRSVPData({...rsvpData, attendeePhone: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <Textarea
                        placeholder="Any special requirements or questions? (optional)"
                        value={rsvpData.message}
                        onChange={(e) => setRSVPData({...rsvpData, message: e.target.value})}
                        rows={3}
                      />
                    </div>
                    
                    <div className="flex gap-2">
                      <Button type="submit" variant="rsvp" className="flex-1">
                        Confirm RSVP
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setShowRSVPForm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;