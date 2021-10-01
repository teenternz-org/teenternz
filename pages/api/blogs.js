import { blogs } from "../../data/blogs";
import { topics } from "../../data/topics";

export default function handler (req, res) {
  res.status(200).json(blogs, topics)
}