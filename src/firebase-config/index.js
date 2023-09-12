import { db } from "./firebase-config";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

export const getAllPosts = async () => {
  try {
    const postRef = collection(db, "posts");
    const querySnapshot = await getDocs(postRef);
    const posts = [];

    querySnapshot.forEach((doc) => {
      const postData = {
        id: doc.id,
        ...doc.data(),
      };
      posts.push(postData);
    });

    return posts;
  } catch (error) {
    console.error("Error fetching post", error);
    throw error;
  }
};

export const createPost = async (...rest) => {
  try {
    const postRef = collection(db, "posts");
    const newPost = {
      ...rest,
      createdAt: new Date(),
    };
    const docRef = await addDoc(postRef, newPost);
    return docRef.id;
  } catch (error) {
    console.log("Error creating post", error);
    throw error;
  }
};

export const editPost = async (postId, updatedData) => {
  try {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, updatedData);
    console.log("blog post updated successfully");
  } catch (error) {
    console.error("Error Editing post", error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    const postRef = doc(db, "posts", postId);
    await deleteDoc(postRef);
    console.log("post deleted successfully");
  } catch (error) {
    console.error("error deleting post", error);
    throw error;
  }
};
