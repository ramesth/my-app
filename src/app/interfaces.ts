import { ModuleWithProviders } from '@angular/core';

export interface IPerson {
    _id?: string;
    name: string;
}

export interface IPersonResponse {
    person: IPerson;
    status: boolean;
    error: string;
}
