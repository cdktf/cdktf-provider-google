// https://www.terraform.io/docs/providers/google/r/billing_budget.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BillingBudgetConfig extends cdktf.TerraformMetaArguments {
  /** ID of the billing account to set a budget on. */
  readonly billingAccount: string;
  /** User data for display name in UI. Must be <= 60 chars. */
  readonly displayName?: string;
  /** all_updates_rule block */
  readonly allUpdatesRule?: BillingBudgetAllUpdatesRule[];
  /** amount block */
  readonly amount: BillingBudgetAmount[];
  /** budget_filter block */
  readonly budgetFilter?: BillingBudgetBudgetFilter[];
  /** threshold_rules block */
  readonly thresholdRules: BillingBudgetThresholdRules[];
  /** timeouts block */
  readonly timeouts?: BillingBudgetTimeouts;
}
export interface BillingBudgetAllUpdatesRule {
  /** Boolean. When set to true, disables default notifications sent
when a threshold is exceeded. Default recipients are
those with Billing Account Administrators and Billing
Account Users IAM roles for the target account. */
  readonly disableDefaultIamRecipients?: boolean;
  /** The full resource name of a monitoring notification
channel in the form
projects/{project_id}/notificationChannels/{channel_id}.
A maximum of 5 channels are allowed. */
  readonly monitoringNotificationChannels?: string[];
  /** The name of the Cloud Pub/Sub topic where budget related
messages will be published, in the form
projects/{project_id}/topics/{topic_id}. Updates are sent
at regular intervals to the topic. */
  readonly pubsubTopic?: string;
  /** The schema version of the notification. Only "1.0" is
accepted. It represents the JSON schema as defined in
https://cloud.google.com/billing/docs/how-to/budgets#notification_format. */
  readonly schemaVersion?: string;
}

function billingBudgetAllUpdatesRuleToTerraform(struct?: BillingBudgetAllUpdatesRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_default_iam_recipients: cdktf.booleanToTerraform(struct!.disableDefaultIamRecipients),
    monitoring_notification_channels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.monitoringNotificationChannels),
    pubsub_topic: cdktf.stringToTerraform(struct!.pubsubTopic),
    schema_version: cdktf.stringToTerraform(struct!.schemaVersion),
  }
}

export interface BillingBudgetAmountSpecifiedAmount {
  /** The 3-letter currency code defined in ISO 4217. */
  readonly currencyCode?: string;
  /** Number of nano (10^-9) units of the amount.
The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000. */
  readonly nanos?: number;
  /** The whole units of the amount. For example if currencyCode
is "USD", then 1 unit is one US dollar. */
  readonly units?: string;
}

function billingBudgetAmountSpecifiedAmountToTerraform(struct?: BillingBudgetAmountSpecifiedAmount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    currency_code: cdktf.stringToTerraform(struct!.currencyCode),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    units: cdktf.stringToTerraform(struct!.units),
  }
}

export interface BillingBudgetAmount {
  /** Configures a budget amount that is automatically set to 100% of
last period's spend.
Boolean. Set value to true to use. Do not set to false, instead
use the 'specified_amount' block. */
  readonly lastPeriodAmount?: boolean;
  /** specified_amount block */
  readonly specifiedAmount?: BillingBudgetAmountSpecifiedAmount[];
}

function billingBudgetAmountToTerraform(struct?: BillingBudgetAmount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    last_period_amount: cdktf.booleanToTerraform(struct!.lastPeriodAmount),
    specified_amount: cdktf.listMapper(billingBudgetAmountSpecifiedAmountToTerraform)(struct!.specifiedAmount),
  }
}

export interface BillingBudgetBudgetFilter {
  /** A set of subaccounts of the form billingAccounts/{account_id},
specifying that usage from only this set of subaccounts should
be included in the budget. If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist. */
  readonly creditTypes?: string[];
  /** Specifies how credits should be treated when determining spend
for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"] */
  readonly creditTypesTreatment?: string;
  /** A single label and value pair specifying that usage from only
this set of labeled resources should be included in the budget. */
  readonly labels?: { [key: string]: string };
  /** A set of projects of the form projects/{project_number},
specifying that usage from only this set of projects should be
included in the budget. If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on. */
  readonly projects?: string[];
  /** A set of services of the form services/{service_id},
specifying that usage from only this set of services should be
included in the budget. If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api. */
  readonly services?: string[];
  /** A set of subaccounts of the form billingAccounts/{account_id},
specifying that usage from only this set of subaccounts should
be included in the budget. If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist. */
  readonly subaccounts?: string[];
}

