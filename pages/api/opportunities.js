import { posts } from "../../data/opportunities";

export default function handler(req, res) {
  res.status(200).json(posts)
}