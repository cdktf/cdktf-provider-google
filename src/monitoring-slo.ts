// https://www.terraform.io/docs/providers/google/r/monitoring_slo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringSloConfig extends cdktf.TerraformMetaArguments {
  /**
  * A calendar period, semantically "since the start of the current
<calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#calendar_period MonitoringSlo#calendar_period}
  */
  readonly calendarPeriod?: string;
  /**
  * Name used for UI elements listing this SLO.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#display_name MonitoringSlo#display_name}
  */
  readonly displayName?: string;
  /**
  * The fraction of service that must be good in order for this objective
to be met. 0 < goal <= 0.999
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#goal MonitoringSlo#goal}
  */
  readonly goal: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#id MonitoringSlo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#project MonitoringSlo#project}
  */
  readonly project?: string;
  /**
  * A rolling time period, semantically "in the past X days".
Must be between 1 to 30 days, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#rolling_period_days MonitoringSlo#rolling_period_days}
  */
  readonly rollingPeriodDays?: number;
  /**
  * ID of the service to which this SLO belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#service MonitoringSlo#service}
  */
  readonly service: string;
  /**
  * The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#slo_id MonitoringSlo#slo_id}
  */
  readonly sloId?: string;
  /**
  * This field is intended to be used for organizing and identifying the AlertPolicy
objects.The field can contain up to 64 entries. Each key and value is limited
to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values
can contain only lowercase letters, numerals, underscores, and dashes. Keys
must begin with a letter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#user_labels MonitoringSlo#user_labels}
  */
  readonly userLabels?: { [key: string]: string };
  /**
  * basic_sli block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#basic_sli MonitoringSlo#basic_sli}
  */
  readonly basicSli?: MonitoringSloBasicSli;
  /**
  * request_based_sli block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#request_based_sli MonitoringSlo#request_based_sli}
  */
  readonly requestBasedSli?: MonitoringSloRequestBasedSli;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#timeouts MonitoringSlo#timeouts}
  */
  readonly timeouts?: MonitoringSloTimeouts;
  /**
  * windows_based_sli block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#windows_based_sli MonitoringSlo#windows_based_sli}
  */
  readonly windowsBasedSli?: MonitoringSloWindowsBasedSli;
}
export interface MonitoringSloBasicSliAvailability {
  /**
  * Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#enabled MonitoringSlo#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function monitoringSloBasicSliAvailabilityToTerraform(struct?: MonitoringSloBasicSliAvailabilityOutputReference | MonitoringSloBasicSliAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class MonitoringSloBasicSliAvailabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloBasicSliAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloBasicSliAvailability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface MonitoringSloBasicSliLatency {
  /**
  * A duration string, e.g. 10s.
Good service is defined to be the count of requests made to
this service that return in no more than threshold.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#threshold MonitoringSlo#threshold}
  */
  readonly threshold: string;
}

export function monitoringSloBasicSliLatencyToTerraform(struct?: MonitoringSloBasicSliLatencyOutputReference | MonitoringSloBasicSliLatency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}

export class MonitoringSloBasicSliLatencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloBasicSliLatency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloBasicSliLatency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
    }
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
    return this._threshold;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#location MonitoringSlo#location}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#method MonitoringSlo#method}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#version MonitoringSlo#version}
  */
  readonly version?: string[];
  /**
  * availability block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#availability MonitoringSlo#availability}
  */
  readonly availability?: MonitoringSloBasicSliAvailability;
  /**
  * latency block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#latency MonitoringSlo#latency}
  */
  readonly latency?: MonitoringSloBasicSliLatency;
}

export function monitoringSloBasicSliToTerraform(struct?: MonitoringSloBasicSliOutputReference | MonitoringSloBasicSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.location),
    method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.method),
    version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.version),
    availability: monitoringSloBasicSliAvailabilityToTerraform(struct!.availability),
    latency: monitoringSloBasicSliLatencyToTerraform(struct!.latency),
  }
}

