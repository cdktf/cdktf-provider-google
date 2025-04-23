// https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkManagementVpcFlowLogsConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. The aggregation interval for the logs. Default value is
  * INTERVAL_5_SEC.   Possible values:  AGGREGATION_INTERVAL_UNSPECIFIED INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#aggregation_interval NetworkManagementVpcFlowLogsConfig#aggregation_interval}
  */
  readonly aggregationInterval?: string;
  /**
  * Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum
  * of 512 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#description NetworkManagementVpcFlowLogsConfig#description}
  */
  readonly description?: string;
  /**
  * Optional. Export filter used to define which VPC Flow Logs should be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#filter_expr NetworkManagementVpcFlowLogsConfig#filter_expr}
  */
  readonly filterExpr?: string;
  /**
  * Optional. The value of the field must be in (0, 1]. The sampling rate
  * of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
  * sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
  * the state field instead. Default value is 1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#flow_sampling NetworkManagementVpcFlowLogsConfig#flow_sampling}
  */
  readonly flowSampling?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#id NetworkManagementVpcFlowLogsConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#interconnect_attachment NetworkManagementVpcFlowLogsConfig#interconnect_attachment}
  */
  readonly interconnectAttachment?: string;
  /**
  * Optional. Resource labels to represent user-provided metadata.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#labels NetworkManagementVpcFlowLogsConfig#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource
  * within its parent collection as described in https://google.aip.dev/122. See documentation
  * for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#location NetworkManagementVpcFlowLogsConfig#location}
  */
  readonly location: string;
  /**
  * Optional. Configures whether all, none or a subset of metadata fields
  * should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
  *   Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#metadata NetworkManagementVpcFlowLogsConfig#metadata}
  */
  readonly metadata?: string;
  /**
  * Optional. Custom metadata fields to include in the reported VPC flow
  * logs. Can only be specified if \"metadata\" was set to CUSTOM_METADATA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#metadata_fields NetworkManagementVpcFlowLogsConfig#metadata_fields}
  */
  readonly metadataFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#project NetworkManagementVpcFlowLogsConfig#project}
  */
  readonly project?: string;
  /**
  * Optional. The state of the VPC Flow Log configuration. Default value
  * is ENABLED. When creating a new configuration, it must be enabled.   Possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#state NetworkManagementVpcFlowLogsConfig#state}
  */
  readonly state?: string;
  /**
  * Required. ID of the 'VpcFlowLogsConfig'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#vpc_flow_logs_config_id NetworkManagementVpcFlowLogsConfig#vpc_flow_logs_config_id}
  */
  readonly vpcFlowLogsConfigId: string;
  /**
  * Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#vpn_tunnel NetworkManagementVpcFlowLogsConfig#vpn_tunnel}
  */
  readonly vpnTunnel?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#timeouts NetworkManagementVpcFlowLogsConfig#timeouts}
  */
  readonly timeouts?: NetworkManagementVpcFlowLogsConfigTimeouts;
}
export interface NetworkManagementVpcFlowLogsConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#create NetworkManagementVpcFlowLogsConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#delete NetworkManagementVpcFlowLogsConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#update NetworkManagementVpcFlowLogsConfig#update}
  */
  readonly update?: string;
}

