// https://www.terraform.io/docs/providers/google/r/monitoring_slo.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MonitoringSloConfig extends TerraformMetaArguments {
  /** A calendar period, semantically "since the start of the current
<calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"] */
  readonly calendarPeriod?: string;
  /** Name used for UI elements listing this SLO. */
  readonly displayName?: string;
  /** The fraction of service that must be good in order for this objective
to be met. 0 < goal <= 0.999 */
  readonly goal: number;
  readonly project?: string;
  /** A rolling time period, semantically "in the past X days".
Must be between 1 to 30 days, inclusive. */
  readonly rollingPeriodDays?: number;
  /** ID of the service to which this SLO belongs. */
  readonly service: string;
  /** The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead. */
  readonly sloId?: string;
  /** basic_sli block */
  readonly basicSli?: MonitoringSloBasicSli[];
  /** request_based_sli block */
  readonly requestBasedSli?: MonitoringSloRequestBasedSli[];
  /** timeouts block */
  readonly timeouts?: MonitoringSloTimeouts;
  /** windows_based_sli block */
  readonly windowsBasedSli?: MonitoringSloWindowsBasedSli[];
}
export interface MonitoringSloBasicSliLatency {
  /** A duration string, e.g. 10s.
Good service is defined to be the count of requests made to
this service that return in no more than threshold. */
  readonly threshold: string;
}
export interface MonitoringSloBasicSli {
  /** An optional set of locations to which this SLI is relevant.
Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error. */
  readonly location?: string[];
  /** An optional set of RPCs to which this SLI is relevant.
Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error. */
  readonly method?: string[];
  /** The set of API versions to which this SLI is relevant.
Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error. */
  readonly version?: string[];
  /** latency block */
  readonly latency: MonitoringSloBasicSliLatency[];
}
export interface MonitoringSloRequestBasedSliDistributionCutRange {
  /** max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min" */
  readonly max?: number;
  /** Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max" */
  readonly min?: number;
}
export interface MonitoringSloRequestBasedSliDistributionCut {
  /** A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE. */
  readonly distributionFilter: string;
  /** range block */
  readonly range: MonitoringSloRequestBasedSliDistributionCutRange[];
}
export interface MonitoringSloRequestBasedSliGoodTotalRatio {
  /** A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying bad service provided, either demanded service that
was not provided or demanded service that was of inadequate
quality.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed). */
  readonly badServiceFilter?: string;
  /** A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying good service provided.
Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed). */
  readonly goodServiceFilter?: string;
  /** A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying total demanded service.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed). */
  readonly totalServiceFilter?: string;
}
export interface MonitoringSloRequestBasedSli {
  /** distribution_cut block */
  readonly distributionCut?: MonitoringSloRequestBasedSliDistributionCut[];
  /** good_total_ratio block */
  readonly goodTotalRatio?: MonitoringSloRequestBasedSliGoodTotalRatio[];
}
export interface MonitoringSloTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency {
  /** A duration string, e.g. 10s.
Good service is defined to be the count of requests made to
this service that return in no more than threshold. */
  readonly threshold: string;
}
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance {
  /** An optional set of locations to which this SLI is relevant.
Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error. */
  readonly location?: string[];
  /** An optional set of RPCs to which this SLI is relevant.
Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error. */
  readonly method?: string[];
  /** The set of API versions to which this SLI is relevant.
Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error. */
  readonly version?: string[];
  /** latency block */
  readonly latency: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency[];
}
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange {
  /** max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min" */
  readonly max?: number;
  /** Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max" */
  readonly min?: number;
}
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut {
  /** A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE. */
  readonly distributionFilter: string;
  /** range block */
  readonly range: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange[];
}
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio {
  /** A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying bad service provided, either demanded service that
was not provided or demanded service that was of inadequate
quality. Exactly two of
good, bad, or total service filter must be defined (where
good + bad = total is assumed)

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE. */
  readonly badServiceFilter?: string;
  /** A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying good service provided. Exactly two of
good, bad, or total service filter must be defined (where
good + bad = total is assumed)

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE. */
  readonly goodServiceFilter?: string;
  /** A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying total demanded service. Exactly two of
good, bad, or total service filter must be defined (where
good + bad = total is assumed)

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE. */
  readonly totalServiceFilter?: string;
}
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance {
  /** distribution_cut block */
  readonly distributionCut?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut[];
  /** good_total_ratio block */
  readonly goodTotalRatio?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio[];
}
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThreshold {
  /** If window performance >= threshold, the window is counted
as good. */
  readonly threshold?: number;
  /** basic_sli_performance block */
  readonly basicSliPerformance?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance[];
  /** performance block */
  readonly performance?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance[];
}
export interface MonitoringSloWindowsBasedSliMetricMeanInRangeRange {
  /** max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min" */
  readonly max?: number;
  /** Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max" */
  readonly min?: number;
}
export interface MonitoringSloWindowsBasedSliMetricMeanInRange {
  /** A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
specifying the TimeSeries to use for evaluating window
The provided TimeSeries must have ValueType = INT64 or
ValueType = DOUBLE and MetricKind = GAUGE. Mean value 'X'
should satisfy 'range.min <= X < range.max'
under good service. */
  readonly timeSeries: string;
  /** range block */
  readonly range: MonitoringSloWindowsBasedSliMetricMeanInRangeRange[];
}
export interface MonitoringSloWindowsBasedSliMetricSumInRangeRange {
  /** max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min" */
  readonly max?: number;
  /** Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max" */
  readonly min?: number;
}
export interface MonitoringSloWindowsBasedSliMetricSumInRange {
  /** A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
specifying the TimeSeries to use for evaluating window
quality. The provided TimeSeries must have
ValueType = INT64 or ValueType = DOUBLE and
MetricKind = GAUGE.

Summed value 'X' should satisfy
'range.min <= X < range.max' for a good window. */
  readonly timeSeries: string;
  /** range block */
  readonly range: MonitoringSloWindowsBasedSliMetricSumInRangeRange[];
}
export interface MonitoringSloWindowsBasedSli {
  /** A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
with ValueType = BOOL. The window is good if any true values
appear in the window. One of 'good_bad_metric_filter',
'good_total_ratio_threshold', 'metric_mean_in_range',
'metric_sum_in_range' must be set for 'windows_based_sli'. */
  readonly goodBadMetricFilter?: string;
  /** Duration over which window quality is evaluated, given as a
duration string "{X}s" representing X seconds. Must be an
integer fraction of a day and at least 60s. */
  readonly windowPeriod?: string;
  /** good_total_ratio_threshold block */
  readonly goodTotalRatioThreshold?: MonitoringSloWindowsBasedSliGoodTotalRatioThreshold[];
  /** metric_mean_in_range block */
  readonly metricMeanInRange?: MonitoringSloWindowsBasedSliMetricMeanInRange[];
  /** metric_sum_in_range block */
  readonly metricSumInRange?: MonitoringSloWindowsBasedSliMetricSumInRange[];
}

