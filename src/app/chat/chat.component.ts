import {
  Component,
  OnInit
} from '@angular/core';
import {
  ApiService
} from '../services/api.service';
import {
  ServDataService
} from '../services/serv-data.service';
import {
  stringify
} from 'querystring';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  /* getDate(timestamp:string):string{
    let date = new Date(parseInt(timestamp)*1000)

    return stringify(date);
  } */
  getDate(timestamp: number) {
    var date = new Date(timestamp * 1000);
    let timestampOrg = date.toString();

    return timestampOrg.slice(0,24);

  }
  constructor(public _api: ApiService, public _servData: ServDataService) {
    _api.get("http://demo2243680.mockable.io/slack").subscribe(
      (response) => {
        for (let i = 0; i < response["messages"].length; i++) {
          let name = this._servData.getUserName(response["messages"][i]["user"]);
          let msg = response["messages"][i]["text"];
          if (msg == "") {
            msg = response["messages"][i]["files"][0]["permalink"];
          }
          let timestamp = response["messages"][i]["ts"];
          let date = this.getDate(timestamp);
          let picUrl = this._servData.getUserPic(response["messages"][i]["user"]);
          let message: object = {
            "user": name,
            "text": msg,
            "ts": timestamp,
            "dt": date,
            "pic": picUrl
          }
          _servData.arrMsgs.unshift(message);
        }
        console.log(_servData.arrMsgs)
      }
    )
  }

  ngOnInit() {

  }

}
