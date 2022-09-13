// https://www.terraform.io/docs/providers/google/r/logging_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of this metric, which is used in documentation. The maximum length of the
description is 8000 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#description LoggingMetric#description}
  */
  readonly description?: string;
  /**
  * An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which
is used to match log entries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#filter LoggingMetric#filter}
  */
  readonly filter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#id LoggingMetric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A map from a label key string to an extractor expression which is used to extract data from a log
entry field and assign as the label value. Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#label_extractors LoggingMetric#label_extractors}
  */
  readonly labelExtractors?: { [key: string]: string };
  /**
  * The client-assigned metric identifier. Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#name LoggingMetric#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#project LoggingMetric#project}
  */
  readonly project?: string;
  /**
  * A valueExtractor is required when using a distribution logs-based metric to extract the values to
record from a log entry. Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#value_extractor LoggingMetric#value_extractor}
  */
  readonly valueExtractor?: string;
  /**
  * bucket_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#bucket_options LoggingMetric#bucket_options}
  */
  readonly bucketOptions?: LoggingMetricBucketOptions;
  /**
  * metric_descriptor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#metric_descriptor LoggingMetric#metric_descriptor}
  */
  readonly metricDescriptor: LoggingMetricMetricDescriptor;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#timeouts LoggingMetric#timeouts}
  */
  readonly timeouts?: LoggingMetricTimeouts;
}
export interface LoggingMetricBucketOptionsExplicitBuckets {
  /**
  * The values must be monotonically increasing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#bounds LoggingMetric#bounds}
  */
  readonly bounds: number[];
}

export function loggingMetricBucketOptionsExplicitBucketsToTerraform(struct?: LoggingMetricBucketOptionsExplicitBucketsOutputReference | LoggingMetricBucketOptionsExplicitBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bounds: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.bounds),
  }
}

export class LoggingMetricBucketOptionsExplicitBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingMetricBucketOptionsExplicitBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bounds !== undefined) {
      hasAnyValues = true;
      internalValueResult.bounds = this._bounds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingMetricBucketOptionsExplicitBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bounds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bounds = value.bounds;
    }
  }

  // bounds - computed: false, optional: false, required: true
  private _bounds?: number[]; 
  public get bounds() {
    return this.getNumberListAttribute('bounds');
  }
  public set bounds(value: number[]) {
    this._bounds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boundsInput() {
    return this._bounds;
  }
}
export interface LoggingMetricBucketOptionsExponentialBuckets {
  /**
  * Must be greater than 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#growth_factor LoggingMetric#growth_factor}
  */
  readonly growthFactor?: number;
  /**
  * Must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#num_finite_buckets LoggingMetric#num_finite_buckets}
  */
  readonly numFiniteBuckets?: number;
  /**
  * Must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#scale LoggingMetric#scale}
  */
  readonly scale?: number;
}

export function loggingMetricBucketOptionsExponentialBucketsToTerraform(struct?: LoggingMetricBucketOptionsExponentialBucketsOutputReference | LoggingMetricBucketOptionsExponentialBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    growth_factor: cdktf.numberToTerraform(struct!.growthFactor),
    num_finite_buckets: cdktf.numberToTerraform(struct!.numFiniteBuckets),
    scale: cdktf.numberToTerraform(struct!.scale),
  }
}

export class LoggingMetricBucketOptionsExponentialBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingMetricBucketOptionsExponentialBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._growthFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.growthFactor = this._growthFactor;
    }
    if (this._numFiniteBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numFiniteBuckets = this._numFiniteBuckets;
    }
    if (this._scale !== undefined) {
      hasAnyValues = true;
      internalValueResult.scale = this._scale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingMetricBucketOptionsExponentialBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._growthFactor = undefined;
      this._numFiniteBuckets = undefined;
      this._scale = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._growthFactor = value.growthFactor;
      this._numFiniteBuckets = value.numFiniteBuckets;
      this._scale = value.scale;
    }
  }

  // growth_factor - computed: false, optional: true, required: false
  private _growthFactor?: number; 
  public get growthFactor() {
    return this.getNumberAttribute('growth_factor');
  }
  public set growthFactor(value: number) {
    this._growthFactor = value;
  }
  public resetGrowthFactor() {
    this._growthFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get growthFactorInput() {
    return this._growthFactor;
  }

  // num_finite_buckets - computed: false, optional: true, required: false
  private _numFiniteBuckets?: number; 
  public get numFiniteBuckets() {
    return this.getNumberAttribute('num_finite_buckets');
  }
  public set numFiniteBuckets(value: number) {
    this._numFiniteBuckets = value;
  }
  public resetNumFiniteBuckets() {
    this._numFiniteBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numFiniteBucketsInput() {
    return this._numFiniteBuckets;
  }

  // scale - computed: false, optional: true, required: false
  private _scale?: number; 
  public get scale() {
    return this.getNumberAttribute('scale');
  }
  public set scale(value: number) {
    this._scale = value;
  }
  public resetScale() {
    this._scale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale;
  }
}
export interface LoggingMetricBucketOptionsLinearBuckets {
  /**
  * Must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#num_finite_buckets LoggingMetric#num_finite_buckets}
  */
  readonly numFiniteBuckets?: number;
  /**
  * Lower bound of the first bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#offset LoggingMetric#offset}
  */
  readonly offset?: number;
  /**
  * Must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#width LoggingMetric#width}
  */
  readonly width?: number;
}

export function loggingMetricBucketOptionsLinearBucketsToTerraform(struct?: LoggingMetricBucketOptionsLinearBucketsOutputReference | LoggingMetricBucketOptionsLinearBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_finite_buckets: cdktf.numberToTerraform(struct!.numFiniteBuckets),
    offset: cdktf.numberToTerraform(struct!.offset),
    width: cdktf.numberToTerraform(struct!.width),
  }
}

export class LoggingMetricBucketOptionsLinearBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingMetricBucketOptionsLinearBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numFiniteBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numFiniteBuckets = this._numFiniteBuckets;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingMetricBucketOptionsLinearBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numFiniteBuckets = undefined;
      this._offset = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numFiniteBuckets = value.numFiniteBuckets;
      this._offset = value.offset;
      this._width = value.width;
    }
  }

  // num_finite_buckets - computed: false, optional: true, required: false
  private _numFiniteBuckets?: number; 
  public get numFiniteBuckets() {
    return this.getNumberAttribute('num_finite_buckets');
  }
  public set numFiniteBuckets(value: number) {
    this._numFiniteBuckets = value;
  }
  public resetNumFiniteBuckets() {
    this._numFiniteBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numFiniteBucketsInput() {
    return this._numFiniteBuckets;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface LoggingMetricBucketOptions {
  /**
  * explicit_buckets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#explicit_buckets LoggingMetric#explicit_buckets}
  */
  readonly explicitBuckets?: LoggingMetricBucketOptionsExplicitBuckets;
  /**
  * exponential_buckets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#exponential_buckets LoggingMetric#exponential_buckets}
  */
  readonly exponentialBuckets?: LoggingMetricBucketOptionsExponentialBuckets;
  /**
  * linear_buckets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#linear_buckets LoggingMetric#linear_buckets}
  */
  readonly linearBuckets?: LoggingMetricBucketOptionsLinearBuckets;
}

export function loggingMetricBucketOptionsToTerraform(struct?: LoggingMetricBucketOptionsOutputReference | LoggingMetricBucketOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_buckets: loggingMetricBucketOptionsExplicitBucketsToTerraform(struct!.explicitBuckets),
    exponential_buckets: loggingMetricBucketOptionsExponentialBucketsToTerraform(struct!.exponentialBuckets),
    linear_buckets: loggingMetricBucketOptionsLinearBucketsToTerraform(struct!.linearBuckets),
  }
}

export class LoggingMetricBucketOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingMetricBucketOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitBuckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitBuckets = this._explicitBuckets?.internalValue;
    }
    if (this._exponentialBuckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exponentialBuckets = this._exponentialBuckets?.internalValue;
    }
    if (this._linearBuckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linearBuckets = this._linearBuckets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingMetricBucketOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._explicitBuckets.internalValue = undefined;
      this._exponentialBuckets.internalValue = undefined;
      this._linearBuckets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._explicitBuckets.internalValue = value.explicitBuckets;
      this._exponentialBuckets.internalValue = value.exponentialBuckets;
      this._linearBuckets.internalValue = value.linearBuckets;
    }
  }

  // explicit_buckets - computed: false, optional: true, required: false
  private _explicitBuckets = new LoggingMetricBucketOptionsExplicitBucketsOutputReference(this, "explicit_buckets");
  public get explicitBuckets() {
    return this._explicitBuckets;
  }
  public putExplicitBuckets(value: LoggingMetricBucketOptionsExplicitBuckets) {
    this._explicitBuckets.internalValue = value;
  }
  public resetExplicitBuckets() {
    this._explicitBuckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitBucketsInput() {
    return this._explicitBuckets.internalValue;
  }

  // exponential_buckets - computed: false, optional: true, required: false
  private _exponentialBuckets = new LoggingMetricBucketOptionsExponentialBucketsOutputReference(this, "exponential_buckets");
  public get exponentialBuckets() {
    return this._exponentialBuckets;
  }
  public putExponentialBuckets(value: LoggingMetricBucketOptionsExponentialBuckets) {
    this._exponentialBuckets.internalValue = value;
  }
  public resetExponentialBuckets() {
    this._exponentialBuckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentialBucketsInput() {
    return this._exponentialBuckets.internalValue;
  }

  // linear_buckets - computed: false, optional: true, required: false
  private _linearBuckets = new LoggingMetricBucketOptionsLinearBucketsOutputReference(this, "linear_buckets");
  public get linearBuckets() {
    return this._linearBuckets;
  }
  public putLinearBuckets(value: LoggingMetricBucketOptionsLinearBuckets) {
    this._linearBuckets.internalValue = value;
  }
  public resetLinearBuckets() {
    this._linearBuckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linearBucketsInput() {
    return this._linearBuckets.internalValue;
  }
}
export interface LoggingMetricMetricDescriptorLabels {
  /**
  * A human-readable description for the label.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#description LoggingMetric#description}
  */
  readonly description?: string;
  /**
  * The label key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#key LoggingMetric#key}
  */
  readonly key: string;
  /**
  * The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#value_type LoggingMetric#value_type}
  */
  readonly valueType?: string;
}

export function loggingMetricMetricDescriptorLabelsToTerraform(struct?: LoggingMetricMetricDescriptorLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    key: cdktf.stringToTerraform(struct!.key),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}

export class LoggingMetricMetricDescriptorLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingMetricMetricDescriptorLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingMetricMetricDescriptorLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._key = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._key = value.key;
      this._valueType = value.valueType;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class LoggingMetricMetricDescriptorLabelsList extends cdktf.ComplexList {
  public internalValue? : LoggingMetricMetricDescriptorLabels[] | cdktf.IResolvable

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
  public get(index: number): LoggingMetricMetricDescriptorLabelsOutputReference {
    return new LoggingMetricMetricDescriptorLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingMetricMetricDescriptor {
  /**
  * A concise name for the metric, which can be displayed in user interfaces. Use sentence case 
without an ending period, for example "Request count". This field is optional but it is 
recommended to be set for any metrics associated with user-visible concepts, such as Quota.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#display_name LoggingMetric#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether the metric records instantaneous values, changes to a value, etc.
Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to DELTA. Possible values: ["DELTA", "GAUGE", "CUMULATIVE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#metric_kind LoggingMetric#metric_kind}
  */
  readonly metricKind: string;
  /**
  * The unit in which the metric value is reported. It is only applicable if the valueType is
'INT64', 'DOUBLE', or 'DISTRIBUTION'. The supported units are a subset of
[The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#unit LoggingMetric#unit}
  */
  readonly unit?: string;
  /**
  * Whether the measurement is an integer, a floating-point number, etc.
Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to INT64. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION", "MONEY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#value_type LoggingMetric#value_type}
  */
  readonly valueType: string;
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#labels LoggingMetric#labels}
  */
  readonly labels?: LoggingMetricMetricDescriptorLabels[] | cdktf.IResolvable;
}

export function loggingMetricMetricDescriptorToTerraform(struct?: LoggingMetricMetricDescriptorOutputReference | LoggingMetricMetricDescriptor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    metric_kind: cdktf.stringToTerraform(struct!.metricKind),
    unit: cdktf.stringToTerraform(struct!.unit),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    labels: cdktf.listMapper(loggingMetricMetricDescriptorLabelsToTerraform, true)(struct!.labels),
  }
}

export class LoggingMetricMetricDescriptorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingMetricMetricDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._metricKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKind = this._metricKind;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingMetricMetricDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._metricKind = undefined;
      this._unit = undefined;
      this._valueType = undefined;
      this._labels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._metricKind = value.metricKind;
      this._unit = value.unit;
      this._valueType = value.valueType;
      this._labels.internalValue = value.labels;
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

  // metric_kind - computed: false, optional: false, required: true
  private _metricKind?: string; 
  public get metricKind() {
    return this.getStringAttribute('metric_kind');
  }
  public set metricKind(value: string) {
    this._metricKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricKindInput() {
    return this._metricKind;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new LoggingMetricMetricDescriptorLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: LoggingMetricMetricDescriptorLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }
}
export interface LoggingMetricTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#create LoggingMetric#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#delete LoggingMetric#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#update LoggingMetric#update}
  */
  readonly update?: string;
}

export function loggingMetricTimeoutsToTerraform(struct?: LoggingMetricTimeoutsOutputReference | LoggingMetricTimeouts | cdktf.IResolvable): any {
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

export class LoggingMetricTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingMetricTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LoggingMetricTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_metric google_logging_metric}
*/
export class LoggingMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_logging_metric";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/logging_metric google_logging_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingMetricConfig
  */
  public constructor(scope: Construct, id: string, config: LoggingMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_metric',
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
    this._description = config.description;
    this._filter = config.filter;
    this._id = config.id;
    this._labelExtractors = config.labelExtractors;
    this._name = config.name;
    this._project = config.project;
    this._valueExtractor = config.valueExtractor;
    this._bucketOptions.internalValue = config.bucketOptions;
    this._metricDescriptor.internalValue = config.metricDescriptor;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // value_extractor - computed: false, optional: true, required: false
  private _valueExtractor?: string; 
  public get valueExtractor() {
    return this.getStringAttribute('value_extractor');
  }
  public set valueExtractor(value: string) {
    this._valueExtractor = value;
  }
  public resetValueExtractor() {
    this._valueExtractor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueExtractorInput() {
    return this._valueExtractor;
  }

  // bucket_options - computed: false, optional: true, required: false
  private _bucketOptions = new LoggingMetricBucketOptionsOutputReference(this, "bucket_options");
  public get bucketOptions() {
    return this._bucketOptions;
  }
  public putBucketOptions(value: LoggingMetricBucketOptions) {
    this._bucketOptions.internalValue = value;
  }
  public resetBucketOptions() {
    this._bucketOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOptionsInput() {
    return this._bucketOptions.internalValue;
  }

  // metric_descriptor - computed: false, optional: false, required: true
  private _metricDescriptor = new LoggingMetricMetricDescriptorOutputReference(this, "metric_descriptor");
  public get metricDescriptor() {
    return this._metricDescriptor;
  }
  public putMetricDescriptor(value: LoggingMetricMetricDescriptor) {
    this._metricDescriptor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDescriptorInput() {
    return this._metricDescriptor.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LoggingMetricTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LoggingMetricTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      label_extractors: cdktf.hashMapper(cdktf.stringToTerraform)(this._labelExtractors),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      value_extractor: cdktf.stringToTerraform(this._valueExtractor),
      bucket_options: loggingMetricBucketOptionsToTerraform(this._bucketOptions.internalValue),
      metric_descriptor: loggingMetricMetricDescriptorToTerraform(this._metricDescriptor.internalValue),
      timeouts: loggingMetricTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
