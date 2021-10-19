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
  readonly basicSli?: MonitoringSloBasicSli;
  /**
  * request_based_sli block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#request_based_sli MonitoringSlo#request_based_sli}
  */
  readonly requestBasedSli?: MonitoringSloRequestBasedSli;
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
  readonly windowsBasedSli?: MonitoringSloWindowsBasedSli;
}
export interface MonitoringSloBasicSliAvailability {
  /**
  * Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#enabled MonitoringSlo#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function monitoringSloBasicSliAvailabilityToTerraform(struct?: MonitoringSloBasicSliAvailabilityOutputReference | MonitoringSloBasicSliAvailability): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class MonitoringSloBasicSliAvailabilityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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

function monitoringSloBasicSliLatencyToTerraform(struct?: MonitoringSloBasicSliLatencyOutputReference | MonitoringSloBasicSliLatency): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}

export class MonitoringSloBasicSliLatencyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold
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
  readonly availability?: MonitoringSloBasicSliAvailability;
  /**
  * latency block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#latency MonitoringSlo#latency}
  */
  readonly latency?: MonitoringSloBasicSliLatency;
}

function monitoringSloBasicSliToTerraform(struct?: MonitoringSloBasicSliOutputReference | MonitoringSloBasicSli): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.listMapper(cdktf.stringToTerraform)(struct!.location),
    method: cdktf.listMapper(cdktf.stringToTerraform)(struct!.method),
    version: cdktf.listMapper(cdktf.stringToTerraform)(struct!.version),
    availability: monitoringSloBasicSliAvailabilityToTerraform(struct!.availability),
    latency: monitoringSloBasicSliLatencyToTerraform(struct!.latency),
  }
}

export class MonitoringSloBasicSliOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // location - computed: false, optional: true, required: false
  private _location?: string[] | undefined; 
  public get location() {
    return this.getListAttribute('location');
  }
  public set location(value: string[] | undefined) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // method - computed: false, optional: true, required: false
  private _method?: string[] | undefined; 
  public get method() {
    return this.getListAttribute('method');
  }
  public set method(value: string[] | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // version - computed: false, optional: true, required: false
  private _version?: string[] | undefined; 
  public get version() {
    return this.getListAttribute('version');
  }
  public set version(value: string[] | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: MonitoringSloBasicSliAvailability | undefined; 
  private __availabilityOutput = new MonitoringSloBasicSliAvailabilityOutputReference(this as any, "availability", true);
  public get availability() {
    return this.__availabilityOutput;
  }
  public putAvailability(value: MonitoringSloBasicSliAvailability | undefined) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability
  }

  // latency - computed: false, optional: true, required: false
  private _latency?: MonitoringSloBasicSliLatency | undefined; 
  private __latencyOutput = new MonitoringSloBasicSliLatencyOutputReference(this as any, "latency", true);
  public get latency() {
    return this.__latencyOutput;
  }
  public putLatency(value: MonitoringSloBasicSliLatency | undefined) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency
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

function monitoringSloRequestBasedSliDistributionCutRangeToTerraform(struct?: MonitoringSloRequestBasedSliDistributionCutRangeOutputReference | MonitoringSloRequestBasedSliDistributionCutRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class MonitoringSloRequestBasedSliDistributionCutRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max - computed: false, optional: true, required: false
  private _max?: number | undefined; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number | undefined) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max
  }

  // min - computed: false, optional: true, required: false
  private _min?: number | undefined; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number | undefined) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min
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
  readonly range: MonitoringSloRequestBasedSliDistributionCutRange;
}

function monitoringSloRequestBasedSliDistributionCutToTerraform(struct?: MonitoringSloRequestBasedSliDistributionCutOutputReference | MonitoringSloRequestBasedSliDistributionCut): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_filter: cdktf.stringToTerraform(struct!.distributionFilter),
    range: monitoringSloRequestBasedSliDistributionCutRangeToTerraform(struct!.range),
  }
}