export class MonitoringSloBasicSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloBasicSli | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._availability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability?.internalValue;
    }
    if (this._latency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloBasicSli | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._method = undefined;
      this._version = undefined;
      this._availability.internalValue = undefined;
      this._latency.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._method = value.method;
      this._version = value.version;
      this._availability.internalValue = value.availability;
      this._latency.internalValue = value.latency;
    }
  }

  // location - computed: false, optional: true, required: false
  private _location?: string[]; 
  public get location() {
    return cdktf.Fn.tolist(this.getListAttribute('location'));
  }
  public set location(value: string[]) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string[]; 
  public get method() {
    return cdktf.Fn.tolist(this.getListAttribute('method'));
  }
  public set method(value: string[]) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string[]; 
  public get version() {
    return cdktf.Fn.tolist(this.getListAttribute('version'));
  }
  public set version(value: string[]) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // availability - computed: false, optional: true, required: false
  private _availability = new MonitoringSloBasicSliAvailabilityOutputReference(this, "availability");
  public get availability() {
    return this._availability;
  }
  public putAvailability(value: MonitoringSloBasicSliAvailability) {
    this._availability.internalValue = value;
  }
  public resetAvailability() {
    this._availability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability.internalValue;
  }

  // latency - computed: false, optional: true, required: false
  private _latency = new MonitoringSloBasicSliLatencyOutputReference(this, "latency");
  public get latency() {
    return this._latency;
  }
  public putLatency(value: MonitoringSloBasicSliLatency) {
    this._latency.internalValue = value;
  }
  public resetLatency() {
    this._latency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency.internalValue;
  }
}
export interface MonitoringSloRequestBasedSliDistributionCutRange {
  /**
  * max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#max MonitoringSlo#max}
  */
  readonly max?: number;
  /**
  * Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#min MonitoringSlo#min}
  */
  readonly min?: number;
}

export function monitoringSloRequestBasedSliDistributionCutRangeToTerraform(struct?: MonitoringSloRequestBasedSliDistributionCutRangeOutputReference | MonitoringSloRequestBasedSliDistributionCutRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class MonitoringSloRequestBasedSliDistributionCutRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloRequestBasedSliDistributionCutRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloRequestBasedSliDistributionCutRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface MonitoringSloRequestBasedSliDistributionCut {
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#distribution_filter MonitoringSlo#distribution_filter}
  */
  readonly distributionFilter: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#range MonitoringSlo#range}
  */
  readonly range: MonitoringSloRequestBasedSliDistributionCutRange;
}

export function monitoringSloRequestBasedSliDistributionCutToTerraform(struct?: MonitoringSloRequestBasedSliDistributionCutOutputReference | MonitoringSloRequestBasedSliDistributionCut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_filter: cdktf.stringToTerraform(struct!.distributionFilter),
    range: monitoringSloRequestBasedSliDistributionCutRangeToTerraform(struct!.range),
  }
}

export class MonitoringSloRequestBasedSliDistributionCutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloRequestBasedSliDistributionCut | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributionFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionFilter = this._distributionFilter;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloRequestBasedSliDistributionCut | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributionFilter = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributionFilter = value.distributionFilter;
      this._range.internalValue = value.range;
    }
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
    return this._distributionFilter;
  }

  // range - computed: false, optional: false, required: true
  private _range = new MonitoringSloRequestBasedSliDistributionCutRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: MonitoringSloRequestBasedSliDistributionCutRange) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#bad_service_filter MonitoringSlo#bad_service_filter}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#good_service_filter MonitoringSlo#good_service_filter}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#total_service_filter MonitoringSlo#total_service_filter}
  */
  readonly totalServiceFilter?: string;
}

