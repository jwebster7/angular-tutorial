import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES as Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]> {
    // TODO: send message after getting the heroes.
    this.messageService.add('HeroService: fetched heroes');
    return of(Heroes);
  }
}
