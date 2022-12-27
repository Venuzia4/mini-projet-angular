import { User } from "./user";

export class comment {
  constructor(
    public id: number,
    public body: string,
    public postId: number,
    public user: User[]
  ) {

  }
}
