import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';

const GITHOOK_URL = 'ws://localhost:3333/api/githook'


@Injectable()
export class ConsoleService {
  
	public messages: Subject<any>;

	constructor(wsService: WebsocketService) {

		this.messages = <Subject<any>>wsService
			.connect(GITHOOK_URL)
			.map((response: MessageEvent): any => {
				return response;
			});
	}

}