export class MonitoringSloRequestBasedSliDistributionCutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // distribution_filter - computed: false, optional: false, required: true
  private _distributionFilter?: string; 
  public get distributionFilter() {
    return this.getStringAttribute('distribution_filter');
  }
  public set distributionFilter(value: string) {
    this._distributionFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionFilterInput() {
    return this._distributionFilter
  }

  // range - computed: false, optional: false, required: true
  private _range?: MonitoringSloRequestBasedSliDistributionCutRange; 
  private __rangeOutput = new MonitoringSloRequestBasedSliDistributionCutRangeOutputReference(this as any, "range", true);
  public get range() {
    return this.__rangeOutput;
  }
  public putRange(value: MonitoringSloRequestBasedSliDistributionCutRange) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range
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

function monitoringSloRequestBasedSliGoodTotalRatioToTerraform(struct?: MonitoringSloRequestBasedSliGoodTotalRatioOutputReference | MonitoringSloRequestBasedSliGoodTotalRatio): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_service_filter: cdktf.stringToTerraform(struct!.badServiceFilter),
    good_service_filter: cdktf.stringToTerraform(struct!.goodServiceFilter),
    total_service_filter: cdktf.stringToTerraform(struct!.totalServiceFilter),
  }
}

export class MonitoringSloRequestBasedSliGoodTotalRatioOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // bad_service_filter - computed: false, optional: true, required: false
  private _badServiceFilter?: string | undefined; 
  public get badServiceFilter() {
    return this.getStringAttribute('bad_service_filter');
  }
  public set badServiceFilter(value: string | undefined) {
    this._badServiceFilter = value;
  }
  public resetBadServiceFilter() {
    this._badServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badServiceFilterInput() {
    return this._badServiceFilter
  }

  // good_service_filter - computed: false, optional: true, required: false
  private _goodServiceFilter?: string | undefined; 
  public get goodServiceFilter() {
    return this.getStringAttribute('good_service_filter');
  }
  public set goodServiceFilter(value: string | undefined) {
    this._goodServiceFilter = value;
  }
  public resetGoodServiceFilter() {
    this._goodServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodServiceFilterInput() {
    return this._goodServiceFilter
  }

  // total_service_filter - computed: false, optional: true, required: false
  private _totalServiceFilter?: string | undefined; 
  public get totalServiceFilter() {
    return this.getStringAttribute('total_service_filter');
  }
  public set totalServiceFilter(value: string | undefined) {
    this._totalServiceFilter = value;
  }
  public resetTotalServiceFilter() {
    this._totalServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServiceFilterInput() {
    return this._totalServiceFilter
  }
}
export interface MonitoringSloRequestBasedSli {
  /**
  * distribution_cut block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#distribution_cut MonitoringSlo#distribution_cut}
  */
  readonly distributionCut?: MonitoringSloRequestBasedSliDistributionCut;
  /**
  * good_total_ratio block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#good_total_ratio MonitoringSlo#good_total_ratio}
  */
  readonly goodTotalRatio?: MonitoringSloRequestBasedSliGoodTotalRatio;
}

function monitoringSloRequestBasedSliToTerraform(struct?: MonitoringSloRequestBasedSliOutputReference | MonitoringSloRequestBasedSli): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_cut: monitoringSloRequestBasedSliDistributionCutToTerraform(struct!.distributionCut),
    good_total_ratio: monitoringSloRequestBasedSliGoodTotalRatioToTerraform(struct!.goodTotalRatio),
  }
}

export class MonitoringSloRequestBasedSliOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // distribution_cut - computed: false, optional: true, required: false
  private _distributionCut?: MonitoringSloRequestBasedSliDistributionCut | undefined; 
  private __distributionCutOutput = new MonitoringSloRequestBasedSliDistributionCutOutputReference(this as any, "distribution_cut", true);
  public get distributionCut() {
    return this.__distributionCutOutput;
  }
  public putDistributionCut(value: MonitoringSloRequestBasedSliDistributionCut | undefined) {
    this._distributionCut = value;
  }
  public resetDistributionCut() {
    this._distributionCut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionCutInput() {
    return this._distributionCut
  }

  // good_total_ratio - computed: false, optional: true, required: false
  private _goodTotalRatio?: MonitoringSloRequestBasedSliGoodTotalRatio | undefined; 
  private __goodTotalRatioOutput = new MonitoringSloRequestBasedSliGoodTotalRatioOutputReference(this as any, "good_total_ratio", true);
  public get goodTotalRatio() {
    return this.__goodTotalRatioOutput;
  }
  public putGoodTotalRatio(value: MonitoringSloRequestBasedSliGoodTotalRatio | undefined) {
    this._goodTotalRatio = value;
  }
  public resetGoodTotalRatio() {
    this._goodTotalRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodTotalRatioInput() {
    return this._goodTotalRatio
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

function monitoringSloTimeoutsToTerraform(struct?: MonitoringSloTimeoutsOutputReference | MonitoringSloTimeouts): any {
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

export class MonitoringSloTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability {
  /**
  * Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#enabled MonitoringSlo#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}

export class MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold
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
  readonly availability?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability;
  /**
  * latency block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#latency MonitoringSlo#latency}
  */
  readonly latency?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency;
}

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.listMapper(cdktf.stringToTerraform)(struct!.location),
    method: cdktf.listMapper(cdktf.stringToTerraform)(struct!.method),
    version: cdktf.listMapper(cdktf.stringToTerraform)(struct!.version),
    availability: monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityToTerraform(struct!.availability),
    latency: monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyToTerraform(struct!.latency),
  }
}

export class MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // location - computed: false, optional: true, required: false
  private _location?: string[] | undefined; 
  public get location() {
    return this.getListAttribute('location');
  }
  public set location(value: string[] | undefined) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // method - computed: false, optional: true, required: false
  private _method?: string[] | undefined; 
  public get method() {
    return this.getListAttribute('method');
  }
  public set method(value: string[] | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // version - computed: false, optional: true, required: false
  private _version?: string[] | undefined; 
  public get version() {
    return this.getListAttribute('version');
  }
  public set version(value: string[] | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability | undefined; 
  private __availabilityOutput = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference(this as any, "availability", true);
  public get availability() {
    return this.__availabilityOutput;
  }
  public putAvailability(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability | undefined) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability
  }

  // latency - computed: false, optional: true, required: false
  private _latency?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency | undefined; 
  private __latencyOutput = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference(this as any, "latency", true);
  public get latency() {
    return this.__latencyOutput;
  }
  public putLatency(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency | undefined) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency
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

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max - computed: false, optional: true, required: false
  private _max?: number | undefined; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number | undefined) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max
  }

  // min - computed: false, optional: true, required: false
  private _min?: number | undefined; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number | undefined) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min
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
  readonly range: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange;
}

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_filter: cdktf.stringToTerraform(struct!.distributionFilter),
    range: monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeToTerraform(struct!.range),
  }
}

export class MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // distribution_filter - computed: false, optional: false, required: true
  private _distributionFilter?: string; 
  public get distributionFilter() {
    return this.getStringAttribute('distribution_filter');
  }
  public set distributionFilter(value: string) {
    this._distributionFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionFilterInput() {
    return this._distributionFilter
  }

  // range - computed: false, optional: false, required: true
  private _range?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange; 
  private __rangeOutput = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference(this as any, "range", true);
  public get range() {
    return this.__rangeOutput;
  }
  public putRange(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range
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

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_service_filter: cdktf.stringToTerraform(struct!.badServiceFilter),
    good_service_filter: cdktf.stringToTerraform(struct!.goodServiceFilter),
    total_service_filter: cdktf.stringToTerraform(struct!.totalServiceFilter),
  }
}

export class MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // bad_service_filter - computed: false, optional: true, required: false
  private _badServiceFilter?: string | undefined; 
  public get badServiceFilter() {
    return this.getStringAttribute('bad_service_filter');
  }
  public set badServiceFilter(value: string | undefined) {
    this._badServiceFilter = value;
  }
  public resetBadServiceFilter() {
    this._badServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badServiceFilterInput() {
    return this._badServiceFilter
  }

  // good_service_filter - computed: false, optional: true, required: false
  private _goodServiceFilter?: string | undefined; 
  public get goodServiceFilter() {
    return this.getStringAttribute('good_service_filter');
  }
  public set goodServiceFilter(value: string | undefined) {
    this._goodServiceFilter = value;
  }
  public resetGoodServiceFilter() {
    this._goodServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodServiceFilterInput() {
    return this._goodServiceFilter
  }

  // total_service_filter - computed: false, optional: true, required: false
  private _totalServiceFilter?: string | undefined; 
  public get totalServiceFilter() {
    return this.getStringAttribute('total_service_filter');
  }
  public set totalServiceFilter(value: string | undefined) {
    this._totalServiceFilter = value;
  }
  public resetTotalServiceFilter() {
    this._totalServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServiceFilterInput() {
    return this._totalServiceFilter
  }
}
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance {
  /**
  * distribution_cut block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#distribution_cut MonitoringSlo#distribution_cut}
  */
  readonly distributionCut?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut;
  /**
  * good_total_ratio block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#good_total_ratio MonitoringSlo#good_total_ratio}
  */
  readonly goodTotalRatio?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio;
}

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_cut: monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutToTerraform(struct!.distributionCut),
    good_total_ratio: monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioToTerraform(struct!.goodTotalRatio),
  }
}

