---
Title: Custom components
Reference: https://developer.blackbaud.com/skyux/learn/develop/sticky-settings/integrations
---

# Custom components

To save user configuration settings in custom components, use the `SkyUIConfigService` as illustrated in the following code sample. The `key` that you provide to the `UIConfigService` must be unique within your SPA.

TypeScript

    import {
      OnInit
    } from '@angular/core';
    import {
      SkyUIConfigService
    } from '@skyux/core';
    @Component({
      selector: 'app-custom-component',
      templateUrl: './custom.component.html'
    })
    export class CustomComponent implements OnInit {
      constructor(
        private configSvc: SkyUIConfigService
      ) { }
      public ngOnInit() {
        this.configSvc
          .getConfig(
            this.acceptedKey,
            this.acceptedValue
          )
          .subscribe(accepted => this.acceptedValue = accepted);
      }
      public saveChanges() {
        this.configSvc
          .setConfig(
            this.acceptedKey,
            this.acceptedValue
          );
      }
      private acceptedValue = {
        "value": false
      }  ;
      private acceptedKey = 'agreement-accepted';
    }
