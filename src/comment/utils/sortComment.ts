import { CommentViewInterface } from '../comment.interfaces';
import { SortOptionsEnum } from '../../sort/sortOptions.enum';

function newerFirst(a: CommentViewInterface, b: CommentViewInterface) {
  return a.publishedDate < b.publishedDate ? 1 : -1;
}

function ownedFirst(a: CommentViewInterface, b: CommentViewInterface) {
  return a.author.name === 'you' && b.author.name === 'you' ? 0 : a.author.name === 'You' ? -1 : 1;
}

export function sortComments(commentsArg: CommentViewInterface[], sortBy: SortOptionsEnum) {
  let comments = Array.from(commentsArg);
  switch (sortBy) {
    case SortOptionsEnum.OLDER:
      comments.sort(newerFirst).reverse();
      break;
    case SortOptionsEnum.NEWER:
      comments.sort(newerFirst);
      break;
    case SortOptionsEnum.OWNED:
      comments.sort(newerFirst).sort(ownedFirst);
      break;
  }
  return comments;
}
