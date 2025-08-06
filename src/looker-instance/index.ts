/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LookerInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network name in the consumer project in the format of: projects/{project}/global/networks/{network}
  * Note that the consumer network may be in a different GCP project than the consumer
  * project that is hosting the Looker Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#consumer_network LookerInstance#consumer_network}
  */
  readonly consumerNetwork?: string;
  /**
  * Policy to determine if the cluster should be deleted forcefully.
  * If setting deletion_policy = "FORCE", the Looker instance will be deleted regardless
  * of its nested resources. If set to "DEFAULT", Looker instances that still have
  * nested resources will return an error. Possible values: DEFAULT, FORCE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#deletion_policy LookerInstance#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * FIPS 140-2 Encryption enablement for Looker (Google Cloud Core).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#fips_enabled LookerInstance#fips_enabled}
  */
  readonly fipsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#id LookerInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the instance or a fully qualified identifier for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#name LookerInstance#name}
  */
  readonly name: string;
  /**
  * Platform editions for a Looker instance. Each edition maps to a set of instance features, like its size. Must be one of these values:
  * - LOOKER_CORE_TRIAL: trial instance (Currently Unavailable)
  * - LOOKER_CORE_STANDARD: pay as you go standard instance (Currently Unavailable)
  * - LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
  * - LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
  * - LOOKER_CORE_EMBED_ANNUAL: subscription embed instance
  * - LOOKER_CORE_NONPROD_STANDARD_ANNUAL: nonprod subscription standard instance
  * - LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL: nonprod subscription enterprise instance
  * - LOOKER_CORE_NONPROD_EMBED_ANNUAL: nonprod subscription embed instance
  * - LOOKER_CORE_TRIAL_STANDARD: A standard trial edition of Looker (Google Cloud core) product.
  * - LOOKER_CORE_TRIAL_ENTERPRISE: An enterprise trial edition of Looker (Google Cloud core) product.
  * - LOOKER_CORE_TRIAL_EMBED: An embed trial edition of Looker (Google Cloud core) product. Default value: "LOOKER_CORE_TRIAL" Possible values: ["LOOKER_CORE_TRIAL", "LOOKER_CORE_STANDARD", "LOOKER_CORE_STANDARD_ANNUAL", "LOOKER_CORE_ENTERPRISE_ANNUAL", "LOOKER_CORE_EMBED_ANNUAL", "LOOKER_CORE_NONPROD_STANDARD_ANNUAL", "LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL", "LOOKER_CORE_NONPROD_EMBED_ANNUAL", "LOOKER_CORE_TRIAL_STANDARD", "LOOKER_CORE_TRIAL_ENTERPRISE", "LOOKER_CORE_TRIAL_EMBED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#platform_edition LookerInstance#platform_edition}
  */
  readonly platformEdition?: string;
  /**
  * Whether private IP is enabled on the Looker instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#private_ip_enabled LookerInstance#private_ip_enabled}
  */
  readonly privateIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#project LookerInstance#project}
  */
  readonly project?: string;
  /**
  * Whether Public Service Connect (PSC) is enabled on the Looker instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#psc_enabled LookerInstance#psc_enabled}
  */
  readonly pscEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether public IP is enabled on the Looker instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#public_ip_enabled LookerInstance#public_ip_enabled}
  */
  readonly publicIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Looker region of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#region LookerInstance#region}
  */
  readonly region?: string;
  /**
  * Name of a reserved IP address range within the consumer network, to be used for
  * private service access connection. User may or may not specify this in a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#reserved_range LookerInstance#reserved_range}
  */
  readonly reservedRange?: string;
  /**
  * admin_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#admin_settings LookerInstance#admin_settings}
  */
  readonly adminSettings?: LookerInstanceAdminSettings;
  /**
  * custom_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#custom_domain LookerInstance#custom_domain}
  */
  readonly customDomain?: LookerInstanceCustomDomain;
  /**
  * deny_maintenance_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#deny_maintenance_period LookerInstance#deny_maintenance_period}
  */
  readonly denyMaintenancePeriod?: LookerInstanceDenyMaintenancePeriod;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#encryption_config LookerInstance#encryption_config}
  */
  readonly encryptionConfig?: LookerInstanceEncryptionConfig;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#maintenance_window LookerInstance#maintenance_window}
  */
  readonly maintenanceWindow?: LookerInstanceMaintenanceWindow;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#oauth_config LookerInstance#oauth_config}
  */
  readonly oauthConfig: LookerInstanceOauthConfig;
  /**
  * psc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#psc_config LookerInstance#psc_config}
  */
  readonly pscConfig?: LookerInstancePscConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#timeouts LookerInstance#timeouts}
  */
  readonly timeouts?: LookerInstanceTimeouts;
  /**
  * user_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#user_metadata LookerInstance#user_metadata}
  */
  readonly userMetadata?: LookerInstanceUserMetadata;
}
export interface LookerInstanceAdminSettings {
  /**
  * Email domain allowlist for the instance.
  * 
  * Define the email domains to which your users can deliver Looker (Google Cloud core) content.
  * Updating this list will restart the instance. Updating the allowed email domains from terraform
  * means the value provided will be considered as the entire list and not an amendment to the
  * existing list of allowed email domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#allowed_email_domains LookerInstance#allowed_email_domains}
  */
  readonly allowedEmailDomains?: string[];
}

