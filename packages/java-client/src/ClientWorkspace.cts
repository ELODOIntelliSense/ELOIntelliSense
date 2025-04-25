/**
 * Represents a workspace.
 */
export interface ClientWorkspace
{
    /**
     * Shows an information box to the user.
     *
     * This action is blocking as the user is required to hit `Ok` in order to continue using ELO.
     *
     * @param title
     * The title of the message box.
     *
     * @param message
     * The message displayed in the box.
     */
    showInfoBox(title: string, message: string): void;
}
