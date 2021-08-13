// https://www.terraform.io/docs/providers/google/r/monitoring_slo.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringSloConfig extends cdktf.TerraformMetaArguments {
  /**
  * A calendar period, semantically "since the start of the current
<calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#calendar_period MonitoringSlo#calendar_period}
  */
  readonly calendarPeriod?: string;
  /**
  * Name used for UI elements listing this SLO.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#display_name MonitoringSlo#display_name}
  */
  readonly displayName?: string;
  /**
  * The fraction of service that must be good in order for this objective
to be met. 0 < goal <= 0.999
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#goal MonitoringSlo#goal}
  */
  readonly goal: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#project MonitoringSlo#project}
  */
  readonly project?: string;
  /**
  * A rolling time period, semantically "in the past X days".
Must be between 1 to 30 days, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#rolling_period_days MonitoringSlo#rolling_period_days}
  */
  readonly rollingPeriodDays?: number;
  /**
  * ID of the service to which this SLO belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#service MonitoringSlo#service}
  */
  readonly service: string;
  /**
  * The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#slo_id MonitoringSlo#slo_id}
  */
  readonly sloId?: string;
  /**
  * basic_sli block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#basic_sli MonitoringSlo#basic_sli}
  */
  readonly basicSli?: MonitoringSloBasicSli[];
  /**
  * request_based_sli block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#request_based_sli MonitoringSlo#request_based_sli}
  */
  readonly requestBasedSli?: MonitoringSloRequestBasedSli[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#timeouts MonitoringSlo#timeouts}
  */
  readonly timeouts?: MonitoringSloTimeouts;
  /**
  * windows_based_sli block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#windows_based_sli MonitoringSlo#windows_based_sli}
  */
  readonly windowsBasedSli?: MonitoringSloWindowsBasedSli[];
}
export interface MonitoringSloBasicSliAvailability {
  /**
  * Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#enabled MonitoringSlo#enabled}
  */
  readonly enabled?: boolean;
}

function monitoringSloBasicSliAvailabilityToTerraform(struct?: MonitoringSloBasicSliAvailability): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface MonitoringSloBasicSliLatency {
  /**
  * A duration string, e.g. 10s.
Good service is defined to be the count of requests made to
this service that return in no more than threshold.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#threshold MonitoringSlo#threshold}
  */
  readonly threshold: string;
}

function monitoringSloBasicSliLatencyToTerraform(struct?: MonitoringSloBasicSliLatency): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}

export interface MonitoringSloBasicSli {
  /**
  * An optional set of locations to which this SLI is relevant.
Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#location MonitoringSlo#location}
  */
  readonly location?: string[];
  /**
  * An optional set of RPCs to which this SLI is relevant.
Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#method MonitoringSlo#method}
  */
  readonly method?: string[];
  /**
  * The set of API versions to which this SLI is relevant.
Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#version MonitoringSlo#version}
  */
  readonly version?: string[];
  /**
  * availability block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#availability MonitoringSlo#availability}
  */
  readonly availability?: MonitoringSloBasicSliAvailability[];
  /**
  * latency block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#latency MonitoringSlo#latency}
  */
  readonly latency?: MonitoringSloBasicSliLatency[];
}

function monitoringSloBasicSliToTerraform(struct?: MonitoringSloBasicSli): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    location: cdktf.listMapper(cdktf.stringToTerraform)(struct!.location),
    method: cdktf.listMapper(cdktf.stringToTerraform)(struct!.method),
    version: cdktf.listMapper(cdktf.stringToTerraform)(struct!.version),
    availability: cdktf.listMapper(monitoringSloBasicSliAvailabilityToTerraform)(struct!.availability),
    latency: cdktf.listMapper(monitoringSloBasicSliLatencyToTerraform)(struct!.latency),
  }
}

export interface MonitoringSloRequestBasedSliDistributionCutRange {
  /**
  * max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#max MonitoringSlo#max}
  */
  readonly max?: number;
  /**
  * Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#min MonitoringSlo#min}
  */
  readonly min?: number;
}

