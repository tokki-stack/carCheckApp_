import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SampleComponent } from './sample.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { USStateModule } from 'ng2-us-states';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const routes = [
    {
        path     : 'sample',
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,

        MatSelectCountryModule,

        USStateModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}
