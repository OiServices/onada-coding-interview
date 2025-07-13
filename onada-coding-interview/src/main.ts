import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideMonacoEditor } from 'ngx-monaco-editor-v2';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideMonacoEditor({
      baseUrl: 'assets/monaco',
      defaultOptions: {
        theme: 'vs-dark',
        automaticLayout: true,
        scrollBeyondLastLine: false,
      }
    })
  ]
}).catch((err) => console.error(err));

