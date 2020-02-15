import { UserInterface } from '../user/user.interface';


export interface CommentViewInterface {
  id?: string,
  author: UserInterface,
  publishedDate: Date,
  content: string
}

export interface CommentDataInterface {
  id?: string,
  author: UserInterface,
  publishedDate: string,
  content: string
}
