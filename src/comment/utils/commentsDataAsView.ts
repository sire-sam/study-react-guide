import { CommentDataInterface, CommentViewInterface } from '../comment.interfaces';

export function commentsDataAsView(commentsData: CommentDataInterface[]): CommentViewInterface[] {
  return commentsData.map(c => ({
    ...c,
    publishedDate: new Date(c.publishedDate),
  }));
}