export function monitoringSloRequestBasedSliGoodTotalRatioToTerraform(struct?: MonitoringSloRequestBasedSliGoodTotalRatioOutputReference | MonitoringSloRequestBasedSliGoodTotalRatio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloRequestBasedSliGoodTotalRatio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badServiceFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.badServiceFilter = this._badServiceFilter;
    }
    if (this._goodServiceFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodServiceFilter = this._goodServiceFilter;
    }
    if (this._totalServiceFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalServiceFilter = this._totalServiceFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloRequestBasedSliGoodTotalRatio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badServiceFilter = undefined;
      this._goodServiceFilter = undefined;
      this._totalServiceFilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badServiceFilter = value.badServiceFilter;
      this._goodServiceFilter = value.goodServiceFilter;
      this._totalServiceFilter = value.totalServiceFilter;
    }
  }

  // bad_service_filter - computed: false, optional: true, required: false
  private _badServiceFilter?: string; 
  public get badServiceFilter() {
    return this.getStringAttribute('bad_service_filter');
  }
  public set badServiceFilter(value: string) {
    this._badServiceFilter = value;
  }
  public resetBadServiceFilter() {
    this._badServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badServiceFilterInput() {
    return this._badServiceFilter;
  }

  // good_service_filter - computed: false, optional: true, required: false
  private _goodServiceFilter?: string; 
  public get goodServiceFilter() {
    return this.getStringAttribute('good_service_filter');
  }
  public set goodServiceFilter(value: string) {
    this._goodServiceFilter = value;
  }
  public resetGoodServiceFilter() {
    this._goodServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodServiceFilterInput() {
    return this._goodServiceFilter;
  }

  // total_service_filter - computed: false, optional: true, required: false
  private _totalServiceFilter?: string; 
  public get totalServiceFilter() {
    return this.getStringAttribute('total_service_filter');
  }
  public set totalServiceFilter(value: string) {
    this._totalServiceFilter = value;
  }
  public resetTotalServiceFilter() {
    this._totalServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServiceFilterInput() {
    return this._totalServiceFilter;
  }
}
export interface MonitoringSloRequestBasedSli {
  /**
  * distribution_cut block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#distribution_cut MonitoringSlo#distribution_cut}
  */
  readonly distributionCut?: MonitoringSloRequestBasedSliDistributionCut;
  /**
  * good_total_ratio block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#good_total_ratio MonitoringSlo#good_total_ratio}
  */
  readonly goodTotalRatio?: MonitoringSloRequestBasedSliGoodTotalRatio;
}

export function monitoringSloRequestBasedSliToTerraform(struct?: MonitoringSloRequestBasedSliOutputReference | MonitoringSloRequestBasedSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_cut: monitoringSloRequestBasedSliDistributionCutToTerraform(struct!.distributionCut),
    good_total_ratio: monitoringSloRequestBasedSliGoodTotalRatioToTerraform(struct!.goodTotalRatio),
  }
}

export class MonitoringSloRequestBasedSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloRequestBasedSli | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributionCut?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionCut = this._distributionCut?.internalValue;
    }
    if (this._goodTotalRatio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodTotalRatio = this._goodTotalRatio?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloRequestBasedSli | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributionCut.internalValue = undefined;
      this._goodTotalRatio.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributionCut.internalValue = value.distributionCut;
      this._goodTotalRatio.internalValue = value.goodTotalRatio;
    }
  }

  // distribution_cut - computed: false, optional: true, required: false
  private _distributionCut = new MonitoringSloRequestBasedSliDistributionCutOutputReference(this, "distribution_cut");
  public get distributionCut() {
    return this._distributionCut;
  }
  public putDistributionCut(value: MonitoringSloRequestBasedSliDistributionCut) {
    this._distributionCut.internalValue = value;
  }
  public resetDistributionCut() {
    this._distributionCut.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionCutInput() {
    return this._distributionCut.internalValue;
  }

  // good_total_ratio - computed: false, optional: true, required: false
  private _goodTotalRatio = new MonitoringSloRequestBasedSliGoodTotalRatioOutputReference(this, "good_total_ratio");
  public get goodTotalRatio() {
    return this._goodTotalRatio;
  }
  public putGoodTotalRatio(value: MonitoringSloRequestBasedSliGoodTotalRatio) {
    this._goodTotalRatio.internalValue = value;
  }
  public resetGoodTotalRatio() {
    this._goodTotalRatio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodTotalRatioInput() {
    return this._goodTotalRatio.internalValue;
  }
}
export interface MonitoringSloTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#create MonitoringSlo#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#delete MonitoringSlo#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#update MonitoringSlo#update}
  */
  readonly update?: string;
}

