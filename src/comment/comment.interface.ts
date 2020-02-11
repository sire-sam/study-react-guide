import { UserInterface } from '../user/user.interface';

export interface CommentInterface {
  author: UserInterface,
  publishedDate: Date,
  content: string
}
