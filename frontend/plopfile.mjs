export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "path",
        message: "Where do you want to create the component? (e.g. src/components/)",
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component/component.tsx.hbs",
      },
      {
        type: "add",
        path: "{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/component/component.stories.tsx.hbs",
      },
    ],
  });
}