export function monitoringSloTimeoutsToTerraform(struct?: MonitoringSloTimeoutsOutputReference | MonitoringSloTimeouts | cdktf.IResolvable): any {
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

export class MonitoringSloTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitoringSloTimeouts | cdktf.IResolvable | undefined) {
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
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability {
  /**
  * Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#enabled MonitoringSlo#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency {
  /**
  * A duration string, e.g. 10s.
Good service is defined to be the count of requests made to
this service that return in no more than threshold.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#threshold MonitoringSlo#threshold}
  */
  readonly threshold: string;
}

export function monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}

export class MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
    }
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
    return this._threshold;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#location MonitoringSlo#location}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#method MonitoringSlo#method}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#version MonitoringSlo#version}
  */
  readonly version?: string[];
  /**
  * availability block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#availability MonitoringSlo#availability}
  */
  readonly availability?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability;
  /**
  * latency block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#latency MonitoringSlo#latency}
  */
  readonly latency?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency;
}

export function monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.location),
    method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.method),
    version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.version),
    availability: monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityToTerraform(struct!.availability),
    latency: monitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyToTerraform(struct!.latency),
  }
}

export class MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._availability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability?.internalValue;
    }
    if (this._latency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._method = undefined;
      this._version = undefined;
      this._availability.internalValue = undefined;
      this._latency.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._method = value.method;
      this._version = value.version;
      this._availability.internalValue = value.availability;
      this._latency.internalValue = value.latency;
    }
  }

  // location - computed: false, optional: true, required: false
  private _location?: string[]; 
  public get location() {
    return cdktf.Fn.tolist(this.getListAttribute('location'));
  }
  public set location(value: string[]) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string[]; 
  public get method() {
    return cdktf.Fn.tolist(this.getListAttribute('method'));
  }
  public set method(value: string[]) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string[]; 
  public get version() {
    return cdktf.Fn.tolist(this.getListAttribute('version'));
  }
  public set version(value: string[]) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // availability - computed: false, optional: true, required: false
  private _availability = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference(this, "availability");
  public get availability() {
    return this._availability;
  }
  public putAvailability(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability) {
    this._availability.internalValue = value;
  }
  public resetAvailability() {
    this._availability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability.internalValue;
  }

  // latency - computed: false, optional: true, required: false
  private _latency = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference(this, "latency");
  public get latency() {
    return this._latency;
  }
  public putLatency(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency) {
    this._latency.internalValue = value;
  }
  public resetLatency() {
    this._latency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency.internalValue;
  }
}
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange {
  /**
  * max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#max MonitoringSlo#max}
  */
  readonly max?: number;
  /**
  * Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#min MonitoringSlo#min}
  */
  readonly min?: number;
}

export function monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut {
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#distribution_filter MonitoringSlo#distribution_filter}
  */
  readonly distributionFilter: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#range MonitoringSlo#range}
  */
  readonly range: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange;
}

export function monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_filter: cdktf.stringToTerraform(struct!.distributionFilter),
    range: monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeToTerraform(struct!.range),
  }
}

export class MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributionFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionFilter = this._distributionFilter;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributionFilter = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributionFilter = value.distributionFilter;
      this._range.internalValue = value.range;
    }
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
    return this._distributionFilter;
  }

  // range - computed: false, optional: false, required: true
  private _range = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#bad_service_filter MonitoringSlo#bad_service_filter}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#good_service_filter MonitoringSlo#good_service_filter}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#total_service_filter MonitoringSlo#total_service_filter}
  */
  readonly totalServiceFilter?: string;
}

