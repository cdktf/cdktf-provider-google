// https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringAlertPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * How to combine the results of multiple conditions to
determine if an incident should be opened. Possible values: ["AND", "OR", "AND_WITH_MATCHING_RESOURCE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#combiner MonitoringAlertPolicy#combiner}
  */
  readonly combiner: string;
  /**
  * A short name or phrase used to identify the policy in
dashboards, notifications, and incidents. To avoid confusion, don't use
the same display name for multiple policies in the same project. The
name is limited to 512 Unicode characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#display_name MonitoringAlertPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * Whether or not the policy is enabled. The default is true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#enabled MonitoringAlertPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Identifies the notification channels to which notifications should be
sent when incidents are opened or closed or when new violations occur
on an already opened incident. Each element of this array corresponds
to the name field in each of the NotificationChannel objects that are
returned from the notificationChannels.list method. The syntax of the
entries in this field is
'projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#notification_channels MonitoringAlertPolicy#notification_channels}
  */
  readonly notificationChannels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#project MonitoringAlertPolicy#project}
  */
  readonly project?: string;
  /**
  * This field is intended to be used for organizing and identifying the AlertPolicy
objects.The field can contain up to 64 entries. Each key and value is limited
to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values
can contain only lowercase letters, numerals, underscores, and dashes. Keys
must begin with a letter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#user_labels MonitoringAlertPolicy#user_labels}
  */
  readonly userLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#conditions MonitoringAlertPolicy#conditions}
  */
  readonly conditions: MonitoringAlertPolicyConditions[];
  /**
  * documentation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#documentation MonitoringAlertPolicy#documentation}
  */
  readonly documentation?: MonitoringAlertPolicyDocumentation;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#timeouts MonitoringAlertPolicy#timeouts}
  */
  readonly timeouts?: MonitoringAlertPolicyTimeouts;
}
export class MonitoringAlertPolicyCreationRecord extends cdktf.ComplexComputedList {

  // mutate_time - computed: true, optional: false, required: false
  public get mutateTime() {
    return this.getStringAttribute('mutate_time');
  }

  // mutated_by - computed: true, optional: false, required: false
  public get mutatedBy() {
    return this.getStringAttribute('mutated_by');
  }
}
export interface MonitoringAlertPolicyConditionsConditionAbsentAggregations {
  /**
  * The alignment period for per-time
series alignment. If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#alignment_period MonitoringAlertPolicy#alignment_period}
  */
  readonly alignmentPeriod?: string;
  /**
  * The approach to be used to combine
time series. Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#cross_series_reducer MonitoringAlertPolicy#cross_series_reducer}
  */
  readonly crossSeriesReducer?: string;
  /**
  * The set of fields to preserve when
crossSeriesReducer is specified.
The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#group_by_fields MonitoringAlertPolicy#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * The approach to be used to align
individual time series. Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#per_series_aligner MonitoringAlertPolicy#per_series_aligner}
  */
  readonly perSeriesAligner?: string;
}

export function monitoringAlertPolicyConditionsConditionAbsentAggregationsToTerraform(struct?: MonitoringAlertPolicyConditionsConditionAbsentAggregations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alignment_period: cdktf.stringToTerraform(struct!.alignmentPeriod),
    cross_series_reducer: cdktf.stringToTerraform(struct!.crossSeriesReducer),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groupByFields),
    per_series_aligner: cdktf.stringToTerraform(struct!.perSeriesAligner),
  }
}

export interface MonitoringAlertPolicyConditionsConditionAbsentTrigger {
  /**
  * The absolute number of time series
that must fail the predicate for the
condition to be triggered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#count MonitoringAlertPolicy#count}
  */
  readonly count?: number;
  /**
  * The percentage of time series that
must fail the predicate for the
condition to be triggered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#percent MonitoringAlertPolicy#percent}
  */
  readonly percent?: number;
}

export function monitoringAlertPolicyConditionsConditionAbsentTriggerToTerraform(struct?: MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference | MonitoringAlertPolicyConditionsConditionAbsentTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}

export class MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
fail to report new data to be considered
failing. Currently, only values that are a
multiple of a minute--e.g. 60s, 120s, or 300s
--are supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#duration MonitoringAlertPolicy#duration}
  */
  readonly duration: string;
  /**
  * A filter that identifies which time series
should be compared with the threshold.The
filter is similar to the one that is
specified in the
MetricService.ListTimeSeries request (that
call is useful to verify the time series
that will be retrieved / processed) and must
specify the metric type and optionally may
contain restrictions on resource type,
resource labels, and metric labels. This
field may not exceed 2048 Unicode characters
in length.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#filter MonitoringAlertPolicy#filter}
  */
  readonly filter?: string;
  /**
  * aggregations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#aggregations MonitoringAlertPolicy#aggregations}
  */
  readonly aggregations?: MonitoringAlertPolicyConditionsConditionAbsentAggregations[];
  /**
  * trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#trigger MonitoringAlertPolicy#trigger}
  */
  readonly trigger?: MonitoringAlertPolicyConditionsConditionAbsentTrigger;
}

