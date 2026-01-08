export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: 'male' | 'female';
  location?: {
    latitude: number;
    longitude: number;
    city?: string;
    country?: string;
  };
  photos: UserPhoto[];
  bio?: string;
  interests: string[];
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
  lastActiveAt: Date;
  isOnline: boolean;
  isPremium: boolean;
  isBanned: boolean;
  isActive: boolean; // for deleted users
}

export interface UserPhoto {
  id: string;
  url: string;
  order: number; // the first photo = main photo
  verified?: boolean; // For photo verification feature
}

export interface UserPreferences {
  minAge: number;
  maxAge: number;
  genders: string[];
  maxDistance: number; // in kilometers/miles
}

// Matching & Swiping
export interface Swipe {
  id: string;
  user1Id: string;
  user2Id: string;
  choice: boolean; // yes or no
  createdAt: Date;
}

export interface Match {
  id: string;
  user1Id: string;
  user2Id: string;
  createdAt: Date;
  lastMessageAt?: Date;
}

export interface ChatMessage {
    id: string;
    user1Id: string;
    user2Id: string;
    createdAt: Date;
    message: string;
}

// Real-time events
export type SocketEvent = 
  | { type: 'NEW_MATCH'; data: Match }
  | { type: 'NEW_MESSAGE'; data: ChatMessage }
  | { type: 'USER_TYPING'; data: { matchId: string; userId: string; isTyping: boolean } }
  | { type: 'USER_ONLINE_STATUS'; data: { userId: string; isOnline: boolean } };

// API Request/Response types
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};