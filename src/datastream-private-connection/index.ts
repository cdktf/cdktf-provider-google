// https://www.terraform.io/docs/providers/google/r/datastream_private_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatastreamPrivateConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_private_connection#display_name DatastreamPrivateConnection#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_private_connection#id DatastreamPrivateConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_private_connection#labels DatastreamPrivateConnection#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the location this repository is located in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_private_connection#location DatastreamPrivateConnection#location}
  */
  readonly location: string;
  /**
  * The private connectivity identifier.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_private_connection#private_connection_id DatastreamPrivateConnection#private_connection_id}
  */
  readonly privateConnectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_private_connection#project DatastreamPrivateConnection#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_private_connection#timeouts DatastreamPrivateConnection#timeouts}
  */
  readonly timeouts?: DatastreamPrivateConnectionTimeouts;
  /**
  * vpc_peering_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_private_connection#vpc_peering_config DatastreamPrivateConnection#vpc_peering_config}
  */
  readonly vpcPeeringConfig: DatastreamPrivateConnectionVpcPeeringConfig;
}
export interface DatastreamPrivateConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_private_connection#create DatastreamPrivateConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_private_connection#delete DatastreamPrivateConnection#delete}
  */
  readonly delete?: string;
}

export function datastreamPrivateConnectionTimeoutsToTerraform(struct?: DatastreamPrivateConnectionTimeoutsOutputReference | DatastreamPrivateConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class DatastreamPrivateConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamPrivateConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
export interface DatastreamPrivateConnectionVpcPeeringConfig {
  /**
  * A free subnet for peering. (CIDR of /29)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_private_connection#subnet DatastreamPrivateConnection#subnet}
  */
  readonly subnet: string;
  /**
  * Fully qualified name of the VPC that Datastream will peer to.
Format: projects/{project}/global/{networks}/{name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_private_connection#vpc DatastreamPrivateConnection#vpc}
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/datastream_private_connection google_datastream_private_connection}
*/
export class DatastreamPrivateConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_datastream_private_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/datastream_private_connection google_datastream_private_connection} Resource
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
        providerVersion: '4.41.0',
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
}