export function monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badServiceFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.badServiceFilter = this._badServiceFilter;
    }
    if (this._goodServiceFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodServiceFilter = this._goodServiceFilter;
    }
    if (this._totalServiceFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalServiceFilter = this._totalServiceFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badServiceFilter = undefined;
      this._goodServiceFilter = undefined;
      this._totalServiceFilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badServiceFilter = value.badServiceFilter;
      this._goodServiceFilter = value.goodServiceFilter;
      this._totalServiceFilter = value.totalServiceFilter;
    }
  }

  // bad_service_filter - computed: false, optional: true, required: false
  private _badServiceFilter?: string; 
  public get badServiceFilter() {
    return this.getStringAttribute('bad_service_filter');
  }
  public set badServiceFilter(value: string) {
    this._badServiceFilter = value;
  }
  public resetBadServiceFilter() {
    this._badServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badServiceFilterInput() {
    return this._badServiceFilter;
  }

  // good_service_filter - computed: false, optional: true, required: false
  private _goodServiceFilter?: string; 
  public get goodServiceFilter() {
    return this.getStringAttribute('good_service_filter');
  }
  public set goodServiceFilter(value: string) {
    this._goodServiceFilter = value;
  }
  public resetGoodServiceFilter() {
    this._goodServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodServiceFilterInput() {
    return this._goodServiceFilter;
  }

  // total_service_filter - computed: false, optional: true, required: false
  private _totalServiceFilter?: string; 
  public get totalServiceFilter() {
    return this.getStringAttribute('total_service_filter');
  }
  public set totalServiceFilter(value: string) {
    this._totalServiceFilter = value;
  }
  public resetTotalServiceFilter() {
    this._totalServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServiceFilterInput() {
    return this._totalServiceFilter;
  }
}
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance {
  /**
  * distribution_cut block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#distribution_cut MonitoringSlo#distribution_cut}
  */
  readonly distributionCut?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut;
  /**
  * good_total_ratio block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#good_total_ratio MonitoringSlo#good_total_ratio}
  */
  readonly goodTotalRatio?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio;
}

export function monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_cut: monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutToTerraform(struct!.distributionCut),
    good_total_ratio: monitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioToTerraform(struct!.goodTotalRatio),
  }
}

