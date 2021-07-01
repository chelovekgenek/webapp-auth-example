import { BillingDiscountDto, SettingsDto } from "@commerce-club/models"

export class DiscountValues extends BillingDiscountDto {
  constructor(data: DeepPartial<DiscountValues> = {}) {
    super({
      code: data.code,
    })
  }
}

export class SettingsValues extends SettingsDto {
  constructor(data: DeepPartial<SettingsValues> = {}) {
    super({
      strings: data.strings || {},
      injections: data.injections || {},
      discount: new DiscountValues(data.discount),
    })
  }
}
