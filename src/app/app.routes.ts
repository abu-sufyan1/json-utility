import { Routes } from '@angular/router';
import { JsonFormatterComponent } from './components/json-formatter/json-formatter.component';
import { JsonStringifyComponent } from './components/json-stringify/json-stringify.component';
import { JsonTypescriptModelComponent } from './components/json-typescript-model/json-typescript-model.component';

export const routes: Routes = [
    {
        path: '',
        component: JsonFormatterComponent
    },
    {
        path: 'json-formatter',
        component: JsonFormatterComponent
    },
    {
        path: 'json-stringify',
        component: JsonStringifyComponent
    },
    {
        path: 'json-typescript-model',
        component: JsonTypescriptModelComponent
    }
];
