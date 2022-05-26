import { DocumentRef } from './document-ref';

export class DocumentRefImpl implements DocumentRef {
  getNativeDocument(): any {
    return document;
  }
}
