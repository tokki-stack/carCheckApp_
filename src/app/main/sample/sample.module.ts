import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SampleComponent } from './sample.component';
import { DetailComponent } from './detailComponent/detail.component';
import { AboutComponent } from './aboutComponent/about.component';

import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { USStateModule } from 'ng2-us-states';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RecaptchaModule } from 'ng-recaptcha';
const routes = [
    {
        path     : 'sample',
        component: SampleComponent
    },
    {
        path     : 'detail',
        component: DetailComponent
    },
    {
        path     : 'about',
        component: AboutComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent,
        DetailComponent,
        AboutComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MatSelectCountryModule,
        USStateModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        RecaptchaModule
    ],
    exports     : [
        SampleComponent,
        DetailComponent,
        AboutComponent
    ]
})

export class SampleModule
{
}
