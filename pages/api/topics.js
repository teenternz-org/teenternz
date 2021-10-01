import { topics } from "../../data/topics";

export default function handler (req, res) {
  res.status(200).json(topics)
}