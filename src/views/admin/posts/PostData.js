// Create mock data for drafts, published, and scheduled posts
const drafts = [
  {
    _id: 1,
    title: "Draft 1",
    content: "This is the content of Draft 1...",
    author: "User123",
    timestamp: "2023-08-16T10:00:00Z",
    tags: ["writing", "draft", "example"],
    category: "Technology",
    status: "Draft",
  },
  {
    _id: 2,
    title: "Draft 2",
    content: "This is the content of Draft 1...",
    author: "User123",
    timestamp: "2023-08-16T10:00:00Z",
    tags: ["writing", "draft", "example"],
    category: "Technology",
    status: "Draft",
  },
  // Add more draft posts here...
];

const published = [
  {
    _id: 11,
    title: "Published Post 1",
    content: "This is the published content of Published Post 1...",
    author: "User456",
    timestamp: "2023-08-16T14:30:00Z",
    tags: ["writing", "published", "example"],
    category: "Technology",
    status: "Published",
  },
  {
    _id: 12,
    title: "Published Post 2",
    content: "This is the published content of Published Post 1...",
    author: "User456",
    timestamp: "2023-08-16T14:30:00Z",
    tags: ["writing", "published", "example"],
    category: "Technology",
    status: "Published",
  },
  // Add more published posts here...
];

const scheduled = [
  {
    _id: 21,
    title: "Scheduled Post 1",
    content: "This is the content of Scheduled Post 1...",
    author: "User789",
    timestamp: "2023-08-18T15:45:00Z",
    tags: ["writing", "scheduled", "example"],
    category: "Science",
    status: "Scheduled",
    scheduledPublishDate: "2023-08-19T12:00:00Z",
  },
  {
    _id: 22,
    title: "Scheduled Post 2",
    content: "This is the content of Scheduled Post 1...",
    author: "User789",
    timestamp: "2023-08-18T15:45:00Z",
    tags: ["writing", "scheduled", "example"],
    category: "Science",
    status: "Scheduled",
    scheduledPublishDate: "2023-08-19T12:00:00Z",
  },
  // Add more scheduled posts here...
];

export const apiService = {
  getDrafts: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return drafts; // Return the mock drafts data
  },

  getPublished: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return published; // Return the mock published data
  },

  getScheduled: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return scheduled; // Return the mock scheduled data
  },

  getAllPosts: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [...drafts, ...published, ...scheduled];
  },
};
