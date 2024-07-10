import { Group } from "./group";

export interface Leader {
  _id: string;
  name: string;
  groupId: Group;
  department: string;
  dateOfBirth: string;
  classroom: number;
  datingDate: number;
  email: string;
  photo: string;
  about: string;
}

export interface LeadersState {
  leaders: Leader[];
  loading: boolean;
  error: string | null;
}
