// https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpannerInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the instance's configuration (similar but not
  * quite the same as a region) which defines the geographic placement and
  * replication of your databases in this instance. It determines where your data
  * is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
  * In order to obtain a valid list please consult the
  * [Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#config SpannerInstance#config}
  */
  readonly config: string;
  /**
  * The descriptive name for this instance as it appears in UIs. Must be
  * unique per project and between 4 and 30 characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#display_name SpannerInstance#display_name}
  */
  readonly displayName: string;
  /**
  * When deleting a spanner instance, this boolean option will delete all backups of this instance.
  * This must be set to true if you created a backup manually in the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#force_destroy SpannerInstance#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#id SpannerInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An object containing a list of "key": value pairs.
  * Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#labels SpannerInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * A unique identifier for the instance, which cannot be changed after
  * the instance is created. The name must be between 6 and 30 characters
  * in length.
  * 
  * 
  * If not provided, a random string starting with 'tf-' will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#name SpannerInstance#name}
  */
  readonly name?: string;
  /**
  * The number of nodes allocated to this instance. Exactly one of either node_count or processing_units
  * must be present in terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#num_nodes SpannerInstance#num_nodes}
  */
  readonly numNodes?: number;
  /**
  * The number of processing units allocated to this instance. Exactly one of processing_units
  * or node_count must be present in terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#processing_units SpannerInstance#processing_units}
  */
  readonly processingUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#project SpannerInstance#project}
  */
  readonly project?: string;
  /**
  * autoscaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#autoscaling_config SpannerInstance#autoscaling_config}
  */
  readonly autoscalingConfig?: SpannerInstanceAutoscalingConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#timeouts SpannerInstance#timeouts}
  */
  readonly timeouts?: SpannerInstanceTimeouts;
}
export interface SpannerInstanceAutoscalingConfigAutoscalingLimits {
  /**
  * Specifies maximum number of processing units allocated to the instance.
  * If set, this number should be multiples of 1000 and be greater than or equal to
  * min_processing_units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#max_processing_units SpannerInstance#max_processing_units}
  */
  readonly maxProcessingUnits?: number;
  /**
  * Specifies minimum number of processing units allocated to the instance.
  * If set, this number should be multiples of 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#min_processing_units SpannerInstance#min_processing_units}
  */
  readonly minProcessingUnits?: number;
}

export function spannerInstanceAutoscalingConfigAutoscalingLimitsToTerraform(struct?: SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference | SpannerInstanceAutoscalingConfigAutoscalingLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_processing_units: cdktf.numberToTerraform(struct!.maxProcessingUnits),
    min_processing_units: cdktf.numberToTerraform(struct!.minProcessingUnits),
  }
}

export class SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpannerInstanceAutoscalingConfigAutoscalingLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxProcessingUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProcessingUnits = this._maxProcessingUnits;
    }
    if (this._minProcessingUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProcessingUnits = this._minProcessingUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpannerInstanceAutoscalingConfigAutoscalingLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxProcessingUnits = undefined;
      this._minProcessingUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxProcessingUnits = value.maxProcessingUnits;
      this._minProcessingUnits = value.minProcessingUnits;
    }
  }

  // max_processing_units - computed: false, optional: true, required: false
  private _maxProcessingUnits?: number; 
  public get maxProcessingUnits() {
    return this.getNumberAttribute('max_processing_units');
  }
  public set maxProcessingUnits(value: number) {
    this._maxProcessingUnits = value;
  }
  public resetMaxProcessingUnits() {
    this._maxProcessingUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxProcessingUnitsInput() {
    return this._maxProcessingUnits;
  }

  // min_processing_units - computed: false, optional: true, required: false
  private _minProcessingUnits?: number; 
  public get minProcessingUnits() {
    return this.getNumberAttribute('min_processing_units');
  }
  public set minProcessingUnits(value: number) {
    this._minProcessingUnits = value;
  }
  public resetMinProcessingUnits() {
    this._minProcessingUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minProcessingUnitsInput() {
    return this._minProcessingUnits;
  }
}
export interface SpannerInstanceAutoscalingConfigAutoscalingTargets {
  /**
  * Specifies the target high priority cpu utilization percentage that the autoscaler
  * should be trying to achieve for the instance.
  * This number is on a scale from 0 (no utilization) to 100 (full utilization)..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#high_priority_cpu_utilization_percent SpannerInstance#high_priority_cpu_utilization_percent}
  */
  readonly highPriorityCpuUtilizationPercent?: number;
  /**
  * Specifies the target storage utilization percentage that the autoscaler
  * should be trying to achieve for the instance.
  * This number is on a scale from 0 (no utilization) to 100 (full utilization).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#storage_utilization_percent SpannerInstance#storage_utilization_percent}
  */
  readonly storageUtilizationPercent?: number;
}

export function spannerInstanceAutoscalingConfigAutoscalingTargetsToTerraform(struct?: SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference | SpannerInstanceAutoscalingConfigAutoscalingTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_priority_cpu_utilization_percent: cdktf.numberToTerraform(struct!.highPriorityCpuUtilizationPercent),
    storage_utilization_percent: cdktf.numberToTerraform(struct!.storageUtilizationPercent),
  }
}

