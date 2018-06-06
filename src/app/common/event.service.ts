import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Activity, Event } from './state.service';

@Injectable()
export class EntityService {
    private url = `${environment.wekupediaApi}`;

    constructor(private http: HttpClient) {
    }

    async saveEvent(entity: Event): Promise<void> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers, withCredentials: true };
        entity.id = (await this.http.post<Event>(`${this.url}/event/external`, entity, options).toPromise()).id;
    }

    getActivityById(id: number): Promise<Activity> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers, withCredentials: true };
        return this.http.get<Activity>(`${this.url}/activity/${id}`, options).toPromise();
    }
}