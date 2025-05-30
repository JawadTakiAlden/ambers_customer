import { Notification } from "@/types";

export const notifications: Notification[] = [
  {
    id: 1,
    title: "Server Error",
    body: "The server is currently unavailable.",

    type: "error",
    date: "2025-05-29T09:15:00Z",
  },
  {
    id: 2,
    title: "Update Warning",
    body: "A new update may affect your current settings.",

    type: "warning",
    date: "2025-05-28T17:30:00Z",
  },
  {
    id: 3,
    title: "Upload Successful",
    body: "Your file was uploaded successfully.",

    type: "success",
    date: "2025-05-28T12:05:00Z",
  },
  {
    id: 4,
    title: "New Announcement",
    body: "We’ve added a new feature to your dashboard.",

    type: "public",
    date: "2025-05-27T10:00:00Z",
  },
  {
    id: 5,
    title: "Permission Denied",
    body: "You do not have access to this section.",

    type: "error",
    date: "2025-05-27T08:40:00Z",
  },
  {
    id: 6,
    title: "Low Disk Space",
    body: "You are running low on disk space.",

    type: "warning",
    date: "2025-05-26T14:20:00Z",
  },
  {
    id: 7,
    title: "Payment Received",
    body: "Your payment was processed successfully.",

    type: "success",
    date: "2025-05-26T09:45:00Z",
  },
  {
    id: 8,
    title: "Scheduled Maintenance",
    body: "The system will undergo maintenance tonight.",

    type: "public",
    date: "2025-05-25T16:00:00Z",
  },
  {
    id: 9,
    title: "Form Error",
    body: "Please fill out all required fields.",

    type: "error",
    date: "2025-05-25T11:10:00Z",
  },
  {
    id: 10,
    title: "Tips & Tricks",
    body: "Check out the new guide on productivity tools.",

    type: "public",
    date: "2025-05-24T13:30:00Z",
  },
];
