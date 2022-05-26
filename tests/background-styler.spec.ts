import { BackgroundStyler } from '../background-styler';

class BackgroundStylerTest {
  documentMock: any;
  private styler: BackgroundStyler;

  setup(): void {
    this.documentMock = {
      getNativeDocument: () => {
        return {};
      },
    };
    this.styler = new BackgroundStyler(this.documentMock);
  }
}
