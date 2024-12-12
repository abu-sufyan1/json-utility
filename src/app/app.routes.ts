import { Routes } from '@angular/router';
import { JsonTypescriptModelComponent } from './components/json-typescript-model/json-typescript-model.component';

export const routes: Routes = [
    {
        path: '',
        component: JsonTypescriptModelComponent
    }
    // {
    //     path: 'json-formatter',
    //     component: JsonFormatterComponent
    // },
    // {
    //     path: 'json-stringify',
    //     component: JsonStringifyComponent
    // },
    // {
    //     path: 'json-typescript-model',
    //     component: JsonTypescriptModelComponent
    // }
];
