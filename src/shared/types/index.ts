export interface IPerson {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
}

export interface IPeopleCast {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  character?: string; // optional, since not all responses include it
  credit_id?: string;
  order?: number;
}

export interface IPeopleCew {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string; // could refine to Date if you plan to parse it
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credit_id?: string;
  department?: string;
  job?: string;
}

export interface IPeopleResopnse {
  cast: IPeopleCast[];
  crew: IPeopleCew[];
  id: number;
}
