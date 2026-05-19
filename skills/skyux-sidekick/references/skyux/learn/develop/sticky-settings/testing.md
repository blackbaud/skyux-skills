---
Title: Testing
Reference: https://developer.blackbaud.com/skyux/learn/develop/sticky-settings/testing
---

# Testing

To avoid external dependencies, either inject the default `SkyUIConfigService` in your `TestBed` configuration for unit tests or provide your own class to return fake data.

TypeScript

    TestBed.configureTestingModule({
      providers: [
        {
          provide: SkyUIConfigService,
          useClass: SkyUIConfigService
        }
      ]
    });