export class MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributionCut?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionCut = this._distributionCut?.internalValue;
    }
    if (this._goodTotalRatio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodTotalRatio = this._goodTotalRatio?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributionCut.internalValue = undefined;
      this._goodTotalRatio.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributionCut.internalValue = value.distributionCut;
      this._goodTotalRatio.internalValue = value.goodTotalRatio;
    }
  }

  // distribution_cut - computed: false, optional: true, required: false
  private _distributionCut = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference(this, "distribution_cut");
  public get distributionCut() {
    return this._distributionCut;
  }
  public putDistributionCut(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut) {
    this._distributionCut.internalValue = value;
  }
  public resetDistributionCut() {
    this._distributionCut.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionCutInput() {
    return this._distributionCut.internalValue;
  }

  // good_total_ratio - computed: false, optional: true, required: false
  private _goodTotalRatio = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference(this, "good_total_ratio");
  public get goodTotalRatio() {
    return this._goodTotalRatio;
  }
  public putGoodTotalRatio(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio) {
    this._goodTotalRatio.internalValue = value;
  }
  public resetGoodTotalRatio() {
    this._goodTotalRatio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodTotalRatioInput() {
    return this._goodTotalRatio.internalValue;
  }
}
export interface MonitoringSloWindowsBasedSliGoodTotalRatioThreshold {
  /**
  * If window performance >= threshold, the window is counted
as good.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#threshold MonitoringSlo#threshold}
  */
  readonly threshold?: number;
  /**
  * basic_sli_performance block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#basic_sli_performance MonitoringSlo#basic_sli_performance}
  */
  readonly basicSliPerformance?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance;
  /**
  * performance block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#performance MonitoringSlo#performance}
  */
  readonly performance?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance;
}

export function monitoringSloWindowsBasedSliGoodTotalRatioThresholdToTerraform(struct?: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference | MonitoringSloWindowsBasedSliGoodTotalRatioThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloWindowsBasedSliGoodTotalRatioThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._basicSliPerformance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicSliPerformance = this._basicSliPerformance?.internalValue;
    }
    if (this._performance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performance = this._performance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloWindowsBasedSliGoodTotalRatioThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._basicSliPerformance.internalValue = undefined;
      this._performance.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._basicSliPerformance.internalValue = value.basicSliPerformance;
      this._performance.internalValue = value.performance;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // basic_sli_performance - computed: false, optional: true, required: false
  private _basicSliPerformance = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference(this, "basic_sli_performance");
  public get basicSliPerformance() {
    return this._basicSliPerformance;
  }
  public putBasicSliPerformance(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance) {
    this._basicSliPerformance.internalValue = value;
  }
  public resetBasicSliPerformance() {
    this._basicSliPerformance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicSliPerformanceInput() {
    return this._basicSliPerformance.internalValue;
  }

  // performance - computed: false, optional: true, required: false
  private _performance = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference(this, "performance");
  public get performance() {
    return this._performance;
  }
  public putPerformance(value: MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance) {
    this._performance.internalValue = value;
  }
  public resetPerformance() {
    this._performance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInput() {
    return this._performance.internalValue;
  }
}
export interface MonitoringSloWindowsBasedSliMetricMeanInRangeRange {
  /**
  * max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#max MonitoringSlo#max}
  */
  readonly max?: number;
  /**
  * Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#min MonitoringSlo#min}
  */
  readonly min?: number;
}

export function monitoringSloWindowsBasedSliMetricMeanInRangeRangeToTerraform(struct?: MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference | MonitoringSloWindowsBasedSliMetricMeanInRangeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloWindowsBasedSliMetricMeanInRangeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloWindowsBasedSliMetricMeanInRangeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#time_series MonitoringSlo#time_series}
  */
  readonly timeSeries: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#range MonitoringSlo#range}
  */
  readonly range: MonitoringSloWindowsBasedSliMetricMeanInRangeRange;
}

export function monitoringSloWindowsBasedSliMetricMeanInRangeToTerraform(struct?: MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference | MonitoringSloWindowsBasedSliMetricMeanInRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_series: cdktf.stringToTerraform(struct!.timeSeries),
    range: monitoringSloWindowsBasedSliMetricMeanInRangeRangeToTerraform(struct!.range),
  }
}

export class MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloWindowsBasedSliMetricMeanInRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSeries = this._timeSeries;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloWindowsBasedSliMetricMeanInRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeSeries = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeSeries = value.timeSeries;
      this._range.internalValue = value.range;
    }
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
    return this._timeSeries;
  }

  // range - computed: false, optional: false, required: true
  private _range = new MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: MonitoringSloWindowsBasedSliMetricMeanInRangeRange) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface MonitoringSloWindowsBasedSliMetricSumInRangeRange {
  /**
  * max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#max MonitoringSlo#max}
  */
  readonly max?: number;
  /**
  * Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#min MonitoringSlo#min}
  */
  readonly min?: number;
}

export function monitoringSloWindowsBasedSliMetricSumInRangeRangeToTerraform(struct?: MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference | MonitoringSloWindowsBasedSliMetricSumInRangeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloWindowsBasedSliMetricSumInRangeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloWindowsBasedSliMetricSumInRangeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#time_series MonitoringSlo#time_series}
  */
  readonly timeSeries: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#range MonitoringSlo#range}
  */
  readonly range: MonitoringSloWindowsBasedSliMetricSumInRangeRange;
}

export function monitoringSloWindowsBasedSliMetricSumInRangeToTerraform(struct?: MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference | MonitoringSloWindowsBasedSliMetricSumInRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_series: cdktf.stringToTerraform(struct!.timeSeries),
    range: monitoringSloWindowsBasedSliMetricSumInRangeRangeToTerraform(struct!.range),
  }
}

export class MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloWindowsBasedSliMetricSumInRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSeries = this._timeSeries;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloWindowsBasedSliMetricSumInRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeSeries = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeSeries = value.timeSeries;
      this._range.internalValue = value.range;
    }
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
    return this._timeSeries;
  }

  // range - computed: false, optional: false, required: true
  private _range = new MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: MonitoringSloWindowsBasedSliMetricSumInRangeRange) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#good_bad_metric_filter MonitoringSlo#good_bad_metric_filter}
  */
  readonly goodBadMetricFilter?: string;
  /**
  * Duration over which window quality is evaluated, given as a
duration string "{X}s" representing X seconds. Must be an
integer fraction of a day and at least 60s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#window_period MonitoringSlo#window_period}
  */
  readonly windowPeriod?: string;
  /**
  * good_total_ratio_threshold block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#good_total_ratio_threshold MonitoringSlo#good_total_ratio_threshold}
  */
  readonly goodTotalRatioThreshold?: MonitoringSloWindowsBasedSliGoodTotalRatioThreshold;
  /**
  * metric_mean_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#metric_mean_in_range MonitoringSlo#metric_mean_in_range}
  */
  readonly metricMeanInRange?: MonitoringSloWindowsBasedSliMetricMeanInRange;
  /**
  * metric_sum_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo#metric_sum_in_range MonitoringSlo#metric_sum_in_range}
  */
  readonly metricSumInRange?: MonitoringSloWindowsBasedSliMetricSumInRange;
}

