import { useState, useMemo } from 'react';
import { Search, Globe, Calendar, Users } from 'lucide-react';
import { Event, EventFilters as EventFiltersType } from '@/types/event';
import { mockEvents } from '@/data/mockEvents';
import EventCard from '@/components/EventCard';
import EventFilters from '@/components/EventFilters';
import EventModal from '@/components/EventModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import heroImage from '@/assets/hero-events.jpg';

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<EventFiltersType>({
    search: '',
    category: 'All Categories',
    location: 'All Countries',
    dateRange: {
      start: '',
      end: ''
    },
    priceRange: {
      min: 0,
      max: 1000
    }
  });

  const filteredEvents = useMemo(() => {
    return mockEvents.filter(event => {
      // Search filter
      const searchTerm = (filters.search || searchQuery).toLowerCase();
      if (searchTerm && !event.title.toLowerCase().includes(searchTerm) && 
          !event.description.toLowerCase().includes(searchTerm)) {
        return false;
      }

      // Category filter
      if (filters.category !== 'All Categories' && event.category !== filters.category) {
        return false;
      }

      // Location filter
      if (filters.location !== 'All Countries' && event.location.country !== filters.location) {
        return false;
      }

      // Date range filter
      if (filters.dateRange.start) {
        const eventDate = new Date(event.date);
        const startDate = new Date(filters.dateRange.start);
        if (eventDate < startDate) return false;
      }

      if (filters.dateRange.end) {
        const eventDate = new Date(event.date);
        const endDate = new Date(filters.dateRange.end);
        if (eventDate > endDate) return false;
      }

      return true;
    });
  }, [mockEvents, filters, searchQuery]);

  const handleViewDetails = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      category: 'All Categories',
      location: 'All Countries',
      dateRange: { start: '', end: '' },
      priceRange: { min: 0, max: 1000 }
    });
    setSearchQuery('');
  };

  const stats = {
    totalEvents: mockEvents.length,
    totalCountries: new Set(mockEvents.map(e => e.location.country)).size,
    totalRegistrations: mockEvents.reduce((sum, e) => sum + e.registeredCount, 0)
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Global events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Discover Amazing Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Connect with people worldwide through unforgettable experiences
          </p>
          
          {/* Hero Search */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search events worldwide..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-background/95 backdrop-blur border-0 shadow-2xl focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-6 w-6 text-event-primary mr-2" />
                <span className="text-3xl font-bold">{stats.totalEvents}</span>
              </div>
              <p className="text-white/80">Live Events</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="h-6 w-6 text-event-secondary mr-2" />
                <span className="text-3xl font-bold">{stats.totalCountries}</span>
              </div>
              <p className="text-white/80">Countries</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-event-success mr-2" />
                <span className="text-3xl font-bold">{stats.totalRegistrations.toLocaleString()}</span>
              </div>
              <p className="text-white/80">Registered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8">
          <EventFilters
            filters={filters}
            onFiltersChange={setFilters}
            onReset={resetFilters}
          />
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">
              {filteredEvents.length === mockEvents.length 
                ? 'All Events' 
                : `${filteredEvents.length} Events Found`
              }
            </h2>
            <p className="text-muted-foreground mt-1">
              Discover events happening around the world
            </p>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or search terms
            </p>
            <Button onClick={resetFilters} variant="outline">
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
