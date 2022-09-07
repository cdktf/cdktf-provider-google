// https://www.terraform.io/docs/providers/google/d/compute_global_forwarding_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeGlobalForwardingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_global_forwarding_rule#id DataGoogleComputeGlobalForwardingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_global_forwarding_rule#name DataGoogleComputeGlobalForwardingRule#name}
  */
  readonly name: string;
  /**
  * The project this resource belongs in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_global_forwarding_rule#project DataGoogleComputeGlobalForwardingRule#project}
  */
  readonly project?: string;
}
export interface DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels {
}

export function dataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsToTerraform(struct?: DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference {
    return new DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeGlobalForwardingRuleMetadataFilters {
}

export function dataGoogleComputeGlobalForwardingRuleMetadataFiltersToTerraform(struct?: DataGoogleComputeGlobalForwardingRuleMetadataFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeGlobalForwardingRuleMetadataFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeGlobalForwardingRuleMetadataFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_labels - computed: true, optional: false, required: false
  private _filterLabels = new DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList(this, "filter_labels", false);
  public get filterLabels() {
    return this._filterLabels;
  }

  // filter_match_criteria - computed: true, optional: false, required: false
  public get filterMatchCriteria() {
    return this.getStringAttribute('filter_match_criteria');
  }
}

export class DataGoogleComputeGlobalForwardingRuleMetadataFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference {
    return new DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/compute_global_forwarding_rule google_compute_global_forwarding_rule}
*/
export class DataGoogleComputeGlobalForwardingRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_global_forwarding_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/compute_global_forwarding_rule google_compute_global_forwarding_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeGlobalForwardingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeGlobalForwardingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_global_forwarding_rule',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_protocol - computed: true, optional: false, required: false
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // load_balancing_scheme - computed: true, optional: false, required: false
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }

  // metadata_filters - computed: true, optional: false, required: false
  private _metadataFilters = new DataGoogleComputeGlobalForwardingRuleMetadataFiltersList(this, "metadata_filters", false);
  public get metadataFilters() {
    return this._metadataFilters;
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

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // port_range - computed: true, optional: false, required: false
  public get portRange() {
    return this.getStringAttribute('port_range');
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

  // psc_connection_id - computed: true, optional: false, required: false
  public get pscConnectionId() {
    return this.getStringAttribute('psc_connection_id');
  }

  // psc_connection_status - computed: true, optional: false, required: false
  public get pscConnectionStatus() {
    return this.getStringAttribute('psc_connection_status');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
