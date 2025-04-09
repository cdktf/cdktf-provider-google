/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatastreamPrivateConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, will skip validations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#create_without_validation DatastreamPrivateConnection#create_without_validation}
  */
  readonly createWithoutValidation?: boolean | cdktf.IResolvable;
  /**
  * Display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#display_name DatastreamPrivateConnection#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#id DatastreamPrivateConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#labels DatastreamPrivateConnection#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the location this private connection is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#location DatastreamPrivateConnection#location}
  */
  readonly location: string;
  /**
  * The private connectivity identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#private_connection_id DatastreamPrivateConnection#private_connection_id}
  */
  readonly privateConnectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#project DatastreamPrivateConnection#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#timeouts DatastreamPrivateConnection#timeouts}
  */
  readonly timeouts?: DatastreamPrivateConnectionTimeouts;
  /**
  * vpc_peering_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#vpc_peering_config DatastreamPrivateConnection#vpc_peering_config}
  */
  readonly vpcPeeringConfig: DatastreamPrivateConnectionVpcPeeringConfig;
}
export interface DatastreamPrivateConnectionError {
}

export function datastreamPrivateConnectionErrorToTerraform(struct?: DatastreamPrivateConnectionError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datastreamPrivateConnectionErrorToHclTerraform(struct?: DatastreamPrivateConnectionError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatastreamPrivateConnectionErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastreamPrivateConnectionError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamPrivateConnectionError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktf.StringMap(this, "details");
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DatastreamPrivateConnectionErrorList extends cdktf.ComplexList {

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
  public get(index: number): DatastreamPrivateConnectionErrorOutputReference {
    return new DatastreamPrivateConnectionErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamPrivateConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#create DatastreamPrivateConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#delete DatastreamPrivateConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#update DatastreamPrivateConnection#update}
  */
  readonly update?: string;
}

export function datastreamPrivateConnectionTimeoutsToTerraform(struct?: DatastreamPrivateConnectionTimeouts | cdktf.IResolvable): any {
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


export function datastreamPrivateConnectionTimeoutsToHclTerraform(struct?: DatastreamPrivateConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamPrivateConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatastreamPrivateConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatastreamPrivateConnectionTimeouts | cdktf.IResolvable | undefined) {
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
export interface DatastreamPrivateConnectionVpcPeeringConfig {
  /**
  * A free subnet for peering. (CIDR of /29)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#subnet DatastreamPrivateConnection#subnet}
  */
  readonly subnet: string;
  /**
  * Fully qualified name of the VPC that Datastream will peer to.
  * Format: projects/{project}/global/{networks}/{name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#vpc DatastreamPrivateConnection#vpc}
  */
  readonly vpc: string;
}

export function datastreamPrivateConnectionVpcPeeringConfigToTerraform(struct?: DatastreamPrivateConnectionVpcPeeringConfigOutputReference | DatastreamPrivateConnectionVpcPeeringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: cdktf.stringToTerraform(struct!.subnet),
    vpc: cdktf.stringToTerraform(struct!.vpc),
  }
}


export function datastreamPrivateConnectionVpcPeeringConfigToHclTerraform(struct?: DatastreamPrivateConnectionVpcPeeringConfigOutputReference | DatastreamPrivateConnectionVpcPeeringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamPrivateConnectionVpcPeeringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamPrivateConnectionVpcPeeringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamPrivateConnectionVpcPeeringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnet = undefined;
      this._vpc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnet = value.subnet;
      this._vpc = value.vpc;
    }
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // vpc - computed: false, optional: false, required: true
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection google_datastream_private_connection}
*/
export class DatastreamPrivateConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_datastream_private_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatastreamPrivateConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatastreamPrivateConnection to import
  * @param importFromId The id of the existing DatastreamPrivateConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatastreamPrivateConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_datastream_private_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/datastream_private_connection google_datastream_private_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatastreamPrivateConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DatastreamPrivateConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_datastream_private_connection',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.29.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createWithoutValidation = config.createWithoutValidation;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._privateConnectionId = config.privateConnectionId;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
    this._vpcPeeringConfig.internalValue = config.vpcPeeringConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_without_validation - computed: false, optional: true, required: false
  private _createWithoutValidation?: boolean | cdktf.IResolvable; 
  public get createWithoutValidation() {
    return this.getBooleanAttribute('create_without_validation');
  }
  public set createWithoutValidation(value: boolean | cdktf.IResolvable) {
    this._createWithoutValidation = value;
  }
  public resetCreateWithoutValidation() {
    this._createWithoutValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createWithoutValidationInput() {
    return this._createWithoutValidation;
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

  // error - computed: true, optional: false, required: false
  private _error = new DatastreamPrivateConnectionErrorList(this, "error", false);
  public get error() {
    return this._error;
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

  // private_connection_id - computed: false, optional: false, required: true
  private _privateConnectionId?: string; 
  public get privateConnectionId() {
    return this.getStringAttribute('private_connection_id');
  }
  public set privateConnectionId(value: string) {
    this._privateConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectionIdInput() {
    return this._privateConnectionId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatastreamPrivateConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatastreamPrivateConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_peering_config - computed: false, optional: false, required: true
  private _vpcPeeringConfig = new DatastreamPrivateConnectionVpcPeeringConfigOutputReference(this, "vpc_peering_config");
  public get vpcPeeringConfig() {
    return this._vpcPeeringConfig;
  }
  public putVpcPeeringConfig(value: DatastreamPrivateConnectionVpcPeeringConfig) {
    this._vpcPeeringConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConfigInput() {
    return this._vpcPeeringConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_without_validation: cdktf.booleanToTerraform(this._createWithoutValidation),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      private_connection_id: cdktf.stringToTerraform(this._privateConnectionId),
      project: cdktf.stringToTerraform(this._project),
      timeouts: datastreamPrivateConnectionTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_peering_config: datastreamPrivateConnectionVpcPeeringConfigToTerraform(this._vpcPeeringConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_without_validation: {
        value: cdktf.booleanToHclTerraform(this._createWithoutValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_connection_id: {
        value: cdktf.stringToHclTerraform(this._privateConnectionId),
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
      timeouts: {
        value: datastreamPrivateConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatastreamPrivateConnectionTimeouts",
      },
      vpc_peering_config: {
        value: datastreamPrivateConnectionVpcPeeringConfigToHclTerraform(this._vpcPeeringConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamPrivateConnectionVpcPeeringConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