export function monitoringSloWindowsBasedSliToTerraform(struct?: MonitoringSloWindowsBasedSliOutputReference | MonitoringSloWindowsBasedSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringSloWindowsBasedSli | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._goodBadMetricFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodBadMetricFilter = this._goodBadMetricFilter;
    }
    if (this._windowPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowPeriod = this._windowPeriod;
    }
    if (this._goodTotalRatioThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodTotalRatioThreshold = this._goodTotalRatioThreshold?.internalValue;
    }
    if (this._metricMeanInRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricMeanInRange = this._metricMeanInRange?.internalValue;
    }
    if (this._metricSumInRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSumInRange = this._metricSumInRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringSloWindowsBasedSli | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._goodBadMetricFilter = undefined;
      this._windowPeriod = undefined;
      this._goodTotalRatioThreshold.internalValue = undefined;
      this._metricMeanInRange.internalValue = undefined;
      this._metricSumInRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._goodBadMetricFilter = value.goodBadMetricFilter;
      this._windowPeriod = value.windowPeriod;
      this._goodTotalRatioThreshold.internalValue = value.goodTotalRatioThreshold;
      this._metricMeanInRange.internalValue = value.metricMeanInRange;
      this._metricSumInRange.internalValue = value.metricSumInRange;
    }
  }

  // good_bad_metric_filter - computed: false, optional: true, required: false
  private _goodBadMetricFilter?: string; 
  public get goodBadMetricFilter() {
    return this.getStringAttribute('good_bad_metric_filter');
  }
  public set goodBadMetricFilter(value: string) {
    this._goodBadMetricFilter = value;
  }
  public resetGoodBadMetricFilter() {
    this._goodBadMetricFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodBadMetricFilterInput() {
    return this._goodBadMetricFilter;
  }

  // window_period - computed: false, optional: true, required: false
  private _windowPeriod?: string; 
  public get windowPeriod() {
    return this.getStringAttribute('window_period');
  }
  public set windowPeriod(value: string) {
    this._windowPeriod = value;
  }
  public resetWindowPeriod() {
    this._windowPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowPeriodInput() {
    return this._windowPeriod;
  }

  // good_total_ratio_threshold - computed: false, optional: true, required: false
  private _goodTotalRatioThreshold = new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference(this, "good_total_ratio_threshold");
  public get goodTotalRatioThreshold() {
    return this._goodTotalRatioThreshold;
  }
  public putGoodTotalRatioThreshold(value: MonitoringSloWindowsBasedSliGoodTotalRatioThreshold) {
    this._goodTotalRatioThreshold.internalValue = value;
  }
  public resetGoodTotalRatioThreshold() {
    this._goodTotalRatioThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodTotalRatioThresholdInput() {
    return this._goodTotalRatioThreshold.internalValue;
  }

  // metric_mean_in_range - computed: false, optional: true, required: false
  private _metricMeanInRange = new MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference(this, "metric_mean_in_range");
  public get metricMeanInRange() {
    return this._metricMeanInRange;
  }
  public putMetricMeanInRange(value: MonitoringSloWindowsBasedSliMetricMeanInRange) {
    this._metricMeanInRange.internalValue = value;
  }
  public resetMetricMeanInRange() {
    this._metricMeanInRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMeanInRangeInput() {
    return this._metricMeanInRange.internalValue;
  }

  // metric_sum_in_range - computed: false, optional: true, required: false
  private _metricSumInRange = new MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference(this, "metric_sum_in_range");
  public get metricSumInRange() {
    return this._metricSumInRange;
  }
  public putMetricSumInRange(value: MonitoringSloWindowsBasedSliMetricSumInRange) {
    this._metricSumInRange.internalValue = value;
  }
  public resetMetricSumInRange() {
    this._metricSumInRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSumInRangeInput() {
    return this._metricSumInRange.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo google_monitoring_slo}
*/
export class MonitoringSlo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_monitoring_slo";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/monitoring_slo google_monitoring_slo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringSloConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoringSloConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_slo',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._calendarPeriod = config.calendarPeriod;
    this._displayName = config.displayName;
    this._goal = config.goal;
    this._id = config.id;
    this._project = config.project;
    this._rollingPeriodDays = config.rollingPeriodDays;
    this._service = config.service;
    this._sloId = config.sloId;
    this._userLabels = config.userLabels;
    this._basicSli.internalValue = config.basicSli;
    this._requestBasedSli.internalValue = config.requestBasedSli;
    this._timeouts.internalValue = config.timeouts;
    this._windowsBasedSli.internalValue = config.windowsBasedSli;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
    return this._goal;
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

  // rolling_period_days - computed: false, optional: true, required: false
  private _rollingPeriodDays?: number; 
  public get rollingPeriodDays() {
    return this.getNumberAttribute('rolling_period_days');
  }
  public set rollingPeriodDays(value: number) {
    this._rollingPeriodDays = value;
  }
  public resetRollingPeriodDays() {
    this._rollingPeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingPeriodDaysInput() {
    return this._rollingPeriodDays;
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
    return this._service;
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
    return this._sloId;
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

  // basic_sli - computed: false, optional: true, required: false
  private _basicSli = new MonitoringSloBasicSliOutputReference(this, "basic_sli");
  public get basicSli() {
    return this._basicSli;
  }
  public putBasicSli(value: MonitoringSloBasicSli) {
    this._basicSli.internalValue = value;
  }
  public resetBasicSli() {
    this._basicSli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicSliInput() {
    return this._basicSli.internalValue;
  }

  // request_based_sli - computed: false, optional: true, required: false
  private _requestBasedSli = new MonitoringSloRequestBasedSliOutputReference(this, "request_based_sli");
  public get requestBasedSli() {
    return this._requestBasedSli;
  }
  public putRequestBasedSli(value: MonitoringSloRequestBasedSli) {
    this._requestBasedSli.internalValue = value;
  }
  public resetRequestBasedSli() {
    this._requestBasedSli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBasedSliInput() {
    return this._requestBasedSli.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitoringSloTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitoringSloTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // windows_based_sli - computed: false, optional: true, required: false
  private _windowsBasedSli = new MonitoringSloWindowsBasedSliOutputReference(this, "windows_based_sli");
  public get windowsBasedSli() {
    return this._windowsBasedSli;
  }
  public putWindowsBasedSli(value: MonitoringSloWindowsBasedSli) {
    this._windowsBasedSli.internalValue = value;
  }
  public resetWindowsBasedSli() {
    this._windowsBasedSli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsBasedSliInput() {
    return this._windowsBasedSli.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      calendar_period: cdktf.stringToTerraform(this._calendarPeriod),
      display_name: cdktf.stringToTerraform(this._displayName),
      goal: cdktf.numberToTerraform(this._goal),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      rolling_period_days: cdktf.numberToTerraform(this._rollingPeriodDays),
      service: cdktf.stringToTerraform(this._service),
      slo_id: cdktf.stringToTerraform(this._sloId),
      user_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._userLabels),
      basic_sli: monitoringSloBasicSliToTerraform(this._basicSli.internalValue),
      request_based_sli: monitoringSloRequestBasedSliToTerraform(this._requestBasedSli.internalValue),
      timeouts: monitoringSloTimeoutsToTerraform(this._timeouts.internalValue),
      windows_based_sli: monitoringSloWindowsBasedSliToTerraform(this._windowsBasedSli.internalValue),
    };
  }
}