function monitoringSloRequestBasedSliDistributionCutRangeToTerraform(struct?: MonitoringSloRequestBasedSliDistributionCutRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface MonitoringSloRequestBasedSliDistributionCut {
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#distribution_filter MonitoringSlo#distribution_filter}
  */
  readonly distributionFilter: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#range MonitoringSlo#range}
  */
  readonly range: MonitoringSloRequestBasedSliDistributionCutRange[];
}

function monitoringSloRequestBasedSliDistributionCutToTerraform(struct?: MonitoringSloRequestBasedSliDistributionCut): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    distribution_filter: cdktf.stringToTerraform(struct!.distributionFilter),
    range: cdktf.listMapper(monitoringSloRequestBasedSliDistributionCutRangeToTerraform)(struct!.range),
  }
}

export interface MonitoringSloRequestBasedSliGoodTotalRatio {
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying bad service provided, either demanded service that
was not provided or demanded service that was of inadequate
quality.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#bad_service_filter MonitoringSlo#bad_service_filter}
  */
  readonly badServiceFilter?: string;
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying good service provided.
Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#good_service_filter MonitoringSlo#good_service_filter}
  */
  readonly goodServiceFilter?: string;
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying total demanded service.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#total_service_filter MonitoringSlo#total_service_filter}
  */
  readonly totalServiceFilter?: string;
}

function monitoringSloRequestBasedSliGoodTotalRatioToTerraform(struct?: MonitoringSloRequestBasedSliGoodTotalRatio): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bad_service_filter: cdktf.stringToTerraform(struct!.badServiceFilter),
    good_service_filter: cdktf.stringToTerraform(struct!.goodServiceFilter),
    total_service_filter: cdktf.stringToTerraform(struct!.totalServiceFilter),
  }
}

export interface MonitoringSloRequestBasedSli {
  /**
  * distribution_cut block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#distribution_cut MonitoringSlo#distribution_cut}
  */
  readonly distributionCut?: MonitoringSloRequestBasedSliDistributionCut[];
  /**
  * good_total_ratio block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#good_total_ratio MonitoringSlo#good_total_ratio}
  */
  readonly goodTotalRatio?: MonitoringSloRequestBasedSliGoodTotalRatio[];
}

function monitoringSloRequestBasedSliToTerraform(struct?: MonitoringSloRequestBasedSli): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    distribution_cut: cdktf.listMapper(monitoringSloRequestBasedSliDistributionCutToTerraform)(struct!.distributionCut),
    good_total_ratio: cdktf.listMapper(monitoringSloRequestBasedSliGoodTotalRatioToTerraform)(struct!.goodTotalRatio),
  }
}

export interface MonitoringSloTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#create MonitoringSlo#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#delete MonitoringSlo#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#update MonitoringSlo#update}
  */
  readonly update?: string;
}

function monitoringSloTimeoutsToTerraform(struct?: MonitoringSloTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability {
  /**
  * Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#enabled MonitoringSlo#enabled}
  */
  readonly enabled?: boolean;
}

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency {
  /**
  * A duration string, e.g. 10s.
Good service is defined to be the count of requests made to
this service that return in no more than threshold.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#threshold MonitoringSlo#threshold}
  */
  readonly threshold: string;
}

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}

export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance {
  /**
  * An optional set of locations to which this SLI is relevant.
Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#location MonitoringSlo#location}
  */
  readonly location?: string[];
  /**
  * An optional set of RPCs to which this SLI is relevant.
Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#method MonitoringSlo#method}
  */
  readonly method?: string[];
  /**
  * The set of API versions to which this SLI is relevant.
Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#version MonitoringSlo#version}
  */
  readonly version?: string[];
  /**
  * availability block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#availability MonitoringSlo#availability}
  */
  readonly availability?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability[];
  /**
  * latency block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#latency MonitoringSlo#latency}
  */
  readonly latency?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency[];
}

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    location: cdktf.listMapper(cdktf.stringToTerraform)(struct!.location),
    method: cdktf.listMapper(cdktf.stringToTerraform)(struct!.method),
    version: cdktf.listMapper(cdktf.stringToTerraform)(struct!.version),
    availability: cdktf.listMapper(monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityToTerraform)(struct!.availability),
    latency: cdktf.listMapper(monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyToTerraform)(struct!.latency),
  }
}

