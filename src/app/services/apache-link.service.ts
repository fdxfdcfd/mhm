import { Injectable } from '@angular/core';

@Injectable()
export class ApacheLinkService {

  constructor() { }
  getLinkApache():string{
    return "http://localhost/a2-webpack/muahangmy/src/";
  }
}
