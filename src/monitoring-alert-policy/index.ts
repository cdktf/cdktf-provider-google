// https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringAlertPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * How to combine the results of multiple conditions to
  * determine if an incident should be opened. Possible values: ["AND", "OR", "AND_WITH_MATCHING_RESOURCE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#combiner MonitoringAlertPolicy#combiner}
  */
  readonly combiner: string;
  /**
  * A short name or phrase used to identify the policy in
  * dashboards, notifications, and incidents. To avoid confusion, don't use
  * the same display name for multiple policies in the same project. The
  * name is limited to 512 Unicode characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#display_name MonitoringAlertPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * Whether or not the policy is enabled. The default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#enabled MonitoringAlertPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#id MonitoringAlertPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifies the notification channels to which notifications should be
  * sent when incidents are opened or closed or when new violations occur
  * on an already opened incident. Each element of this array corresponds
  * to the name field in each of the NotificationChannel objects that are
  * returned from the notificationChannels.list method. The syntax of the
  * entries in this field is
  * 'projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#notification_channels MonitoringAlertPolicy#notification_channels}
  */
  readonly notificationChannels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#project MonitoringAlertPolicy#project}
  */
  readonly project?: string;
  /**
  * The severity of an alert policy indicates how important incidents generated
  * by that policy are. The severity level will be displayed on the Incident
  * detail page and in notifications. Possible values: ["CRITICAL", "ERROR", "WARNING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#severity MonitoringAlertPolicy#severity}
  */
  readonly severity?: string;
  /**
  * This field is intended to be used for organizing and identifying the AlertPolicy
  * objects.The field can contain up to 64 entries. Each key and value is limited
  * to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values
  * can contain only lowercase letters, numerals, underscores, and dashes. Keys
  * must begin with a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#user_labels MonitoringAlertPolicy#user_labels}
  */
  readonly userLabels?: { [key: string]: string };
  /**
  * alert_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#alert_strategy MonitoringAlertPolicy#alert_strategy}
  */
  readonly alertStrategy?: MonitoringAlertPolicyAlertStrategy;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#conditions MonitoringAlertPolicy#conditions}
  */
  readonly conditions: MonitoringAlertPolicyConditions[] | cdktf.IResolvable;
  /**
  * documentation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#documentation MonitoringAlertPolicy#documentation}
  */
  readonly documentation?: MonitoringAlertPolicyDocumentation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#timeouts MonitoringAlertPolicy#timeouts}
  */
  readonly timeouts?: MonitoringAlertPolicyTimeouts;
}
export interface MonitoringAlertPolicyCreationRecord {
}

