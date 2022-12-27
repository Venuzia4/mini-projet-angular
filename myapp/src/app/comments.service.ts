import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(httpClient:httpClient) { }

	readonly API_URL = 'https://dummyjson.com/comments';


 
}
