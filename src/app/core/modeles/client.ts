import { ClientI  } from "src/app/core/interfaces/client-i";
import { StateClient } from "../enums/state-client";
export class Client implements ClientI {
  state: StateClient = StateClient.ACTIVE;
  tva: number = 20;
  id!: number;
  name!: string;
  totalCaHt!: number;
  comment: string ="";

  constructor(obj?: Partial<Client>) {
    // vérifier la présence de obj
    if (obj) {
      // Object.assign(objCible, objSource)
      Object.assign(this, obj);
    }
  }
}