export function monitoringAlertPolicyConditionsConditionAbsentToTerraform(struct?: MonitoringAlertPolicyConditionsConditionAbsentOutputReference | MonitoringAlertPolicyConditionsConditionAbsent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    filter: cdktf.stringToTerraform(struct!.filter),
    aggregations: cdktf.listMapper(monitoringAlertPolicyConditionsConditionAbsentAggregationsToTerraform)(struct!.aggregations),
    trigger: monitoringAlertPolicyConditionsConditionAbsentTriggerToTerraform(struct!.trigger),
  }
}

export class MonitoringAlertPolicyConditionsConditionAbsentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    if (this._aggregations !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregations = this._aggregations;
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
      this._aggregations = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._filter = value.filter;
      this._aggregations = value.aggregations;
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
  private _aggregations?: MonitoringAlertPolicyConditionsConditionAbsentAggregations[]; 
  public get aggregations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('aggregations') as any;
  }
  public set aggregations(value: MonitoringAlertPolicyConditionsConditionAbsentAggregations[]) {
    this._aggregations = value;
  }
  public resetAggregations() {
    this._aggregations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference(this as any, "trigger", true);
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
export interface MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger {
  /**
  * The absolute number of time series
that must fail the predicate for the
condition to be triggered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#count MonitoringAlertPolicy#count}
  */
  readonly count?: number;
  /**
  * The percentage of time series that
must fail the predicate for the
condition to be triggered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#percent MonitoringAlertPolicy#percent}
  */
  readonly percent?: number;
}

export function monitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerToTerraform(struct?: MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference | MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}

export class MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
violate the threshold to be considered
failing. Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#duration MonitoringAlertPolicy#duration}
  */
  readonly duration: string;
  /**
  * Monitoring Query Language query that outputs a boolean stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#query MonitoringAlertPolicy#query}
  */
  readonly query: string;
  /**
  * trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#trigger MonitoringAlertPolicy#trigger}
  */
  readonly trigger?: MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger;
}

export function monitoringAlertPolicyConditionsConditionMonitoringQueryLanguageToTerraform(struct?: MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference | MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    query: cdktf.stringToTerraform(struct!.query),
    trigger: monitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerToTerraform(struct!.trigger),
  }
}

export class MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
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
      this._query = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
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
  private _trigger = new MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference(this as any, "trigger", true);
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
export interface MonitoringAlertPolicyConditionsConditionThresholdAggregations {
  /**
  * The alignment period for per-time
series alignment. If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#alignment_period MonitoringAlertPolicy#alignment_period}
  */
  readonly alignmentPeriod?: string;
  /**
  * The approach to be used to combine
time series. Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#cross_series_reducer MonitoringAlertPolicy#cross_series_reducer}
  */
  readonly crossSeriesReducer?: string;
  /**
  * The set of fields to preserve when
crossSeriesReducer is specified.
The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#group_by_fields MonitoringAlertPolicy#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * The approach to be used to align
individual time series. Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#per_series_aligner MonitoringAlertPolicy#per_series_aligner}
  */
  readonly perSeriesAligner?: string;
}

export function monitoringAlertPolicyConditionsConditionThresholdAggregationsToTerraform(struct?: MonitoringAlertPolicyConditionsConditionThresholdAggregations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alignment_period: cdktf.stringToTerraform(struct!.alignmentPeriod),
    cross_series_reducer: cdktf.stringToTerraform(struct!.crossSeriesReducer),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groupByFields),
    per_series_aligner: cdktf.stringToTerraform(struct!.perSeriesAligner),
  }
}

export interface MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations {
  /**
  * The alignment period for per-time
series alignment. If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#alignment_period MonitoringAlertPolicy#alignment_period}
  */
  readonly alignmentPeriod?: string;
  /**
  * The approach to be used to combine
time series. Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#cross_series_reducer MonitoringAlertPolicy#cross_series_reducer}
  */
  readonly crossSeriesReducer?: string;
  /**
  * The set of fields to preserve when
crossSeriesReducer is specified.
The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#group_by_fields MonitoringAlertPolicy#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * The approach to be used to align
individual time series. Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#per_series_aligner MonitoringAlertPolicy#per_series_aligner}
  */
  readonly perSeriesAligner?: string;
}

export function monitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsToTerraform(struct?: MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alignment_period: cdktf.stringToTerraform(struct!.alignmentPeriod),
    cross_series_reducer: cdktf.stringToTerraform(struct!.crossSeriesReducer),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groupByFields),
    per_series_aligner: cdktf.stringToTerraform(struct!.perSeriesAligner),
  }
}

