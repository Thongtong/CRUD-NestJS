import { Collection } from 'fireorm';
@Collection()
export class user {
  id: string;
  name: string;
  decs: string;
  postcode: number;
  tel: string;
}
