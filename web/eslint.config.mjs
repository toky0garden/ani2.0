import { eslint } from "@siberiacancode/eslint";

export default eslint(
  {
    typescript: 'engine',
    react: true,
    next: true,
    tailwind: {
      settings: {
        entryPoint: 'app/globals.css',
        detectComponentClasses: true
      }
    }
  },
  {
    rules: {
      'siberiacancode/function-component-definition': [
        'error',
        { namedComponents: ['function-declaration'] }
      ]
    }
  }
);
