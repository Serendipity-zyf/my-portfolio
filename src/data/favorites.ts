export interface FavoriteItem {
  title: string;
  cover?: string;
  rating?: number;
}

export interface FavoriteCategory {
  category: string;
  icon: string;
  total: number;
  recent: FavoriteItem[];
}

export const favorites: FavoriteCategory[] = [
  {
    category: "Movies",
    icon: "🎬",
    total: 218,
    recent: [
      { title: "Interstellar", rating: 5 },
      { title: "The Shawshank Redemption", rating: 5 },
      { title: "Spirited Away", rating: 4.5 },
      { title: "Parasite", rating: 4.5 },
      { title: "Inception", rating: 5 },
      { title: "Your Name", rating: 4 },
    ],
  },
  {
    category: "Books",
    icon: "📚",
    total: 86,
    recent: [
      { title: "Clean Code", rating: 4.5 },
      { title: "The Pragmatic Programmer", rating: 5 },
      { title: "Design Patterns", rating: 4 },
      { title: "Sapiens", rating: 4.5 },
      { title: "Deep Work", rating: 4 },
      { title: "Atomic Habits", rating: 4.5 },
    ],
  },
  {
    category: "Games",
    icon: "🎮",
    total: 152,
    recent: [
      { title: "Elden Ring", rating: 5 },
      { title: "The Legend of Zelda: TotK", rating: 5 },
      { title: "Hollow Knight", rating: 4.5 },
      { title: "Celeste", rating: 4.5 },
      { title: "Hades", rating: 4.5 },
      { title: "Disco Elysium", rating: 5 },
    ],
  },
];