export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange {
  /**
  * max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#max MonitoringSlo#max}
  */
  readonly max?: number;
  /**
  * Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#min MonitoringSlo#min}
  */
  readonly min?: number;
}

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut {
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#distribution_filter MonitoringSlo#distribution_filter}
  */
  readonly distributionFilter: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#range MonitoringSlo#range}
  */
  readonly range: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange[];
}

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    distribution_filter: cdktf.stringToTerraform(struct!.distributionFilter),
    range: cdktf.listMapper(monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeToTerraform)(struct!.range),
  }
}

export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio {
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying bad service provided, either demanded service that
was not provided or demanded service that was of inadequate
quality. Exactly two of
good, bad, or total service filter must be defined (where
good + bad = total is assumed)

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#bad_service_filter MonitoringSlo#bad_service_filter}
  */
  readonly badServiceFilter?: string;
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying good service provided. Exactly two of
good, bad, or total service filter must be defined (where
good + bad = total is assumed)

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#good_service_filter MonitoringSlo#good_service_filter}
  */
  readonly goodServiceFilter?: string;
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying total demanded service. Exactly two of
good, bad, or total service filter must be defined (where
good + bad = total is assumed)

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#total_service_filter MonitoringSlo#total_service_filter}
  */
  readonly totalServiceFilter?: string;
}

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bad_service_filter: cdktf.stringToTerraform(struct!.badServiceFilter),
    good_service_filter: cdktf.stringToTerraform(struct!.goodServiceFilter),
    total_service_filter: cdktf.stringToTerraform(struct!.totalServiceFilter),
  }
}

export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance {
  /**
  * distribution_cut block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#distribution_cut MonitoringSlo#distribution_cut}
  */
  readonly distributionCut?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut[];
  /**
  * good_total_ratio block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#good_total_ratio MonitoringSlo#good_total_ratio}
  */
  readonly goodTotalRatio?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio[];
}

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    distribution_cut: cdktf.listMapper(monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutToTerraform)(struct!.distributionCut),
    good_total_ratio: cdktf.listMapper(monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioToTerraform)(struct!.goodTotalRatio),
  }
}

export interface MonitoringSloWindowsBasedSliGoodTotalRatioThreshold {
  /**
  * If window performance >= threshold, the window is counted
as good.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#threshold MonitoringSlo#threshold}
  */
  readonly threshold?: number;
  /**
  * basic_sli_performance block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#basic_sli_performance MonitoringSlo#basic_sli_performance}
  */
  readonly basicSliPerformance?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance[];
  /**
  * performance block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#performance MonitoringSlo#performance}
  */
  readonly performance?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance[];
}

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThreshold): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    basic_sli_performance: cdktf.listMapper(monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceToTerraform)(struct!.basicSliPerformance),
    performance: cdktf.listMapper(monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceToTerraform)(struct!.performance),
  }
}

export interface MonitoringSloWindowsBasedSliMetricMeanInRangeRange {
  /**
  * max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#max MonitoringSlo#max}
  */
  readonly max?: number;
  /**
  * Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#min MonitoringSlo#min}
  */
  readonly min?: number;
}

