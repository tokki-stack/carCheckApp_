import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import {Country} from '@angular-material-extensions/select-country';
import { USStateService } from 'ng2-us-states';
import { Router } from '@angular/router';

@Component({
    selector   : 'about',
    templateUrl: './about.component.html',
    styleUrls  : ['./about.component.scss']
})
export class AboutComponent
{
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    )
    {
    }
}
