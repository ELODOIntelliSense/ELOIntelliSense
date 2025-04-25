import { join } from "node:path";
import { flatConfigs } from "@manuth/eslint-plugin-typescript";
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
                    ["tsconfig.eslint.json"],
                    ...[
                        ...[].map(
                            (project) => {
                                return [
                                    ["tsconfig.json"],
                                    ["type-tests", "tsconfig.json"]
                                ].map(path => [project, ...path])
                            })
                    ].map((path) => ["packages", ...path])
                ].map((path) => join(import.meta.dirname, ...path))
            }
        }
    }
];