// Resource

export class MonitoringSlo extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MonitoringSloConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_slo',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._calendarPeriod = config.calendarPeriod;
    this._displayName = config.displayName;
    this._goal = config.goal;
    this._project = config.project;
    this._rollingPeriodDays = config.rollingPeriodDays;
    this._service = config.service;
    this._sloId = config.sloId;
    this._basicSli = config.basicSli;
    this._requestBasedSli = config.requestBasedSli;
    this._timeouts = config.timeouts;
    this._windowsBasedSli = config.windowsBasedSli;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // calendar_period - computed: false, optional: true, required: false
  private _calendarPeriod?: string;
  public get calendarPeriod() {
    return this._calendarPeriod;
  }
  public set calendarPeriod(value: string | undefined) {
    this._calendarPeriod = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // goal - computed: false, optional: false, required: true
  private _goal: number;
  public get goal() {
    return this._goal;
  }
  public set goal(value: number) {
    this._goal = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // rolling_period_days - computed: false, optional: true, required: false
  private _rollingPeriodDays?: number;
  public get rollingPeriodDays() {
    return this._rollingPeriodDays;
  }
  public set rollingPeriodDays(value: number | undefined) {
    this._rollingPeriodDays = value;
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this._service;
  }
  public set service(value: string) {
    this._service = value;
  }

  // slo_id - computed: true, optional: true, required: false
  private _sloId?: string;
  public get sloId() {
    return this._sloId ?? this.getStringAttribute('slo_id');
  }
  public set sloId(value: string | undefined) {
    this._sloId = value;
  }

  // basic_sli - computed: false, optional: true, required: false
  private _basicSli?: MonitoringSloBasicSli[];
  public get basicSli() {
    return this._basicSli;
  }
  public set basicSli(value: MonitoringSloBasicSli[] | undefined) {
    this._basicSli = value;
  }

  // request_based_sli - computed: false, optional: true, required: false
  private _requestBasedSli?: MonitoringSloRequestBasedSli[];
  public get requestBasedSli() {
    return this._requestBasedSli;
  }
  public set requestBasedSli(value: MonitoringSloRequestBasedSli[] | undefined) {
    this._requestBasedSli = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitoringSloTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MonitoringSloTimeouts | undefined) {
    this._timeouts = value;
  }

  // windows_based_sli - computed: false, optional: true, required: false
  private _windowsBasedSli?: MonitoringSloWindowsBasedSli[];
  public get windowsBasedSli() {
    return this._windowsBasedSli;
  }
  public set windowsBasedSli(value: MonitoringSloWindowsBasedSli[] | undefined) {
    this._windowsBasedSli = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      calendar_period: this._calendarPeriod,
      display_name: this._displayName,
      goal: this._goal,
      project: this._project,
      rolling_period_days: this._rollingPeriodDays,
      service: this._service,
      slo_id: this._sloId,
      basic_sli: this._basicSli,
      request_based_sli: this._requestBasedSli,
      timeouts: this._timeouts,
      windows_based_sli: this._windowsBasedSli,
    };
  }
}
