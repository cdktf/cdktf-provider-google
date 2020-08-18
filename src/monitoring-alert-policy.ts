// https://www.terraform.io/docs/providers/google/r/monitoring_alert_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface MonitoringAlertPolicyConfig extends TerraformMetaArguments {
  /** How to combine the results of multiple conditions to
determine if an incident should be opened. Possible values: ["AND", "OR", "AND_WITH_MATCHING_RESOURCE"] */
  readonly combiner: string;
  /** A short name or phrase used to identify the policy in
dashboards, notifications, and incidents. To avoid confusion, don't use
the same display name for multiple policies in the same project. The
name is limited to 512 Unicode characters. */
  readonly displayName: string;
  /** Whether or not the policy is enabled. The default is true. */
  readonly enabled?: boolean;
  readonly labels?: string[];
  /** Identifies the notification channels to which notifications should be
sent when incidents are opened or closed or when new violations occur
on an already opened incident. Each element of this array corresponds
to the name field in each of the NotificationChannel objects that are
returned from the notificationChannels.list method. The syntax of the
entries in this field is
'projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]' */
  readonly notificationChannels?: string[];
  readonly project?: string;
  /** This field is intended to be used for organizing and identifying the AlertPolicy
objects.The field can contain up to 64 entries. Each key and value is limited
to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values
can contain only lowercase letters, numerals, underscores, and dashes. Keys
must begin with a letter. */
  readonly userLabels?: { [key: string]: string };
  /** conditions block */
  readonly conditions: MonitoringAlertPolicyConditions[];
  /** documentation block */
  readonly documentation?: MonitoringAlertPolicyDocumentation[];
  /** timeouts block */
  readonly timeouts?: MonitoringAlertPolicyTimeouts;
}
export class MonitoringAlertPolicyCreationRecord extends ComplexComputedList {

  // mutate_time - computed: true, optional: false, required: true
  public get mutateTime() {
    return this.getStringAttribute('mutate_time');
  }

