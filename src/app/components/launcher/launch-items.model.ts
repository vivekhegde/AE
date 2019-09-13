export interface LaunchConfigModel {
    folder: string;
    icon?: string;
    type: LaunchTypes;
}
export interface LaunchItemModel {
    id: number;
    args: string;
    target: string;
    icon?: string;
}

export enum LaunchTypes {
    code,
    exe,
    lnk
}

export const LaunchConfig: LaunchConfigModel[] = [
    {
        folder: 'C://_00//Dev//_//workspaces',
        type: LaunchTypes.code,
        icon: ''
    }
];
