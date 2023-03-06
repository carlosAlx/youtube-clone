export interface InitialState {
  videos: HomePageVideos[];
  currentPlayng: CurrentPlayng | null;
  searchTerm: string;
  searchResult: [];
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos {}
export interface CurrentPlayng {}
export interface RecommendedVideos {}
