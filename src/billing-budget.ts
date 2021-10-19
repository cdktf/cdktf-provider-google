// https://www.terraform.io/docs/providers/google/r/billing_budget.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BillingBudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the billing account to set a budget on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#billing_account BillingBudget#billing_account}
  */
  readonly billingAccount: string;
  /**
  * User data for display name in UI. Must be <= 60 chars.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#display_name BillingBudget#display_name}
  */
  readonly displayName?: string;
  /**
  * all_updates_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#all_updates_rule BillingBudget#all_updates_rule}
  */
  readonly allUpdatesRule?: BillingBudgetAllUpdatesRule;
  /**
  * amount block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#amount BillingBudget#amount}
  */
  readonly amount: BillingBudgetAmount;
  /**
  * budget_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#budget_filter BillingBudget#budget_filter}
  */
  readonly budgetFilter?: BillingBudgetBudgetFilter;
  /**
  * threshold_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#threshold_rules BillingBudget#threshold_rules}
  */
  readonly thresholdRules: BillingBudgetThresholdRules[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#timeouts BillingBudget#timeouts}
  */
  readonly timeouts?: BillingBudgetTimeouts;
}
export interface BillingBudgetAllUpdatesRule {
  /**
  * Boolean. When set to true, disables default notifications sent
when a threshold is exceeded. Default recipients are
those with Billing Account Administrators and Billing
Account Users IAM roles for the target account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#disable_default_iam_recipients BillingBudget#disable_default_iam_recipients}
  */
  readonly disableDefaultIamRecipients?: boolean | cdktf.IResolvable;
  /**
  * The full resource name of a monitoring notification
channel in the form
projects/{project_id}/notificationChannels/{channel_id}.
A maximum of 5 channels are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#monitoring_notification_channels BillingBudget#monitoring_notification_channels}
  */
  readonly monitoringNotificationChannels?: string[];
  /**
  * The name of the Cloud Pub/Sub topic where budget related
messages will be published, in the form
projects/{project_id}/topics/{topic_id}. Updates are sent
at regular intervals to the topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#pubsub_topic BillingBudget#pubsub_topic}
  */
  readonly pubsubTopic?: string;
  /**
  * The schema version of the notification. Only "1.0" is
accepted. It represents the JSON schema as defined in
https://cloud.google.com/billing/docs/how-to/budgets#notification_format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#schema_version BillingBudget#schema_version}
  */
  readonly schemaVersion?: string;
}

function billingBudgetAllUpdatesRuleToTerraform(struct?: BillingBudgetAllUpdatesRuleOutputReference | BillingBudgetAllUpdatesRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_default_iam_recipients: cdktf.booleanToTerraform(struct!.disableDefaultIamRecipients),
    monitoring_notification_channels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.monitoringNotificationChannels),
    pubsub_topic: cdktf.stringToTerraform(struct!.pubsubTopic),
    schema_version: cdktf.stringToTerraform(struct!.schemaVersion),
  }
}

export class BillingBudgetAllUpdatesRuleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // disable_default_iam_recipients - computed: false, optional: true, required: false
  private _disableDefaultIamRecipients?: boolean | cdktf.IResolvable | undefined; 
  public get disableDefaultIamRecipients() {
    return this.getBooleanAttribute('disable_default_iam_recipients') as any;
  }
  public set disableDefaultIamRecipients(value: boolean | cdktf.IResolvable | undefined) {
    this._disableDefaultIamRecipients = value;
  }
  public resetDisableDefaultIamRecipients() {
    this._disableDefaultIamRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDefaultIamRecipientsInput() {
    return this._disableDefaultIamRecipients
  }

  // monitoring_notification_channels - computed: false, optional: true, required: false
  private _monitoringNotificationChannels?: string[] | undefined; 
  public get monitoringNotificationChannels() {
    return this.getListAttribute('monitoring_notification_channels');
  }
  public set monitoringNotificationChannels(value: string[] | undefined) {
    this._monitoringNotificationChannels = value;
  }
  public resetMonitoringNotificationChannels() {
    this._monitoringNotificationChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringNotificationChannelsInput() {
    return this._monitoringNotificationChannels
  }

  // pubsub_topic - computed: false, optional: true, required: false
  private _pubsubTopic?: string | undefined; 
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string | undefined) {
    this._pubsubTopic = value;
  }
  public resetPubsubTopic() {
    this._pubsubTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic
  }

  // schema_version - computed: false, optional: true, required: false
  private _schemaVersion?: string | undefined; 
  public get schemaVersion() {
    return this.getStringAttribute('schema_version');
  }
  public set schemaVersion(value: string | undefined) {
    this._schemaVersion = value;
  }
  public resetSchemaVersion() {
    this._schemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionInput() {
    return this._schemaVersion
  }
}
export interface BillingBudgetAmountSpecifiedAmount {
  /**
  * The 3-letter currency code defined in ISO 4217.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#currency_code BillingBudget#currency_code}
  */
  readonly currencyCode?: string;
  /**
  * Number of nano (10^-9) units of the amount.
The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#nanos BillingBudget#nanos}
  */
  readonly nanos?: number;
  /**
  * The whole units of the amount. For example if currencyCode
is "USD", then 1 unit is one US dollar.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#units BillingBudget#units}
  */
  readonly units?: string;
}

function billingBudgetAmountSpecifiedAmountToTerraform(struct?: BillingBudgetAmountSpecifiedAmountOutputReference | BillingBudgetAmountSpecifiedAmount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_code: cdktf.stringToTerraform(struct!.currencyCode),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    units: cdktf.stringToTerraform(struct!.units),
  }
}

