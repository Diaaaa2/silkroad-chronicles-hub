import { QueryClient } from "@tanstack/react-query";

// Backend API base URL - adjust this to your backend URL
const API_BASE_URL = "http://localhost:3000/api";

// API Error class for better error handling
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

// Generic API client with error handling
async function apiClient<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP ${response.status}`,
        response.status,
        response.statusText
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError("Network error", 0, "Network Error");
  }
}

// API Types based on your backend responses
export interface ServerTimeResponse {
  serverTime: string;
}

export interface OnlinePlayersResponse {
  onlinePlayers: number;
}

export interface TopPlayer {
  CharID: number;
  CharName16: string;
  CurLevel: number;
  ItemPoints: number;
}

export interface TopPlayersResponse {
  topPlayers: TopPlayer[];
}

export interface TopGuild {
  id: number;
  name: string;
  lvl: number;
  ItemPoints: number;
}

export interface TopGuildsResponse {
  topGuilds: TopGuild[];
}

export interface Character {
  CharID: number;
  CharName16: string;
  CurLevel: number;
  Strength: number;
  Intellect: number;
  HP: number;
  MP: number;
  InventorySize: number;
  LatestRegion: number;
  PosX: number;
  PosY: number;
  PosZ: number;
}

export interface Guild {
  ID: number;
  Name: string;
  Lvl: number;
  ItemPoints: number;
  master?: {
    CharID: number;
    CharName: string;
  };
}

export interface Equipment {
  Slot: number;
  ItemID: string;
  RefItemID: number;
  OptLevel: number;
  Variance: number;
  MagParam1: number;
  MagParam2: number;
  MagParam3: number;
}

export interface CharacterDetailsResponse {
  character: Character;
  guild?: Guild;
  equipment: Equipment[];
  avatar: Equipment[];
}

export interface GuildMember {
  CharID: number;
  CharName: string;
  Permission: number;
  MemberClass: number;
  CharLevel: number;
  JoinDate: string;
  Contribution: number;
  SiegeAuthority: number;
}

export interface GuildDetailsResponse {
  guild: Guild & {
    members: GuildMember[];
  };
}

export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  user: {
    StrUserID: string;
    Email: string;
  };
}

export interface SignupRequest {
  StrUserID: string;
  Password: string;
  Email: string;
}

export interface SignupResponse {
  message: string;
}

// API Functions
export const api = {
  // Server Status
  getServerTime: (): Promise<ServerTimeResponse> =>
    apiClient("/status/server-time"),

  getOnlinePlayersCount: (): Promise<OnlinePlayersResponse> =>
    apiClient("/status/online-players"),

  // Rankings
  getTopPlayers: (): Promise<TopPlayersResponse> =>
    apiClient("/players/top"),

  getTopGuilds: (): Promise<TopGuildsResponse> =>
    apiClient("/guilds/top"),

  // Character Details
  getCharacterDetails: (id: number): Promise<CharacterDetailsResponse> =>
    apiClient(`/characters/${id}`),

  // Guild Details
  getGuildDetails: (id: number): Promise<GuildDetailsResponse> =>
    apiClient(`/guilds/${id}`),

  // Authentication
  login: (data: LoginRequest): Promise<LoginResponse> =>
    apiClient("/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  signup: (data: SignupRequest): Promise<SignupResponse> =>
    apiClient("/signup", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

// Query Keys for TanStack Query
export const queryKeys = {
  serverTime: ["serverTime"] as const,
  onlinePlayersCount: ["onlinePlayersCount"] as const,
  topPlayers: ["topPlayers"] as const,
  topGuilds: ["topGuilds"] as const,
  characterDetails: (id: number) => ["characterDetails", id] as const,
  guildDetails: (id: number) => ["guildDetails", id] as const,
};