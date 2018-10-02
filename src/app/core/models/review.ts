import { RatingOptionVote } from './rating_option_vote';

export class Review {
  id: string;
  description: string;
  locale: string;
  title: string;
  name: string;
  rating_option_vote: RatingOptionVote
  updated_at: string;
}
