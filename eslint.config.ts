import { join } from "node:path";
import { flatConfigs } from "@manuth/eslint-plugin-typescript";
import { Linter } from "eslint";
import globals from "globals";

export default [
    ...flatConfigs.recommendedWithTypeChecking,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.es5
            },
            parserOptions: {
                project: [
                    ["tsconfig.editor.json"],
                    ...[
                        ...[
                            "java-client"
                        ].flatMap(
                            (project) =>
                            {
                                return [
                                    ["tsconfig.app.json"],
                                    ["type-tests", "tsconfig.json"]
                                ].map(path => [project, ...path]);
                            })
                    ].map((path) => ["packages", ...path])
                ].map((path) => join(import.meta.dirname, ...path))
            }
        },
        rules: {
            "import-x/no-rename-default": "off",
            "@typescript-eslint/naming-convention": [
                "warn",
                {
                    selector: "interface",
                    prefix: [],
                    format: ["PascalCase"]
                }
            ]
        }
    }
] as Linter.Config[];
