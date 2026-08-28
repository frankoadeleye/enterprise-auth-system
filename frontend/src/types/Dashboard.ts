export interface DashboardMemoryCollection {
  _id: string;
  name: string;
  description: string;
  coverImage: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardMemory {
  _id: string;
  title: string;
  photos: {
    imageUrl: string;
    publicId: string;
    caption: string;
  }[];
  collectionId: DashboardMemoryCollection;
  user: string;
  country: string;
  state: string;
  town: string;
  visitDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardCollection {
  _id: string;
  name: string;
  description: string;
  coverImage: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardData {
  totalCollections: number;
  totalMemories: number;
  recentMemories: DashboardMemory[];
  recentCollections: DashboardCollection[];
}
