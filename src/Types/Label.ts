export interface Label {
    labelIndex: number;
    name: string|null|undefined;
    deleted: boolean;
    color: number|null|undefined;
}

export type WALabelUpdateEvent = Label;

export interface WALabelAssignEvent {
    id: string;
    labelIndex: number;
    action: 'add' | 'remove'
}