export interface MonitoringAlertPolicyConditionsConditionThresholdTrigger {
  /**
  * The absolute number of time series
that must fail the predicate for the
condition to be triggered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#count MonitoringAlertPolicy#count}
  */
  readonly count?: number;
  /**
  * The percentage of time series that
must fail the predicate for the
condition to be triggered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#percent MonitoringAlertPolicy#percent}
  */
  readonly percent?: number;
}

export function monitoringAlertPolicyConditionsConditionThresholdTriggerToTerraform(struct?: MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference | MonitoringAlertPolicyConditionsConditionThresholdTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}

export class MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
series (indicated by filter and aggregation)
and the threshold (indicated by
threshold_value). The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#comparison MonitoringAlertPolicy#comparison}
  */
  readonly comparison: string;
  /**
  * A filter that identifies a time series that
should be used as the denominator of a ratio
that will be compared with the threshold. If
a denominator_filter is specified, the time
series specified by the filter field will be
used as the numerator.The filter is similar
to the one that is specified in the
MetricService.ListTimeSeries request (that
call is useful to verify the time series
that will be retrieved / processed) and must
specify the metric type and optionally may
contain restrictions on resource type,
resource labels, and metric labels. This
field may not exceed 2048 Unicode characters
in length.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#denominator_filter MonitoringAlertPolicy#denominator_filter}
  */
  readonly denominatorFilter?: string;
  /**
  * The amount of time that a time series must
violate the threshold to be considered
failing. Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#duration MonitoringAlertPolicy#duration}
  */
  readonly duration: string;
  /**
  * A filter that identifies which time series
should be compared with the threshold.The
filter is similar to the one that is
specified in the
MetricService.ListTimeSeries request (that
call is useful to verify the time series
that will be retrieved / processed) and must
specify the metric type and optionally may
contain restrictions on resource type,
resource labels, and metric labels. This
field may not exceed 2048 Unicode characters
in length.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#filter MonitoringAlertPolicy#filter}
  */
  readonly filter?: string;
  /**
  * A value against which to compare the time
series.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#threshold_value MonitoringAlertPolicy#threshold_value}
  */
  readonly thresholdValue?: number;
  /**
  * aggregations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#aggregations MonitoringAlertPolicy#aggregations}
  */
  readonly aggregations?: MonitoringAlertPolicyConditionsConditionThresholdAggregations[];
  /**
  * denominator_aggregations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#denominator_aggregations MonitoringAlertPolicy#denominator_aggregations}
  */
  readonly denominatorAggregations?: MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations[];
  /**
  * trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#trigger MonitoringAlertPolicy#trigger}
  */
  readonly trigger?: MonitoringAlertPolicyConditionsConditionThresholdTrigger;
}

export function monitoringAlertPolicyConditionsConditionThresholdToTerraform(struct?: MonitoringAlertPolicyConditionsConditionThresholdOutputReference | MonitoringAlertPolicyConditionsConditionThreshold): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    denominator_filter: cdktf.stringToTerraform(struct!.denominatorFilter),
    duration: cdktf.stringToTerraform(struct!.duration),
    filter: cdktf.stringToTerraform(struct!.filter),
    threshold_value: cdktf.numberToTerraform(struct!.thresholdValue),
    aggregations: cdktf.listMapper(monitoringAlertPolicyConditionsConditionThresholdAggregationsToTerraform)(struct!.aggregations),
    denominator_aggregations: cdktf.listMapper(monitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsToTerraform)(struct!.denominatorAggregations),
    trigger: monitoringAlertPolicyConditionsConditionThresholdTriggerToTerraform(struct!.trigger),
  }
}

