import { Injectable } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  isHiden: boolean = true;
  type: 'error' | 'success' = 'success';
  title: string;
  description: string;

  timer$: Subscription;

  constructor() {}

  onSuccess(description: string) {
    this.isHiden = false;
    this.title = 'Sucesso';
    this.type = 'success';
    this.description = description;

    this.timer$ = timer(3000).subscribe(() => {
      this.isHiden = true;
    });
  }

  onError(description: string) {
    this.isHiden = false;
    this.title = 'Falha na operação';
    this.type = 'error';
    this.description = description;

    this.timer$ = timer(3000).subscribe(() => {
      this.isHiden = true;
    });
  }

  onClose() {
    this.isHiden = true;
  }

  onCloseFromView(event: any) {
    const isFrame = Array(event.target.classList);
    if (isFrame[0]['value'].includes('frame')) {
      this.isHiden = true;
    }
  }
}
