/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryDatapolicyDataPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {dataPolicyId} in part of the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy#data_policy_id BigqueryDatapolicyDataPolicy#data_policy_id}
  */
  readonly dataPolicyId: string;
  /**
  * The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy#data_policy_type BigqueryDatapolicyDataPolicy#data_policy_type}
  */
  readonly dataPolicyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy#id BigqueryDatapolicyDataPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the location of the data policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy#location BigqueryDatapolicyDataPolicy#location}
  */
  readonly location: string;
  /**
  * Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy#policy_tag BigqueryDatapolicyDataPolicy#policy_tag}
  */
  readonly policyTag: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy#project BigqueryDatapolicyDataPolicy#project}
  */
  readonly project?: string;
  /**
  * data_masking_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy#data_masking_policy BigqueryDatapolicyDataPolicy#data_masking_policy}
  */
  readonly dataMaskingPolicy?: BigqueryDatapolicyDataPolicyDataMaskingPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy#timeouts BigqueryDatapolicyDataPolicy#timeouts}
  */
  readonly timeouts?: BigqueryDatapolicyDataPolicyTimeouts;
}
export interface BigqueryDatapolicyDataPolicyDataMaskingPolicy {
  /**
  * The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy#predefined_expression BigqueryDatapolicyDataPolicy#predefined_expression}
  */
  readonly predefinedExpression: string;
}

export function bigqueryDatapolicyDataPolicyDataMaskingPolicyToTerraform(struct?: BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference | BigqueryDatapolicyDataPolicyDataMaskingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_expression: cdktf.stringToTerraform(struct!.predefinedExpression),
  }
}

export class BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatapolicyDataPolicyDataMaskingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedExpression = this._predefinedExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatapolicyDataPolicyDataMaskingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predefinedExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predefinedExpression = value.predefinedExpression;
    }
  }

  // predefined_expression - computed: false, optional: false, required: true
  private _predefinedExpression?: string; 
  public get predefinedExpression() {
    return this.getStringAttribute('predefined_expression');
  }
  public set predefinedExpression(value: string) {
    this._predefinedExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedExpressionInput() {
    return this._predefinedExpression;
  }
}
export interface BigqueryDatapolicyDataPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy#create BigqueryDatapolicyDataPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy#delete BigqueryDatapolicyDataPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy#update BigqueryDatapolicyDataPolicy#update}
  */
  readonly update?: string;
}

export function bigqueryDatapolicyDataPolicyTimeoutsToTerraform(struct?: BigqueryDatapolicyDataPolicyTimeouts | cdktf.IResolvable): any {
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

export class BigqueryDatapolicyDataPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigqueryDatapolicyDataPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BigqueryDatapolicyDataPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy google_bigquery_datapolicy_data_policy}
*/
export class BigqueryDatapolicyDataPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_datapolicy_data_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/bigquery_datapolicy_data_policy google_bigquery_datapolicy_data_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryDatapolicyDataPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryDatapolicyDataPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_datapolicy_data_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.82.0',
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
    this._dataPolicyId = config.dataPolicyId;
    this._dataPolicyType = config.dataPolicyType;
    this._id = config.id;
    this._location = config.location;
    this._policyTag = config.policyTag;
    this._project = config.project;
    this._dataMaskingPolicy.internalValue = config.dataMaskingPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_policy_id - computed: false, optional: false, required: true
  private _dataPolicyId?: string; 
  public get dataPolicyId() {
    return this.getStringAttribute('data_policy_id');
  }
  public set dataPolicyId(value: string) {
    this._dataPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPolicyIdInput() {
    return this._dataPolicyId;
  }

  // data_policy_type - computed: false, optional: false, required: true
  private _dataPolicyType?: string; 
  public get dataPolicyType() {
    return this.getStringAttribute('data_policy_type');
  }
  public set dataPolicyType(value: string) {
    this._dataPolicyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPolicyTypeInput() {
    return this._dataPolicyType;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_tag - computed: false, optional: false, required: true
  private _policyTag?: string; 
  public get policyTag() {
    return this.getStringAttribute('policy_tag');
  }
  public set policyTag(value: string) {
    this._policyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTagInput() {
    return this._policyTag;
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

  // data_masking_policy - computed: false, optional: true, required: false
  private _dataMaskingPolicy = new BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference(this, "data_masking_policy");
  public get dataMaskingPolicy() {
    return this._dataMaskingPolicy;
  }
  public putDataMaskingPolicy(value: BigqueryDatapolicyDataPolicyDataMaskingPolicy) {
    this._dataMaskingPolicy.internalValue = value;
  }
  public resetDataMaskingPolicy() {
    this._dataMaskingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskingPolicyInput() {
    return this._dataMaskingPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryDatapolicyDataPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigqueryDatapolicyDataPolicyTimeouts) {
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
      data_policy_id: cdktf.stringToTerraform(this._dataPolicyId),
      data_policy_type: cdktf.stringToTerraform(this._dataPolicyType),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      policy_tag: cdktf.stringToTerraform(this._policyTag),
      project: cdktf.stringToTerraform(this._project),
      data_masking_policy: bigqueryDatapolicyDataPolicyDataMaskingPolicyToTerraform(this._dataMaskingPolicy.internalValue),
      timeouts: bigqueryDatapolicyDataPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
