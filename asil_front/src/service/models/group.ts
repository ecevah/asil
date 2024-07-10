export interface Group {
  _id: string;
  name: string;
  selectedDay: string;
  school: string;
  type: string;
  accomodation: string;
  about: string;
  photo: string;
}

export interface GroupsState {
  groups: Group[];
  loading: boolean;
  currentGroup: Group | null;
  error: string | null;
}
