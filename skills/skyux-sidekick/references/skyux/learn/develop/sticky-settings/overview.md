---
Title: Overview
Reference: https://developer.blackbaud.com/skyux/learn/develop/sticky-settings/overview
---

# Overview

Sticky settings save user preferences across sessions in data managers, flyouts, grids, and tile dashboards. Sticky settings preserve the [current data state of data managers](../../../components/data-manager.md), [width of flyouts](../../../components/flyout.md), the [column order and the sorting of columns in grids](../../../components/grid.md), and the [layout and collapsed state of tiles in tile dashboards](../../../components/tile.md).

To implement sticky settings, you must provide a class for `SkyUIConfigService` in your SPA's root module.

TypeScript

    import {
      AppUIConfigService
    }   from './shared/services/app-ui-config.service';
    import {
      SkyUIConfigService
    }   from '@skyux/core';
    @NgModule({
      providers: [
        {
          provide: SkyUIConfigService,
          useClass: AppUIConfigService
        }
      ]
    })

Next, you implement a service to retrieve stored settings. The following example provides `AppUIConfigService` to utilize the [ngx-webstorage-service](https://github.com/dscheerens/ngx-webstorage-service). You could just as easily implement the service to call your backend if you store settings across devices.

TypeScript

    import {
      Injectable
    } from '@angular/core';
    import {
      LOCAL_STORAGE,
      StorageService
    } from 'ngx-webstorage-service';
    import {
      SkyAppConfig
    } from '@skyux/config';
    @Injectable()
    export class AppUIConfigService {
      constructor(
        @Inject(LOCAL_STORAGE) private storage: StorageService
        private config: SkyAppConfig
      ) {}
      public getConfig(key: string, defaultConfig: any): Observable<any> {
        key = this.buildSettingsKey(key);
        return of(
          this.storage.get(key) || defaultConfig;
        )
      }
      public setConfig(key: string, value: any): Observable<any> {
        key = this.buildSettingsKey(key);
        return of(
          this.storage.set(key, value)
        );
      }
      private buildSettingsKey(key: string): string {
        return `skyux-spa-${this.config.runtime.app.name}-${key}`;
      }
    }

The [data manager](../../../components/data-manager.md), [flyout](../../../components/flyout.md), [grid](../../../components/grid.md), and [tile](../../../components/tile.md) components support a `settingsKey` property for sticky settings. When you provide this property, the components automatically call the `SkyUIConfigService` stub to retrieve stored settings during appropriate actions. This is why you provide your own implementation as shown above.
