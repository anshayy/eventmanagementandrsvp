export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: {
    city: string;
    country: string;
    venue: string;
    address: string;
  };
  category: string;
  image: string;
  price: {
    amount: number;
    currency: string;
  };
  organizer: {
    name: string;
    email: string;
    phone: string;
  };
  capacity: number;
  registeredCount: number;
  tags: string[];
}

export interface RSVP {
  eventId: string;
  attendeeName: string;
  attendeeEmail: string;
  attendeePhone: string;
  message?: string;
  registrationDate: string;
}

export interface EventFilters {
  search: string;
  category: string;
  location: string;
  dateRange: {
    start: string;
    end: string;
  };
  priceRange: {
    min: number;
    max: number;
  };
}