export function monitoringAlertPolicyCreationRecordToTerraform(struct?: MonitoringAlertPolicyCreationRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function monitoringAlertPolicyCreationRecordToHclTerraform(struct?: MonitoringAlertPolicyCreationRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MonitoringAlertPolicyCreationRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitoringAlertPolicyCreationRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyCreationRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mutate_time - computed: true, optional: false, required: false
  public get mutateTime() {
    return this.getStringAttribute('mutate_time');
  }

  // mutated_by - computed: true, optional: false, required: false
  public get mutatedBy() {
    return this.getStringAttribute('mutated_by');
  }
}

export class MonitoringAlertPolicyCreationRecordList extends cdktf.ComplexList {

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
  public get(index: number): MonitoringAlertPolicyCreationRecordOutputReference {
    return new MonitoringAlertPolicyCreationRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy {
  /**
  * The notification channels that these settings apply to. Each of these
  * correspond to the name field in one of the NotificationChannel objects
  * referenced in the notification_channels field of this AlertPolicy. The format is
  * 'projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#notification_channel_names MonitoringAlertPolicy#notification_channel_names}
  */
  readonly notificationChannelNames?: string[];
  /**
  * The frequency at which to send reminder notifications for open incidents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#renotify_interval MonitoringAlertPolicy#renotify_interval}
  */
  readonly renotifyInterval?: string;
}

export function monitoringAlertPolicyAlertStrategyNotificationChannelStrategyToTerraform(struct?: MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_channel_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationChannelNames),
    renotify_interval: cdktf.stringToTerraform(struct!.renotifyInterval),
  }
}


export function monitoringAlertPolicyAlertStrategyNotificationChannelStrategyToHclTerraform(struct?: MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_channel_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationChannelNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    renotify_interval: {
      value: cdktf.stringToHclTerraform(struct!.renotifyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationChannelNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationChannelNames = this._notificationChannelNames;
    }
    if (this._renotifyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.renotifyInterval = this._renotifyInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationChannelNames = undefined;
      this._renotifyInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationChannelNames = value.notificationChannelNames;
      this._renotifyInterval = value.renotifyInterval;
    }
  }

  // notification_channel_names - computed: false, optional: true, required: false
  private _notificationChannelNames?: string[]; 
  public get notificationChannelNames() {
    return this.getListAttribute('notification_channel_names');
  }
  public set notificationChannelNames(value: string[]) {
    this._notificationChannelNames = value;
  }
  public resetNotificationChannelNames() {
    this._notificationChannelNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelNamesInput() {
    return this._notificationChannelNames;
  }

  // renotify_interval - computed: false, optional: true, required: false
  private _renotifyInterval?: string; 
  public get renotifyInterval() {
    return this.getStringAttribute('renotify_interval');
  }
  public set renotifyInterval(value: string) {
    this._renotifyInterval = value;
  }
  public resetRenotifyInterval() {
    this._renotifyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyIntervalInput() {
    return this._renotifyInterval;
  }
}

export class MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList extends cdktf.ComplexList {
  public internalValue? : MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy[] | cdktf.IResolvable

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
  public get(index: number): MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference {
    return new MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringAlertPolicyAlertStrategyNotificationRateLimit {
  /**
  * Not more than one notification per period.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example "60.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#period MonitoringAlertPolicy#period}
  */
  readonly period?: string;
}

export function monitoringAlertPolicyAlertStrategyNotificationRateLimitToTerraform(struct?: MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference | MonitoringAlertPolicyAlertStrategyNotificationRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function monitoringAlertPolicyAlertStrategyNotificationRateLimitToHclTerraform(struct?: MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference | MonitoringAlertPolicyAlertStrategyNotificationRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyAlertStrategyNotificationRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyAlertStrategyNotificationRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._period = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._period = value.period;
    }
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }
}
export interface MonitoringAlertPolicyAlertStrategy {
  /**
  * If an alert policy that was active has no data for this long, any open incidents will close.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#auto_close MonitoringAlertPolicy#auto_close}
  */
  readonly autoClose?: string;
  /**
  * Control when notifications will be sent out. Possible values: ["NOTIFICATION_PROMPT_UNSPECIFIED", "OPENED", "CLOSED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#notification_prompts MonitoringAlertPolicy#notification_prompts}
  */
  readonly notificationPrompts?: string[];
  /**
  * notification_channel_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#notification_channel_strategy MonitoringAlertPolicy#notification_channel_strategy}
  */
  readonly notificationChannelStrategy?: MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy[] | cdktf.IResolvable;
  /**
  * notification_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#notification_rate_limit MonitoringAlertPolicy#notification_rate_limit}
  */
  readonly notificationRateLimit?: MonitoringAlertPolicyAlertStrategyNotificationRateLimit;
}

export function monitoringAlertPolicyAlertStrategyToTerraform(struct?: MonitoringAlertPolicyAlertStrategyOutputReference | MonitoringAlertPolicyAlertStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_close: cdktf.stringToTerraform(struct!.autoClose),
    notification_prompts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationPrompts),
    notification_channel_strategy: cdktf.listMapper(monitoringAlertPolicyAlertStrategyNotificationChannelStrategyToTerraform, true)(struct!.notificationChannelStrategy),
    notification_rate_limit: monitoringAlertPolicyAlertStrategyNotificationRateLimitToTerraform(struct!.notificationRateLimit),
  }
}


export function monitoringAlertPolicyAlertStrategyToHclTerraform(struct?: MonitoringAlertPolicyAlertStrategyOutputReference | MonitoringAlertPolicyAlertStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_close: {
      value: cdktf.stringToHclTerraform(struct!.autoClose),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_prompts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationPrompts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    notification_channel_strategy: {
      value: cdktf.listMapperHcl(monitoringAlertPolicyAlertStrategyNotificationChannelStrategyToHclTerraform, true)(struct!.notificationChannelStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList",
    },
    notification_rate_limit: {
      value: monitoringAlertPolicyAlertStrategyNotificationRateLimitToHclTerraform(struct!.notificationRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyAlertStrategyNotificationRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyAlertStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyAlertStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoClose = this._autoClose;
    }
    if (this._notificationPrompts !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPrompts = this._notificationPrompts;
    }
    if (this._notificationChannelStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationChannelStrategy = this._notificationChannelStrategy?.internalValue;
    }
    if (this._notificationRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationRateLimit = this._notificationRateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyAlertStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoClose = undefined;
      this._notificationPrompts = undefined;
      this._notificationChannelStrategy.internalValue = undefined;
      this._notificationRateLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoClose = value.autoClose;
      this._notificationPrompts = value.notificationPrompts;
      this._notificationChannelStrategy.internalValue = value.notificationChannelStrategy;
      this._notificationRateLimit.internalValue = value.notificationRateLimit;
    }
  }

  // auto_close - computed: false, optional: true, required: false
  private _autoClose?: string; 
  public get autoClose() {
    return this.getStringAttribute('auto_close');
  }
  public set autoClose(value: string) {
    this._autoClose = value;
  }
  public resetAutoClose() {
    this._autoClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCloseInput() {
    return this._autoClose;
  }

  // notification_prompts - computed: false, optional: true, required: false
  private _notificationPrompts?: string[]; 
  public get notificationPrompts() {
    return this.getListAttribute('notification_prompts');
  }
  public set notificationPrompts(value: string[]) {
    this._notificationPrompts = value;
  }
  public resetNotificationPrompts() {
    this._notificationPrompts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPromptsInput() {
    return this._notificationPrompts;
  }

  // notification_channel_strategy - computed: false, optional: true, required: false
  private _notificationChannelStrategy = new MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList(this, "notification_channel_strategy", false);
  public get notificationChannelStrategy() {
    return this._notificationChannelStrategy;
  }
  public putNotificationChannelStrategy(value: MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy[] | cdktf.IResolvable) {
    this._notificationChannelStrategy.internalValue = value;
  }
  public resetNotificationChannelStrategy() {
    this._notificationChannelStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelStrategyInput() {
    return this._notificationChannelStrategy.internalValue;
  }

  // notification_rate_limit - computed: false, optional: true, required: false
  private _notificationRateLimit = new MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference(this, "notification_rate_limit");
  public get notificationRateLimit() {
    return this._notificationRateLimit;
  }
  public putNotificationRateLimit(value: MonitoringAlertPolicyAlertStrategyNotificationRateLimit) {
    this._notificationRateLimit.internalValue = value;
  }
  public resetNotificationRateLimit() {
    this._notificationRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRateLimitInput() {
    return this._notificationRateLimit.internalValue;
  }
}
export interface MonitoringAlertPolicyConditionsConditionAbsentAggregations {
  /**
  * The alignment period for per-time
  * series alignment. If present,
  * alignmentPeriod must be at least
  * 60 seconds. After per-time series
  * alignment, each time series will
  * contain data points only on the
  * period boundaries. If
  * perSeriesAligner is not specified
  * or equals ALIGN_NONE, then this
  * field is ignored. If
  * perSeriesAligner is specified and
  * does not equal ALIGN_NONE, then
  * this field must be defined;
  * otherwise an error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#alignment_period MonitoringAlertPolicy#alignment_period}
  */
  readonly alignmentPeriod?: string;
  /**
  * The approach to be used to combine
  * time series. Not all reducer
  * functions may be applied to all
  * time series, depending on the
  * metric type and the value type of
  * the original time series.
  * Reduction may change the metric
  * type of value type of the time
  * series.Time series data must be
  * aligned in order to perform cross-
  * time series reduction. If
  * crossSeriesReducer is specified,
  * then perSeriesAligner must be
  * specified and not equal ALIGN_NONE
  * and alignmentPeriod must be
  * specified; otherwise, an error is
  * returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#cross_series_reducer MonitoringAlertPolicy#cross_series_reducer}
  */
  readonly crossSeriesReducer?: string;
  /**
  * The set of fields to preserve when
  * crossSeriesReducer is specified.
  * The groupByFields determine how
  * the time series are partitioned
  * into subsets prior to applying the
  * aggregation function. Each subset
  * contains time series that have the
  * same value for each of the
  * grouping fields. Each individual
  * time series is a member of exactly
  * one subset. The crossSeriesReducer
  * is applied to each subset of time
  * series. It is not possible to
  * reduce across different resource
  * types, so this field implicitly
  * contains resource.type. Fields not
  * specified in groupByFields are
  * aggregated away. If groupByFields
  * is not specified and all the time
  * series have the same resource
  * type, then the time series are
  * aggregated into a single output
  * time series. If crossSeriesReducer
  * is not defined, this field is
  * ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#group_by_fields MonitoringAlertPolicy#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * The approach to be used to align
  * individual time series. Not all
  * alignment functions may be applied
  * to all time series, depending on
  * the metric type and value type of
  * the original time series.
  * Alignment may change the metric
  * type or the value type of the time
  * series.Time series data must be
  * aligned in order to perform cross-
  * time series reduction. If
  * crossSeriesReducer is specified,
  * then perSeriesAligner must be
  * specified and not equal ALIGN_NONE
  * and alignmentPeriod must be
  * specified; otherwise, an error is
  * returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#per_series_aligner MonitoringAlertPolicy#per_series_aligner}
  */
  readonly perSeriesAligner?: string;
}

export function monitoringAlertPolicyConditionsConditionAbsentAggregationsToTerraform(struct?: MonitoringAlertPolicyConditionsConditionAbsentAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alignment_period: cdktf.stringToTerraform(struct!.alignmentPeriod),
    cross_series_reducer: cdktf.stringToTerraform(struct!.crossSeriesReducer),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByFields),
    per_series_aligner: cdktf.stringToTerraform(struct!.perSeriesAligner),
  }
}


export function monitoringAlertPolicyConditionsConditionAbsentAggregationsToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionAbsentAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alignment_period: {
      value: cdktf.stringToHclTerraform(struct!.alignmentPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_series_reducer: {
      value: cdktf.stringToHclTerraform(struct!.crossSeriesReducer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    per_series_aligner: {
      value: cdktf.stringToHclTerraform(struct!.perSeriesAligner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringAlertPolicyConditionsConditionAbsentAggregations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignmentPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignmentPeriod = this._alignmentPeriod;
    }
    if (this._crossSeriesReducer !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossSeriesReducer = this._crossSeriesReducer;
    }
    if (this._groupByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFields = this._groupByFields;
    }
    if (this._perSeriesAligner !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSeriesAligner = this._perSeriesAligner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionAbsentAggregations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alignmentPeriod = undefined;
      this._crossSeriesReducer = undefined;
      this._groupByFields = undefined;
      this._perSeriesAligner = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alignmentPeriod = value.alignmentPeriod;
      this._crossSeriesReducer = value.crossSeriesReducer;
      this._groupByFields = value.groupByFields;
      this._perSeriesAligner = value.perSeriesAligner;
    }
  }

  // alignment_period - computed: false, optional: true, required: false
  private _alignmentPeriod?: string; 
  public get alignmentPeriod() {
    return this.getStringAttribute('alignment_period');
  }
  public set alignmentPeriod(value: string) {
    this._alignmentPeriod = value;
  }
  public resetAlignmentPeriod() {
    this._alignmentPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentPeriodInput() {
    return this._alignmentPeriod;
  }

  // cross_series_reducer - computed: false, optional: true, required: false
  private _crossSeriesReducer?: string; 
  public get crossSeriesReducer() {
    return this.getStringAttribute('cross_series_reducer');
  }
  public set crossSeriesReducer(value: string) {
    this._crossSeriesReducer = value;
  }
  public resetCrossSeriesReducer() {
    this._crossSeriesReducer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSeriesReducerInput() {
    return this._crossSeriesReducer;
  }

  // group_by_fields - computed: false, optional: true, required: false
  private _groupByFields?: string[]; 
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }
  public set groupByFields(value: string[]) {
    this._groupByFields = value;
  }
  public resetGroupByFields() {
    this._groupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields;
  }

  // per_series_aligner - computed: false, optional: true, required: false
  private _perSeriesAligner?: string; 
  public get perSeriesAligner() {
    return this.getStringAttribute('per_series_aligner');
  }
  public set perSeriesAligner(value: string) {
    this._perSeriesAligner = value;
  }
  public resetPerSeriesAligner() {
    this._perSeriesAligner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSeriesAlignerInput() {
    return this._perSeriesAligner;
  }
}

export class MonitoringAlertPolicyConditionsConditionAbsentAggregationsList extends cdktf.ComplexList {
  public internalValue? : MonitoringAlertPolicyConditionsConditionAbsentAggregations[] | cdktf.IResolvable

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
  public get(index: number): MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference {
    return new MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringAlertPolicyConditionsConditionAbsentTrigger {
  /**
  * The absolute number of time series
  * that must fail the predicate for the
  * condition to be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#count MonitoringAlertPolicy#count}
  */
  readonly count?: number;
  /**
  * The percentage of time series that
  * must fail the predicate for the
  * condition to be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#percent MonitoringAlertPolicy#percent}
  */
  readonly percent?: number;
}

export function monitoringAlertPolicyConditionsConditionAbsentTriggerToTerraform(struct?: MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference | MonitoringAlertPolicyConditionsConditionAbsentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}


export function monitoringAlertPolicyConditionsConditionAbsentTriggerToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference | MonitoringAlertPolicyConditionsConditionAbsentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionAbsentTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionAbsentTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._percent = value.percent;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface MonitoringAlertPolicyConditionsConditionAbsent {
  /**
  * The amount of time that a time series must
  * fail to report new data to be considered
  * failing. Currently, only values that are a
  * multiple of a minute--e.g. 60s, 120s, or 300s
  * --are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#duration MonitoringAlertPolicy#duration}
  */
  readonly duration: string;
  /**
  * A filter that identifies which time series
  * should be compared with the threshold.The
  * filter is similar to the one that is
  * specified in the
  * MetricService.ListTimeSeries request (that
  * call is useful to verify the time series
  * that will be retrieved / processed) and must
  * specify the metric type and optionally may
  * contain restrictions on resource type,
  * resource labels, and metric labels. This
  * field may not exceed 2048 Unicode characters
  * in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#filter MonitoringAlertPolicy#filter}
  */
  readonly filter?: string;
  /**
  * aggregations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#aggregations MonitoringAlertPolicy#aggregations}
  */
  readonly aggregations?: MonitoringAlertPolicyConditionsConditionAbsentAggregations[] | cdktf.IResolvable;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#trigger MonitoringAlertPolicy#trigger}
  */
  readonly trigger?: MonitoringAlertPolicyConditionsConditionAbsentTrigger;
}

export function monitoringAlertPolicyConditionsConditionAbsentToTerraform(struct?: MonitoringAlertPolicyConditionsConditionAbsentOutputReference | MonitoringAlertPolicyConditionsConditionAbsent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    filter: cdktf.stringToTerraform(struct!.filter),
    aggregations: cdktf.listMapper(monitoringAlertPolicyConditionsConditionAbsentAggregationsToTerraform, true)(struct!.aggregations),
    trigger: monitoringAlertPolicyConditionsConditionAbsentTriggerToTerraform(struct!.trigger),
  }
}


export function monitoringAlertPolicyConditionsConditionAbsentToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionAbsentOutputReference | MonitoringAlertPolicyConditionsConditionAbsent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregations: {
      value: cdktf.listMapperHcl(monitoringAlertPolicyConditionsConditionAbsentAggregationsToHclTerraform, true)(struct!.aggregations),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionAbsentAggregationsList",
    },
    trigger: {
      value: monitoringAlertPolicyConditionsConditionAbsentTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionAbsentTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionAbsentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionAbsent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._aggregations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregations = this._aggregations?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionAbsent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._filter = undefined;
      this._aggregations.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._filter = value.filter;
      this._aggregations.internalValue = value.aggregations;
      this._trigger.internalValue = value.trigger;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // aggregations - computed: false, optional: true, required: false
  private _aggregations = new MonitoringAlertPolicyConditionsConditionAbsentAggregationsList(this, "aggregations", false);
  public get aggregations() {
    return this._aggregations;
  }
  public putAggregations(value: MonitoringAlertPolicyConditionsConditionAbsentAggregations[] | cdktf.IResolvable) {
    this._aggregations.internalValue = value;
  }
  public resetAggregations() {
    this._aggregations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: MonitoringAlertPolicyConditionsConditionAbsentTrigger) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}
export interface MonitoringAlertPolicyConditionsConditionMatchedLog {
  /**
  * A logs-based filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#filter MonitoringAlertPolicy#filter}
  */
  readonly filter: string;
  /**
  * A map from a label key to an extractor expression, which is used to
  * extract the value for this label key. Each entry in this map is
  * a specification for how data should be extracted from log entries that
  * match filter. Each combination of extracted values is treated as
  * a separate rule for the purposes of triggering notifications.
  * Label keys and corresponding values can be used in notifications
  * generated by this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#label_extractors MonitoringAlertPolicy#label_extractors}
  */
  readonly labelExtractors?: { [key: string]: string };
}

export function monitoringAlertPolicyConditionsConditionMatchedLogToTerraform(struct?: MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference | MonitoringAlertPolicyConditionsConditionMatchedLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    label_extractors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labelExtractors),
  }
}


export function monitoringAlertPolicyConditionsConditionMatchedLogToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference | MonitoringAlertPolicyConditionsConditionMatchedLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_extractors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labelExtractors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionMatchedLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._labelExtractors !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelExtractors = this._labelExtractors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionMatchedLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._labelExtractors = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._labelExtractors = value.labelExtractors;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // label_extractors - computed: false, optional: true, required: false
  private _labelExtractors?: { [key: string]: string }; 
  public get labelExtractors() {
    return this.getStringMapAttribute('label_extractors');
  }
  public set labelExtractors(value: { [key: string]: string }) {
    this._labelExtractors = value;
  }
  public resetLabelExtractors() {
    this._labelExtractors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelExtractorsInput() {
    return this._labelExtractors;
  }
}
export interface MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger {
  /**
  * The absolute number of time series
  * that must fail the predicate for the
  * condition to be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#count MonitoringAlertPolicy#count}
  */
  readonly count?: number;
  /**
  * The percentage of time series that
  * must fail the predicate for the
  * condition to be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#percent MonitoringAlertPolicy#percent}
  */
  readonly percent?: number;
}

export function monitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerToTerraform(struct?: MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference | MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}


export function monitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference | MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._percent = value.percent;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage {
  /**
  * The amount of time that a time series must
  * violate the threshold to be considered
  * failing. Currently, only values that are a
  * multiple of a minute--e.g., 0, 60, 120, or
  * 300 seconds--are supported. If an invalid
  * value is given, an error will be returned.
  * When choosing a duration, it is useful to
  * keep in mind the frequency of the underlying
  * time series data (which may also be affected
  * by any alignments specified in the
  * aggregations field); a good duration is long
  * enough so that a single outlier does not
  * generate spurious alerts, but short enough
  * that unhealthy states are detected and
  * alerted on quickly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#duration MonitoringAlertPolicy#duration}
  */
  readonly duration: string;
  /**
  * A condition control that determines how
  * metric-threshold conditions are evaluated when
  * data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#evaluation_missing_data MonitoringAlertPolicy#evaluation_missing_data}
  */
  readonly evaluationMissingData?: string;
  /**
  * Monitoring Query Language query that outputs a boolean stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#query MonitoringAlertPolicy#query}
  */
  readonly query: string;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#trigger MonitoringAlertPolicy#trigger}
  */
  readonly trigger?: MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger;
}

export function monitoringAlertPolicyConditionsConditionMonitoringQueryLanguageToTerraform(struct?: MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference | MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    evaluation_missing_data: cdktf.stringToTerraform(struct!.evaluationMissingData),
    query: cdktf.stringToTerraform(struct!.query),
    trigger: monitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerToTerraform(struct!.trigger),
  }
}


export function monitoringAlertPolicyConditionsConditionMonitoringQueryLanguageToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference | MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_missing_data: {
      value: cdktf.stringToHclTerraform(struct!.evaluationMissingData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger: {
      value: monitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._evaluationMissingData !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationMissingData = this._evaluationMissingData;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._evaluationMissingData = undefined;
      this._query = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._evaluationMissingData = value.evaluationMissingData;
      this._query = value.query;
      this._trigger.internalValue = value.trigger;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // evaluation_missing_data - computed: false, optional: true, required: false
  private _evaluationMissingData?: string; 
  public get evaluationMissingData() {
    return this.getStringAttribute('evaluation_missing_data');
  }
  public set evaluationMissingData(value: string) {
    this._evaluationMissingData = value;
  }
  public resetEvaluationMissingData() {
    this._evaluationMissingData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationMissingDataInput() {
    return this._evaluationMissingData;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}
export interface MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage {
  /**
  * The alerting rule name of this alert in the corresponding Prometheus
  * configuration file.
  * 
  * Some external tools may require this field to be populated correctly
  * in order to refer to the original Prometheus configuration file.
  * The rule group name and the alert name are necessary to update the
  * relevant AlertPolicies in case the definition of the rule group changes
  * in the future.
  * 
  * This field is optional. If this field is not empty, then it must be a
  * valid Prometheus label name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#alert_rule MonitoringAlertPolicy#alert_rule}
  */
  readonly alertRule?: string;
  /**
  * Whether to disable metric existence validation for this condition.
  * 
  * This allows alerting policies to be defined on metrics that do not yet
  * exist, improving advanced customer workflows such as configuring
  * alerting policies using Terraform.
  * 
  * Users with the 'monitoring.alertPolicyViewer' role are able to see the
  * name of the non-existent metric in the alerting policy condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#disable_metric_validation MonitoringAlertPolicy#disable_metric_validation}
  */
  readonly disableMetricValidation?: boolean | cdktf.IResolvable;
  /**
  * Alerts are considered firing once their PromQL expression evaluated
  * to be "true" for this long. Alerts whose PromQL expression was not
  * evaluated to be "true" for long enough are considered pending. The
  * default value is zero. Must be zero or positive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#duration MonitoringAlertPolicy#duration}
  */
  readonly duration?: string;
  /**
  * How often this rule should be evaluated. Must be a positive multiple
  * of 30 seconds or missing. The default value is 30 seconds. If this
  * PrometheusQueryLanguageCondition was generated from a Prometheus
  * alerting rule, then this value should be taken from the enclosing
  * rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#evaluation_interval MonitoringAlertPolicy#evaluation_interval}
  */
  readonly evaluationInterval?: string;
  /**
  * Labels to add to or overwrite in the PromQL query result. Label names
  * must be valid.
  * 
  * Label values can be templatized by using variables. The only available
  * variable names are the names of the labels in the PromQL result,
  * although label names beginning with \_\_ (two "\_") are reserved for
  * internal use. "labels" may be empty. This field is intended to be used
  * for organizing and identifying the AlertPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#labels MonitoringAlertPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The PromQL expression to evaluate. Every evaluation cycle this
  * expression is evaluated at the current time, and all resultant time
  * series become pending/firing alerts. This field must not be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#query MonitoringAlertPolicy#query}
  */
  readonly query: string;
  /**
  * The rule group name of this alert in the corresponding Prometheus
  * configuration file.
  * 
  * Some external tools may require this field to be populated correctly
  * in order to refer to the original Prometheus configuration file.
  * The rule group name and the alert name are necessary to update the
  * relevant AlertPolicies in case the definition of the rule group changes
  * in the future. This field is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#rule_group MonitoringAlertPolicy#rule_group}
  */
  readonly ruleGroup?: string;
}

export function monitoringAlertPolicyConditionsConditionPrometheusQueryLanguageToTerraform(struct?: MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference | MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_rule: cdktf.stringToTerraform(struct!.alertRule),
    disable_metric_validation: cdktf.booleanToTerraform(struct!.disableMetricValidation),
    duration: cdktf.stringToTerraform(struct!.duration),
    evaluation_interval: cdktf.stringToTerraform(struct!.evaluationInterval),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    query: cdktf.stringToTerraform(struct!.query),
    rule_group: cdktf.stringToTerraform(struct!.ruleGroup),
  }
}


export function monitoringAlertPolicyConditionsConditionPrometheusQueryLanguageToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference | MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_rule: {
      value: cdktf.stringToHclTerraform(struct!.alertRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_metric_validation: {
      value: cdktf.booleanToHclTerraform(struct!.disableMetricValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_interval: {
      value: cdktf.stringToHclTerraform(struct!.evaluationInterval),
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
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_group: {
      value: cdktf.stringToHclTerraform(struct!.ruleGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertRule = this._alertRule;
    }
    if (this._disableMetricValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMetricValidation = this._disableMetricValidation;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._evaluationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationInterval = this._evaluationInterval;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._ruleGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleGroup = this._ruleGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertRule = undefined;
      this._disableMetricValidation = undefined;
      this._duration = undefined;
      this._evaluationInterval = undefined;
      this._labels = undefined;
      this._query = undefined;
      this._ruleGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertRule = value.alertRule;
      this._disableMetricValidation = value.disableMetricValidation;
      this._duration = value.duration;
      this._evaluationInterval = value.evaluationInterval;
      this._labels = value.labels;
      this._query = value.query;
      this._ruleGroup = value.ruleGroup;
    }
  }

  // alert_rule - computed: false, optional: true, required: false
  private _alertRule?: string; 
  public get alertRule() {
    return this.getStringAttribute('alert_rule');
  }
  public set alertRule(value: string) {
    this._alertRule = value;
  }
  public resetAlertRule() {
    this._alertRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleInput() {
    return this._alertRule;
  }

  // disable_metric_validation - computed: false, optional: true, required: false
  private _disableMetricValidation?: boolean | cdktf.IResolvable; 
  public get disableMetricValidation() {
    return this.getBooleanAttribute('disable_metric_validation');
  }
  public set disableMetricValidation(value: boolean | cdktf.IResolvable) {
    this._disableMetricValidation = value;
  }
  public resetDisableMetricValidation() {
    this._disableMetricValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMetricValidationInput() {
    return this._disableMetricValidation;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // evaluation_interval - computed: false, optional: true, required: false
  private _evaluationInterval?: string; 
  public get evaluationInterval() {
    return this.getStringAttribute('evaluation_interval');
  }
  public set evaluationInterval(value: string) {
    this._evaluationInterval = value;
  }
  public resetEvaluationInterval() {
    this._evaluationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationIntervalInput() {
    return this._evaluationInterval;
  }

  // labels - computed: false, optional: true, required: false
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rule_group - computed: false, optional: true, required: false
  private _ruleGroup?: string; 
  public get ruleGroup() {
    return this.getStringAttribute('rule_group');
  }
  public set ruleGroup(value: string) {
    this._ruleGroup = value;
  }
  public resetRuleGroup() {
    this._ruleGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupInput() {
    return this._ruleGroup;
  }
}
export interface MonitoringAlertPolicyConditionsConditionSqlBooleanTest {
  /**
  * The name of the column containing the boolean value. If the value in a row is
  * NULL, that row is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#column MonitoringAlertPolicy#column}
  */
  readonly column: string;
}

export function monitoringAlertPolicyConditionsConditionSqlBooleanTestToTerraform(struct?: MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference | MonitoringAlertPolicyConditionsConditionSqlBooleanTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
  }
}


export function monitoringAlertPolicyConditionsConditionSqlBooleanTestToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference | MonitoringAlertPolicyConditionsConditionSqlBooleanTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionSqlBooleanTest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionSqlBooleanTest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column = value.column;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }
}
export interface MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime {
  /**
  * Hours of a day in 24 hour format. Must be greater than or equal
  * to 0 and typically must be less than or equal to 23. An API may
  * choose to allow the value "24:00:00" for scenarios like business
  * closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#hours MonitoringAlertPolicy#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of an hour. Must be greater than or equal to 0 and
  * less than or equal to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#minutes MonitoringAlertPolicy#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds, in nanoseconds. Must be greater than or
  * equal to 0 and less than or equal to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#nanos MonitoringAlertPolicy#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of a minute. Must be greater than or equal to 0 and
  * typically must be less than or equal to 59. An API may allow the
  * value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#seconds MonitoringAlertPolicy#seconds}
  */
  readonly seconds?: number;
}

export function monitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeToTerraform(struct?: MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference | MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime): any {
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


export function monitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference | MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime): any {
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

export class MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime | undefined {
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

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime | undefined) {
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
export interface MonitoringAlertPolicyConditionsConditionSqlDaily {
  /**
  * The number of days between runs. Must be greater than or equal
  * to 1 day and less than or equal to 30 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#periodicity MonitoringAlertPolicy#periodicity}
  */
  readonly periodicity: number;
  /**
  * execution_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#execution_time MonitoringAlertPolicy#execution_time}
  */
  readonly executionTime?: MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime;
}

export function monitoringAlertPolicyConditionsConditionSqlDailyToTerraform(struct?: MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference | MonitoringAlertPolicyConditionsConditionSqlDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    periodicity: cdktf.numberToTerraform(struct!.periodicity),
    execution_time: monitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeToTerraform(struct!.executionTime),
  }
}


export function monitoringAlertPolicyConditionsConditionSqlDailyToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference | MonitoringAlertPolicyConditionsConditionSqlDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    periodicity: {
      value: cdktf.numberToHclTerraform(struct!.periodicity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    execution_time: {
      value: monitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeToHclTerraform(struct!.executionTime),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionSqlDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periodicity !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodicity = this._periodicity;
    }
    if (this._executionTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTime = this._executionTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionSqlDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._periodicity = undefined;
      this._executionTime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._periodicity = value.periodicity;
      this._executionTime.internalValue = value.executionTime;
    }
  }

  // periodicity - computed: false, optional: false, required: true
  private _periodicity?: number; 
  public get periodicity() {
    return this.getNumberAttribute('periodicity');
  }
  public set periodicity(value: number) {
    this._periodicity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicityInput() {
    return this._periodicity;
  }

  // execution_time - computed: false, optional: true, required: false
  private _executionTime = new MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference(this, "execution_time");
  public get executionTime() {
    return this._executionTime;
  }
  public putExecutionTime(value: MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime) {
    this._executionTime.internalValue = value;
  }
  public resetExecutionTime() {
    this._executionTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeInput() {
    return this._executionTime.internalValue;
  }
}
export interface MonitoringAlertPolicyConditionsConditionSqlHourly {
  /**
  * The number of minutes after the hour (in UTC) to run the query.
  * Must be greater than or equal to 0 minutes and less than or equal to
  * 59 minutes.  If left unspecified, then an arbitrary offset is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#minute_offset MonitoringAlertPolicy#minute_offset}
  */
  readonly minuteOffset?: number;
  /**
  * Number of hours between runs. The interval must be greater than or
  * equal to 1 hour and less than or equal to 48 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#periodicity MonitoringAlertPolicy#periodicity}
  */
  readonly periodicity: number;
}

export function monitoringAlertPolicyConditionsConditionSqlHourlyToTerraform(struct?: MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference | MonitoringAlertPolicyConditionsConditionSqlHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minute_offset: cdktf.numberToTerraform(struct!.minuteOffset),
    periodicity: cdktf.numberToTerraform(struct!.periodicity),
  }
}


export function monitoringAlertPolicyConditionsConditionSqlHourlyToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference | MonitoringAlertPolicyConditionsConditionSqlHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minute_offset: {
      value: cdktf.numberToHclTerraform(struct!.minuteOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    periodicity: {
      value: cdktf.numberToHclTerraform(struct!.periodicity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionSqlHourly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minuteOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteOffset = this._minuteOffset;
    }
    if (this._periodicity !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodicity = this._periodicity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionSqlHourly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minuteOffset = undefined;
      this._periodicity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minuteOffset = value.minuteOffset;
      this._periodicity = value.periodicity;
    }
  }

  // minute_offset - computed: false, optional: true, required: false
  private _minuteOffset?: number; 
  public get minuteOffset() {
    return this.getNumberAttribute('minute_offset');
  }
  public set minuteOffset(value: number) {
    this._minuteOffset = value;
  }
  public resetMinuteOffset() {
    this._minuteOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteOffsetInput() {
    return this._minuteOffset;
  }

  // periodicity - computed: false, optional: false, required: true
  private _periodicity?: number; 
  public get periodicity() {
    return this.getNumberAttribute('periodicity');
  }
  public set periodicity(value: number) {
    this._periodicity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicityInput() {
    return this._periodicity;
  }
}
export interface MonitoringAlertPolicyConditionsConditionSqlMinutes {
  /**
  * Number of minutes between runs. The interval must be greater than or
  * equal to 5 minutes and less than or equal to 1440 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#periodicity MonitoringAlertPolicy#periodicity}
  */
  readonly periodicity: number;
}

export function monitoringAlertPolicyConditionsConditionSqlMinutesToTerraform(struct?: MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference | MonitoringAlertPolicyConditionsConditionSqlMinutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    periodicity: cdktf.numberToTerraform(struct!.periodicity),
  }
}


export function monitoringAlertPolicyConditionsConditionSqlMinutesToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference | MonitoringAlertPolicyConditionsConditionSqlMinutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    periodicity: {
      value: cdktf.numberToHclTerraform(struct!.periodicity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionSqlMinutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periodicity !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodicity = this._periodicity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionSqlMinutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._periodicity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._periodicity = value.periodicity;
    }
  }

  // periodicity - computed: false, optional: false, required: true
  private _periodicity?: number; 
  public get periodicity() {
    return this.getNumberAttribute('periodicity');
  }
  public set periodicity(value: number) {
    this._periodicity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicityInput() {
    return this._periodicity;
  }
}
export interface MonitoringAlertPolicyConditionsConditionSqlRowCountTest {
  /**
  * The comparison to apply between the time
  * series (indicated by filter and aggregation)
  * and the threshold (indicated by
  * threshold_value). The comparison is applied
  * on each time series, with the time series on
  * the left-hand side and the threshold on the
  * right-hand side. Only COMPARISON_LT and
  * COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#comparison MonitoringAlertPolicy#comparison}
  */
  readonly comparison: string;
  /**
  * The value against which to compare the row count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#threshold MonitoringAlertPolicy#threshold}
  */
  readonly threshold: number;
}

export function monitoringAlertPolicyConditionsConditionSqlRowCountTestToTerraform(struct?: MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference | MonitoringAlertPolicyConditionsConditionSqlRowCountTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function monitoringAlertPolicyConditionsConditionSqlRowCountTestToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference | MonitoringAlertPolicyConditionsConditionSqlRowCountTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktf.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionSqlRowCountTest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionSqlRowCountTest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparison = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparison = value.comparison;
      this._threshold = value.threshold;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface MonitoringAlertPolicyConditionsConditionSql {
  /**
  * The Log Analytics SQL query to run, as a string.  The query must
  * conform to the required shape. Specifically, the query must not try to
  * filter the input by time.  A filter will automatically be applied
  * to filter the input so that the query receives all rows received
  * since the last time the query was run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#query MonitoringAlertPolicy#query}
  */
  readonly query: string;
  /**
  * boolean_test block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#boolean_test MonitoringAlertPolicy#boolean_test}
  */
  readonly booleanTest?: MonitoringAlertPolicyConditionsConditionSqlBooleanTest;
  /**
  * daily block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#daily MonitoringAlertPolicy#daily}
  */
  readonly daily?: MonitoringAlertPolicyConditionsConditionSqlDaily;
  /**
  * hourly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#hourly MonitoringAlertPolicy#hourly}
  */
  readonly hourly?: MonitoringAlertPolicyConditionsConditionSqlHourly;
  /**
  * minutes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#minutes MonitoringAlertPolicy#minutes}
  */
  readonly minutes?: MonitoringAlertPolicyConditionsConditionSqlMinutes;
  /**
  * row_count_test block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#row_count_test MonitoringAlertPolicy#row_count_test}
  */
  readonly rowCountTest?: MonitoringAlertPolicyConditionsConditionSqlRowCountTest;
}

export function monitoringAlertPolicyConditionsConditionSqlToTerraform(struct?: MonitoringAlertPolicyConditionsConditionSqlOutputReference | MonitoringAlertPolicyConditionsConditionSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    boolean_test: monitoringAlertPolicyConditionsConditionSqlBooleanTestToTerraform(struct!.booleanTest),
    daily: monitoringAlertPolicyConditionsConditionSqlDailyToTerraform(struct!.daily),
    hourly: monitoringAlertPolicyConditionsConditionSqlHourlyToTerraform(struct!.hourly),
    minutes: monitoringAlertPolicyConditionsConditionSqlMinutesToTerraform(struct!.minutes),
    row_count_test: monitoringAlertPolicyConditionsConditionSqlRowCountTestToTerraform(struct!.rowCountTest),
  }
}


export function monitoringAlertPolicyConditionsConditionSqlToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionSqlOutputReference | MonitoringAlertPolicyConditionsConditionSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boolean_test: {
      value: monitoringAlertPolicyConditionsConditionSqlBooleanTestToHclTerraform(struct!.booleanTest),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionSqlBooleanTestList",
    },
    daily: {
      value: monitoringAlertPolicyConditionsConditionSqlDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionSqlDailyList",
    },
    hourly: {
      value: monitoringAlertPolicyConditionsConditionSqlHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionSqlHourlyList",
    },
    minutes: {
      value: monitoringAlertPolicyConditionsConditionSqlMinutesToHclTerraform(struct!.minutes),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionSqlMinutesList",
    },
    row_count_test: {
      value: monitoringAlertPolicyConditionsConditionSqlRowCountTestToHclTerraform(struct!.rowCountTest),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionSqlRowCountTestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionSqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionSql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._booleanTest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanTest = this._booleanTest?.internalValue;
    }
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._minutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes?.internalValue;
    }
    if (this._rowCountTest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowCountTest = this._rowCountTest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionSql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
      this._booleanTest.internalValue = undefined;
      this._daily.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._minutes.internalValue = undefined;
      this._rowCountTest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
      this._booleanTest.internalValue = value.booleanTest;
      this._daily.internalValue = value.daily;
      this._hourly.internalValue = value.hourly;
      this._minutes.internalValue = value.minutes;
      this._rowCountTest.internalValue = value.rowCountTest;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // boolean_test - computed: false, optional: true, required: false
  private _booleanTest = new MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference(this, "boolean_test");
  public get booleanTest() {
    return this._booleanTest;
  }
  public putBooleanTest(value: MonitoringAlertPolicyConditionsConditionSqlBooleanTest) {
    this._booleanTest.internalValue = value;
  }
  public resetBooleanTest() {
    this._booleanTest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanTestInput() {
    return this._booleanTest.internalValue;
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: MonitoringAlertPolicyConditionsConditionSqlDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // hourly - computed: false, optional: true, required: false
  private _hourly = new MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: MonitoringAlertPolicyConditionsConditionSqlHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes = new MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference(this, "minutes");
  public get minutes() {
    return this._minutes;
  }
  public putMinutes(value: MonitoringAlertPolicyConditionsConditionSqlMinutes) {
    this._minutes.internalValue = value;
  }
  public resetMinutes() {
    this._minutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes.internalValue;
  }

  // row_count_test - computed: false, optional: true, required: false
  private _rowCountTest = new MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference(this, "row_count_test");
  public get rowCountTest() {
    return this._rowCountTest;
  }
  public putRowCountTest(value: MonitoringAlertPolicyConditionsConditionSqlRowCountTest) {
    this._rowCountTest.internalValue = value;
  }
  public resetRowCountTest() {
    this._rowCountTest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowCountTestInput() {
    return this._rowCountTest.internalValue;
  }
}
export interface MonitoringAlertPolicyConditionsConditionThresholdAggregations {
  /**
  * The alignment period for per-time
  * series alignment. If present,
  * alignmentPeriod must be at least
  * 60 seconds. After per-time series
  * alignment, each time series will
  * contain data points only on the
  * period boundaries. If
  * perSeriesAligner is not specified
  * or equals ALIGN_NONE, then this
  * field is ignored. If
  * perSeriesAligner is specified and
  * does not equal ALIGN_NONE, then
  * this field must be defined;
  * otherwise an error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#alignment_period MonitoringAlertPolicy#alignment_period}
  */
  readonly alignmentPeriod?: string;
  /**
  * The approach to be used to combine
  * time series. Not all reducer
  * functions may be applied to all
  * time series, depending on the
  * metric type and the value type of
  * the original time series.
  * Reduction may change the metric
  * type of value type of the time
  * series.Time series data must be
  * aligned in order to perform cross-
  * time series reduction. If
  * crossSeriesReducer is specified,
  * then perSeriesAligner must be
  * specified and not equal ALIGN_NONE
  * and alignmentPeriod must be
  * specified; otherwise, an error is
  * returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#cross_series_reducer MonitoringAlertPolicy#cross_series_reducer}
  */
  readonly crossSeriesReducer?: string;
  /**
  * The set of fields to preserve when
  * crossSeriesReducer is specified.
  * The groupByFields determine how
  * the time series are partitioned
  * into subsets prior to applying the
  * aggregation function. Each subset
  * contains time series that have the
  * same value for each of the
  * grouping fields. Each individual
  * time series is a member of exactly
  * one subset. The crossSeriesReducer
  * is applied to each subset of time
  * series. It is not possible to
  * reduce across different resource
  * types, so this field implicitly
  * contains resource.type. Fields not
  * specified in groupByFields are
  * aggregated away. If groupByFields
  * is not specified and all the time
  * series have the same resource
  * type, then the time series are
  * aggregated into a single output
  * time series. If crossSeriesReducer
  * is not defined, this field is
  * ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#group_by_fields MonitoringAlertPolicy#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * The approach to be used to align
  * individual time series. Not all
  * alignment functions may be applied
  * to all time series, depending on
  * the metric type and value type of
  * the original time series.
  * Alignment may change the metric
  * type or the value type of the time
  * series.Time series data must be
  * aligned in order to perform cross-
  * time series reduction. If
  * crossSeriesReducer is specified,
  * then perSeriesAligner must be
  * specified and not equal ALIGN_NONE
  * and alignmentPeriod must be
  * specified; otherwise, an error is
  * returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#per_series_aligner MonitoringAlertPolicy#per_series_aligner}
  */
  readonly perSeriesAligner?: string;
}

export function monitoringAlertPolicyConditionsConditionThresholdAggregationsToTerraform(struct?: MonitoringAlertPolicyConditionsConditionThresholdAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alignment_period: cdktf.stringToTerraform(struct!.alignmentPeriod),
    cross_series_reducer: cdktf.stringToTerraform(struct!.crossSeriesReducer),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByFields),
    per_series_aligner: cdktf.stringToTerraform(struct!.perSeriesAligner),
  }
}


export function monitoringAlertPolicyConditionsConditionThresholdAggregationsToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionThresholdAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alignment_period: {
      value: cdktf.stringToHclTerraform(struct!.alignmentPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_series_reducer: {
      value: cdktf.stringToHclTerraform(struct!.crossSeriesReducer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    per_series_aligner: {
      value: cdktf.stringToHclTerraform(struct!.perSeriesAligner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringAlertPolicyConditionsConditionThresholdAggregations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignmentPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignmentPeriod = this._alignmentPeriod;
    }
    if (this._crossSeriesReducer !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossSeriesReducer = this._crossSeriesReducer;
    }
    if (this._groupByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFields = this._groupByFields;
    }
    if (this._perSeriesAligner !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSeriesAligner = this._perSeriesAligner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionThresholdAggregations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alignmentPeriod = undefined;
      this._crossSeriesReducer = undefined;
      this._groupByFields = undefined;
      this._perSeriesAligner = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alignmentPeriod = value.alignmentPeriod;
      this._crossSeriesReducer = value.crossSeriesReducer;
      this._groupByFields = value.groupByFields;
      this._perSeriesAligner = value.perSeriesAligner;
    }
  }

  // alignment_period - computed: false, optional: true, required: false
  private _alignmentPeriod?: string; 
  public get alignmentPeriod() {
    return this.getStringAttribute('alignment_period');
  }
  public set alignmentPeriod(value: string) {
    this._alignmentPeriod = value;
  }
  public resetAlignmentPeriod() {
    this._alignmentPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentPeriodInput() {
    return this._alignmentPeriod;
  }

  // cross_series_reducer - computed: false, optional: true, required: false
  private _crossSeriesReducer?: string; 
  public get crossSeriesReducer() {
    return this.getStringAttribute('cross_series_reducer');
  }
  public set crossSeriesReducer(value: string) {
    this._crossSeriesReducer = value;
  }
  public resetCrossSeriesReducer() {
    this._crossSeriesReducer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSeriesReducerInput() {
    return this._crossSeriesReducer;
  }

  // group_by_fields - computed: false, optional: true, required: false
  private _groupByFields?: string[]; 
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }
  public set groupByFields(value: string[]) {
    this._groupByFields = value;
  }
  public resetGroupByFields() {
    this._groupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields;
  }

  // per_series_aligner - computed: false, optional: true, required: false
  private _perSeriesAligner?: string; 
  public get perSeriesAligner() {
    return this.getStringAttribute('per_series_aligner');
  }
  public set perSeriesAligner(value: string) {
    this._perSeriesAligner = value;
  }
  public resetPerSeriesAligner() {
    this._perSeriesAligner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSeriesAlignerInput() {
    return this._perSeriesAligner;
  }
}

export class MonitoringAlertPolicyConditionsConditionThresholdAggregationsList extends cdktf.ComplexList {
  public internalValue? : MonitoringAlertPolicyConditionsConditionThresholdAggregations[] | cdktf.IResolvable

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
  public get(index: number): MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference {
    return new MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations {
  /**
  * The alignment period for per-time
  * series alignment. If present,
  * alignmentPeriod must be at least
  * 60 seconds. After per-time series
  * alignment, each time series will
  * contain data points only on the
  * period boundaries. If
  * perSeriesAligner is not specified
  * or equals ALIGN_NONE, then this
  * field is ignored. If
  * perSeriesAligner is specified and
  * does not equal ALIGN_NONE, then
  * this field must be defined;
  * otherwise an error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#alignment_period MonitoringAlertPolicy#alignment_period}
  */
  readonly alignmentPeriod?: string;
  /**
  * The approach to be used to combine
  * time series. Not all reducer
  * functions may be applied to all
  * time series, depending on the
  * metric type and the value type of
  * the original time series.
  * Reduction may change the metric
  * type of value type of the time
  * series.Time series data must be
  * aligned in order to perform cross-
  * time series reduction. If
  * crossSeriesReducer is specified,
  * then perSeriesAligner must be
  * specified and not equal ALIGN_NONE
  * and alignmentPeriod must be
  * specified; otherwise, an error is
  * returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#cross_series_reducer MonitoringAlertPolicy#cross_series_reducer}
  */
  readonly crossSeriesReducer?: string;
  /**
  * The set of fields to preserve when
  * crossSeriesReducer is specified.
  * The groupByFields determine how
  * the time series are partitioned
  * into subsets prior to applying the
  * aggregation function. Each subset
  * contains time series that have the
  * same value for each of the
  * grouping fields. Each individual
  * time series is a member of exactly
  * one subset. The crossSeriesReducer
  * is applied to each subset of time
  * series. It is not possible to
  * reduce across different resource
  * types, so this field implicitly
  * contains resource.type. Fields not
  * specified in groupByFields are
  * aggregated away. If groupByFields
  * is not specified and all the time
  * series have the same resource
  * type, then the time series are
  * aggregated into a single output
  * time series. If crossSeriesReducer
  * is not defined, this field is
  * ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#group_by_fields MonitoringAlertPolicy#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * The approach to be used to align
  * individual time series. Not all
  * alignment functions may be applied
  * to all time series, depending on
  * the metric type and value type of
  * the original time series.
  * Alignment may change the metric
  * type or the value type of the time
  * series.Time series data must be
  * aligned in order to perform cross-
  * time series reduction. If
  * crossSeriesReducer is specified,
  * then perSeriesAligner must be
  * specified and not equal ALIGN_NONE
  * and alignmentPeriod must be
  * specified; otherwise, an error is
  * returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#per_series_aligner MonitoringAlertPolicy#per_series_aligner}
  */
  readonly perSeriesAligner?: string;
}

export function monitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsToTerraform(struct?: MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alignment_period: cdktf.stringToTerraform(struct!.alignmentPeriod),
    cross_series_reducer: cdktf.stringToTerraform(struct!.crossSeriesReducer),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByFields),
    per_series_aligner: cdktf.stringToTerraform(struct!.perSeriesAligner),
  }
}


export function monitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alignment_period: {
      value: cdktf.stringToHclTerraform(struct!.alignmentPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_series_reducer: {
      value: cdktf.stringToHclTerraform(struct!.crossSeriesReducer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    per_series_aligner: {
      value: cdktf.stringToHclTerraform(struct!.perSeriesAligner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignmentPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignmentPeriod = this._alignmentPeriod;
    }
    if (this._crossSeriesReducer !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossSeriesReducer = this._crossSeriesReducer;
    }
    if (this._groupByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFields = this._groupByFields;
    }
    if (this._perSeriesAligner !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSeriesAligner = this._perSeriesAligner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alignmentPeriod = undefined;
      this._crossSeriesReducer = undefined;
      this._groupByFields = undefined;
      this._perSeriesAligner = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alignmentPeriod = value.alignmentPeriod;
      this._crossSeriesReducer = value.crossSeriesReducer;
      this._groupByFields = value.groupByFields;
      this._perSeriesAligner = value.perSeriesAligner;
    }
  }

  // alignment_period - computed: false, optional: true, required: false
  private _alignmentPeriod?: string; 
  public get alignmentPeriod() {
    return this.getStringAttribute('alignment_period');
  }
  public set alignmentPeriod(value: string) {
    this._alignmentPeriod = value;
  }
  public resetAlignmentPeriod() {
    this._alignmentPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentPeriodInput() {
    return this._alignmentPeriod;
  }

  // cross_series_reducer - computed: false, optional: true, required: false
  private _crossSeriesReducer?: string; 
  public get crossSeriesReducer() {
    return this.getStringAttribute('cross_series_reducer');
  }
  public set crossSeriesReducer(value: string) {
    this._crossSeriesReducer = value;
  }
  public resetCrossSeriesReducer() {
    this._crossSeriesReducer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSeriesReducerInput() {
    return this._crossSeriesReducer;
  }

  // group_by_fields - computed: false, optional: true, required: false
  private _groupByFields?: string[]; 
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }
  public set groupByFields(value: string[]) {
    this._groupByFields = value;
  }
  public resetGroupByFields() {
    this._groupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields;
  }

  // per_series_aligner - computed: false, optional: true, required: false
  private _perSeriesAligner?: string; 
  public get perSeriesAligner() {
    return this.getStringAttribute('per_series_aligner');
  }
  public set perSeriesAligner(value: string) {
    this._perSeriesAligner = value;
  }
  public resetPerSeriesAligner() {
    this._perSeriesAligner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSeriesAlignerInput() {
    return this._perSeriesAligner;
  }
}

export class MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList extends cdktf.ComplexList {
  public internalValue? : MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations[] | cdktf.IResolvable

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
  public get(index: number): MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference {
    return new MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringAlertPolicyConditionsConditionThresholdForecastOptions {
  /**
  * The length of time into the future to forecast
  * whether a timeseries will violate the threshold.
  * If the predicted value is found to violate the
  * threshold, and the violation is observed in all
  * forecasts made for the Configured 'duration',
  * then the timeseries is considered to be failing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#forecast_horizon MonitoringAlertPolicy#forecast_horizon}
  */
  readonly forecastHorizon: string;
}

export function monitoringAlertPolicyConditionsConditionThresholdForecastOptionsToTerraform(struct?: MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference | MonitoringAlertPolicyConditionsConditionThresholdForecastOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forecast_horizon: cdktf.stringToTerraform(struct!.forecastHorizon),
  }
}


export function monitoringAlertPolicyConditionsConditionThresholdForecastOptionsToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference | MonitoringAlertPolicyConditionsConditionThresholdForecastOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forecast_horizon: {
      value: cdktf.stringToHclTerraform(struct!.forecastHorizon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionThresholdForecastOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forecastHorizon !== undefined) {
      hasAnyValues = true;
      internalValueResult.forecastHorizon = this._forecastHorizon;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionThresholdForecastOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forecastHorizon = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forecastHorizon = value.forecastHorizon;
    }
  }

  // forecast_horizon - computed: false, optional: false, required: true
  private _forecastHorizon?: string; 
  public get forecastHorizon() {
    return this.getStringAttribute('forecast_horizon');
  }
  public set forecastHorizon(value: string) {
    this._forecastHorizon = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastHorizonInput() {
    return this._forecastHorizon;
  }
}
export interface MonitoringAlertPolicyConditionsConditionThresholdTrigger {
  /**
  * The absolute number of time series
  * that must fail the predicate for the
  * condition to be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#count MonitoringAlertPolicy#count}
  */
  readonly count?: number;
  /**
  * The percentage of time series that
  * must fail the predicate for the
  * condition to be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#percent MonitoringAlertPolicy#percent}
  */
  readonly percent?: number;
}

export function monitoringAlertPolicyConditionsConditionThresholdTriggerToTerraform(struct?: MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference | MonitoringAlertPolicyConditionsConditionThresholdTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}


export function monitoringAlertPolicyConditionsConditionThresholdTriggerToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference | MonitoringAlertPolicyConditionsConditionThresholdTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionThresholdTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionThresholdTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._percent = value.percent;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface MonitoringAlertPolicyConditionsConditionThreshold {
  /**
  * The comparison to apply between the time
  * series (indicated by filter and aggregation)
  * and the threshold (indicated by
  * threshold_value). The comparison is applied
  * on each time series, with the time series on
  * the left-hand side and the threshold on the
  * right-hand side. Only COMPARISON_LT and
  * COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#comparison MonitoringAlertPolicy#comparison}
  */
  readonly comparison: string;
  /**
  * A filter that identifies a time series that
  * should be used as the denominator of a ratio
  * that will be compared with the threshold. If
  * a denominator_filter is specified, the time
  * series specified by the filter field will be
  * used as the numerator.The filter is similar
  * to the one that is specified in the
  * MetricService.ListTimeSeries request (that
  * call is useful to verify the time series
  * that will be retrieved / processed) and must
  * specify the metric type and optionally may
  * contain restrictions on resource type,
  * resource labels, and metric labels. This
  * field may not exceed 2048 Unicode characters
  * in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#denominator_filter MonitoringAlertPolicy#denominator_filter}
  */
  readonly denominatorFilter?: string;
  /**
  * The amount of time that a time series must
  * violate the threshold to be considered
  * failing. Currently, only values that are a
  * multiple of a minute--e.g., 0, 60, 120, or
  * 300 seconds--are supported. If an invalid
  * value is given, an error will be returned.
  * When choosing a duration, it is useful to
  * keep in mind the frequency of the underlying
  * time series data (which may also be affected
  * by any alignments specified in the
  * aggregations field); a good duration is long
  * enough so that a single outlier does not
  * generate spurious alerts, but short enough
  * that unhealthy states are detected and
  * alerted on quickly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#duration MonitoringAlertPolicy#duration}
  */
  readonly duration: string;
  /**
  * A condition control that determines how
  * metric-threshold conditions are evaluated when
  * data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#evaluation_missing_data MonitoringAlertPolicy#evaluation_missing_data}
  */
  readonly evaluationMissingData?: string;
  /**
  * A filter that identifies which time series
  * should be compared with the threshold.The
  * filter is similar to the one that is
  * specified in the
  * MetricService.ListTimeSeries request (that
  * call is useful to verify the time series
  * that will be retrieved / processed) and must
  * specify the metric type and optionally may
  * contain restrictions on resource type,
  * resource labels, and metric labels. This
  * field may not exceed 2048 Unicode characters
  * in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#filter MonitoringAlertPolicy#filter}
  */
  readonly filter?: string;
  /**
  * A value against which to compare the time
  * series.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#threshold_value MonitoringAlertPolicy#threshold_value}
  */
  readonly thresholdValue?: number;
  /**
  * aggregations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#aggregations MonitoringAlertPolicy#aggregations}
  */
  readonly aggregations?: MonitoringAlertPolicyConditionsConditionThresholdAggregations[] | cdktf.IResolvable;
  /**
  * denominator_aggregations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#denominator_aggregations MonitoringAlertPolicy#denominator_aggregations}
  */
  readonly denominatorAggregations?: MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations[] | cdktf.IResolvable;
  /**
  * forecast_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#forecast_options MonitoringAlertPolicy#forecast_options}
  */
  readonly forecastOptions?: MonitoringAlertPolicyConditionsConditionThresholdForecastOptions;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#trigger MonitoringAlertPolicy#trigger}
  */
  readonly trigger?: MonitoringAlertPolicyConditionsConditionThresholdTrigger;
}

export function monitoringAlertPolicyConditionsConditionThresholdToTerraform(struct?: MonitoringAlertPolicyConditionsConditionThresholdOutputReference | MonitoringAlertPolicyConditionsConditionThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    denominator_filter: cdktf.stringToTerraform(struct!.denominatorFilter),
    duration: cdktf.stringToTerraform(struct!.duration),
    evaluation_missing_data: cdktf.stringToTerraform(struct!.evaluationMissingData),
    filter: cdktf.stringToTerraform(struct!.filter),
    threshold_value: cdktf.numberToTerraform(struct!.thresholdValue),
    aggregations: cdktf.listMapper(monitoringAlertPolicyConditionsConditionThresholdAggregationsToTerraform, true)(struct!.aggregations),
    denominator_aggregations: cdktf.listMapper(monitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsToTerraform, true)(struct!.denominatorAggregations),
    forecast_options: monitoringAlertPolicyConditionsConditionThresholdForecastOptionsToTerraform(struct!.forecastOptions),
    trigger: monitoringAlertPolicyConditionsConditionThresholdTriggerToTerraform(struct!.trigger),
  }
}


export function monitoringAlertPolicyConditionsConditionThresholdToHclTerraform(struct?: MonitoringAlertPolicyConditionsConditionThresholdOutputReference | MonitoringAlertPolicyConditionsConditionThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktf.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    denominator_filter: {
      value: cdktf.stringToHclTerraform(struct!.denominatorFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_missing_data: {
      value: cdktf.stringToHclTerraform(struct!.evaluationMissingData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_value: {
      value: cdktf.numberToHclTerraform(struct!.thresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aggregations: {
      value: cdktf.listMapperHcl(monitoringAlertPolicyConditionsConditionThresholdAggregationsToHclTerraform, true)(struct!.aggregations),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionThresholdAggregationsList",
    },
    denominator_aggregations: {
      value: cdktf.listMapperHcl(monitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsToHclTerraform, true)(struct!.denominatorAggregations),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList",
    },
    forecast_options: {
      value: monitoringAlertPolicyConditionsConditionThresholdForecastOptionsToHclTerraform(struct!.forecastOptions),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsList",
    },
    trigger: {
      value: monitoringAlertPolicyConditionsConditionThresholdTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionThresholdTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsConditionThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._denominatorFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominatorFilter = this._denominatorFilter;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._evaluationMissingData !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationMissingData = this._evaluationMissingData;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._thresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdValue = this._thresholdValue;
    }
    if (this._aggregations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregations = this._aggregations?.internalValue;
    }
    if (this._denominatorAggregations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominatorAggregations = this._denominatorAggregations?.internalValue;
    }
    if (this._forecastOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forecastOptions = this._forecastOptions?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditionsConditionThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparison = undefined;
      this._denominatorFilter = undefined;
      this._duration = undefined;
      this._evaluationMissingData = undefined;
      this._filter = undefined;
      this._thresholdValue = undefined;
      this._aggregations.internalValue = undefined;
      this._denominatorAggregations.internalValue = undefined;
      this._forecastOptions.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparison = value.comparison;
      this._denominatorFilter = value.denominatorFilter;
      this._duration = value.duration;
      this._evaluationMissingData = value.evaluationMissingData;
      this._filter = value.filter;
      this._thresholdValue = value.thresholdValue;
      this._aggregations.internalValue = value.aggregations;
      this._denominatorAggregations.internalValue = value.denominatorAggregations;
      this._forecastOptions.internalValue = value.forecastOptions;
      this._trigger.internalValue = value.trigger;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // denominator_filter - computed: false, optional: true, required: false
  private _denominatorFilter?: string; 
  public get denominatorFilter() {
    return this.getStringAttribute('denominator_filter');
  }
  public set denominatorFilter(value: string) {
    this._denominatorFilter = value;
  }
  public resetDenominatorFilter() {
    this._denominatorFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorFilterInput() {
    return this._denominatorFilter;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // evaluation_missing_data - computed: false, optional: true, required: false
  private _evaluationMissingData?: string; 
  public get evaluationMissingData() {
    return this.getStringAttribute('evaluation_missing_data');
  }
  public set evaluationMissingData(value: string) {
    this._evaluationMissingData = value;
  }
  public resetEvaluationMissingData() {
    this._evaluationMissingData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationMissingDataInput() {
    return this._evaluationMissingData;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // threshold_value - computed: false, optional: true, required: false
  private _thresholdValue?: number; 
  public get thresholdValue() {
    return this.getNumberAttribute('threshold_value');
  }
  public set thresholdValue(value: number) {
    this._thresholdValue = value;
  }
  public resetThresholdValue() {
    this._thresholdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValueInput() {
    return this._thresholdValue;
  }

  // aggregations - computed: false, optional: true, required: false
  private _aggregations = new MonitoringAlertPolicyConditionsConditionThresholdAggregationsList(this, "aggregations", false);
  public get aggregations() {
    return this._aggregations;
  }
  public putAggregations(value: MonitoringAlertPolicyConditionsConditionThresholdAggregations[] | cdktf.IResolvable) {
    this._aggregations.internalValue = value;
  }
  public resetAggregations() {
    this._aggregations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations.internalValue;
  }

  // denominator_aggregations - computed: false, optional: true, required: false
  private _denominatorAggregations = new MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList(this, "denominator_aggregations", false);
  public get denominatorAggregations() {
    return this._denominatorAggregations;
  }
  public putDenominatorAggregations(value: MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations[] | cdktf.IResolvable) {
    this._denominatorAggregations.internalValue = value;
  }
  public resetDenominatorAggregations() {
    this._denominatorAggregations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorAggregationsInput() {
    return this._denominatorAggregations.internalValue;
  }

  // forecast_options - computed: false, optional: true, required: false
  private _forecastOptions = new MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference(this, "forecast_options");
  public get forecastOptions() {
    return this._forecastOptions;
  }
  public putForecastOptions(value: MonitoringAlertPolicyConditionsConditionThresholdForecastOptions) {
    this._forecastOptions.internalValue = value;
  }
  public resetForecastOptions() {
    this._forecastOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastOptionsInput() {
    return this._forecastOptions.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: MonitoringAlertPolicyConditionsConditionThresholdTrigger) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}
export interface MonitoringAlertPolicyConditions {
  /**
  * A short name or phrase used to identify the
  * condition in dashboards, notifications, and
  * incidents. To avoid confusion, don't use the same
  * display name for multiple conditions in the same
  * policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#display_name MonitoringAlertPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * condition_absent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#condition_absent MonitoringAlertPolicy#condition_absent}
  */
  readonly conditionAbsent?: MonitoringAlertPolicyConditionsConditionAbsent;
  /**
  * condition_matched_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#condition_matched_log MonitoringAlertPolicy#condition_matched_log}
  */
  readonly conditionMatchedLog?: MonitoringAlertPolicyConditionsConditionMatchedLog;
  /**
  * condition_monitoring_query_language block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#condition_monitoring_query_language MonitoringAlertPolicy#condition_monitoring_query_language}
  */
  readonly conditionMonitoringQueryLanguage?: MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage;
  /**
  * condition_prometheus_query_language block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#condition_prometheus_query_language MonitoringAlertPolicy#condition_prometheus_query_language}
  */
  readonly conditionPrometheusQueryLanguage?: MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage;
  /**
  * condition_sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#condition_sql MonitoringAlertPolicy#condition_sql}
  */
  readonly conditionSql?: MonitoringAlertPolicyConditionsConditionSql;
  /**
  * condition_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#condition_threshold MonitoringAlertPolicy#condition_threshold}
  */
  readonly conditionThreshold?: MonitoringAlertPolicyConditionsConditionThreshold;
}

export function monitoringAlertPolicyConditionsToTerraform(struct?: MonitoringAlertPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    condition_absent: monitoringAlertPolicyConditionsConditionAbsentToTerraform(struct!.conditionAbsent),
    condition_matched_log: monitoringAlertPolicyConditionsConditionMatchedLogToTerraform(struct!.conditionMatchedLog),
    condition_monitoring_query_language: monitoringAlertPolicyConditionsConditionMonitoringQueryLanguageToTerraform(struct!.conditionMonitoringQueryLanguage),
    condition_prometheus_query_language: monitoringAlertPolicyConditionsConditionPrometheusQueryLanguageToTerraform(struct!.conditionPrometheusQueryLanguage),
    condition_sql: monitoringAlertPolicyConditionsConditionSqlToTerraform(struct!.conditionSql),
    condition_threshold: monitoringAlertPolicyConditionsConditionThresholdToTerraform(struct!.conditionThreshold),
  }
}


export function monitoringAlertPolicyConditionsToHclTerraform(struct?: MonitoringAlertPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_absent: {
      value: monitoringAlertPolicyConditionsConditionAbsentToHclTerraform(struct!.conditionAbsent),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionAbsentList",
    },
    condition_matched_log: {
      value: monitoringAlertPolicyConditionsConditionMatchedLogToHclTerraform(struct!.conditionMatchedLog),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionMatchedLogList",
    },
    condition_monitoring_query_language: {
      value: monitoringAlertPolicyConditionsConditionMonitoringQueryLanguageToHclTerraform(struct!.conditionMonitoringQueryLanguage),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageList",
    },
    condition_prometheus_query_language: {
      value: monitoringAlertPolicyConditionsConditionPrometheusQueryLanguageToHclTerraform(struct!.conditionPrometheusQueryLanguage),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageList",
    },
    condition_sql: {
      value: monitoringAlertPolicyConditionsConditionSqlToHclTerraform(struct!.conditionSql),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionSqlList",
    },
    condition_threshold: {
      value: monitoringAlertPolicyConditionsConditionThresholdToHclTerraform(struct!.conditionThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyConditionsConditionThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringAlertPolicyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._conditionAbsent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionAbsent = this._conditionAbsent?.internalValue;
    }
    if (this._conditionMatchedLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionMatchedLog = this._conditionMatchedLog?.internalValue;
    }
    if (this._conditionMonitoringQueryLanguage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionMonitoringQueryLanguage = this._conditionMonitoringQueryLanguage?.internalValue;
    }
    if (this._conditionPrometheusQueryLanguage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionPrometheusQueryLanguage = this._conditionPrometheusQueryLanguage?.internalValue;
    }
    if (this._conditionSql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionSql = this._conditionSql?.internalValue;
    }
    if (this._conditionThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionThreshold = this._conditionThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._conditionAbsent.internalValue = undefined;
      this._conditionMatchedLog.internalValue = undefined;
      this._conditionMonitoringQueryLanguage.internalValue = undefined;
      this._conditionPrometheusQueryLanguage.internalValue = undefined;
      this._conditionSql.internalValue = undefined;
      this._conditionThreshold.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._conditionAbsent.internalValue = value.conditionAbsent;
      this._conditionMatchedLog.internalValue = value.conditionMatchedLog;
      this._conditionMonitoringQueryLanguage.internalValue = value.conditionMonitoringQueryLanguage;
      this._conditionPrometheusQueryLanguage.internalValue = value.conditionPrometheusQueryLanguage;
      this._conditionSql.internalValue = value.conditionSql;
      this._conditionThreshold.internalValue = value.conditionThreshold;
    }
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // condition_absent - computed: false, optional: true, required: false
  private _conditionAbsent = new MonitoringAlertPolicyConditionsConditionAbsentOutputReference(this, "condition_absent");
  public get conditionAbsent() {
    return this._conditionAbsent;
  }
  public putConditionAbsent(value: MonitoringAlertPolicyConditionsConditionAbsent) {
    this._conditionAbsent.internalValue = value;
  }
  public resetConditionAbsent() {
    this._conditionAbsent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionAbsentInput() {
    return this._conditionAbsent.internalValue;
  }

  // condition_matched_log - computed: false, optional: true, required: false
  private _conditionMatchedLog = new MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference(this, "condition_matched_log");
  public get conditionMatchedLog() {
    return this._conditionMatchedLog;
  }
  public putConditionMatchedLog(value: MonitoringAlertPolicyConditionsConditionMatchedLog) {
    this._conditionMatchedLog.internalValue = value;
  }
  public resetConditionMatchedLog() {
    this._conditionMatchedLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionMatchedLogInput() {
    return this._conditionMatchedLog.internalValue;
  }

  // condition_monitoring_query_language - computed: false, optional: true, required: false
  private _conditionMonitoringQueryLanguage = new MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference(this, "condition_monitoring_query_language");
  public get conditionMonitoringQueryLanguage() {
    return this._conditionMonitoringQueryLanguage;
  }
  public putConditionMonitoringQueryLanguage(value: MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage) {
    this._conditionMonitoringQueryLanguage.internalValue = value;
  }
  public resetConditionMonitoringQueryLanguage() {
    this._conditionMonitoringQueryLanguage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionMonitoringQueryLanguageInput() {
    return this._conditionMonitoringQueryLanguage.internalValue;
  }

  // condition_prometheus_query_language - computed: false, optional: true, required: false
  private _conditionPrometheusQueryLanguage = new MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference(this, "condition_prometheus_query_language");
  public get conditionPrometheusQueryLanguage() {
    return this._conditionPrometheusQueryLanguage;
  }
  public putConditionPrometheusQueryLanguage(value: MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage) {
    this._conditionPrometheusQueryLanguage.internalValue = value;
  }
  public resetConditionPrometheusQueryLanguage() {
    this._conditionPrometheusQueryLanguage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionPrometheusQueryLanguageInput() {
    return this._conditionPrometheusQueryLanguage.internalValue;
  }

  // condition_sql - computed: false, optional: true, required: false
  private _conditionSql = new MonitoringAlertPolicyConditionsConditionSqlOutputReference(this, "condition_sql");
  public get conditionSql() {
    return this._conditionSql;
  }
  public putConditionSql(value: MonitoringAlertPolicyConditionsConditionSql) {
    this._conditionSql.internalValue = value;
  }
  public resetConditionSql() {
    this._conditionSql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionSqlInput() {
    return this._conditionSql.internalValue;
  }

  // condition_threshold - computed: false, optional: true, required: false
  private _conditionThreshold = new MonitoringAlertPolicyConditionsConditionThresholdOutputReference(this, "condition_threshold");
  public get conditionThreshold() {
    return this._conditionThreshold;
  }
  public putConditionThreshold(value: MonitoringAlertPolicyConditionsConditionThreshold) {
    this._conditionThreshold.internalValue = value;
  }
  public resetConditionThreshold() {
    this._conditionThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionThresholdInput() {
    return this._conditionThreshold.internalValue;
  }
}

export class MonitoringAlertPolicyConditionsList extends cdktf.ComplexList {
  public internalValue? : MonitoringAlertPolicyConditions[] | cdktf.IResolvable

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
  public get(index: number): MonitoringAlertPolicyConditionsOutputReference {
    return new MonitoringAlertPolicyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringAlertPolicyDocumentationLinks {
  /**
  * A short display name for the link. The display name must not be empty or exceed 63 characters. Example: "playbook".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#display_name MonitoringAlertPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * The url of a webpage. A url can be templatized by using variables in the path or the query parameters. The total length of a URL should not exceed 2083 characters before and after variable expansion. Example: "https://my_domain.com/playbook?name=${resource.name}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#url MonitoringAlertPolicy#url}
  */
  readonly url?: string;
}

export function monitoringAlertPolicyDocumentationLinksToTerraform(struct?: MonitoringAlertPolicyDocumentationLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function monitoringAlertPolicyDocumentationLinksToHclTerraform(struct?: MonitoringAlertPolicyDocumentationLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyDocumentationLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringAlertPolicyDocumentationLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyDocumentationLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._url = value.url;
    }
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class MonitoringAlertPolicyDocumentationLinksList extends cdktf.ComplexList {
  public internalValue? : MonitoringAlertPolicyDocumentationLinks[] | cdktf.IResolvable

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
  public get(index: number): MonitoringAlertPolicyDocumentationLinksOutputReference {
    return new MonitoringAlertPolicyDocumentationLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringAlertPolicyDocumentation {
  /**
  * The text of the documentation, interpreted according to mimeType.
  * The content may not exceed 8,192 Unicode characters and may not
  * exceed more than 10,240 bytes when encoded in UTF-8 format,
  * whichever is smaller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#content MonitoringAlertPolicy#content}
  */
  readonly content?: string;
  /**
  * The format of the content field. Presently, only the value
  * "text/markdown" is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#mime_type MonitoringAlertPolicy#mime_type}
  */
  readonly mimeType?: string;
  /**
  * The subject line of the notification. The subject line may not
  * exceed 10,240 bytes. In notifications generated by this policy the contents
  * of the subject line after variable expansion will be truncated to 255 bytes
  * or shorter at the latest UTF-8 character boundary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#subject MonitoringAlertPolicy#subject}
  */
  readonly subject?: string;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#links MonitoringAlertPolicy#links}
  */
  readonly links?: MonitoringAlertPolicyDocumentationLinks[] | cdktf.IResolvable;
}

export function monitoringAlertPolicyDocumentationToTerraform(struct?: MonitoringAlertPolicyDocumentationOutputReference | MonitoringAlertPolicyDocumentation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
    subject: cdktf.stringToTerraform(struct!.subject),
    links: cdktf.listMapper(monitoringAlertPolicyDocumentationLinksToTerraform, true)(struct!.links),
  }
}


export function monitoringAlertPolicyDocumentationToHclTerraform(struct?: MonitoringAlertPolicyDocumentationOutputReference | MonitoringAlertPolicyDocumentation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktf.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    links: {
      value: cdktf.listMapperHcl(monitoringAlertPolicyDocumentationLinksToHclTerraform, true)(struct!.links),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringAlertPolicyDocumentationLinksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlertPolicyDocumentationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlertPolicyDocumentation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyDocumentation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._mimeType = undefined;
      this._subject = undefined;
      this._links.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._mimeType = value.mimeType;
      this._subject = value.subject;
      this._links.internalValue = value.links;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // mime_type - computed: false, optional: true, required: false
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  public resetMimeType() {
    this._mimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // links - computed: false, optional: true, required: false
  private _links = new MonitoringAlertPolicyDocumentationLinksList(this, "links", false);
  public get links() {
    return this._links;
  }
  public putLinks(value: MonitoringAlertPolicyDocumentationLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }
}
export interface MonitoringAlertPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#create MonitoringAlertPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#delete MonitoringAlertPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#update MonitoringAlertPolicy#update}
  */
  readonly update?: string;
}

export function monitoringAlertPolicyTimeoutsToTerraform(struct?: MonitoringAlertPolicyTimeouts | cdktf.IResolvable): any {
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


export function monitoringAlertPolicyTimeoutsToHclTerraform(struct?: MonitoringAlertPolicyTimeouts | cdktf.IResolvable): any {
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

export class MonitoringAlertPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitoringAlertPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitoringAlertPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy google_monitoring_alert_policy}
*/
export class MonitoringAlertPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_monitoring_alert_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitoringAlertPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitoringAlertPolicy to import
  * @param importFromId The id of the existing MonitoringAlertPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitoringAlertPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_monitoring_alert_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/monitoring_alert_policy google_monitoring_alert_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringAlertPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoringAlertPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_alert_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.33.0',
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
    this._combiner = config.combiner;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._notificationChannels = config.notificationChannels;
    this._project = config.project;
    this._severity = config.severity;
    this._userLabels = config.userLabels;
    this._alertStrategy.internalValue = config.alertStrategy;
    this._conditions.internalValue = config.conditions;
    this._documentation.internalValue = config.documentation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // combiner - computed: false, optional: false, required: true
  private _combiner?: string; 
  public get combiner() {
    return this.getStringAttribute('combiner');
  }
  public set combiner(value: string) {
    this._combiner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get combinerInput() {
    return this._combiner;
  }

  // creation_record - computed: true, optional: false, required: false
  private _creationRecord = new MonitoringAlertPolicyCreationRecordList(this, "creation_record", false);
  public get creationRecord() {
    return this._creationRecord;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // notification_channels - computed: false, optional: true, required: false
  private _notificationChannels?: string[]; 
  public get notificationChannels() {
    return this.getListAttribute('notification_channels');
  }
  public set notificationChannels(value: string[]) {
    this._notificationChannels = value;
  }
  public resetNotificationChannels() {
    this._notificationChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelsInput() {
    return this._notificationChannels;
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

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // user_labels - computed: false, optional: true, required: false
  private _userLabels?: { [key: string]: string }; 
  public get userLabels() {
    return this.getStringMapAttribute('user_labels');
  }
  public set userLabels(value: { [key: string]: string }) {
    this._userLabels = value;
  }
  public resetUserLabels() {
    this._userLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLabelsInput() {
    return this._userLabels;
  }

  // alert_strategy - computed: false, optional: true, required: false
  private _alertStrategy = new MonitoringAlertPolicyAlertStrategyOutputReference(this, "alert_strategy");
  public get alertStrategy() {
    return this._alertStrategy;
  }
  public putAlertStrategy(value: MonitoringAlertPolicyAlertStrategy) {
    this._alertStrategy.internalValue = value;
  }
  public resetAlertStrategy() {
    this._alertStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertStrategyInput() {
    return this._alertStrategy.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new MonitoringAlertPolicyConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: MonitoringAlertPolicyConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // documentation - computed: false, optional: true, required: false
  private _documentation = new MonitoringAlertPolicyDocumentationOutputReference(this, "documentation");
  public get documentation() {
    return this._documentation;
  }
  public putDocumentation(value: MonitoringAlertPolicyDocumentation) {
    this._documentation.internalValue = value;
  }
  public resetDocumentation() {
    this._documentation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationInput() {
    return this._documentation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitoringAlertPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitoringAlertPolicyTimeouts) {
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
      combiner: cdktf.stringToTerraform(this._combiner),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      notification_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationChannels),
      project: cdktf.stringToTerraform(this._project),
      severity: cdktf.stringToTerraform(this._severity),
      user_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._userLabels),
      alert_strategy: monitoringAlertPolicyAlertStrategyToTerraform(this._alertStrategy.internalValue),
      conditions: cdktf.listMapper(monitoringAlertPolicyConditionsToTerraform, true)(this._conditions.internalValue),
      documentation: monitoringAlertPolicyDocumentationToTerraform(this._documentation.internalValue),
      timeouts: monitoringAlertPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      combiner: {
        value: cdktf.stringToHclTerraform(this._combiner),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      notification_channels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationChannels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._userLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      alert_strategy: {
        value: monitoringAlertPolicyAlertStrategyToHclTerraform(this._alertStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitoringAlertPolicyAlertStrategyList",
      },
      conditions: {
        value: cdktf.listMapperHcl(monitoringAlertPolicyConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitoringAlertPolicyConditionsList",
      },
      documentation: {
        value: monitoringAlertPolicyDocumentationToHclTerraform(this._documentation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitoringAlertPolicyDocumentationList",
      },
      timeouts: {
        value: monitoringAlertPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitoringAlertPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