export function networkManagementVpcFlowLogsConfigTimeoutsToTerraform(struct?: NetworkManagementVpcFlowLogsConfigTimeouts | cdktf.IResolvable): any {
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


export function networkManagementVpcFlowLogsConfigTimeoutsToHclTerraform(struct?: NetworkManagementVpcFlowLogsConfigTimeouts | cdktf.IResolvable): any {
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

export class NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkManagementVpcFlowLogsConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkManagementVpcFlowLogsConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config google_network_management_vpc_flow_logs_config}
*/
export class NetworkManagementVpcFlowLogsConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_management_vpc_flow_logs_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkManagementVpcFlowLogsConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkManagementVpcFlowLogsConfig to import
  * @param importFromId The id of the existing NetworkManagementVpcFlowLogsConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkManagementVpcFlowLogsConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_management_vpc_flow_logs_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_management_vpc_flow_logs_config google_network_management_vpc_flow_logs_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkManagementVpcFlowLogsConfigConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkManagementVpcFlowLogsConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_management_vpc_flow_logs_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.31.0',
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
    this._aggregationInterval = config.aggregationInterval;
    this._description = config.description;
    this._filterExpr = config.filterExpr;
    this._flowSampling = config.flowSampling;
    this._id = config.id;
    this._interconnectAttachment = config.interconnectAttachment;
    this._labels = config.labels;
    this._location = config.location;
    this._metadata = config.metadata;
    this._metadataFields = config.metadataFields;
    this._project = config.project;
    this._state = config.state;
    this._vpcFlowLogsConfigId = config.vpcFlowLogsConfigId;
    this._vpnTunnel = config.vpnTunnel;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation_interval - computed: true, optional: true, required: false
  private _aggregationInterval?: string; 
  public get aggregationInterval() {
    return this.getStringAttribute('aggregation_interval');
  }
  public set aggregationInterval(value: string) {
    this._aggregationInterval = value;
  }
  public resetAggregationInterval() {
    this._aggregationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationIntervalInput() {
    return this._aggregationInterval;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // filter_expr - computed: false, optional: true, required: false
  private _filterExpr?: string; 
  public get filterExpr() {
    return this.getStringAttribute('filter_expr');
  }
  public set filterExpr(value: string) {
    this._filterExpr = value;
  }
  public resetFilterExpr() {
    this._filterExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExprInput() {
    return this._filterExpr;
  }

  // flow_sampling - computed: true, optional: true, required: false
  private _flowSampling?: number; 
  public get flowSampling() {
    return this.getNumberAttribute('flow_sampling');
  }
  public set flowSampling(value: number) {
    this._flowSampling = value;
  }
  public resetFlowSampling() {
    this._flowSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowSamplingInput() {
    return this._flowSampling;
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

  // interconnect_attachment - computed: false, optional: true, required: false
  private _interconnectAttachment?: string; 
  public get interconnectAttachment() {
    return this.getStringAttribute('interconnect_attachment');
  }
  public set interconnectAttachment(value: string) {
    this._interconnectAttachment = value;
  }
  public resetInterconnectAttachment() {
    this._interconnectAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectAttachmentInput() {
    return this._interconnectAttachment;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metadata_fields - computed: false, optional: true, required: false
  private _metadataFields?: string[]; 
  public get metadataFields() {
    return this.getListAttribute('metadata_fields');
  }
  public set metadataFields(value: string[]) {
    this._metadataFields = value;
  }
  public resetMetadataFields() {
    this._metadataFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldsInput() {
    return this._metadataFields;
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

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // vpc_flow_logs_config_id - computed: false, optional: false, required: true
  private _vpcFlowLogsConfigId?: string; 
  public get vpcFlowLogsConfigId() {
    return this.getStringAttribute('vpc_flow_logs_config_id');
  }
  public set vpcFlowLogsConfigId(value: string) {
    this._vpcFlowLogsConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcFlowLogsConfigIdInput() {
    return this._vpcFlowLogsConfigId;
  }

  // vpn_tunnel - computed: false, optional: true, required: false
  private _vpnTunnel?: string; 
  public get vpnTunnel() {
    return this.getStringAttribute('vpn_tunnel');
  }
  public set vpnTunnel(value: string) {
    this._vpnTunnel = value;
  }
  public resetVpnTunnel() {
    this._vpnTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTunnelInput() {
    return this._vpnTunnel;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkManagementVpcFlowLogsConfigTimeouts) {
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
      aggregation_interval: cdktf.stringToTerraform(this._aggregationInterval),
      description: cdktf.stringToTerraform(this._description),
      filter_expr: cdktf.stringToTerraform(this._filterExpr),
      flow_sampling: cdktf.numberToTerraform(this._flowSampling),
      id: cdktf.stringToTerraform(this._id),
      interconnect_attachment: cdktf.stringToTerraform(this._interconnectAttachment),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      metadata: cdktf.stringToTerraform(this._metadata),
      metadata_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._metadataFields),
      project: cdktf.stringToTerraform(this._project),
      state: cdktf.stringToTerraform(this._state),
      vpc_flow_logs_config_id: cdktf.stringToTerraform(this._vpcFlowLogsConfigId),
      vpn_tunnel: cdktf.stringToTerraform(this._vpnTunnel),
      timeouts: networkManagementVpcFlowLogsConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregation_interval: {
        value: cdktf.stringToHclTerraform(this._aggregationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_expr: {
        value: cdktf.stringToHclTerraform(this._filterExpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_sampling: {
        value: cdktf.numberToHclTerraform(this._flowSampling),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interconnect_attachment: {
        value: cdktf.stringToHclTerraform(this._interconnectAttachment),
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
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._metadataFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_flow_logs_config_id: {
        value: cdktf.stringToHclTerraform(this._vpcFlowLogsConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_tunnel: {
        value: cdktf.stringToHclTerraform(this._vpnTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: networkManagementVpcFlowLogsConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkManagementVpcFlowLogsConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
