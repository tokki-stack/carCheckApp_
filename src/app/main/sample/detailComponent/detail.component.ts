import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import {Country} from '@angular-material-extensions/select-country';
import { USStateService } from 'ng2-us-states';
import { Router } from '@angular/router';

@Component({
    selector   : 'detail',
    templateUrl: './detail.component.html',
    styleUrls  : ['./detail.component.scss']
})
export class DetailComponent
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
    btnClick(){
        console.log("btn_clicked")
    }
}