function billingBudgetBudgetFilterToTerraform(struct?: BillingBudgetBudgetFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    credit_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.creditTypes),
    credit_types_treatment: cdktf.stringToTerraform(struct!.creditTypesTreatment),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    projects: cdktf.listMapper(cdktf.stringToTerraform)(struct!.projects),
    services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.services),
    subaccounts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subaccounts),
  }
}

export interface BillingBudgetThresholdRules {
  /** The type of basis used to determine if spend has passed
the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"] */
  readonly spendBasis?: string;
  /** Send an alert when this threshold is exceeded. This is a
1.0-based percentage, so 0.5 = 50%. Must be >= 0. */
  readonly thresholdPercent: number;
}

function billingBudgetThresholdRulesToTerraform(struct?: BillingBudgetThresholdRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    spend_basis: cdktf.stringToTerraform(struct!.spendBasis),
    threshold_percent: cdktf.numberToTerraform(struct!.thresholdPercent),
  }
}

export interface BillingBudgetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function billingBudgetTimeoutsToTerraform(struct?: BillingBudgetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BillingBudget extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BillingBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_billing_budget',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._billingAccount = config.billingAccount;
    this._displayName = config.displayName;
    this._allUpdatesRule = config.allUpdatesRule;
    this._amount = config.amount;
    this._budgetFilter = config.budgetFilter;
    this._thresholdRules = config.thresholdRules;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account - computed: false, optional: false, required: true
  private _billingAccount: string;
  public get billingAccount() {
    return this.getStringAttribute('billing_account');
  }
  public set billingAccount(value: string) {
    this._billingAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountInput() {
    return this._billingAccount
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // all_updates_rule - computed: false, optional: true, required: false
  private _allUpdatesRule?: BillingBudgetAllUpdatesRule[];
  public get allUpdatesRule() {
    return this.interpolationForAttribute('all_updates_rule') as any;
  }
  public set allUpdatesRule(value: BillingBudgetAllUpdatesRule[] ) {
    this._allUpdatesRule = value;
  }
  public resetAllUpdatesRule() {
    this._allUpdatesRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUpdatesRuleInput() {
    return this._allUpdatesRule
  }

  // amount - computed: false, optional: false, required: true
  private _amount: BillingBudgetAmount[];
  public get amount() {
    return this.interpolationForAttribute('amount') as any;
  }
  public set amount(value: BillingBudgetAmount[]) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount
  }

  // budget_filter - computed: false, optional: true, required: false
  private _budgetFilter?: BillingBudgetBudgetFilter[];
  public get budgetFilter() {
    return this.interpolationForAttribute('budget_filter') as any;
  }
  public set budgetFilter(value: BillingBudgetBudgetFilter[] ) {
    this._budgetFilter = value;
  }
  public resetBudgetFilter() {
    this._budgetFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetFilterInput() {
    return this._budgetFilter
  }

  // threshold_rules - computed: false, optional: false, required: true
  private _thresholdRules: BillingBudgetThresholdRules[];
  public get thresholdRules() {
    return this.interpolationForAttribute('threshold_rules') as any;
  }
  public set thresholdRules(value: BillingBudgetThresholdRules[]) {
    this._thresholdRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdRulesInput() {
    return this._thresholdRules
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BillingBudgetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BillingBudgetTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account: cdktf.stringToTerraform(this._billingAccount),
      display_name: cdktf.stringToTerraform(this._displayName),
      all_updates_rule: cdktf.listMapper(billingBudgetAllUpdatesRuleToTerraform)(this._allUpdatesRule),
      amount: cdktf.listMapper(billingBudgetAmountToTerraform)(this._amount),
      budget_filter: cdktf.listMapper(billingBudgetBudgetFilterToTerraform)(this._budgetFilter),
      threshold_rules: cdktf.listMapper(billingBudgetThresholdRulesToTerraform)(this._thresholdRules),
      timeouts: billingBudgetTimeoutsToTerraform(this._timeouts),
    };
  }
}
