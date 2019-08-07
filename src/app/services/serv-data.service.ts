import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServDataService {

/*   users = [{code: "UEBAQ4BR6", name: "Jose Hervás"},
  {code: "UKUK1PJN5", name: "Fernando Perez Caelles"},
  {code: "UL3470NDU", name: "Eric Franco Cuenca"},
  {code: "UL2R04WNT", name: "Cristian Mingorance Mulero"},
  {code: "UEC1Z6A4D", name: "Gabriel Moser"}]
 */

  users:object = {
    UEBAQ4BR6:["Jose Hervás", "https://ca.slack-edge.com/T7E7HQJUF-UEBAQ4BR6-64015be7202d-48"],
    UL3470NDU: ["Eric Franco Cuenca", "https://ca.slack-edge.com/T7E7HQJUF-UL2R04WNT-g802ee3d4748-72"],
    UL2R04WNT: ["Cristian Mingorance Mulero", "https://ca.slack-edge.com/T7E7HQJUF-UL2R04WNT-g802ee3d4748-72"],
    UKUK1PJN5: ["Fernando Perez Caelles", "https://ca.slack-edge.com/T7E7HQJUF-UL2R04WNT-g802ee3d4748-72"],
    UEC1Z6A4D: ["Gabriel Moser", "https://ca.slack-edge.com/T7E7HQJUF-UEC1Z6A4D-a564859112ec-48"]
  }

  arrMsgs: object[] = []


  getUserName(code:string):string{
    return this.users[code][0];
  }

  getUserPic(code:string):string{
    return this.users[code][1];
  }
  constructor() {}
}
