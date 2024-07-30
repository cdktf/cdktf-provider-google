/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/spanner_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleSpannerInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the instance's configuration (similar but not
  * quite the same as a region) which defines the geographic placement and
  * replication of your databases in this instance. It determines where your data
  * is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
  * In order to obtain a valid list please consult the
  * [Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/spanner_instance#config DataGoogleSpannerInstance#config}
  */
  readonly config?: string;
  /**
  * The descriptive name for this instance as it appears in UIs. Must be
  * unique per project and between 4 and 30 characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/spanner_instance#display_name DataGoogleSpannerInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/spanner_instance#id DataGoogleSpannerInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique identifier for the instance, which cannot be changed after
  * the instance is created. The name must be between 6 and 30 characters
  * in length.
  * 
  * 
  * If not provided, a random string starting with 'tf-' will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/spanner_instance#name DataGoogleSpannerInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/spanner_instance#project DataGoogleSpannerInstance#project}
  */
  readonly project?: string;
}
export interface DataGoogleSpannerInstanceAutoscalingConfigAutoscalingLimits {
}

export function dataGoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsToTerraform(struct?: DataGoogleSpannerInstanceAutoscalingConfigAutoscalingLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsToHclTerraform(struct?: DataGoogleSpannerInstanceAutoscalingConfigAutoscalingLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleSpannerInstanceAutoscalingConfigAutoscalingLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSpannerInstanceAutoscalingConfigAutoscalingLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_nodes - computed: true, optional: false, required: false
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }

  // max_processing_units - computed: true, optional: false, required: false
  public get maxProcessingUnits() {
    return this.getNumberAttribute('max_processing_units');
  }

  // min_nodes - computed: true, optional: false, required: false
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }

  // min_processing_units - computed: true, optional: false, required: false
  public get minProcessingUnits() {
    return this.getNumberAttribute('min_processing_units');
  }
}

export class DataGoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference {
    return new DataGoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSpannerInstanceAutoscalingConfigAutoscalingTargets {
}

export function dataGoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsToTerraform(struct?: DataGoogleSpannerInstanceAutoscalingConfigAutoscalingTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsToHclTerraform(struct?: DataGoogleSpannerInstanceAutoscalingConfigAutoscalingTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleSpannerInstanceAutoscalingConfigAutoscalingTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSpannerInstanceAutoscalingConfigAutoscalingTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high_priority_cpu_utilization_percent - computed: true, optional: false, required: false
  public get highPriorityCpuUtilizationPercent() {
    return this.getNumberAttribute('high_priority_cpu_utilization_percent');
  }

  // storage_utilization_percent - computed: true, optional: false, required: false
  public get storageUtilizationPercent() {
    return this.getNumberAttribute('storage_utilization_percent');
  }
}

export class DataGoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference {
    return new DataGoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleSpannerInstanceAutoscalingConfig {
}

export function dataGoogleSpannerInstanceAutoscalingConfigToTerraform(struct?: DataGoogleSpannerInstanceAutoscalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleSpannerInstanceAutoscalingConfigToHclTerraform(struct?: DataGoogleSpannerInstanceAutoscalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleSpannerInstanceAutoscalingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleSpannerInstanceAutoscalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleSpannerInstanceAutoscalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling_limits - computed: true, optional: false, required: false
  private _autoscalingLimits = new DataGoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsList(this, "autoscaling_limits", false);
  public get autoscalingLimits() {
    return this._autoscalingLimits;
  }

  // autoscaling_targets - computed: true, optional: false, required: false
  private _autoscalingTargets = new DataGoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsList(this, "autoscaling_targets", false);
  public get autoscalingTargets() {
    return this._autoscalingTargets;
  }
}

export class DataGoogleSpannerInstanceAutoscalingConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleSpannerInstanceAutoscalingConfigOutputReference {
    return new DataGoogleSpannerInstanceAutoscalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/spanner_instance google_spanner_instance}
*/
export class DataGoogleSpannerInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_spanner_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleSpannerInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleSpannerInstance to import
  * @param importFromId The id of the existing DataGoogleSpannerInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/spanner_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleSpannerInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_spanner_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/spanner_instance google_spanner_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleSpannerInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleSpannerInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_spanner_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.39.0',
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
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaling_config - computed: true, optional: false, required: false
  private _autoscalingConfig = new DataGoogleSpannerInstanceAutoscalingConfigList(this, "autoscaling_config", false);
  public get autoscalingConfig() {
    return this._autoscalingConfig;
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // force_destroy - computed: true, optional: false, required: false
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
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

  // num_nodes - computed: true, optional: false, required: false
  public get numNodes() {
    return this.getNumberAttribute('num_nodes');
  }

  // processing_units - computed: true, optional: false, required: false
  public get processingUnits() {
    return this.getNumberAttribute('processing_units');
  }

  // project - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