  // mutated_by - computed: true, optional: false, required: true
  public get mutatedBy() {
    return this.getStringAttribute('mutated_by');
  }
}
export interface MonitoringAlertPolicyConditionsConditionAbsentAggregations {
  /** The alignment period for per-time
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
otherwise an error is returned. */
  readonly alignmentPeriod?: string;
  /** The approach to be used to combine
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
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"] */
  readonly crossSeriesReducer?: string;
  /** The set of fields to preserve when
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
ignored. */
  readonly groupByFields?: string[];
  /** The approach to be used to align
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
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"] */
  readonly perSeriesAligner?: string;
}
export interface MonitoringAlertPolicyConditionsConditionAbsentTrigger {
  /** The absolute number of time series
that must fail the predicate for the
condition to be triggered. */
  readonly count?: number;
  /** The percentage of time series that
must fail the predicate for the
condition to be triggered. */
  readonly percent?: number;
}
export interface MonitoringAlertPolicyConditionsConditionAbsent {
  /** The amount of time that a time series must
fail to report new data to be considered
failing. Currently, only values that are a
multiple of a minute--e.g. 60s, 120s, or 300s
--are supported. */
  readonly duration: string;
  /** A filter that identifies which time series
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
in length. */
  readonly filter?: string;
  /** aggregations block */
  readonly aggregations?: MonitoringAlertPolicyConditionsConditionAbsentAggregations[];
  /** trigger block */
  readonly trigger?: MonitoringAlertPolicyConditionsConditionAbsentTrigger[];
}
export interface MonitoringAlertPolicyConditionsConditionThresholdAggregations {
  /** The alignment period for per-time
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
otherwise an error is returned. */
  readonly alignmentPeriod?: string;
  /** The approach to be used to combine
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
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"] */
  readonly crossSeriesReducer?: string;
  /** The set of fields to preserve when
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
ignored. */
  readonly groupByFields?: string[];
  /** The approach to be used to align
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
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"] */
  readonly perSeriesAligner?: string;
}
export interface MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations {
  /** The alignment period for per-time
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
otherwise an error is returned. */
  readonly alignmentPeriod?: string;
  /** The approach to be used to combine
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
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"] */
  readonly crossSeriesReducer?: string;
  /** The set of fields to preserve when
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
ignored. */
  readonly groupByFields?: string[];
  /** The approach to be used to align
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
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"] */
  readonly perSeriesAligner?: string;
}
export interface MonitoringAlertPolicyConditionsConditionThresholdTrigger {
  /** The absolute number of time series
that must fail the predicate for the
condition to be triggered. */
  readonly count?: number;
  /** The percentage of time series that
must fail the predicate for the
condition to be triggered. */
  readonly percent?: number;
}
export interface MonitoringAlertPolicyConditionsConditionThreshold {
  /** The comparison to apply between the time
series (indicated by filter and aggregation)
and the threshold (indicated by
threshold_value). The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"] */
  readonly comparison: string;
  /** A filter that identifies a time series that
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
in length. */
  readonly denominatorFilter?: string;
  /** The amount of time that a time series must
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
alerted on quickly. */
  readonly duration: string;
  /** A filter that identifies which time series
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
in length. */
  readonly filter?: string;
  /** A value against which to compare the time
series. */
  readonly thresholdValue?: number;
  /** aggregations block */
  readonly aggregations?: MonitoringAlertPolicyConditionsConditionThresholdAggregations[];
  /** denominator_aggregations block */
  readonly denominatorAggregations?: MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations[];
  /** trigger block */
  readonly trigger?: MonitoringAlertPolicyConditionsConditionThresholdTrigger[];
}
export interface MonitoringAlertPolicyConditions {
  /** A short name or phrase used to identify the
condition in dashboards, notifications, and
incidents. To avoid confusion, don't use the same
display name for multiple conditions in the same
policy. */
  readonly displayName: string;
  /** condition_absent block */
  readonly conditionAbsent?: MonitoringAlertPolicyConditionsConditionAbsent[];
  /** condition_threshold block */
  readonly conditionThreshold?: MonitoringAlertPolicyConditionsConditionThreshold[];
}
export interface MonitoringAlertPolicyDocumentation {
  /** The text of the documentation, interpreted according to mimeType.
The content may not exceed 8,192 Unicode characters and may not
exceed more than 10,240 bytes when encoded in UTF-8 format,
whichever is smaller. */
  readonly content?: string;
  /** The format of the content field. Presently, only the value
"text/markdown" is supported. */
  readonly mimeType?: string;
}
export interface MonitoringAlertPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class MonitoringAlertPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._labels = config.labels;
    this._notificationChannels = config.notificationChannels;
    this._project = config.project;
    this._userLabels = config.userLabels;
    this._conditions = config.conditions;
    this._documentation = config.documentation;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // combiner - computed: false, optional: false, required: true
  private _combiner: string;
  public get combiner() {
    return this._combiner;
  }
  public set combiner(value: string) {
    this._combiner = value;
  }

  // creation_record - computed: true, optional: false, required: true
  public creationRecord(index: string) {
    return new MonitoringAlertPolicyCreationRecord(this, 'creation_record', index);
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: string[];
  public get labels() {
    return this._labels ?? this.getListAttribute('labels');
  }
  public set labels(value: string[] | undefined) {
    this._labels = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_channels - computed: false, optional: true, required: false
  private _notificationChannels?: string[];
  public get notificationChannels() {
    return this._notificationChannels;
  }
  public set notificationChannels(value: string[] | undefined) {
    this._notificationChannels = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // user_labels - computed: false, optional: true, required: false
  private _userLabels?: { [key: string]: string };
  public get userLabels() {
    return this._userLabels;
  }
  public set userLabels(value: { [key: string]: string } | undefined) {
    this._userLabels = value;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions: MonitoringAlertPolicyConditions[];
  public get conditions() {
    return this._conditions;
  }
  public set conditions(value: MonitoringAlertPolicyConditions[]) {
    this._conditions = value;
  }

  // documentation - computed: false, optional: true, required: false
  private _documentation?: MonitoringAlertPolicyDocumentation[];
  public get documentation() {
    return this._documentation;
  }
  public set documentation(value: MonitoringAlertPolicyDocumentation[] | undefined) {
    this._documentation = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitoringAlertPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MonitoringAlertPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      combiner: this._combiner,
      display_name: this._displayName,
      enabled: this._enabled,
      labels: this._labels,
      notification_channels: this._notificationChannels,
      project: this._project,
      user_labels: this._userLabels,
      conditions: this._conditions,
      documentation: this._documentation,
      timeouts: this._timeouts,
    };
  }
}