export class MonitoringAlertPolicyConditionsConditionThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._thresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdValue = this._thresholdValue;
    }
    if (this._aggregations !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregations = this._aggregations;
    }
    if (this._denominatorAggregations !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominatorAggregations = this._denominatorAggregations;
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
      this._filter = undefined;
      this._thresholdValue = undefined;
      this._aggregations = undefined;
      this._denominatorAggregations = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparison = value.comparison;
      this._denominatorFilter = value.denominatorFilter;
      this._duration = value.duration;
      this._filter = value.filter;
      this._thresholdValue = value.thresholdValue;
      this._aggregations = value.aggregations;
      this._denominatorAggregations = value.denominatorAggregations;
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
  private _aggregations?: MonitoringAlertPolicyConditionsConditionThresholdAggregations[]; 
  public get aggregations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('aggregations') as any;
  }
  public set aggregations(value: MonitoringAlertPolicyConditionsConditionThresholdAggregations[]) {
    this._aggregations = value;
  }
  public resetAggregations() {
    this._aggregations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations;
  }

  // denominator_aggregations - computed: false, optional: true, required: false
  private _denominatorAggregations?: MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations[]; 
  public get denominatorAggregations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('denominator_aggregations') as any;
  }
  public set denominatorAggregations(value: MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations[]) {
    this._denominatorAggregations = value;
  }
  public resetDenominatorAggregations() {
    this._denominatorAggregations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorAggregationsInput() {
    return this._denominatorAggregations;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference(this as any, "trigger", true);
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
condition in dashboards, notifications, and
incidents. To avoid confusion, don't use the same
display name for multiple conditions in the same
policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#display_name MonitoringAlertPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * condition_absent block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#condition_absent MonitoringAlertPolicy#condition_absent}
  */
  readonly conditionAbsent?: MonitoringAlertPolicyConditionsConditionAbsent;
  /**
  * condition_monitoring_query_language block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#condition_monitoring_query_language MonitoringAlertPolicy#condition_monitoring_query_language}
  */
  readonly conditionMonitoringQueryLanguage?: MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage;
  /**
  * condition_threshold block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#condition_threshold MonitoringAlertPolicy#condition_threshold}
  */
  readonly conditionThreshold?: MonitoringAlertPolicyConditionsConditionThreshold;
}

export function monitoringAlertPolicyConditionsToTerraform(struct?: MonitoringAlertPolicyConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    condition_absent: monitoringAlertPolicyConditionsConditionAbsentToTerraform(struct!.conditionAbsent),
    condition_monitoring_query_language: monitoringAlertPolicyConditionsConditionMonitoringQueryLanguageToTerraform(struct!.conditionMonitoringQueryLanguage),
    condition_threshold: monitoringAlertPolicyConditionsConditionThresholdToTerraform(struct!.conditionThreshold),
  }
}

export interface MonitoringAlertPolicyDocumentation {
  /**
  * The text of the documentation, interpreted according to mimeType.
The content may not exceed 8,192 Unicode characters and may not
exceed more than 10,240 bytes when encoded in UTF-8 format,
whichever is smaller.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#content MonitoringAlertPolicy#content}
  */
  readonly content?: string;
  /**
  * The format of the content field. Presently, only the value
"text/markdown" is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#mime_type MonitoringAlertPolicy#mime_type}
  */
  readonly mimeType?: string;
}

export function monitoringAlertPolicyDocumentationToTerraform(struct?: MonitoringAlertPolicyDocumentationOutputReference | MonitoringAlertPolicyDocumentation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}

export class MonitoringAlertPolicyDocumentationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlertPolicyDocumentation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._mimeType = value.mimeType;
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
}
export interface MonitoringAlertPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#create MonitoringAlertPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#delete MonitoringAlertPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html#update MonitoringAlertPolicy#update}
  */
  readonly update?: string;
}

export function monitoringAlertPolicyTimeoutsToTerraform(struct?: MonitoringAlertPolicyTimeoutsOutputReference | MonitoringAlertPolicyTimeouts): any {
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

export class MonitoringAlertPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitoringAlertPolicyTimeouts | undefined {
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

  public set internalValue(value: MonitoringAlertPolicyTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html google_monitoring_alert_policy}
*/
export class MonitoringAlertPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_monitoring_alert_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html google_monitoring_alert_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringAlertPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoringAlertPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_alert_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._combiner = config.combiner;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._notificationChannels = config.notificationChannels;
    this._project = config.project;
    this._userLabels = config.userLabels;
    this._conditions = config.conditions;
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
  public creationRecord(index: string) {
    return new MonitoringAlertPolicyCreationRecord(this, 'creation_record', index);
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
    return this.getBooleanAttribute('enabled') as any;
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
  public get id() {
    return this.getStringAttribute('id');
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

  // user_labels - computed: false, optional: true, required: false
  private _userLabels?: { [key: string]: string } | cdktf.IResolvable; 
  public get userLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('user_labels') as any;
  }
  public set userLabels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._userLabels = value;
  }
  public resetUserLabels() {
    this._userLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLabelsInput() {
    return this._userLabels;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions?: MonitoringAlertPolicyConditions[]; 
  public get conditions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('conditions') as any;
  }
  public set conditions(value: MonitoringAlertPolicyConditions[]) {
    this._conditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }

  // documentation - computed: false, optional: true, required: false
  private _documentation = new MonitoringAlertPolicyDocumentationOutputReference(this as any, "documentation", true);
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
  private _timeouts = new MonitoringAlertPolicyTimeoutsOutputReference(this as any, "timeouts", true);
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
      notification_channels: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationChannels),
      project: cdktf.stringToTerraform(this._project),
      user_labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._userLabels),
      conditions: cdktf.listMapper(monitoringAlertPolicyConditionsToTerraform)(this._conditions),
      documentation: monitoringAlertPolicyDocumentationToTerraform(this._documentation.internalValue),
      timeouts: monitoringAlertPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
