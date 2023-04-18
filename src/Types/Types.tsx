export interface EpisodeModel {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}
export interface CharacterModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocationModel;
  location: CharacterLocationModel;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
export interface CharacterLocationModel {
  name: string;
  url: string;
}

export interface LocationModel {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}
