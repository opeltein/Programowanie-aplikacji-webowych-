import { Guid } from "guid-typescript";

export interface Note {
  id: Guid;
  title: string;
  content: string;
  color: string;
  pinned: boolean;
  createdAt: Date;
}