import { Injectable } from '@angular/core';
import { Store } from '../../store';

@Injectable()
export class StoreHelper {
    constructor(private store: Store) {}

    update(prop:any, state:any) {
        const currentState = this.store.getState();
        this.store.setState(Object.assign({}, currentState, { [prop]: state }));
    }

    add(prop:any, state:any) {
        const currentState = this.store.getState();
        const collection = currentState[prop];
        this.store.setState(Object.assign({}, currentState, { [prop]: [state, ...collection] }));
    }

    findAndUpdate(prop:any, state:any) {
        const currentState = this.store.getState();
        const collection = currentState[prop];

        this.store.setState(Object.assign({}, currentState, {[prop]: collection.map((item:any) => {
            if (item.id !== state.id) {
                return item;
            }
            return Object.assign({}, item, state)
        })}))
    }

    findAndDelete(prop:any, id:any) {
        const currentState = this.store.getState();
        const collection = currentState[prop];
        this.store.setState(Object.assign({}, currentState, {[prop]: collection.filter((item:any) => item.id !== id)}));
    }
}
