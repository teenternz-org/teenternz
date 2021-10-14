import { categoryList } from "../../data/internship-categories";

export default function handler (req, res) {
  res.status(200).json(categoryList)
}