export class BillingBudgetAmountSpecifiedAmountOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // currency_code - computed: true, optional: true, required: false
  private _currencyCode?: string | undefined; 
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }
  public set currencyCode(value: string | undefined) {
    this._currencyCode = value;
  }
  public resetCurrencyCode() {
    this._currencyCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyCodeInput() {
    return this._currencyCode
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
  }

  // units - computed: false, optional: true, required: false
  private _units?: string | undefined; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string | undefined) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units
  }
}
export interface BillingBudgetAmount {
  /**
  * Configures a budget amount that is automatically set to 100% of
last period's spend.
Boolean. Set value to true to use. Do not set to false, instead
use the 'specified_amount' block.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#last_period_amount BillingBudget#last_period_amount}
  */
  readonly lastPeriodAmount?: boolean | cdktf.IResolvable;
  /**
  * specified_amount block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#specified_amount BillingBudget#specified_amount}
  */
  readonly specifiedAmount?: BillingBudgetAmountSpecifiedAmount;
}

function billingBudgetAmountToTerraform(struct?: BillingBudgetAmountOutputReference | BillingBudgetAmount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_period_amount: cdktf.booleanToTerraform(struct!.lastPeriodAmount),
    specified_amount: billingBudgetAmountSpecifiedAmountToTerraform(struct!.specifiedAmount),
  }
}

export class BillingBudgetAmountOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // last_period_amount - computed: false, optional: true, required: false
  private _lastPeriodAmount?: boolean | cdktf.IResolvable | undefined; 
  public get lastPeriodAmount() {
    return this.getBooleanAttribute('last_period_amount') as any;
  }
  public set lastPeriodAmount(value: boolean | cdktf.IResolvable | undefined) {
    this._lastPeriodAmount = value;
  }
  public resetLastPeriodAmount() {
    this._lastPeriodAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastPeriodAmountInput() {
    return this._lastPeriodAmount
  }

  // specified_amount - computed: false, optional: true, required: false
  private _specifiedAmount?: BillingBudgetAmountSpecifiedAmount | undefined; 
  private __specifiedAmountOutput = new BillingBudgetAmountSpecifiedAmountOutputReference(this as any, "specified_amount", true);
  public get specifiedAmount() {
    return this.__specifiedAmountOutput;
  }
  public putSpecifiedAmount(value: BillingBudgetAmountSpecifiedAmount | undefined) {
    this._specifiedAmount = value;
  }
  public resetSpecifiedAmount() {
    this._specifiedAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specifiedAmountInput() {
    return this._specifiedAmount
  }
}
export interface BillingBudgetBudgetFilter {
  /**
  * A set of subaccounts of the form billingAccounts/{account_id},
specifying that usage from only this set of subaccounts should
be included in the budget. If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#credit_types BillingBudget#credit_types}
  */
  readonly creditTypes?: string[];
  /**
  * Specifies how credits should be treated when determining spend
for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#credit_types_treatment BillingBudget#credit_types_treatment}
  */
  readonly creditTypesTreatment?: string;
  /**
  * A single label and value pair specifying that usage from only
this set of labeled resources should be included in the budget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#labels BillingBudget#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A set of projects of the form projects/{project_number},
specifying that usage from only this set of projects should be
included in the budget. If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#projects BillingBudget#projects}
  */
  readonly projects?: string[];
  /**
  * A set of services of the form services/{service_id},
specifying that usage from only this set of services should be
included in the budget. If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#services BillingBudget#services}
  */
  readonly services?: string[];
  /**
  * A set of subaccounts of the form billingAccounts/{account_id},
specifying that usage from only this set of subaccounts should
be included in the budget. If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#subaccounts BillingBudget#subaccounts}
  */
  readonly subaccounts?: string[];
}

function billingBudgetBudgetFilterToTerraform(struct?: BillingBudgetBudgetFilterOutputReference | BillingBudgetBudgetFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credit_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.creditTypes),
    credit_types_treatment: cdktf.stringToTerraform(struct!.creditTypesTreatment),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    projects: cdktf.listMapper(cdktf.stringToTerraform)(struct!.projects),
    services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.services),
    subaccounts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subaccounts),
  }
}

