import { Search, Filter, Calendar, MapPin, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { EventFilters as EventFiltersType } from '@/types/event';
import { categories, countries } from '@/data/mockEvents';

interface EventFiltersProps {
  filters: EventFiltersType;
  onFiltersChange: (filters: EventFiltersType) => void;
  onReset: () => void;
}

const EventFilters = ({ filters, onFiltersChange, onReset }: EventFiltersProps) => {
  const updateFilter = (key: keyof EventFiltersType, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-[var(--shadow-card)] border border-border/50">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-lg">Filter Events</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search Events
          </label>
          <Input
            placeholder="Search by title or description..."
            value={filters.search}
            onChange={(e) => updateFilter('search', e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Category Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Tag className="h-4 w-4" />
            Category
          </label>
          <Select 
            value={filters.category} 
            onValueChange={(value) => updateFilter('category', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Location
          </label>
          <Select 
            value={filters.location} 
            onValueChange={(value) => updateFilter('location', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Date Range
          </label>
          <div className="grid grid-cols-1 gap-2">
            <Input
              type="date"
              value={filters.dateRange.start}
              onChange={(e) => updateFilter('dateRange', {
                ...filters.dateRange,
                start: e.target.value
              })}
              className="text-sm"
            />
            <Input
              type="date"
              value={filters.dateRange.end}
              onChange={(e) => updateFilter('dateRange', {
                ...filters.dateRange,
                end: e.target.value
              })}
              className="text-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Button 
          variant="outline" 
          onClick={onReset}
          className="hover:bg-secondary"
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default EventFilters;