export interface City {
  name: string;
  country: string;
  lat: number;
  lng: number;
  current?: boolean;
}

export const visitedCities: City[] = [
  { name: "Shanghai", country: "China", lat: 31.23, lng: 121.47, current: true },
  { name: "Beijing", country: "China", lat: 39.9, lng: 116.4 },
  { name: "Hangzhou", country: "China", lat: 30.27, lng: 120.15 },
  { name: "Chengdu", country: "China", lat: 30.57, lng: 104.07 },
  { name: "Shenzhen", country: "China", lat: 22.54, lng: 114.06 },
  { name: "Tokyo", country: "Japan", lat: 35.68, lng: 139.69 },
  { name: "Osaka", country: "Japan", lat: 34.69, lng: 135.5 },
  { name: "Seoul", country: "South Korea", lat: 37.57, lng: 126.98 },
  { name: "Bangkok", country: "Thailand", lat: 13.76, lng: 100.5 },
  { name: "Singapore", country: "Singapore", lat: 1.35, lng: 103.82 },
];