export class BillingBudgetBudgetFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // credit_types - computed: true, optional: true, required: false
  private _creditTypes?: string[] | undefined; 
  public get creditTypes() {
    return this.getListAttribute('credit_types');
  }
  public set creditTypes(value: string[] | undefined) {
    this._creditTypes = value;
  }
  public resetCreditTypes() {
    this._creditTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditTypesInput() {
    return this._creditTypes
  }

  // credit_types_treatment - computed: false, optional: true, required: false
  private _creditTypesTreatment?: string | undefined; 
  public get creditTypesTreatment() {
    return this.getStringAttribute('credit_types_treatment');
  }
  public set creditTypesTreatment(value: string | undefined) {
    this._creditTypesTreatment = value;
  }
  public resetCreditTypesTreatment() {
    this._creditTypesTreatment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditTypesTreatmentInput() {
    return this._creditTypesTreatment
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // projects - computed: false, optional: true, required: false
  private _projects?: string[] | undefined; 
  public get projects() {
    return this.getListAttribute('projects');
  }
  public set projects(value: string[] | undefined) {
    this._projects = value;
  }
  public resetProjects() {
    this._projects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects
  }

  // services - computed: true, optional: true, required: false
  private _services?: string[] | undefined; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[] | undefined) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services
  }

  // subaccounts - computed: true, optional: true, required: false
  private _subaccounts?: string[] | undefined; 
  public get subaccounts() {
    return this.getListAttribute('subaccounts');
  }
  public set subaccounts(value: string[] | undefined) {
    this._subaccounts = value;
  }
  public resetSubaccounts() {
    this._subaccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subaccountsInput() {
    return this._subaccounts
  }
}
export interface BillingBudgetThresholdRules {
  /**
  * The type of basis used to determine if spend has passed
the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#spend_basis BillingBudget#spend_basis}
  */
  readonly spendBasis?: string;
  /**
  * Send an alert when this threshold is exceeded. This is a
1.0-based percentage, so 0.5 = 50%. Must be >= 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#threshold_percent BillingBudget#threshold_percent}
  */
  readonly thresholdPercent: number;
}

function billingBudgetThresholdRulesToTerraform(struct?: BillingBudgetThresholdRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spend_basis: cdktf.stringToTerraform(struct!.spendBasis),
    threshold_percent: cdktf.numberToTerraform(struct!.thresholdPercent),
  }
}

export interface BillingBudgetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#create BillingBudget#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#delete BillingBudget#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html#update BillingBudget#update}
  */
  readonly update?: string;
}

function billingBudgetTimeoutsToTerraform(struct?: BillingBudgetTimeoutsOutputReference | BillingBudgetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class BillingBudgetTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html google_billing_budget}
*/
export class BillingBudget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_billing_budget";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/billing_budget.html google_billing_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BillingBudgetConfig
  */
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
  private _billingAccount?: string; 
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
  private _displayName?: string | undefined; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
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
  private _allUpdatesRule?: BillingBudgetAllUpdatesRule | undefined; 
  private __allUpdatesRuleOutput = new BillingBudgetAllUpdatesRuleOutputReference(this as any, "all_updates_rule", true);
  public get allUpdatesRule() {
    return this.__allUpdatesRuleOutput;
  }
  public putAllUpdatesRule(value: BillingBudgetAllUpdatesRule | undefined) {
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
  private _amount?: BillingBudgetAmount; 
  private __amountOutput = new BillingBudgetAmountOutputReference(this as any, "amount", true);
  public get amount() {
    return this.__amountOutput;
  }
  public putAmount(value: BillingBudgetAmount) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount
  }

  // budget_filter - computed: false, optional: true, required: false
  private _budgetFilter?: BillingBudgetBudgetFilter | undefined; 
  private __budgetFilterOutput = new BillingBudgetBudgetFilterOutputReference(this as any, "budget_filter", true);
  public get budgetFilter() {
    return this.__budgetFilterOutput;
  }
  public putBudgetFilter(value: BillingBudgetBudgetFilter | undefined) {
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
  private _thresholdRules?: BillingBudgetThresholdRules[]; 
  public get thresholdRules() {
    // Getting the computed value is not yet implemented
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
  private _timeouts?: BillingBudgetTimeouts | undefined; 
  private __timeoutsOutput = new BillingBudgetTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: BillingBudgetTimeouts | undefined) {
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
      all_updates_rule: billingBudgetAllUpdatesRuleToTerraform(this._allUpdatesRule),
      amount: billingBudgetAmountToTerraform(this._amount),
      budget_filter: billingBudgetBudgetFilterToTerraform(this._budgetFilter),
      threshold_rules: cdktf.listMapper(billingBudgetThresholdRulesToTerraform)(this._thresholdRules),
      timeouts: billingBudgetTimeoutsToTerraform(this._timeouts),
    };
  }
}