export class MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // distribution_cut - computed: false, optional: true, required: false
  private _distributionCut?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut | undefined; 
  private __distributionCutOutput = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference(this as any, "distribution_cut", true);
  public get distributionCut() {
    return this.__distributionCutOutput;
  }
  public putDistributionCut(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut | undefined) {
    this._distributionCut = value;
  }
  public resetDistributionCut() {
    this._distributionCut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionCutInput() {
    return this._distributionCut
  }

  // good_total_ratio - computed: false, optional: true, required: false
  private _goodTotalRatio?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio | undefined; 
  private __goodTotalRatioOutput = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference(this as any, "good_total_ratio", true);
  public get goodTotalRatio() {
    return this.__goodTotalRatioOutput;
  }
  public putGoodTotalRatio(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio | undefined) {
    this._goodTotalRatio = value;
  }
  public resetGoodTotalRatio() {
    this._goodTotalRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodTotalRatioInput() {
    return this._goodTotalRatio
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
  readonly basicSliPerformance?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance;
  /**
  * performance block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#performance MonitoringSlo#performance}
  */
  readonly performance?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance;
}

function monitoringSloWindowsBasedSliGoodTotalRatioThresholdToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThreshold): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    basic_sli_performance: monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceToTerraform(struct!.basicSliPerformance),
    performance: monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceToTerraform(struct!.performance),
  }
}

export class MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number | undefined; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number | undefined) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold
  }

  // basic_sli_performance - computed: false, optional: true, required: false
  private _basicSliPerformance?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance | undefined; 
  private __basicSliPerformanceOutput = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference(this as any, "basic_sli_performance", true);
  public get basicSliPerformance() {
    return this.__basicSliPerformanceOutput;
  }
  public putBasicSliPerformance(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance | undefined) {
    this._basicSliPerformance = value;
  }
  public resetBasicSliPerformance() {
    this._basicSliPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicSliPerformanceInput() {
    return this._basicSliPerformance
  }

  // performance - computed: false, optional: true, required: false
  private _performance?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance | undefined; 
  private __performanceOutput = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference(this as any, "performance", true);
  public get performance() {
    return this.__performanceOutput;
  }
  public putPerformance(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance | undefined) {
    this._performance = value;
  }
  public resetPerformance() {
    this._performance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInput() {
    return this._performance
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

function monitoringSloWindowsBasedSliMetricMeanInRangeRangeToTerraform(struct?: MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference | MonitoringSloWindowsBasedSliMetricMeanInRangeRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max - computed: false, optional: true, required: false
  private _max?: number | undefined; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number | undefined) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max
  }

  // min - computed: false, optional: true, required: false
  private _min?: number | undefined; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number | undefined) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min
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
  readonly range: MonitoringSloWindowsBasedSliMetricMeanInRangeRange;
}

function monitoringSloWindowsBasedSliMetricMeanInRangeToTerraform(struct?: MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference | MonitoringSloWindowsBasedSliMetricMeanInRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_series: cdktf.stringToTerraform(struct!.timeSeries),
    range: monitoringSloWindowsBasedSliMetricMeanInRangeRangeToTerraform(struct!.range),
  }
}

