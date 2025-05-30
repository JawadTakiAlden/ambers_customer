export type LocalSearchParams = {
  counterId: string;
};

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export type Counter = {
  id: number;
  pointer: number;
  name: string;
  qr: string;
};

export type NotificationType = "error" | "warning" | "success" | "public";

export type Notification = {
  id: number;
  title: string;
  body: string;
  type: NotificationType;
  date: string;
};

export const NotificationColorMapper = {
  error: "error",
  warning: "warning",
  success: "success",
  public: "ghost",
};

export const NotificationIconMapper = {
  public: "📢",
  error: "❌",
  success: "✅",
  warning: "⚠️",
};