function monitoringSloWindowsBasedSliMetricMeanInRangeRangeToTerraform(struct?: MonitoringSloWindowsBasedSliMetricMeanInRangeRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface MonitoringSloWindowsBasedSliMetricMeanInRange {
  /**
  * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
specifying the TimeSeries to use for evaluating window
The provided TimeSeries must have ValueType = INT64 or
ValueType = DOUBLE and MetricKind = GAUGE. Mean value 'X'
should satisfy 'range.min <= X <= range.max'
under good service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#time_series MonitoringSlo#time_series}
  */
  readonly timeSeries: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#range MonitoringSlo#range}
  */
  readonly range: MonitoringSloWindowsBasedSliMetricMeanInRangeRange[];
}

function monitoringSloWindowsBasedSliMetricMeanInRangeToTerraform(struct?: MonitoringSloWindowsBasedSliMetricMeanInRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    time_series: cdktf.stringToTerraform(struct!.timeSeries),
    range: cdktf.listMapper(monitoringSloWindowsBasedSliMetricMeanInRangeRangeToTerraform)(struct!.range),
  }
}

export interface MonitoringSloWindowsBasedSliMetricSumInRangeRange {
  /**
  * max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#max MonitoringSlo#max}
  */
  readonly max?: number;
  /**
  * Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#min MonitoringSlo#min}
  */
  readonly min?: number;
}

function monitoringSloWindowsBasedSliMetricSumInRangeRangeToTerraform(struct?: MonitoringSloWindowsBasedSliMetricSumInRangeRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface MonitoringSloWindowsBasedSliMetricSumInRange {
  /**
  * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
specifying the TimeSeries to use for evaluating window
quality. The provided TimeSeries must have
ValueType = INT64 or ValueType = DOUBLE and
MetricKind = GAUGE.

Summed value 'X' should satisfy
'range.min <= X <= range.max' for a good window.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#time_series MonitoringSlo#time_series}
  */
  readonly timeSeries: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#range MonitoringSlo#range}
  */
  readonly range: MonitoringSloWindowsBasedSliMetricSumInRangeRange[];
}

function monitoringSloWindowsBasedSliMetricSumInRangeToTerraform(struct?: MonitoringSloWindowsBasedSliMetricSumInRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    time_series: cdktf.stringToTerraform(struct!.timeSeries),
    range: cdktf.listMapper(monitoringSloWindowsBasedSliMetricSumInRangeRangeToTerraform)(struct!.range),
  }
}

export interface MonitoringSloWindowsBasedSli {
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
with ValueType = BOOL. The window is good if any true values
appear in the window. One of 'good_bad_metric_filter',
'good_total_ratio_threshold', 'metric_mean_in_range',
'metric_sum_in_range' must be set for 'windows_based_sli'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#good_bad_metric_filter MonitoringSlo#good_bad_metric_filter}
  */
  readonly goodBadMetricFilter?: string;
  /**
  * Duration over which window quality is evaluated, given as a
duration string "{X}s" representing X seconds. Must be an
integer fraction of a day and at least 60s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#window_period MonitoringSlo#window_period}
  */
  readonly windowPeriod?: string;
  /**
  * good_total_ratio_threshold block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#good_total_ratio_threshold MonitoringSlo#good_total_ratio_threshold}
  */
  readonly goodTotalRatioThreshold?: MonitoringSloWindowsBasedSliGoodTotalRatioThreshold[];
  /**
  * metric_mean_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#metric_mean_in_range MonitoringSlo#metric_mean_in_range}
  */
  readonly metricMeanInRange?: MonitoringSloWindowsBasedSliMetricMeanInRange[];
  /**
  * metric_sum_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#metric_sum_in_range MonitoringSlo#metric_sum_in_range}
  */
  readonly metricSumInRange?: MonitoringSloWindowsBasedSliMetricSumInRange[];
}

function monitoringSloWindowsBasedSliToTerraform(struct?: MonitoringSloWindowsBasedSli): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    good_bad_metric_filter: cdktf.stringToTerraform(struct!.goodBadMetricFilter),
    window_period: cdktf.stringToTerraform(struct!.windowPeriod),
    good_total_ratio_threshold: cdktf.listMapper(monitoringSloWindowsBasedSliGoodTotalRatioThresholdToTerraform)(struct!.goodTotalRatioThreshold),
    metric_mean_in_range: cdktf.listMapper(monitoringSloWindowsBasedSliMetricMeanInRangeToTerraform)(struct!.metricMeanInRange),
    metric_sum_in_range: cdktf.listMapper(monitoringSloWindowsBasedSliMetricSumInRangeToTerraform)(struct!.metricSumInRange),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html google_monitoring_slo}
