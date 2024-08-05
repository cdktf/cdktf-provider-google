// https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BillingBudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the billing account to set a budget on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#billing_account BillingBudget#billing_account}
  */
  readonly billingAccount: string;
  /**
  * User data for display name in UI. Must be <= 60 chars.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#display_name BillingBudget#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#id BillingBudget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ownership scope of the budget. The ownership scope and users'
  * IAM permissions determine who has full access to the budget's data. Possible values: ["OWNERSHIP_SCOPE_UNSPECIFIED", "ALL_USERS", "BILLING_ACCOUNT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#ownership_scope BillingBudget#ownership_scope}
  */
  readonly ownershipScope?: string;
  /**
  * all_updates_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#all_updates_rule BillingBudget#all_updates_rule}
  */
  readonly allUpdatesRule?: BillingBudgetAllUpdatesRule;
  /**
  * amount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#amount BillingBudget#amount}
  */
  readonly amount: BillingBudgetAmount;
  /**
  * budget_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#budget_filter BillingBudget#budget_filter}
  */
  readonly budgetFilter?: BillingBudgetBudgetFilter;
  /**
  * threshold_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#threshold_rules BillingBudget#threshold_rules}
  */
  readonly thresholdRules?: BillingBudgetThresholdRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#timeouts BillingBudget#timeouts}
  */
  readonly timeouts?: BillingBudgetTimeouts;
}
export interface BillingBudgetAllUpdatesRule {
  /**
  * Boolean. When set to true, disables default notifications sent
  * when a threshold is exceeded. Default recipients are
  * those with Billing Account Administrators and Billing
  * Account Users IAM roles for the target account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#disable_default_iam_recipients BillingBudget#disable_default_iam_recipients}
  */
  readonly disableDefaultIamRecipients?: boolean | cdktf.IResolvable;
  /**
  * When set to true, and when the budget has a single project configured,
  * notifications will be sent to project level recipients of that project.
  * This field will be ignored if the budget has multiple or no project configured.
  * 
  * Currently, project level recipients are the users with Owner role on a cloud project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#enable_project_level_recipients BillingBudget#enable_project_level_recipients}
  */
  readonly enableProjectLevelRecipients?: boolean | cdktf.IResolvable;
  /**
  * The full resource name of a monitoring notification
  * channel in the form
  * projects/{project_id}/notificationChannels/{channel_id}.
  * A maximum of 5 channels are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#monitoring_notification_channels BillingBudget#monitoring_notification_channels}
  */
  readonly monitoringNotificationChannels?: string[];
  /**
  * The name of the Cloud Pub/Sub topic where budget related
  * messages will be published, in the form
  * projects/{project_id}/topics/{topic_id}. Updates are sent
  * at regular intervals to the topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#pubsub_topic BillingBudget#pubsub_topic}
  */
  readonly pubsubTopic?: string;
  /**
  * The schema version of the notification. Only "1.0" is
  * accepted. It represents the JSON schema as defined in
  * https://cloud.google.com/billing/docs/how-to/budgets#notification_format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#schema_version BillingBudget#schema_version}
  */
  readonly schemaVersion?: string;
}

export function billingBudgetAllUpdatesRuleToTerraform(struct?: BillingBudgetAllUpdatesRuleOutputReference | BillingBudgetAllUpdatesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_default_iam_recipients: cdktf.booleanToTerraform(struct!.disableDefaultIamRecipients),
    enable_project_level_recipients: cdktf.booleanToTerraform(struct!.enableProjectLevelRecipients),
    monitoring_notification_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringNotificationChannels),
    pubsub_topic: cdktf.stringToTerraform(struct!.pubsubTopic),
    schema_version: cdktf.stringToTerraform(struct!.schemaVersion),
  }
}


