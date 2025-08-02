import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, queryKeys, type LoginRequest, type SignupRequest } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

// Server Status Hooks
export function useServerTime() {
  return useQuery({
    queryKey: queryKeys.serverTime,
    queryFn: api.getServerTime,
    refetchInterval: 60000, // Refetch every minute
    staleTime: 30000, // Consider data stale after 30 seconds
  });
}

export function useOnlinePlayersCount() {
  return useQuery({
    queryKey: queryKeys.onlinePlayersCount,
    queryFn: api.getOnlinePlayersCount,
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 15000, // Consider data stale after 15 seconds
  });
}

// Rankings Hooks
export function useTopPlayers() {
  return useQuery({
    queryKey: queryKeys.topPlayers,
    queryFn: api.getTopPlayers,
    refetchInterval: 300000, // Refetch every 5 minutes
    staleTime: 120000, // Consider data stale after 2 minutes
  });
}

export function useTopGuilds() {
  return useQuery({
    queryKey: queryKeys.topGuilds,
    queryFn: api.getTopGuilds,
    refetchInterval: 300000, // Refetch every 5 minutes
    staleTime: 120000, // Consider data stale after 2 minutes
  });
}

// Character Details Hook
export function useCharacterDetails(id: number) {
  return useQuery({
    queryKey: queryKeys.characterDetails(id),
    queryFn: () => api.getCharacterDetails(id),
    enabled: !!id, // Only run if id is provided
    staleTime: 60000, // Consider data stale after 1 minute
  });
}

// Guild Details Hook
export function useGuildDetails(id: number) {
  return useQuery({
    queryKey: queryKeys.guildDetails(id),
    queryFn: () => api.getGuildDetails(id),
    enabled: !!id, // Only run if id is provided
    staleTime: 60000, // Consider data stale after 1 minute
  });
}

// Authentication Hooks
export function useLogin() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginRequest) => api.login(data),
    onSuccess: (data) => {
      toast({
        title: "Login Successful",
        description: `Welcome back, ${data.user.StrUserID}!`,
      });
      // Invalidate and refetch user-related queries
      queryClient.invalidateQueries();
    },
    onError: (error: any) => {
      toast({
        title: "Login Failed",
        description: error.message || "Invalid credentials",
        variant: "destructive",
      });
    },
  });
}

export function useSignup() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: SignupRequest) => api.signup(data),
    onSuccess: () => {
      toast({
        title: "Account Created",
        description: "Your account has been created successfully! You can now log in.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Signup Failed",
        description: error.message || "Failed to create account",
        variant: "destructive",
      });
    },
  });
}