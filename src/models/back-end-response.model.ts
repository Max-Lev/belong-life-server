export interface IBackEndResponse<T> {
    config: any;
    data: T;
    status: number;
    statusText: string;
};