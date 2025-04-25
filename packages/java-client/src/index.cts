import { ClientWorkspace } from "./ClientWorkspace.cjs";

declare global {
    /**
     * A component for interacting with the workspace.
     */
    var workspace: ClientWorkspace;
}

export {
    ClientWorkspace
};