export class MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // time_series - computed: false, optional: false, required: true
  private _timeSeries?: string; 
  public get timeSeries() {
    return this.getStringAttribute('time_series');
  }
  public set timeSeries(value: string) {
    this._timeSeries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesInput() {
    return this._timeSeries
  }

  // range - computed: false, optional: false, required: true
  private _range?: MonitoringSloWindowsBasedSliMetricMeanInRangeRange; 
  private __rangeOutput = new MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference(this as any, "range", true);
  public get range() {
    return this.__rangeOutput;
  }
  public putRange(value: MonitoringSloWindowsBasedSliMetricMeanInRangeRange) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range
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

function monitoringSloWindowsBasedSliMetricSumInRangeRangeToTerraform(struct?: MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference | MonitoringSloWindowsBasedSliMetricSumInRangeRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max - computed: false, optional: true, required: false
  private _max?: number | undefined; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number | undefined) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max
  }

  // min - computed: false, optional: true, required: false
  private _min?: number | undefined; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number | undefined) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min
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
  readonly range: MonitoringSloWindowsBasedSliMetricSumInRangeRange;
}

function monitoringSloWindowsBasedSliMetricSumInRangeToTerraform(struct?: MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference | MonitoringSloWindowsBasedSliMetricSumInRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_series: cdktf.stringToTerraform(struct!.timeSeries),
    range: monitoringSloWindowsBasedSliMetricSumInRangeRangeToTerraform(struct!.range),
  }
}

export class MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // time_series - computed: false, optional: false, required: true
  private _timeSeries?: string; 
  public get timeSeries() {
    return this.getStringAttribute('time_series');
  }
  public set timeSeries(value: string) {
    this._timeSeries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesInput() {
    return this._timeSeries
  }

  // range - computed: false, optional: false, required: true
  private _range?: MonitoringSloWindowsBasedSliMetricSumInRangeRange; 
  private __rangeOutput = new MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference(this as any, "range", true);
  public get range() {
    return this.__rangeOutput;
  }
  public putRange(value: MonitoringSloWindowsBasedSliMetricSumInRangeRange) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range
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
  readonly goodTotalRatioThreshold?: MonitoringSloWindowsBasedSliGoodTotalRatioThreshold;
  /**
  * metric_mean_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#metric_mean_in_range MonitoringSlo#metric_mean_in_range}
  */
  readonly metricMeanInRange?: MonitoringSloWindowsBasedSliMetricMeanInRange;
  /**
  * metric_sum_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html#metric_sum_in_range MonitoringSlo#metric_sum_in_range}
  */
  readonly metricSumInRange?: MonitoringSloWindowsBasedSliMetricSumInRange;
}

function monitoringSloWindowsBasedSliToTerraform(struct?: MonitoringSloWindowsBasedSliOutputReference | MonitoringSloWindowsBasedSli): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    good_bad_metric_filter: cdktf.stringToTerraform(struct!.goodBadMetricFilter),
    window_period: cdktf.stringToTerraform(struct!.windowPeriod),
    good_total_ratio_threshold: monitoringSloWindowsBasedSliGoodTotalRatioThresholdToTerraform(struct!.goodTotalRatioThreshold),
    metric_mean_in_range: monitoringSloWindowsBasedSliMetricMeanInRangeToTerraform(struct!.metricMeanInRange),
    metric_sum_in_range: monitoringSloWindowsBasedSliMetricSumInRangeToTerraform(struct!.metricSumInRange),
  }
}

export class MonitoringSloWindowsBasedSliOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // good_bad_metric_filter - computed: false, optional: true, required: false
  private _goodBadMetricFilter?: string | undefined; 
  public get goodBadMetricFilter() {
    return this.getStringAttribute('good_bad_metric_filter');
  }
  public set goodBadMetricFilter(value: string | undefined) {
    this._goodBadMetricFilter = value;
  }
  public resetGoodBadMetricFilter() {
    this._goodBadMetricFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodBadMetricFilterInput() {
    return this._goodBadMetricFilter
  }

  // window_period - computed: false, optional: true, required: false
  private _windowPeriod?: string | undefined; 
  public get windowPeriod() {
    return this.getStringAttribute('window_period');
  }
  public set windowPeriod(value: string | undefined) {
    this._windowPeriod = value;
  }
  public resetWindowPeriod() {
    this._windowPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowPeriodInput() {
    return this._windowPeriod
  }

  // good_total_ratio_threshold - computed: false, optional: true, required: false
  private _goodTotalRatioThreshold?: MonitoringSloWindowsBasedSliGoodTotalRatioThreshold | undefined; 
  private __goodTotalRatioThresholdOutput = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference(this as any, "good_total_ratio_threshold", true);
  public get goodTotalRatioThreshold() {
    return this.__goodTotalRatioThresholdOutput;
  }
  public putGoodTotalRatioThreshold(value: MonitoringSloWindowsBasedSliGoodTotalRatioThreshold | undefined) {
    this._goodTotalRatioThreshold = value;
  }
  public resetGoodTotalRatioThreshold() {
    this._goodTotalRatioThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodTotalRatioThresholdInput() {
    return this._goodTotalRatioThreshold
  }

  // metric_mean_in_range - computed: false, optional: true, required: false
  private _metricMeanInRange?: MonitoringSloWindowsBasedSliMetricMeanInRange | undefined; 
  private __metricMeanInRangeOutput = new MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference(this as any, "metric_mean_in_range", true);
  public get metricMeanInRange() {
    return this.__metricMeanInRangeOutput;
  }
  public putMetricMeanInRange(value: MonitoringSloWindowsBasedSliMetricMeanInRange | undefined) {
    this._metricMeanInRange = value;
  }
  public resetMetricMeanInRange() {
    this._metricMeanInRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMeanInRangeInput() {
    return this._metricMeanInRange
  }

  // metric_sum_in_range - computed: false, optional: true, required: false
  private _metricSumInRange?: MonitoringSloWindowsBasedSliMetricSumInRange | undefined; 
  private __metricSumInRangeOutput = new MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference(this as any, "metric_sum_in_range", true);
  public get metricSumInRange() {
    return this.__metricSumInRangeOutput;
  }
  public putMetricSumInRange(value: MonitoringSloWindowsBasedSliMetricSumInRange | undefined) {
    this._metricSumInRange = value;
  }
  public resetMetricSumInRange() {
    this._metricSumInRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSumInRangeInput() {
    return this._metricSumInRange
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo.html google_monitoring_slo}
*/
export class MonitoringSlo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_monitoring_slo";

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
  private _calendarPeriod?: string | undefined; 
  public get calendarPeriod() {
    return this.getStringAttribute('calendar_period');
  }
  public set calendarPeriod(value: string | undefined) {
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

  // goal - computed: false, optional: false, required: true
  private _goal?: number; 
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
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
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
  private _rollingPeriodDays?: number | undefined; 
  public get rollingPeriodDays() {
    return this.getNumberAttribute('rolling_period_days');
  }
  public set rollingPeriodDays(value: number | undefined) {
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
  private _service?: string; 
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
  private _sloId?: string | undefined; 
  public get sloId() {
    return this.getStringAttribute('slo_id');
  }
  public set sloId(value: string | undefined) {
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
  private _basicSli?: MonitoringSloBasicSli | undefined; 
  private __basicSliOutput = new MonitoringSloBasicSliOutputReference(this as any, "basic_sli", true);
  public get basicSli() {
    return this.__basicSliOutput;
  }
  public putBasicSli(value: MonitoringSloBasicSli | undefined) {
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
  private _requestBasedSli?: MonitoringSloRequestBasedSli | undefined; 
  private __requestBasedSliOutput = new MonitoringSloRequestBasedSliOutputReference(this as any, "request_based_sli", true);
  public get requestBasedSli() {
    return this.__requestBasedSliOutput;
  }
  public putRequestBasedSli(value: MonitoringSloRequestBasedSli | undefined) {
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
  private _timeouts?: MonitoringSloTimeouts | undefined; 
  private __timeoutsOutput = new MonitoringSloTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MonitoringSloTimeouts | undefined) {
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
  private _windowsBasedSli?: MonitoringSloWindowsBasedSli | undefined; 
  private __windowsBasedSliOutput = new MonitoringSloWindowsBasedSliOutputReference(this as any, "windows_based_sli", true);
  public get windowsBasedSli() {
    return this.__windowsBasedSliOutput;
  }
  public putWindowsBasedSli(value: MonitoringSloWindowsBasedSli | undefined) {
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
      basic_sli: monitoringSloBasicSliToTerraform(this._basicSli),
      request_based_sli: monitoringSloRequestBasedSliToTerraform(this._requestBasedSli),
      timeouts: monitoringSloTimeoutsToTerraform(this._timeouts),
      windows_based_sli: monitoringSloWindowsBasedSliToTerraform(this._windowsBasedSli),
    };
  }
}
