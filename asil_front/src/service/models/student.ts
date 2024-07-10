import { Group } from "./group";

export interface Student {
  _id: string;
  name: string;
  groupId: Group;
  dateOfBirth: string;
  classroom: number;
  school: string;
  datingDate: number;
  fathersProfession: string;
  last3Points: number[];
  photo: string;
  about: string;
  fatiha: boolean;
  ihlas: boolean;
  kevser: boolean;
  fil: boolean;
  kureys: boolean;
  tebbet: boolean;
  maun: boolean;
  insirah: boolean;
  nasr: boolean;
  kafirun: boolean;
  amentu: boolean;
  duha: boolean;
  tin: boolean;
  kadr: boolean;
  zılzal: boolean;
  hümeze: boolean;
  tekasur: boolean;
  subhaneke: boolean;
  tahiyyat: boolean;
  salliBarik: boolean;
  rabbena: boolean;
  kunut: boolean;
  muezzinlik: boolean;
  imamlık: boolean;
  ezanDuası: boolean;
  yemekDuası: boolean;
  __v: number;
}

export interface StudentsState {
  students: Student[];
  currentStudent: Student | null;
  loading: boolean;
  error: string | null;
}
