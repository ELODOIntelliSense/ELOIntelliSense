import { ClientWorkspace } from "./ClientWorkspace.cjs";

declare global
{
    /**
     * A component for interacting with the workspace.
     */
    let workspace: ClientWorkspace;
}

export
{
    ClientWorkspace
};
