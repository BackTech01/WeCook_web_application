export interface Comment {
  id: number;
  text: string;
  profileId: number;
}

export interface CommentComplete extends Comment {
  profileName: string;
}

export type CommentDTO = Pick<Comment, 'text' | 'profileId'>;
export type CommentResponse = Pick<Comment, 'text' | 'profileId' | 'id'>;
