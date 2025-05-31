import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideMonacoEditor } from 'ngx-monaco-editor-v2'; // ✅ FIXED

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideMonacoEditor({ // ✅ FIXED
      defaultOptions: {
        scrollBeyondLastLine: false,
        theme: 'vs-dark',
        automaticLayout: true
      }
    })
  ]
}).catch((err) => console.error(err));

