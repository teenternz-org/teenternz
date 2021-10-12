
import { org } from "../../data/internships";

export default function handler (req, res) {
  res.status(200).json(org)
}