export class SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpannerInstanceAutoscalingConfigAutoscalingTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highPriorityCpuUtilizationPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.highPriorityCpuUtilizationPercent = this._highPriorityCpuUtilizationPercent;
    }
    if (this._storageUtilizationPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageUtilizationPercent = this._storageUtilizationPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpannerInstanceAutoscalingConfigAutoscalingTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highPriorityCpuUtilizationPercent = undefined;
      this._storageUtilizationPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highPriorityCpuUtilizationPercent = value.highPriorityCpuUtilizationPercent;
      this._storageUtilizationPercent = value.storageUtilizationPercent;
    }
  }

  // high_priority_cpu_utilization_percent - computed: false, optional: true, required: false
  private _highPriorityCpuUtilizationPercent?: number; 
  public get highPriorityCpuUtilizationPercent() {
    return this.getNumberAttribute('high_priority_cpu_utilization_percent');
  }
  public set highPriorityCpuUtilizationPercent(value: number) {
    this._highPriorityCpuUtilizationPercent = value;
  }
  public resetHighPriorityCpuUtilizationPercent() {
    this._highPriorityCpuUtilizationPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highPriorityCpuUtilizationPercentInput() {
    return this._highPriorityCpuUtilizationPercent;
  }

  // storage_utilization_percent - computed: false, optional: true, required: false
  private _storageUtilizationPercent?: number; 
  public get storageUtilizationPercent() {
    return this.getNumberAttribute('storage_utilization_percent');
  }
  public set storageUtilizationPercent(value: number) {
    this._storageUtilizationPercent = value;
  }
  public resetStorageUtilizationPercent() {
    this._storageUtilizationPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUtilizationPercentInput() {
    return this._storageUtilizationPercent;
  }
}
export interface SpannerInstanceAutoscalingConfig {
  /**
  * autoscaling_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#autoscaling_limits SpannerInstance#autoscaling_limits}
  */
  readonly autoscalingLimits?: SpannerInstanceAutoscalingConfigAutoscalingLimits;
  /**
  * autoscaling_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#autoscaling_targets SpannerInstance#autoscaling_targets}
  */
  readonly autoscalingTargets?: SpannerInstanceAutoscalingConfigAutoscalingTargets;
}

export function spannerInstanceAutoscalingConfigToTerraform(struct?: SpannerInstanceAutoscalingConfigOutputReference | SpannerInstanceAutoscalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_limits: spannerInstanceAutoscalingConfigAutoscalingLimitsToTerraform(struct!.autoscalingLimits),
    autoscaling_targets: spannerInstanceAutoscalingConfigAutoscalingTargetsToTerraform(struct!.autoscalingTargets),
  }
}

export class SpannerInstanceAutoscalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpannerInstanceAutoscalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingLimits = this._autoscalingLimits?.internalValue;
    }
    if (this._autoscalingTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingTargets = this._autoscalingTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpannerInstanceAutoscalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscalingLimits.internalValue = undefined;
      this._autoscalingTargets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscalingLimits.internalValue = value.autoscalingLimits;
      this._autoscalingTargets.internalValue = value.autoscalingTargets;
    }
  }

  // autoscaling_limits - computed: false, optional: true, required: false
  private _autoscalingLimits = new SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference(this, "autoscaling_limits");
  public get autoscalingLimits() {
    return this._autoscalingLimits;
  }
  public putAutoscalingLimits(value: SpannerInstanceAutoscalingConfigAutoscalingLimits) {
    this._autoscalingLimits.internalValue = value;
  }
  public resetAutoscalingLimits() {
    this._autoscalingLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingLimitsInput() {
    return this._autoscalingLimits.internalValue;
  }

  // autoscaling_targets - computed: false, optional: true, required: false
  private _autoscalingTargets = new SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference(this, "autoscaling_targets");
  public get autoscalingTargets() {
    return this._autoscalingTargets;
  }
  public putAutoscalingTargets(value: SpannerInstanceAutoscalingConfigAutoscalingTargets) {
    this._autoscalingTargets.internalValue = value;
  }
  public resetAutoscalingTargets() {
    this._autoscalingTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingTargetsInput() {
    return this._autoscalingTargets.internalValue;
  }
}
export interface SpannerInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#create SpannerInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#delete SpannerInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#update SpannerInstance#update}
  */
  readonly update?: string;
}

export function spannerInstanceTimeoutsToTerraform(struct?: SpannerInstanceTimeouts | cdktf.IResolvable): any {
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

export class SpannerInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpannerInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpannerInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance google_spanner_instance}
*/
export class SpannerInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_spanner_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpannerInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpannerInstance to import
  * @param importFromId The id of the existing SpannerInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpannerInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_spanner_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/spanner_instance google_spanner_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpannerInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SpannerInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_spanner_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.9.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._displayName = config.displayName;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._numNodes = config.numNodes;
    this._processingUnits = config.processingUnits;
    this._project = config.project;
    this._autoscalingConfig.internalValue = config.autoscalingConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // num_nodes - computed: true, optional: true, required: false
  private _numNodes?: number; 
  public get numNodes() {
    return this.getNumberAttribute('num_nodes');
  }
  public set numNodes(value: number) {
    this._numNodes = value;
  }
  public resetNumNodes() {
    this._numNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numNodesInput() {
    return this._numNodes;
  }

  // processing_units - computed: true, optional: true, required: false
  private _processingUnits?: number; 
  public get processingUnits() {
    return this.getNumberAttribute('processing_units');
  }
  public set processingUnits(value: number) {
    this._processingUnits = value;
  }
  public resetProcessingUnits() {
    this._processingUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingUnitsInput() {
    return this._processingUnits;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // autoscaling_config - computed: false, optional: true, required: false
  private _autoscalingConfig = new SpannerInstanceAutoscalingConfigOutputReference(this, "autoscaling_config");
  public get autoscalingConfig() {
    return this._autoscalingConfig;
  }
  public putAutoscalingConfig(value: SpannerInstanceAutoscalingConfig) {
    this._autoscalingConfig.internalValue = value;
  }
  public resetAutoscalingConfig() {
    this._autoscalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingConfigInput() {
    return this._autoscalingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SpannerInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SpannerInstanceTimeouts) {
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
      config: cdktf.stringToTerraform(this._config),
      display_name: cdktf.stringToTerraform(this._displayName),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      num_nodes: cdktf.numberToTerraform(this._numNodes),
      processing_units: cdktf.numberToTerraform(this._processingUnits),
      project: cdktf.stringToTerraform(this._project),
      autoscaling_config: spannerInstanceAutoscalingConfigToTerraform(this._autoscalingConfig.internalValue),
      timeouts: spannerInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