export function billingBudgetAllUpdatesRuleToHclTerraform(struct?: BillingBudgetAllUpdatesRuleOutputReference | BillingBudgetAllUpdatesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_default_iam_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.disableDefaultIamRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_project_level_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.enableProjectLevelRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitoring_notification_channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringNotificationChannels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pubsub_topic: {
      value: cdktf.stringToHclTerraform(struct!.pubsubTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_version: {
      value: cdktf.stringToHclTerraform(struct!.schemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingBudgetAllUpdatesRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BillingBudgetAllUpdatesRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableDefaultIamRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDefaultIamRecipients = this._disableDefaultIamRecipients;
    }
    if (this._enableProjectLevelRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableProjectLevelRecipients = this._enableProjectLevelRecipients;
    }
    if (this._monitoringNotificationChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringNotificationChannels = this._monitoringNotificationChannels;
    }
    if (this._pubsubTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubTopic = this._pubsubTopic;
    }
    if (this._schemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaVersion = this._schemaVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingBudgetAllUpdatesRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableDefaultIamRecipients = undefined;
      this._enableProjectLevelRecipients = undefined;
      this._monitoringNotificationChannels = undefined;
      this._pubsubTopic = undefined;
      this._schemaVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableDefaultIamRecipients = value.disableDefaultIamRecipients;
      this._enableProjectLevelRecipients = value.enableProjectLevelRecipients;
      this._monitoringNotificationChannels = value.monitoringNotificationChannels;
      this._pubsubTopic = value.pubsubTopic;
      this._schemaVersion = value.schemaVersion;
    }
  }

  // disable_default_iam_recipients - computed: false, optional: true, required: false
  private _disableDefaultIamRecipients?: boolean | cdktf.IResolvable; 
  public get disableDefaultIamRecipients() {
    return this.getBooleanAttribute('disable_default_iam_recipients');
  }
  public set disableDefaultIamRecipients(value: boolean | cdktf.IResolvable) {
    this._disableDefaultIamRecipients = value;
  }
  public resetDisableDefaultIamRecipients() {
    this._disableDefaultIamRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDefaultIamRecipientsInput() {
    return this._disableDefaultIamRecipients;
  }

  // enable_project_level_recipients - computed: false, optional: true, required: false
  private _enableProjectLevelRecipients?: boolean | cdktf.IResolvable; 
  public get enableProjectLevelRecipients() {
    return this.getBooleanAttribute('enable_project_level_recipients');
  }
  public set enableProjectLevelRecipients(value: boolean | cdktf.IResolvable) {
    this._enableProjectLevelRecipients = value;
  }
  public resetEnableProjectLevelRecipients() {
    this._enableProjectLevelRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProjectLevelRecipientsInput() {
    return this._enableProjectLevelRecipients;
  }

  // monitoring_notification_channels - computed: false, optional: true, required: false
  private _monitoringNotificationChannels?: string[]; 
  public get monitoringNotificationChannels() {
    return this.getListAttribute('monitoring_notification_channels');
  }
  public set monitoringNotificationChannels(value: string[]) {
    this._monitoringNotificationChannels = value;
  }
  public resetMonitoringNotificationChannels() {
    this._monitoringNotificationChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringNotificationChannelsInput() {
    return this._monitoringNotificationChannels;
  }

  // pubsub_topic - computed: false, optional: true, required: false
  private _pubsubTopic?: string; 
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string) {
    this._pubsubTopic = value;
  }
  public resetPubsubTopic() {
    this._pubsubTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic;
  }

  // schema_version - computed: false, optional: true, required: false
  private _schemaVersion?: string; 
  public get schemaVersion() {
    return this.getStringAttribute('schema_version');
  }
  public set schemaVersion(value: string) {
    this._schemaVersion = value;
  }
  public resetSchemaVersion() {
    this._schemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionInput() {
    return this._schemaVersion;
  }
}
export interface BillingBudgetAmountSpecifiedAmount {
  /**
  * The 3-letter currency code defined in ISO 4217.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#currency_code BillingBudget#currency_code}
  */
  readonly currencyCode?: string;
  /**
  * Number of nano (10^-9) units of the amount.
  * The value must be between -999,999,999 and +999,999,999
  * inclusive. If units is positive, nanos must be positive or
  * zero. If units is zero, nanos can be positive, zero, or
  * negative. If units is negative, nanos must be negative or
  * zero. For example $-1.75 is represented as units=-1 and
  * nanos=-750,000,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#nanos BillingBudget#nanos}
  */
  readonly nanos?: number;
  /**
  * The whole units of the amount. For example if currencyCode
  * is "USD", then 1 unit is one US dollar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#units BillingBudget#units}
  */
  readonly units?: string;
}

export function billingBudgetAmountSpecifiedAmountToTerraform(struct?: BillingBudgetAmountSpecifiedAmountOutputReference | BillingBudgetAmountSpecifiedAmount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_code: cdktf.stringToTerraform(struct!.currencyCode),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    units: cdktf.stringToTerraform(struct!.units),
  }
}


export function billingBudgetAmountSpecifiedAmountToHclTerraform(struct?: BillingBudgetAmountSpecifiedAmountOutputReference | BillingBudgetAmountSpecifiedAmount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    currency_code: {
      value: cdktf.stringToHclTerraform(struct!.currencyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    units: {
      value: cdktf.stringToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingBudgetAmountSpecifiedAmountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BillingBudgetAmountSpecifiedAmount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currencyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.currencyCode = this._currencyCode;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingBudgetAmountSpecifiedAmount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currencyCode = undefined;
      this._nanos = undefined;
      this._units = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currencyCode = value.currencyCode;
      this._nanos = value.nanos;
      this._units = value.units;
    }
  }

  // currency_code - computed: true, optional: true, required: false
  private _currencyCode?: string; 
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }
  public set currencyCode(value: string) {
    this._currencyCode = value;
  }
  public resetCurrencyCode() {
    this._currencyCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyCodeInput() {
    return this._currencyCode;
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

  // units - computed: false, optional: true, required: false
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }
}
export interface BillingBudgetAmount {
  /**
  * Configures a budget amount that is automatically set to 100% of
  * last period's spend.
  * Boolean. Set value to true to use. Do not set to false, instead
  * use the 'specified_amount' block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#last_period_amount BillingBudget#last_period_amount}
  */
  readonly lastPeriodAmount?: boolean | cdktf.IResolvable;
  /**
  * specified_amount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#specified_amount BillingBudget#specified_amount}
  */
  readonly specifiedAmount?: BillingBudgetAmountSpecifiedAmount;
}

export function billingBudgetAmountToTerraform(struct?: BillingBudgetAmountOutputReference | BillingBudgetAmount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_period_amount: cdktf.booleanToTerraform(struct!.lastPeriodAmount),
    specified_amount: billingBudgetAmountSpecifiedAmountToTerraform(struct!.specifiedAmount),
  }
}


export function billingBudgetAmountToHclTerraform(struct?: BillingBudgetAmountOutputReference | BillingBudgetAmount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_period_amount: {
      value: cdktf.booleanToHclTerraform(struct!.lastPeriodAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    specified_amount: {
      value: billingBudgetAmountSpecifiedAmountToHclTerraform(struct!.specifiedAmount),
      isBlock: true,
      type: "list",
      storageClassType: "BillingBudgetAmountSpecifiedAmountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingBudgetAmountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BillingBudgetAmount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastPeriodAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastPeriodAmount = this._lastPeriodAmount;
    }
    if (this._specifiedAmount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.specifiedAmount = this._specifiedAmount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingBudgetAmount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lastPeriodAmount = undefined;
      this._specifiedAmount.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lastPeriodAmount = value.lastPeriodAmount;
      this._specifiedAmount.internalValue = value.specifiedAmount;
    }
  }

  // last_period_amount - computed: false, optional: true, required: false
  private _lastPeriodAmount?: boolean | cdktf.IResolvable; 
  public get lastPeriodAmount() {
    return this.getBooleanAttribute('last_period_amount');
  }
  public set lastPeriodAmount(value: boolean | cdktf.IResolvable) {
    this._lastPeriodAmount = value;
  }
  public resetLastPeriodAmount() {
    this._lastPeriodAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastPeriodAmountInput() {
    return this._lastPeriodAmount;
  }

  // specified_amount - computed: false, optional: true, required: false
  private _specifiedAmount = new BillingBudgetAmountSpecifiedAmountOutputReference(this, "specified_amount");
  public get specifiedAmount() {
    return this._specifiedAmount;
  }
  public putSpecifiedAmount(value: BillingBudgetAmountSpecifiedAmount) {
    this._specifiedAmount.internalValue = value;
  }
  public resetSpecifiedAmount() {
    this._specifiedAmount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specifiedAmountInput() {
    return this._specifiedAmount.internalValue;
  }
}
export interface BillingBudgetBudgetFilterCustomPeriodEndDate {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#day BillingBudget#day}
  */
  readonly day: number;
  /**
  * Month of a year. Must be from 1 to 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#month BillingBudget#month}
  */
  readonly month: number;
  /**
  * Year of the date. Must be from 1 to 9999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#year BillingBudget#year}
  */
  readonly year: number;
}

export function billingBudgetBudgetFilterCustomPeriodEndDateToTerraform(struct?: BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference | BillingBudgetBudgetFilterCustomPeriodEndDate): any {
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


export function billingBudgetBudgetFilterCustomPeriodEndDateToHclTerraform(struct?: BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference | BillingBudgetBudgetFilterCustomPeriodEndDate): any {
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

export class BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BillingBudgetBudgetFilterCustomPeriodEndDate | undefined {
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

  public set internalValue(value: BillingBudgetBudgetFilterCustomPeriodEndDate | undefined) {
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

  // day - computed: false, optional: false, required: true
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: false, required: true
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: false, required: true
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface BillingBudgetBudgetFilterCustomPeriodStartDate {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#day BillingBudget#day}
  */
  readonly day: number;
  /**
  * Month of a year. Must be from 1 to 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#month BillingBudget#month}
  */
  readonly month: number;
  /**
  * Year of the date. Must be from 1 to 9999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#year BillingBudget#year}
  */
  readonly year: number;
}

export function billingBudgetBudgetFilterCustomPeriodStartDateToTerraform(struct?: BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference | BillingBudgetBudgetFilterCustomPeriodStartDate): any {
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


export function billingBudgetBudgetFilterCustomPeriodStartDateToHclTerraform(struct?: BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference | BillingBudgetBudgetFilterCustomPeriodStartDate): any {
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

export class BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BillingBudgetBudgetFilterCustomPeriodStartDate | undefined {
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

  public set internalValue(value: BillingBudgetBudgetFilterCustomPeriodStartDate | undefined) {
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

  // day - computed: false, optional: false, required: true
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: false, required: true
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: false, required: true
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface BillingBudgetBudgetFilterCustomPeriod {
  /**
  * end_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#end_date BillingBudget#end_date}
  */
  readonly endDate?: BillingBudgetBudgetFilterCustomPeriodEndDate;
  /**
  * start_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#start_date BillingBudget#start_date}
  */
  readonly startDate: BillingBudgetBudgetFilterCustomPeriodStartDate;
}

export function billingBudgetBudgetFilterCustomPeriodToTerraform(struct?: BillingBudgetBudgetFilterCustomPeriodOutputReference | BillingBudgetBudgetFilterCustomPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: billingBudgetBudgetFilterCustomPeriodEndDateToTerraform(struct!.endDate),
    start_date: billingBudgetBudgetFilterCustomPeriodStartDateToTerraform(struct!.startDate),
  }
}


export function billingBudgetBudgetFilterCustomPeriodToHclTerraform(struct?: BillingBudgetBudgetFilterCustomPeriodOutputReference | BillingBudgetBudgetFilterCustomPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date: {
      value: billingBudgetBudgetFilterCustomPeriodEndDateToHclTerraform(struct!.endDate),
      isBlock: true,
      type: "list",
      storageClassType: "BillingBudgetBudgetFilterCustomPeriodEndDateList",
    },
    start_date: {
      value: billingBudgetBudgetFilterCustomPeriodStartDateToHclTerraform(struct!.startDate),
      isBlock: true,
      type: "list",
      storageClassType: "BillingBudgetBudgetFilterCustomPeriodStartDateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingBudgetBudgetFilterCustomPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BillingBudgetBudgetFilterCustomPeriod | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingBudgetBudgetFilterCustomPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDate.internalValue = undefined;
      this._startDate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDate.internalValue = value.endDate;
      this._startDate.internalValue = value.startDate;
    }
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate = new BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference(this, "end_date");
  public get endDate() {
    return this._endDate;
  }
  public putEndDate(value: BillingBudgetBudgetFilterCustomPeriodEndDate) {
    this._endDate.internalValue = value;
  }
  public resetEndDate() {
    this._endDate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate.internalValue;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate = new BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference(this, "start_date");
  public get startDate() {
    return this._startDate;
  }
  public putStartDate(value: BillingBudgetBudgetFilterCustomPeriodStartDate) {
    this._startDate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate.internalValue;
  }
}
export interface BillingBudgetBudgetFilter {
  /**
  * A CalendarPeriod represents the abstract concept of a recurring time period that has a
  * canonical start. Grammatically, "the start of the current CalendarPeriod".
  * All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).
  * 
  * Exactly one of 'calendar_period', 'custom_period' must be provided. Possible values: ["MONTH", "QUARTER", "YEAR", "CALENDAR_PERIOD_UNSPECIFIED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#calendar_period BillingBudget#calendar_period}
  */
  readonly calendarPeriod?: string;
  /**
  * Optional. If creditTypesTreatment is INCLUDE_SPECIFIED_CREDITS,
  * this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values.
  * If creditTypesTreatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.
  * 
  * **Note:** If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#credit_types BillingBudget#credit_types}
  */
  readonly creditTypes?: string[];
  /**
  * Specifies how credits should be treated when determining spend
  * for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#credit_types_treatment BillingBudget#credit_types_treatment}
  */
  readonly creditTypesTreatment?: string;
  /**
  * A single label and value pair specifying that usage from only
  * this set of labeled resources should be included in the budget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#labels BillingBudget#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * A set of projects of the form projects/{project_number},
  * specifying that usage from only this set of projects should be
  * included in the budget. If omitted, the report will include
  * all usage for the billing account, regardless of which project
  * the usage occurred on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#projects BillingBudget#projects}
  */
  readonly projects?: string[];
  /**
  * A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId},
  * specifying that usage from only this set of folders and organizations should be included in the budget.
  * If omitted, the budget includes all usage that the billing account pays for. If the folder or organization
  * contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#resource_ancestors BillingBudget#resource_ancestors}
  */
  readonly resourceAncestors?: string[];
  /**
  * A set of services of the form services/{service_id},
  * specifying that usage from only this set of services should be
  * included in the budget. If omitted, the report will include
  * usage for all the services. The service names are available
  * through the Catalog API:
  * https://cloud.google.com/billing/v1/how-tos/catalog-api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#services BillingBudget#services}
  */
  readonly services?: string[];
  /**
  * A set of subaccounts of the form billingAccounts/{account_id},
  * specifying that usage from only this set of subaccounts should
  * be included in the budget. If a subaccount is set to the name of
  * the parent account, usage from the parent account will be included.
  * If the field is omitted, the report will include usage from the parent
  * account and all subaccounts, if they exist.
  * 
  * **Note:** If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#subaccounts BillingBudget#subaccounts}
  */
  readonly subaccounts?: string[];
  /**
  * custom_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#custom_period BillingBudget#custom_period}
  */
  readonly customPeriod?: BillingBudgetBudgetFilterCustomPeriod;
}

export function billingBudgetBudgetFilterToTerraform(struct?: BillingBudgetBudgetFilterOutputReference | BillingBudgetBudgetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calendar_period: cdktf.stringToTerraform(struct!.calendarPeriod),
    credit_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.creditTypes),
    credit_types_treatment: cdktf.stringToTerraform(struct!.creditTypesTreatment),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    projects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projects),
    resource_ancestors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceAncestors),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    subaccounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subaccounts),
    custom_period: billingBudgetBudgetFilterCustomPeriodToTerraform(struct!.customPeriod),
  }
}


export function billingBudgetBudgetFilterToHclTerraform(struct?: BillingBudgetBudgetFilterOutputReference | BillingBudgetBudgetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calendar_period: {
      value: cdktf.stringToHclTerraform(struct!.calendarPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credit_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.creditTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    credit_types_treatment: {
      value: cdktf.stringToHclTerraform(struct!.creditTypesTreatment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    projects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projects),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_ancestors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceAncestors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subaccounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subaccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_period: {
      value: billingBudgetBudgetFilterCustomPeriodToHclTerraform(struct!.customPeriod),
      isBlock: true,
      type: "list",
      storageClassType: "BillingBudgetBudgetFilterCustomPeriodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingBudgetBudgetFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BillingBudgetBudgetFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calendarPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendarPeriod = this._calendarPeriod;
    }
    if (this._creditTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.creditTypes = this._creditTypes;
    }
    if (this._creditTypesTreatment !== undefined) {
      hasAnyValues = true;
      internalValueResult.creditTypesTreatment = this._creditTypesTreatment;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._projects !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects;
    }
    if (this._resourceAncestors !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAncestors = this._resourceAncestors;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._subaccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.subaccounts = this._subaccounts;
    }
    if (this._customPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPeriod = this._customPeriod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingBudgetBudgetFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._calendarPeriod = undefined;
      this._creditTypes = undefined;
      this._creditTypesTreatment = undefined;
      this._labels = undefined;
      this._projects = undefined;
      this._resourceAncestors = undefined;
      this._services = undefined;
      this._subaccounts = undefined;
      this._customPeriod.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._calendarPeriod = value.calendarPeriod;
      this._creditTypes = value.creditTypes;
      this._creditTypesTreatment = value.creditTypesTreatment;
      this._labels = value.labels;
      this._projects = value.projects;
      this._resourceAncestors = value.resourceAncestors;
      this._services = value.services;
      this._subaccounts = value.subaccounts;
      this._customPeriod.internalValue = value.customPeriod;
    }
  }

  // calendar_period - computed: false, optional: true, required: false
  private _calendarPeriod?: string; 
  public get calendarPeriod() {
    return this.getStringAttribute('calendar_period');
  }
  public set calendarPeriod(value: string) {
    this._calendarPeriod = value;
  }
  public resetCalendarPeriod() {
    this._calendarPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarPeriodInput() {
    return this._calendarPeriod;
  }

  // credit_types - computed: true, optional: true, required: false
  private _creditTypes?: string[]; 
  public get creditTypes() {
    return this.getListAttribute('credit_types');
  }
  public set creditTypes(value: string[]) {
    this._creditTypes = value;
  }
  public resetCreditTypes() {
    this._creditTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditTypesInput() {
    return this._creditTypes;
  }

  // credit_types_treatment - computed: false, optional: true, required: false
  private _creditTypesTreatment?: string; 
  public get creditTypesTreatment() {
    return this.getStringAttribute('credit_types_treatment');
  }
  public set creditTypesTreatment(value: string) {
    this._creditTypesTreatment = value;
  }
  public resetCreditTypesTreatment() {
    this._creditTypesTreatment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditTypesTreatmentInput() {
    return this._creditTypesTreatment;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // projects - computed: false, optional: true, required: false
  private _projects?: string[]; 
  public get projects() {
    return cdktf.Fn.tolist(this.getListAttribute('projects'));
  }
  public set projects(value: string[]) {
    this._projects = value;
  }
  public resetProjects() {
    this._projects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects;
  }

  // resource_ancestors - computed: false, optional: true, required: false
  private _resourceAncestors?: string[]; 
  public get resourceAncestors() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_ancestors'));
  }
  public set resourceAncestors(value: string[]) {
    this._resourceAncestors = value;
  }
  public resetResourceAncestors() {
    this._resourceAncestors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAncestorsInput() {
    return this._resourceAncestors;
  }

  // services - computed: true, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // subaccounts - computed: true, optional: true, required: false
  private _subaccounts?: string[]; 
  public get subaccounts() {
    return this.getListAttribute('subaccounts');
  }
  public set subaccounts(value: string[]) {
    this._subaccounts = value;
  }
  public resetSubaccounts() {
    this._subaccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subaccountsInput() {
    return this._subaccounts;
  }

  // custom_period - computed: false, optional: true, required: false
  private _customPeriod = new BillingBudgetBudgetFilterCustomPeriodOutputReference(this, "custom_period");
  public get customPeriod() {
    return this._customPeriod;
  }
  public putCustomPeriod(value: BillingBudgetBudgetFilterCustomPeriod) {
    this._customPeriod.internalValue = value;
  }
  public resetCustomPeriod() {
    this._customPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPeriodInput() {
    return this._customPeriod.internalValue;
  }
}
export interface BillingBudgetThresholdRules {
  /**
  * The type of basis used to determine if spend has passed
  * the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#spend_basis BillingBudget#spend_basis}
  */
  readonly spendBasis?: string;
  /**
  * Send an alert when this threshold is exceeded. This is a
  * 1.0-based percentage, so 0.5 = 50%. Must be >= 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#threshold_percent BillingBudget#threshold_percent}
  */
  readonly thresholdPercent: number;
}

export function billingBudgetThresholdRulesToTerraform(struct?: BillingBudgetThresholdRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spend_basis: cdktf.stringToTerraform(struct!.spendBasis),
    threshold_percent: cdktf.numberToTerraform(struct!.thresholdPercent),
  }
}


export function billingBudgetThresholdRulesToHclTerraform(struct?: BillingBudgetThresholdRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spend_basis: {
      value: cdktf.stringToHclTerraform(struct!.spendBasis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.thresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingBudgetThresholdRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BillingBudgetThresholdRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spendBasis !== undefined) {
      hasAnyValues = true;
      internalValueResult.spendBasis = this._spendBasis;
    }
    if (this._thresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdPercent = this._thresholdPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingBudgetThresholdRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spendBasis = undefined;
      this._thresholdPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spendBasis = value.spendBasis;
      this._thresholdPercent = value.thresholdPercent;
    }
  }

  // spend_basis - computed: false, optional: true, required: false
  private _spendBasis?: string; 
  public get spendBasis() {
    return this.getStringAttribute('spend_basis');
  }
  public set spendBasis(value: string) {
    this._spendBasis = value;
  }
  public resetSpendBasis() {
    this._spendBasis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spendBasisInput() {
    return this._spendBasis;
  }

  // threshold_percent - computed: false, optional: false, required: true
  private _thresholdPercent?: number; 
  public get thresholdPercent() {
    return this.getNumberAttribute('threshold_percent');
  }
  public set thresholdPercent(value: number) {
    this._thresholdPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPercentInput() {
    return this._thresholdPercent;
  }
}

export class BillingBudgetThresholdRulesList extends cdktf.ComplexList {
  public internalValue? : BillingBudgetThresholdRules[] | cdktf.IResolvable

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
  public get(index: number): BillingBudgetThresholdRulesOutputReference {
    return new BillingBudgetThresholdRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BillingBudgetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#create BillingBudget#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#delete BillingBudget#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#update BillingBudget#update}
  */
  readonly update?: string;
}

export function billingBudgetTimeoutsToTerraform(struct?: BillingBudgetTimeouts | cdktf.IResolvable): any {
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


export function billingBudgetTimeoutsToHclTerraform(struct?: BillingBudgetTimeouts | cdktf.IResolvable): any {
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

export class BillingBudgetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BillingBudgetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BillingBudgetTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget google_billing_budget}
*/
export class BillingBudget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_billing_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BillingBudget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BillingBudget to import
  * @param importFromId The id of the existing BillingBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BillingBudget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_billing_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/billing_budget google_billing_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BillingBudgetConfig
  */
  public constructor(scope: Construct, id: string, config: BillingBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_billing_budget',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.39.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingAccount = config.billingAccount;
    this._displayName = config.displayName;
    this._id = config.id;
    this._ownershipScope = config.ownershipScope;
    this._allUpdatesRule.internalValue = config.allUpdatesRule;
    this._amount.internalValue = config.amount;
    this._budgetFilter.internalValue = config.budgetFilter;
    this._thresholdRules.internalValue = config.thresholdRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account - computed: false, optional: false, required: true
  private _billingAccount?: string; 
  public get billingAccount() {
    return this.getStringAttribute('billing_account');
  }
  public set billingAccount(value: string) {
    this._billingAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountInput() {
    return this._billingAccount;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ownership_scope - computed: false, optional: true, required: false
  private _ownershipScope?: string; 
  public get ownershipScope() {
    return this.getStringAttribute('ownership_scope');
  }
  public set ownershipScope(value: string) {
    this._ownershipScope = value;
  }
  public resetOwnershipScope() {
    this._ownershipScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipScopeInput() {
    return this._ownershipScope;
  }

  // all_updates_rule - computed: false, optional: true, required: false
  private _allUpdatesRule = new BillingBudgetAllUpdatesRuleOutputReference(this, "all_updates_rule");
  public get allUpdatesRule() {
    return this._allUpdatesRule;
  }
  public putAllUpdatesRule(value: BillingBudgetAllUpdatesRule) {
    this._allUpdatesRule.internalValue = value;
  }
  public resetAllUpdatesRule() {
    this._allUpdatesRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUpdatesRuleInput() {
    return this._allUpdatesRule.internalValue;
  }

  // amount - computed: false, optional: false, required: true
  private _amount = new BillingBudgetAmountOutputReference(this, "amount");
  public get amount() {
    return this._amount;
  }
  public putAmount(value: BillingBudgetAmount) {
    this._amount.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount.internalValue;
  }

  // budget_filter - computed: false, optional: true, required: false
  private _budgetFilter = new BillingBudgetBudgetFilterOutputReference(this, "budget_filter");
  public get budgetFilter() {
    return this._budgetFilter;
  }
  public putBudgetFilter(value: BillingBudgetBudgetFilter) {
    this._budgetFilter.internalValue = value;
  }
  public resetBudgetFilter() {
    this._budgetFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetFilterInput() {
    return this._budgetFilter.internalValue;
  }

  // threshold_rules - computed: false, optional: true, required: false
  private _thresholdRules = new BillingBudgetThresholdRulesList(this, "threshold_rules", false);
  public get thresholdRules() {
    return this._thresholdRules;
  }
  public putThresholdRules(value: BillingBudgetThresholdRules[] | cdktf.IResolvable) {
    this._thresholdRules.internalValue = value;
  }
  public resetThresholdRules() {
    this._thresholdRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdRulesInput() {
    return this._thresholdRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BillingBudgetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BillingBudgetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account: cdktf.stringToTerraform(this._billingAccount),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      ownership_scope: cdktf.stringToTerraform(this._ownershipScope),
      all_updates_rule: billingBudgetAllUpdatesRuleToTerraform(this._allUpdatesRule.internalValue),
      amount: billingBudgetAmountToTerraform(this._amount.internalValue),
      budget_filter: billingBudgetBudgetFilterToTerraform(this._budgetFilter.internalValue),
      threshold_rules: cdktf.listMapper(billingBudgetThresholdRulesToTerraform, true)(this._thresholdRules.internalValue),
      timeouts: billingBudgetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_account: {
        value: cdktf.stringToHclTerraform(this._billingAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownership_scope: {
        value: cdktf.stringToHclTerraform(this._ownershipScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      all_updates_rule: {
        value: billingBudgetAllUpdatesRuleToHclTerraform(this._allUpdatesRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BillingBudgetAllUpdatesRuleList",
      },
      amount: {
        value: billingBudgetAmountToHclTerraform(this._amount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BillingBudgetAmountList",
      },
      budget_filter: {
        value: billingBudgetBudgetFilterToHclTerraform(this._budgetFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BillingBudgetBudgetFilterList",
      },
      threshold_rules: {
        value: cdktf.listMapperHcl(billingBudgetThresholdRulesToHclTerraform, true)(this._thresholdRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BillingBudgetThresholdRulesList",
      },
      timeouts: {
        value: billingBudgetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BillingBudgetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
