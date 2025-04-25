import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'data');

/**
 * Map for matching data items to appropriate images
 */
const imageMap = {
  // Cars
  'Tesla Model 3': '/images/tesla.jpg',
  'Toyota Prius Prime': '/images/toyota.avif',
  'Nissan Leaf': '/images/nissanleaf.webp',
  'Hyundai Ioniq Hybrid': '/images/hyundai-ioniq.avif',

  // Locations
  'Costa Rica': '/images/costarica1.jpg',
  'Switzerland': '/images/burgenstock-lucerne.jpg',
  'Portugal': '/images/portugal.webp',
  'Denmark': '/images/green.webp',
  'Copenhagen': '/images/crowne-plaza.jpeg',
  'Iceland': '/images/mountainview2.jpg',
  'New Zealand': '/images/green.webp',
  'Brazil': '/images/costarica.jpg',
  'Thailand': '/images/hut.jpeg',
  'California': '/images/mountainciew.jpg',
  'Indonesia': '/images/green.webp',
  'South Africa': '/images/green.webp',
  'Kenya': '/images/costarica.jpg',
  'Great Barrier Reef': '/images/portugal.webp',
  'Napa Valley': '/images/burgenstock-lucerne.jpg',

  // Accommodations
  'Eco Resort': '/images/hut.jpeg',
  'Mountain View Lodge': '/images/mountainview2.jpg',
  'Coastal Eco Cabins': '/images/portugal.webp',
  'Urban Green Hotel': '/images/crowne-plaza.jpeg'
};

/**
 * Define the structure of items we'll be processing
 */
interface DataItem {
  name?: string;
  location?: string;
  [key: string]: any;
}

/**
 * Get appropriate image path based on item name or location
 */
function getImagePath(item: DataItem): string {
  // Try to match by name first
  if (item.name && typeof item.name === 'string') {
    const imagePath = imageMap[item.name as keyof typeof imageMap];
    if (imagePath) {
      return imagePath;
    }
  }

  // Try to match by location
  if (item.location && typeof item.location === 'string') {
    // Check if location contains any of our image map keys
    const locationKey = Object.keys(imageMap).find(key =>
      item.location?.includes(key)
    );

    if (locationKey) {
      return imageMap[locationKey as keyof typeof imageMap];
    }
  }

  // Fallback to a default image
  return '/images/green.webp';
}

/**
 * Loads data from a JSON file in the data directory
 * Enhances items with proper image paths
 */
export function loadData<T extends DataItem[]>(filename: string): T {
  const filePath = path.join(dataDirectory, `${filename}.json`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    // Remove comments from JSON if any exist
    const jsonString = fileContents.replace(/\/\/.*$/gm, '');
    const data = JSON.parse(jsonString) as T;

    // Enhance items with proper image paths
    return data.map(item => ({
      ...item,
      image: getImagePath(item)
    })) as T;
  } catch (error) {
    console.error(`Error loading data from ${filePath}:`, error);
    return ([] as unknown) as T;
  }
}

// Typed data loaders for specific content types
export function loadCars() {
  return loadData<DataItem[]>('cars');
}

export function loadTravel() {
  return loadData<DataItem[]>('travel');
}

export function loadVolunteering() {
  return loadData<DataItem[]>('volunteering');
}

export function loadDeals() {
  return loadData<DataItem[]>('deals');
}

export function loadPackages() {
  return loadData<DataItem[]>('packages');
}

export function loadDestinations() {
  return loadData<DataItem[]>('destinations');
}
