export type Movie = {
  id: number;
  name?: string;
  description: string;
  year: number;
  type: string;
  poster?: {
    url: string;
  };
  backdrop?: {
    url: string;
  };
  alternativeName?: string;
  rating: number;
  countries: string[];
  genres: string[];
};
