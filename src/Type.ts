export interface InitialState {
  videos: HomePageVideos[];
  currentPlayng: CurrentPlayng | null;
  searchTerm: string;
  searchResult: [];
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos {
  videoId: string;
  videoTitle: string;
  videoDescription: string;
  videoLink: string;
  videoDuration: string;
  videoThumbnail: string;
  videoViews: string;
  videoAge: string;
  channelInfo: {
    id: string;
    image: string;
    name: string;
  };
}
export interface CurrentPlayng {}
export interface RecommendedVideos {}
