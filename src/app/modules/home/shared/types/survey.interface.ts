export interface ISurvey {
  id: number;
  question: string;
  expires_at: string;
  votes: number;
  status: string;
  created_at: string;
  updated_at: string;
  userVote: [
    {
      id: number;
      vote: 'yes' | 'no';
      created_at: string;
    }
  ];
}
