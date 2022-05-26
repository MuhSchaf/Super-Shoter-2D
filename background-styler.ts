import { DocumentRef } from './document-ref';

export class BackgroundStyler {
  constructor(private documentRef: DocumentRef) {}

  public styleBackground(): void {
    console.log('styled it');
  }
}
