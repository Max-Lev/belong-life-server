import { countries } from 'api/get-countries';
import { Countries } from './countries.model';
import { Flags } from './flags.model';

interface SortList<T> {
    countries?: T[],
    flags?: T[]
}

export class CountryFlagModel {

    public countries: Countries[] = [];

    public flags: Flags[] = [];

    constructor(private _countries: Countries[], private _flags: Flags[]) {
        this.orderData<Countries[]>(this._countries);
        this.orderData<Flags[]>(this._flags);
    };

    orderData<T>(list: T) {
    
        const data = list;
    }
};