export function lookerInstanceAdminSettingsToTerraform(struct?: LookerInstanceAdminSettingsOutputReference | LookerInstanceAdminSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_email_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedEmailDomains),
  }
}


export function lookerInstanceAdminSettingsToHclTerraform(struct?: LookerInstanceAdminSettingsOutputReference | LookerInstanceAdminSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_email_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedEmailDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookerInstanceAdminSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LookerInstanceAdminSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedEmailDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedEmailDomains = this._allowedEmailDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookerInstanceAdminSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedEmailDomains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedEmailDomains = value.allowedEmailDomains;
    }
  }

  // allowed_email_domains - computed: false, optional: true, required: false
  private _allowedEmailDomains?: string[]; 
  public get allowedEmailDomains() {
    return this.getListAttribute('allowed_email_domains');
  }
  public set allowedEmailDomains(value: string[]) {
    this._allowedEmailDomains = value;
  }
  public resetAllowedEmailDomains() {
    this._allowedEmailDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEmailDomainsInput() {
    return this._allowedEmailDomains;
  }
}
export interface LookerInstanceCustomDomain {
  /**
  * Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#domain LookerInstance#domain}
  */
  readonly domain?: string;
}

export function lookerInstanceCustomDomainToTerraform(struct?: LookerInstanceCustomDomainOutputReference | LookerInstanceCustomDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function lookerInstanceCustomDomainToHclTerraform(struct?: LookerInstanceCustomDomainOutputReference | LookerInstanceCustomDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookerInstanceCustomDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LookerInstanceCustomDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookerInstanceCustomDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface LookerInstanceDenyMaintenancePeriodEndDate {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0
  * to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#day LookerInstance#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a
  * month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#month LookerInstance#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without
  * a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#year LookerInstance#year}
  */
  readonly year?: number;
}

export function lookerInstanceDenyMaintenancePeriodEndDateToTerraform(struct?: LookerInstanceDenyMaintenancePeriodEndDateOutputReference | LookerInstanceDenyMaintenancePeriodEndDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function lookerInstanceDenyMaintenancePeriodEndDateToHclTerraform(struct?: LookerInstanceDenyMaintenancePeriodEndDateOutputReference | LookerInstanceDenyMaintenancePeriodEndDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookerInstanceDenyMaintenancePeriodEndDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LookerInstanceDenyMaintenancePeriodEndDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookerInstanceDenyMaintenancePeriodEndDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface LookerInstanceDenyMaintenancePeriodStartDate {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0
  * to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#day LookerInstance#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a
  * month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#month LookerInstance#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without
  * a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#year LookerInstance#year}
  */
  readonly year?: number;
}

export function lookerInstanceDenyMaintenancePeriodStartDateToTerraform(struct?: LookerInstanceDenyMaintenancePeriodStartDateOutputReference | LookerInstanceDenyMaintenancePeriodStartDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function lookerInstanceDenyMaintenancePeriodStartDateToHclTerraform(struct?: LookerInstanceDenyMaintenancePeriodStartDateOutputReference | LookerInstanceDenyMaintenancePeriodStartDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookerInstanceDenyMaintenancePeriodStartDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LookerInstanceDenyMaintenancePeriodStartDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookerInstanceDenyMaintenancePeriodStartDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface LookerInstanceDenyMaintenancePeriodTime {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#hours LookerInstance#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#minutes LookerInstance#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#nanos LookerInstance#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#seconds LookerInstance#seconds}
  */
  readonly seconds?: number;
}

export function lookerInstanceDenyMaintenancePeriodTimeToTerraform(struct?: LookerInstanceDenyMaintenancePeriodTimeOutputReference | LookerInstanceDenyMaintenancePeriodTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function lookerInstanceDenyMaintenancePeriodTimeToHclTerraform(struct?: LookerInstanceDenyMaintenancePeriodTimeOutputReference | LookerInstanceDenyMaintenancePeriodTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookerInstanceDenyMaintenancePeriodTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LookerInstanceDenyMaintenancePeriodTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookerInstanceDenyMaintenancePeriodTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface LookerInstanceDenyMaintenancePeriod {
  /**
  * end_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#end_date LookerInstance#end_date}
  */
  readonly endDate: LookerInstanceDenyMaintenancePeriodEndDate;
  /**
  * start_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#start_date LookerInstance#start_date}
  */
  readonly startDate: LookerInstanceDenyMaintenancePeriodStartDate;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#time LookerInstance#time}
  */
  readonly time: LookerInstanceDenyMaintenancePeriodTime;
}

export function lookerInstanceDenyMaintenancePeriodToTerraform(struct?: LookerInstanceDenyMaintenancePeriodOutputReference | LookerInstanceDenyMaintenancePeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: lookerInstanceDenyMaintenancePeriodEndDateToTerraform(struct!.endDate),
    start_date: lookerInstanceDenyMaintenancePeriodStartDateToTerraform(struct!.startDate),
    time: lookerInstanceDenyMaintenancePeriodTimeToTerraform(struct!.time),
  }
}


export function lookerInstanceDenyMaintenancePeriodToHclTerraform(struct?: LookerInstanceDenyMaintenancePeriodOutputReference | LookerInstanceDenyMaintenancePeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date: {
      value: lookerInstanceDenyMaintenancePeriodEndDateToHclTerraform(struct!.endDate),
      isBlock: true,
      type: "list",
      storageClassType: "LookerInstanceDenyMaintenancePeriodEndDateList",
    },
    start_date: {
      value: lookerInstanceDenyMaintenancePeriodStartDateToHclTerraform(struct!.startDate),
      isBlock: true,
      type: "list",
      storageClassType: "LookerInstanceDenyMaintenancePeriodStartDateList",
    },
    time: {
      value: lookerInstanceDenyMaintenancePeriodTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "LookerInstanceDenyMaintenancePeriodTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookerInstanceDenyMaintenancePeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LookerInstanceDenyMaintenancePeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate?.internalValue;
    }
    if (this._startDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate?.internalValue;
    }
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookerInstanceDenyMaintenancePeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDate.internalValue = undefined;
      this._startDate.internalValue = undefined;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDate.internalValue = value.endDate;
      this._startDate.internalValue = value.startDate;
      this._time.internalValue = value.time;
    }
  }

  // end_date - computed: false, optional: false, required: true
  private _endDate = new LookerInstanceDenyMaintenancePeriodEndDateOutputReference(this, "end_date");
  public get endDate() {
    return this._endDate;
  }
  public putEndDate(value: LookerInstanceDenyMaintenancePeriodEndDate) {
    this._endDate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate.internalValue;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate = new LookerInstanceDenyMaintenancePeriodStartDateOutputReference(this, "start_date");
  public get startDate() {
    return this._startDate;
  }
  public putStartDate(value: LookerInstanceDenyMaintenancePeriodStartDate) {
    this._startDate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate.internalValue;
  }

  // time - computed: false, optional: false, required: true
  private _time = new LookerInstanceDenyMaintenancePeriodTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: LookerInstanceDenyMaintenancePeriodTime) {
    this._time.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time.internalValue;
  }
}
export interface LookerInstanceEncryptionConfig {
  /**
  * Name of the customer managed encryption key (CMEK) in KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#kms_key_name LookerInstance#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function lookerInstanceEncryptionConfigToTerraform(struct?: LookerInstanceEncryptionConfigOutputReference | LookerInstanceEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function lookerInstanceEncryptionConfigToHclTerraform(struct?: LookerInstanceEncryptionConfigOutputReference | LookerInstanceEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookerInstanceEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LookerInstanceEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookerInstanceEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // kms_key_name_version - computed: true, optional: false, required: false
  public get kmsKeyNameVersion() {
    return this.getStringAttribute('kms_key_name_version');
  }

  // kms_key_state - computed: true, optional: false, required: false
  public get kmsKeyState() {
    return this.getStringAttribute('kms_key_state');
  }
}
export interface LookerInstanceMaintenanceWindowStartTime {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#hours LookerInstance#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#minutes LookerInstance#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#nanos LookerInstance#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#seconds LookerInstance#seconds}
  */
  readonly seconds?: number;
}

export function lookerInstanceMaintenanceWindowStartTimeToTerraform(struct?: LookerInstanceMaintenanceWindowStartTimeOutputReference | LookerInstanceMaintenanceWindowStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function lookerInstanceMaintenanceWindowStartTimeToHclTerraform(struct?: LookerInstanceMaintenanceWindowStartTimeOutputReference | LookerInstanceMaintenanceWindowStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookerInstanceMaintenanceWindowStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LookerInstanceMaintenanceWindowStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookerInstanceMaintenanceWindowStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface LookerInstanceMaintenanceWindow {
  /**
  * Required. Day of the week for this MaintenanceWindow (in UTC).
  * 
  * - MONDAY: Monday
  * - TUESDAY: Tuesday
  * - WEDNESDAY: Wednesday
  * - THURSDAY: Thursday
  * - FRIDAY: Friday
  * - SATURDAY: Saturday
  * - SUNDAY: Sunday Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#day_of_week LookerInstance#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#start_time LookerInstance#start_time}
  */
  readonly startTime: LookerInstanceMaintenanceWindowStartTime;
}

export function lookerInstanceMaintenanceWindowToTerraform(struct?: LookerInstanceMaintenanceWindowOutputReference | LookerInstanceMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    start_time: lookerInstanceMaintenanceWindowStartTimeToTerraform(struct!.startTime),
  }
}


export function lookerInstanceMaintenanceWindowToHclTerraform(struct?: LookerInstanceMaintenanceWindowOutputReference | LookerInstanceMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: lookerInstanceMaintenanceWindowStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "list",
      storageClassType: "LookerInstanceMaintenanceWindowStartTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookerInstanceMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LookerInstanceMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookerInstanceMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._startTime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._startTime.internalValue = value.startTime;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime = new LookerInstanceMaintenanceWindowStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: LookerInstanceMaintenanceWindowStartTime) {
    this._startTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }
}
export interface LookerInstanceOauthConfig {
  /**
  * The client ID for the Oauth config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#client_id LookerInstance#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret for the Oauth config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#client_secret LookerInstance#client_secret}
  */
  readonly clientSecret: string;
}

export function lookerInstanceOauthConfigToTerraform(struct?: LookerInstanceOauthConfigOutputReference | LookerInstanceOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function lookerInstanceOauthConfigToHclTerraform(struct?: LookerInstanceOauthConfigOutputReference | LookerInstanceOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookerInstanceOauthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LookerInstanceOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookerInstanceOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }
}
export interface LookerInstancePscConfigServiceAttachments {
  /**
  * Fully qualified domain name that will be used in the private DNS record created for the service attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#local_fqdn LookerInstance#local_fqdn}
  */
  readonly localFqdn?: string;
  /**
  * URI of the service attachment to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#target_service_attachment_uri LookerInstance#target_service_attachment_uri}
  */
  readonly targetServiceAttachmentUri?: string;
}

export function lookerInstancePscConfigServiceAttachmentsToTerraform(struct?: LookerInstancePscConfigServiceAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_fqdn: cdktf.stringToTerraform(struct!.localFqdn),
    target_service_attachment_uri: cdktf.stringToTerraform(struct!.targetServiceAttachmentUri),
  }
}


export function lookerInstancePscConfigServiceAttachmentsToHclTerraform(struct?: LookerInstancePscConfigServiceAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.localFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_service_attachment_uri: {
      value: cdktf.stringToHclTerraform(struct!.targetServiceAttachmentUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookerInstancePscConfigServiceAttachmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LookerInstancePscConfigServiceAttachments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.localFqdn = this._localFqdn;
    }
    if (this._targetServiceAttachmentUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetServiceAttachmentUri = this._targetServiceAttachmentUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookerInstancePscConfigServiceAttachments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localFqdn = undefined;
      this._targetServiceAttachmentUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localFqdn = value.localFqdn;
      this._targetServiceAttachmentUri = value.targetServiceAttachmentUri;
    }
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // local_fqdn - computed: false, optional: true, required: false
  private _localFqdn?: string; 
  public get localFqdn() {
    return this.getStringAttribute('local_fqdn');
  }
  public set localFqdn(value: string) {
    this._localFqdn = value;
  }
  public resetLocalFqdn() {
    this._localFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localFqdnInput() {
    return this._localFqdn;
  }

  // target_service_attachment_uri - computed: false, optional: true, required: false
  private _targetServiceAttachmentUri?: string; 
  public get targetServiceAttachmentUri() {
    return this.getStringAttribute('target_service_attachment_uri');
  }
  public set targetServiceAttachmentUri(value: string) {
    this._targetServiceAttachmentUri = value;
  }
  public resetTargetServiceAttachmentUri() {
    this._targetServiceAttachmentUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceAttachmentUriInput() {
    return this._targetServiceAttachmentUri;
  }
}

export class LookerInstancePscConfigServiceAttachmentsList extends cdktf.ComplexList {
  public internalValue? : LookerInstancePscConfigServiceAttachments[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LookerInstancePscConfigServiceAttachmentsOutputReference {
    return new LookerInstancePscConfigServiceAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LookerInstancePscConfig {
  /**
  * List of VPCs that are allowed ingress into the Looker instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#allowed_vpcs LookerInstance#allowed_vpcs}
  */
  readonly allowedVpcs?: string[];
  /**
  * service_attachments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#service_attachments LookerInstance#service_attachments}
  */
  readonly serviceAttachments?: LookerInstancePscConfigServiceAttachments[] | cdktf.IResolvable;
}

export function lookerInstancePscConfigToTerraform(struct?: LookerInstancePscConfigOutputReference | LookerInstancePscConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_vpcs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedVpcs),
    service_attachments: cdktf.listMapper(lookerInstancePscConfigServiceAttachmentsToTerraform, true)(struct!.serviceAttachments),
  }
}


export function lookerInstancePscConfigToHclTerraform(struct?: LookerInstancePscConfigOutputReference | LookerInstancePscConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_vpcs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedVpcs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_attachments: {
      value: cdktf.listMapperHcl(lookerInstancePscConfigServiceAttachmentsToHclTerraform, true)(struct!.serviceAttachments),
      isBlock: true,
      type: "list",
      storageClassType: "LookerInstancePscConfigServiceAttachmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookerInstancePscConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LookerInstancePscConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedVpcs !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVpcs = this._allowedVpcs;
    }
    if (this._serviceAttachments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAttachments = this._serviceAttachments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookerInstancePscConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedVpcs = undefined;
      this._serviceAttachments.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedVpcs = value.allowedVpcs;
      this._serviceAttachments.internalValue = value.serviceAttachments;
    }
  }

  // allowed_vpcs - computed: false, optional: true, required: false
  private _allowedVpcs?: string[]; 
  public get allowedVpcs() {
    return this.getListAttribute('allowed_vpcs');
  }
  public set allowedVpcs(value: string[]) {
    this._allowedVpcs = value;
  }
  public resetAllowedVpcs() {
    this._allowedVpcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVpcsInput() {
    return this._allowedVpcs;
  }

  // looker_service_attachment_uri - computed: true, optional: false, required: false
  public get lookerServiceAttachmentUri() {
    return this.getStringAttribute('looker_service_attachment_uri');
  }

  // service_attachments - computed: false, optional: true, required: false
  private _serviceAttachments = new LookerInstancePscConfigServiceAttachmentsList(this, "service_attachments", false);
  public get serviceAttachments() {
    return this._serviceAttachments;
  }
  public putServiceAttachments(value: LookerInstancePscConfigServiceAttachments[] | cdktf.IResolvable) {
    this._serviceAttachments.internalValue = value;
  }
  public resetServiceAttachments() {
    this._serviceAttachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAttachmentsInput() {
    return this._serviceAttachments.internalValue;
  }
}
export interface LookerInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#create LookerInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#delete LookerInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#update LookerInstance#update}
  */
  readonly update?: string;
}

export function lookerInstanceTimeoutsToTerraform(struct?: LookerInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lookerInstanceTimeoutsToHclTerraform(struct?: LookerInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookerInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LookerInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookerInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface LookerInstanceUserMetadata {
  /**
  * Number of additional Developer Users to allocate to the Looker Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#additional_developer_user_count LookerInstance#additional_developer_user_count}
  */
  readonly additionalDeveloperUserCount?: number;
  /**
  * Number of additional Standard Users to allocate to the Looker Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#additional_standard_user_count LookerInstance#additional_standard_user_count}
  */
  readonly additionalStandardUserCount?: number;
  /**
  * Number of additional Viewer Users to allocate to the Looker Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#additional_viewer_user_count LookerInstance#additional_viewer_user_count}
  */
  readonly additionalViewerUserCount?: number;
}

export function lookerInstanceUserMetadataToTerraform(struct?: LookerInstanceUserMetadataOutputReference | LookerInstanceUserMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_developer_user_count: cdktf.numberToTerraform(struct!.additionalDeveloperUserCount),
    additional_standard_user_count: cdktf.numberToTerraform(struct!.additionalStandardUserCount),
    additional_viewer_user_count: cdktf.numberToTerraform(struct!.additionalViewerUserCount),
  }
}


export function lookerInstanceUserMetadataToHclTerraform(struct?: LookerInstanceUserMetadataOutputReference | LookerInstanceUserMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_developer_user_count: {
      value: cdktf.numberToHclTerraform(struct!.additionalDeveloperUserCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    additional_standard_user_count: {
      value: cdktf.numberToHclTerraform(struct!.additionalStandardUserCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    additional_viewer_user_count: {
      value: cdktf.numberToHclTerraform(struct!.additionalViewerUserCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookerInstanceUserMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LookerInstanceUserMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalDeveloperUserCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalDeveloperUserCount = this._additionalDeveloperUserCount;
    }
    if (this._additionalStandardUserCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalStandardUserCount = this._additionalStandardUserCount;
    }
    if (this._additionalViewerUserCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalViewerUserCount = this._additionalViewerUserCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookerInstanceUserMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalDeveloperUserCount = undefined;
      this._additionalStandardUserCount = undefined;
      this._additionalViewerUserCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalDeveloperUserCount = value.additionalDeveloperUserCount;
      this._additionalStandardUserCount = value.additionalStandardUserCount;
      this._additionalViewerUserCount = value.additionalViewerUserCount;
    }
  }

  // additional_developer_user_count - computed: false, optional: true, required: false
  private _additionalDeveloperUserCount?: number; 
  public get additionalDeveloperUserCount() {
    return this.getNumberAttribute('additional_developer_user_count');
  }
  public set additionalDeveloperUserCount(value: number) {
    this._additionalDeveloperUserCount = value;
  }
  public resetAdditionalDeveloperUserCount() {
    this._additionalDeveloperUserCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDeveloperUserCountInput() {
    return this._additionalDeveloperUserCount;
  }

  // additional_standard_user_count - computed: false, optional: true, required: false
  private _additionalStandardUserCount?: number; 
  public get additionalStandardUserCount() {
    return this.getNumberAttribute('additional_standard_user_count');
  }
  public set additionalStandardUserCount(value: number) {
    this._additionalStandardUserCount = value;
  }
  public resetAdditionalStandardUserCount() {
    this._additionalStandardUserCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalStandardUserCountInput() {
    return this._additionalStandardUserCount;
  }

  // additional_viewer_user_count - computed: false, optional: true, required: false
  private _additionalViewerUserCount?: number; 
  public get additionalViewerUserCount() {
    return this.getNumberAttribute('additional_viewer_user_count');
  }
  public set additionalViewerUserCount(value: number) {
    this._additionalViewerUserCount = value;
  }
  public resetAdditionalViewerUserCount() {
    this._additionalViewerUserCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalViewerUserCountInput() {
    return this._additionalViewerUserCount;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance google_looker_instance}
*/
export class LookerInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_looker_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LookerInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LookerInstance to import
  * @param importFromId The id of the existing LookerInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LookerInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_looker_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/looker_instance google_looker_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LookerInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: LookerInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_looker_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.47.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consumerNetwork = config.consumerNetwork;
    this._deletionPolicy = config.deletionPolicy;
    this._fipsEnabled = config.fipsEnabled;
    this._id = config.id;
    this._name = config.name;
    this._platformEdition = config.platformEdition;
    this._privateIpEnabled = config.privateIpEnabled;
    this._project = config.project;
    this._pscEnabled = config.pscEnabled;
    this._publicIpEnabled = config.publicIpEnabled;
    this._region = config.region;
    this._reservedRange = config.reservedRange;
    this._adminSettings.internalValue = config.adminSettings;
    this._customDomain.internalValue = config.customDomain;
    this._denyMaintenancePeriod.internalValue = config.denyMaintenancePeriod;
    this._encryptionConfig.internalValue = config.encryptionConfig;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._oauthConfig.internalValue = config.oauthConfig;
    this._pscConfig.internalValue = config.pscConfig;
    this._timeouts.internalValue = config.timeouts;
    this._userMetadata.internalValue = config.userMetadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_network - computed: false, optional: true, required: false
  private _consumerNetwork?: string; 
  public get consumerNetwork() {
    return this.getStringAttribute('consumer_network');
  }
  public set consumerNetwork(value: string) {
    this._consumerNetwork = value;
  }
  public resetConsumerNetwork() {
    this._consumerNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerNetworkInput() {
    return this._consumerNetwork;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: false, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // egress_public_ip - computed: true, optional: false, required: false
  public get egressPublicIp() {
    return this.getStringAttribute('egress_public_ip');
  }

  // fips_enabled - computed: false, optional: true, required: false
  private _fipsEnabled?: boolean | cdktf.IResolvable; 
  public get fipsEnabled() {
    return this.getBooleanAttribute('fips_enabled');
  }
  public set fipsEnabled(value: boolean | cdktf.IResolvable) {
    this._fipsEnabled = value;
  }
  public resetFipsEnabled() {
    this._fipsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsEnabledInput() {
    return this._fipsEnabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ingress_private_ip - computed: true, optional: false, required: false
  public get ingressPrivateIp() {
    return this.getStringAttribute('ingress_private_ip');
  }

  // ingress_public_ip - computed: true, optional: false, required: false
  public get ingressPublicIp() {
    return this.getStringAttribute('ingress_public_ip');
  }

  // looker_uri - computed: true, optional: false, required: false
  public get lookerUri() {
    return this.getStringAttribute('looker_uri');
  }

  // looker_version - computed: true, optional: false, required: false
  public get lookerVersion() {
    return this.getStringAttribute('looker_version');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // platform_edition - computed: false, optional: true, required: false
  private _platformEdition?: string; 
  public get platformEdition() {
    return this.getStringAttribute('platform_edition');
  }
  public set platformEdition(value: string) {
    this._platformEdition = value;
  }
  public resetPlatformEdition() {
    this._platformEdition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformEditionInput() {
    return this._platformEdition;
  }

  // private_ip_enabled - computed: false, optional: true, required: false
  private _privateIpEnabled?: boolean | cdktf.IResolvable; 
  public get privateIpEnabled() {
    return this.getBooleanAttribute('private_ip_enabled');
  }
  public set privateIpEnabled(value: boolean | cdktf.IResolvable) {
    this._privateIpEnabled = value;
  }
  public resetPrivateIpEnabled() {
    this._privateIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpEnabledInput() {
    return this._privateIpEnabled;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // psc_enabled - computed: false, optional: true, required: false
  private _pscEnabled?: boolean | cdktf.IResolvable; 
  public get pscEnabled() {
    return this.getBooleanAttribute('psc_enabled');
  }
  public set pscEnabled(value: boolean | cdktf.IResolvable) {
    this._pscEnabled = value;
  }
  public resetPscEnabled() {
    this._pscEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscEnabledInput() {
    return this._pscEnabled;
  }

  // public_ip_enabled - computed: false, optional: true, required: false
  private _publicIpEnabled?: boolean | cdktf.IResolvable; 
  public get publicIpEnabled() {
    return this.getBooleanAttribute('public_ip_enabled');
  }
  public set publicIpEnabled(value: boolean | cdktf.IResolvable) {
    this._publicIpEnabled = value;
  }
  public resetPublicIpEnabled() {
    this._publicIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpEnabledInput() {
    return this._publicIpEnabled;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // reserved_range - computed: false, optional: true, required: false
  private _reservedRange?: string; 
  public get reservedRange() {
    return this.getStringAttribute('reserved_range');
  }
  public set reservedRange(value: string) {
    this._reservedRange = value;
  }
  public resetReservedRange() {
    this._reservedRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedRangeInput() {
    return this._reservedRange;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // admin_settings - computed: false, optional: true, required: false
  private _adminSettings = new LookerInstanceAdminSettingsOutputReference(this, "admin_settings");
  public get adminSettings() {
    return this._adminSettings;
  }
  public putAdminSettings(value: LookerInstanceAdminSettings) {
    this._adminSettings.internalValue = value;
  }
  public resetAdminSettings() {
    this._adminSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSettingsInput() {
    return this._adminSettings.internalValue;
  }

  // custom_domain - computed: false, optional: true, required: false
  private _customDomain = new LookerInstanceCustomDomainOutputReference(this, "custom_domain");
  public get customDomain() {
    return this._customDomain;
  }
  public putCustomDomain(value: LookerInstanceCustomDomain) {
    this._customDomain.internalValue = value;
  }
  public resetCustomDomain() {
    this._customDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain.internalValue;
  }

  // deny_maintenance_period - computed: false, optional: true, required: false
  private _denyMaintenancePeriod = new LookerInstanceDenyMaintenancePeriodOutputReference(this, "deny_maintenance_period");
  public get denyMaintenancePeriod() {
    return this._denyMaintenancePeriod;
  }
  public putDenyMaintenancePeriod(value: LookerInstanceDenyMaintenancePeriod) {
    this._denyMaintenancePeriod.internalValue = value;
  }
  public resetDenyMaintenancePeriod() {
    this._denyMaintenancePeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyMaintenancePeriodInput() {
    return this._denyMaintenancePeriod.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new LookerInstanceEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: LookerInstanceEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new LookerInstanceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: LookerInstanceMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // oauth_config - computed: false, optional: false, required: true
  private _oauthConfig = new LookerInstanceOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: LookerInstanceOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // psc_config - computed: false, optional: true, required: false
  private _pscConfig = new LookerInstancePscConfigOutputReference(this, "psc_config");
  public get pscConfig() {
    return this._pscConfig;
  }
  public putPscConfig(value: LookerInstancePscConfig) {
    this._pscConfig.internalValue = value;
  }
  public resetPscConfig() {
    this._pscConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscConfigInput() {
    return this._pscConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LookerInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LookerInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_metadata - computed: false, optional: true, required: false
  private _userMetadata = new LookerInstanceUserMetadataOutputReference(this, "user_metadata");
  public get userMetadata() {
    return this._userMetadata;
  }
  public putUserMetadata(value: LookerInstanceUserMetadata) {
    this._userMetadata.internalValue = value;
  }
  public resetUserMetadata() {
    this._userMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMetadataInput() {
    return this._userMetadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_network: cdktf.stringToTerraform(this._consumerNetwork),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      fips_enabled: cdktf.booleanToTerraform(this._fipsEnabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      platform_edition: cdktf.stringToTerraform(this._platformEdition),
      private_ip_enabled: cdktf.booleanToTerraform(this._privateIpEnabled),
      project: cdktf.stringToTerraform(this._project),
      psc_enabled: cdktf.booleanToTerraform(this._pscEnabled),
      public_ip_enabled: cdktf.booleanToTerraform(this._publicIpEnabled),
      region: cdktf.stringToTerraform(this._region),
      reserved_range: cdktf.stringToTerraform(this._reservedRange),
      admin_settings: lookerInstanceAdminSettingsToTerraform(this._adminSettings.internalValue),
      custom_domain: lookerInstanceCustomDomainToTerraform(this._customDomain.internalValue),
      deny_maintenance_period: lookerInstanceDenyMaintenancePeriodToTerraform(this._denyMaintenancePeriod.internalValue),
      encryption_config: lookerInstanceEncryptionConfigToTerraform(this._encryptionConfig.internalValue),
      maintenance_window: lookerInstanceMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      oauth_config: lookerInstanceOauthConfigToTerraform(this._oauthConfig.internalValue),
      psc_config: lookerInstancePscConfigToTerraform(this._pscConfig.internalValue),
      timeouts: lookerInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      user_metadata: lookerInstanceUserMetadataToTerraform(this._userMetadata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_network: {
        value: cdktf.stringToHclTerraform(this._consumerNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktf.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fips_enabled: {
        value: cdktf.booleanToHclTerraform(this._fipsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_edition: {
        value: cdktf.stringToHclTerraform(this._platformEdition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip_enabled: {
        value: cdktf.booleanToHclTerraform(this._privateIpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psc_enabled: {
        value: cdktf.booleanToHclTerraform(this._pscEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_ip_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicIpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_range: {
        value: cdktf.stringToHclTerraform(this._reservedRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_settings: {
        value: lookerInstanceAdminSettingsToHclTerraform(this._adminSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LookerInstanceAdminSettingsList",
      },
      custom_domain: {
        value: lookerInstanceCustomDomainToHclTerraform(this._customDomain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LookerInstanceCustomDomainList",
      },
      deny_maintenance_period: {
        value: lookerInstanceDenyMaintenancePeriodToHclTerraform(this._denyMaintenancePeriod.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LookerInstanceDenyMaintenancePeriodList",
      },
      encryption_config: {
        value: lookerInstanceEncryptionConfigToHclTerraform(this._encryptionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LookerInstanceEncryptionConfigList",
      },
      maintenance_window: {
        value: lookerInstanceMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LookerInstanceMaintenanceWindowList",
      },
      oauth_config: {
        value: lookerInstanceOauthConfigToHclTerraform(this._oauthConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LookerInstanceOauthConfigList",
      },
      psc_config: {
        value: lookerInstancePscConfigToHclTerraform(this._pscConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LookerInstancePscConfigList",
      },
      timeouts: {
        value: lookerInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LookerInstanceTimeouts",
      },
      user_metadata: {
        value: lookerInstanceUserMetadataToHclTerraform(this._userMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LookerInstanceUserMetadataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
