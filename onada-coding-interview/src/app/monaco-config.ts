import { NgxMonacoEditorConfig } from 'ngx-monaco-editor-v2';

export const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets', // where monaco is loaded from
  defaultOptions: {
    scrollBeyondLastLine: false
  },
  onMonacoLoad: () => {
    console.log('Monaco Editor Loaded');
  }
};

