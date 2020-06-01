import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import {Country} from '@angular-material-extensions/select-country';
import { USStateService } from 'ng2-us-states';
import { Router } from '@angular/router';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class SampleComponent
{
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    usStates: any;
    australliaStates: any;
    stateFlag: boolean;
    recaptchaFlag: boolean;
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private usStateService: USStateService,
        private router: Router,
    )
    {
        this.stateFlag = false;
        this.recaptchaFlag = false;
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
        this.usStates = [];
        this.australliaStates = [
            {name: "New South Wales", abbreviation: "NSW"},
            {name: "Queensland", abbreviation: "QLD"},
            {name: "New South Wales", abbreviation: "NSW"},
            {name: "Tasmania", abbreviation: "TAS"},
            {name: "Victoria", abbreviation: "VIC"},
            {name: "Western Australia", abbreviation: "WA"},
            {name: "Australian Capital Territory", abbreviation: "ACT"},
            {name: "Northern Territory", abbreviation: "NT"},    
        ]
    }

    onCountrySelected($event: Country) {
        console.log($event);
        this.usStates = this.usStateService.getStates();
        if($event.alpha3Code == "USA"){
            this.usStates = this.usStateService.getStates();
            this.stateFlag = true;

        }
        else if($event.alpha3Code == "AUS"){
            this.usStates = this.australliaStates;
            this.stateFlag = true;

        }
        else {
            this.usStates = [];
            this.stateFlag = false;

        }
    }
    btnClick(){
        this.recaptchaFlag = true;
    }
    resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response: ${captchaResponse}`);
        this.router.navigate(['/detail']);
    }
}