*/
export class MonitoringSlo extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html google_monitoring_slo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringSloConfig
  */
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
    return this.getStringAttribute('calendar_period');
  }
  public set calendarPeriod(value: string ) {
    this._calendarPeriod = value;
  }
  public resetCalendarPeriod() {
    this._calendarPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarPeriodInput() {
    return this._calendarPeriod
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

  // goal - computed: false, optional: false, required: true
  private _goal: number;
  public get goal() {
    return this.getNumberAttribute('goal');
  }
  public set goal(value: number) {
    this._goal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goalInput() {
    return this._goal
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
    return this._project
  }

  // rolling_period_days - computed: false, optional: true, required: false
  private _rollingPeriodDays?: number;
  public get rollingPeriodDays() {
    return this.getNumberAttribute('rolling_period_days');
  }
  public set rollingPeriodDays(value: number ) {
    this._rollingPeriodDays = value;
  }
  public resetRollingPeriodDays() {
    this._rollingPeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingPeriodDaysInput() {
    return this._rollingPeriodDays
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // slo_id - computed: true, optional: true, required: false
  private _sloId?: string;
  public get sloId() {
    return this.getStringAttribute('slo_id');
  }
  public set sloId(value: string) {
    this._sloId = value;
  }
  public resetSloId() {
    this._sloId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloIdInput() {
    return this._sloId
  }

  // basic_sli - computed: false, optional: true, required: false
  private _basicSli?: MonitoringSloBasicSli[];
  public get basicSli() {
    return this.interpolationForAttribute('basic_sli') as any;
  }
  public set basicSli(value: MonitoringSloBasicSli[] ) {
    this._basicSli = value;
  }
  public resetBasicSli() {
    this._basicSli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicSliInput() {
    return this._basicSli
  }

  // request_based_sli - computed: false, optional: true, required: false
  private _requestBasedSli?: MonitoringSloRequestBasedSli[];
  public get requestBasedSli() {
    return this.interpolationForAttribute('request_based_sli') as any;
  }
  public set requestBasedSli(value: MonitoringSloRequestBasedSli[] ) {
    this._requestBasedSli = value;
  }
  public resetRequestBasedSli() {
    this._requestBasedSli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBasedSliInput() {
    return this._requestBasedSli
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitoringSloTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitoringSloTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // windows_based_sli - computed: false, optional: true, required: false
  private _windowsBasedSli?: MonitoringSloWindowsBasedSli[];
  public get windowsBasedSli() {
    return this.interpolationForAttribute('windows_based_sli') as any;
  }
  public set windowsBasedSli(value: MonitoringSloWindowsBasedSli[] ) {
    this._windowsBasedSli = value;
  }
  public resetWindowsBasedSli() {
    this._windowsBasedSli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsBasedSliInput() {
    return this._windowsBasedSli
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      calendar_period: cdktf.stringToTerraform(this._calendarPeriod),
      display_name: cdktf.stringToTerraform(this._displayName),
      goal: cdktf.numberToTerraform(this._goal),
      project: cdktf.stringToTerraform(this._project),
      rolling_period_days: cdktf.numberToTerraform(this._rollingPeriodDays),
      service: cdktf.stringToTerraform(this._service),
      slo_id: cdktf.stringToTerraform(this._sloId),
      basic_sli: cdktf.listMapper(monitoringSloBasicSliToTerraform)(this._basicSli),
      request_based_sli: cdktf.listMapper(monitoringSloRequestBasedSliToTerraform)(this._requestBasedSli),
      timeouts: monitoringSloTimeoutsToTerraform(this._timeouts),
      windows_based_sli: cdktf.listMapper(monitoringSloWindowsBasedSliToTerraform)(this._windowsBasedSli),
    };
  }
}
