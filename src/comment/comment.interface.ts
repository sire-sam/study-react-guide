import { UserInterface } from '../user/user.interface';

export interface CommentInterface {
  id?: string,
  author: UserInterface,
  publishedDate: Date,
  content: string
}
