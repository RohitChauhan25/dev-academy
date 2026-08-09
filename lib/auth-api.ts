export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000/api';

interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data: T | null;
}

async function parseResponse<T>(res: Response): Promise<ApiEnvelope<T>> {
  const body = (await res.json().catch(() => null)) as ApiEnvelope<T> | null;
  if (!res.ok || !body) {
    throw new Error(body?.message || 'Something went wrong. Please try again.');
  }
  return body;
}

export interface AuthUser {
  _id: string;
  name: string;
  username: string;
  email: string;
  profilePicture?: string;
  isEmailVerified: boolean;
  bio?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  location?: string;
  skills?: string[];
  experienceLevel?: string;
  authProvider?: string;
  createdAt?: string;
}

export interface UpdateProfileInput {
  name?: string;
  bio?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  location?: string;
  skills?: string[];
  experienceLevel?: string;
}

export interface LeaderboardUser {
  _id: string;
  name: string;
  username: string;
  profilePicture?: string;
}

export interface LeaderboardEntry {
  rank: number;
  user: LeaderboardUser;
  correctAnswers: number;
  totalQuestions: number;
  accuracy: number;
  learningStreak: number;
}

export interface Leaderboard {
  entries: LeaderboardEntry[];
  me: LeaderboardEntry | null;
}

export interface PerformanceOverview {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  accuracy: number;
  completedTutorialsCount: number;
  completedTopicsCount: number;
  learningStreak: number;
  longestStreak: number;
  totalLearningTime: number;
  lastActiveDate: string;
  technologiesInProgress: number;
}

export async function signup(email: string, password: string) {
  const res = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return parseResponse<{ user: AuthUser }>(res);
}

export async function verifyEmail(token: string) {
  const res = await fetch(`${API_BASE_URL}/auth/verify-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ token }),
  });
  return parseResponse<{ user: AuthUser; accessToken: string }>(res);
}

export async function resendVerification(email: string) {
  const res = await fetch(`${API_BASE_URL}/auth/resend-verification`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  return parseResponse<null>(res);
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  return parseResponse<{ user: AuthUser; accessToken: string }>(res);
}

export async function refreshSession() {
  const res = await fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    credentials: 'include',
  });
  return parseResponse<{ accessToken: string }>(res);
}

export async function getProfile(accessToken: string) {
  const res = await fetch(`${API_BASE_URL}/users/profile`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return parseResponse<{ user: AuthUser }>(res);
}

export async function logout(accessToken: string) {
  const res = await fetch(`${API_BASE_URL}/auth/logout`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: 'include',
  });
  return parseResponse<null>(res);
}

export function googleLoginUrl() {
  return `${API_BASE_URL}/auth/google`;
}

export async function updateProfile(accessToken: string, input: UpdateProfileInput) {
  const res = await fetch(`${API_BASE_URL}/users/profile`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(input),
  });
  return parseResponse<{ user: AuthUser }>(res);
}

export async function getPerformanceOverview(accessToken: string) {
  const res = await fetch(`${API_BASE_URL}/performance/overview`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return parseResponse<{ overview: PerformanceOverview }>(res);
}

export async function uploadProfilePicture(accessToken: string, file: File) {
  const formData = new FormData();
  formData.append('image', file);

  const res = await fetch(`${API_BASE_URL}/users/profile/picture`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${accessToken}` },
    body: formData,
  });
  return parseResponse<{ user: AuthUser }>(res);
}

export async function changePassword(
  accessToken: string,
  currentPassword: string,
  newPassword: string
) {
  const res = await fetch(`${API_BASE_URL}/users/change-password`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ currentPassword, newPassword }),
  });
  return parseResponse<null>(res);
}

export async function deleteAccount(accessToken: string) {
  const res = await fetch(`${API_BASE_URL}/users/account`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return parseResponse<null>(res);
}

export interface BlogAuthor {
  _id: string;
  name: string;
  username: string;
  profilePicture?: string;
}

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  content: string;
  coverImage?: string;
  author: BlogAuthor;
  tags: string[];
  readingTime: number;
  status: 'draft' | 'published';
  views: number;
  likesCount: number;
  avgRating: number;
  ratingCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface BlogListMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface CreateBlogInput {
  title: string;
  shortDescription: string;
  content: string;
  tags?: string[];
  status?: 'draft' | 'published';
}

export async function listBlogs(params?: {
  page?: number;
  limit?: number;
  search?: string;
  tag?: string;
  sort?: string;
}) {
  const query = new URLSearchParams();
  if (params?.page) query.set('page', String(params.page));
  if (params?.limit) query.set('limit', String(params.limit));
  if (params?.search) query.set('search', params.search);
  if (params?.tag) query.set('tag', params.tag);
  if (params?.sort) query.set('sort', params.sort);

  const res = await fetch(`${API_BASE_URL}/blogs?${query.toString()}`);
  return parseResponse<{ blogs: Blog[]; meta: BlogListMeta }>(res);
}

export async function getBlogBySlug(slug: string, accessToken?: string) {
  const res = await fetch(`${API_BASE_URL}/blogs/${slug}`, {
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined,
  });
  return parseResponse<{ blog: Blog }>(res);
}

export async function createBlog(accessToken: string, input: CreateBlogInput) {
  const res = await fetch(`${API_BASE_URL}/blogs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(input),
  });
  return parseResponse<{ blog: Blog }>(res);
}

export async function recordTutorialComplete(
  accessToken: string,
  tutorialId: string,
  timeSpentMinutes = 0
) {
  const res = await fetch(`${API_BASE_URL}/performance/tutorial-complete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ tutorialId, timeSpentMinutes }),
  });
  return parseResponse<{ performance: unknown }>(res);
}

export async function recordQuizResult(
  accessToken: string,
  technologyId: string,
  topicId: string,
  totalQuestions: number,
  correctAnswers: number
) {
  const res = await fetch(`${API_BASE_URL}/performance/quiz-result`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ technologyId, topicId, totalQuestions, correctAnswers }),
  });
  return parseResponse<{ performance: unknown }>(res);
}

export async function getLeaderboard(accessToken: string, limit = 20) {
  const res = await fetch(`${API_BASE_URL}/performance/leaderboard?limit=${limit}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return parseResponse<Leaderboard>(res);
}
