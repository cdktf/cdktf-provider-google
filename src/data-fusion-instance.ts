// https://www.terraform.io/docs/providers/google/r/data_fusion_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFusionInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#dataproc_service_account DataFusionInstance#dataproc_service_account}
  */
  readonly dataprocServiceAccount?: string;
  /**
  * An optional description of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#description DataFusionInstance#description}
  */
  readonly description?: string;
  /**
  * Option to enable Stackdriver Logging.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#enable_stackdriver_logging DataFusionInstance#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktf.IResolvable;
  /**
  * Option to enable Stackdriver Monitoring.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#enable_stackdriver_monitoring DataFusionInstance#enable_stackdriver_monitoring}
  */
  readonly enableStackdriverMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#id DataFusionInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource labels for instance to use to annotate any related underlying resources,
such as Compute Engine VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#labels DataFusionInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The ID of the instance or a fully qualified identifier for the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#name DataFusionInstance#name}
  */
  readonly name: string;
  /**
  * Map of additional options used to configure the behavior of Data Fusion instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#options DataFusionInstance#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Specifies whether the Data Fusion instance should be private. If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#private_instance DataFusionInstance#private_instance}
  */
  readonly privateInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#project DataFusionInstance#project}
  */
  readonly project?: string;
  /**
  * The region of the Data Fusion instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#region DataFusionInstance#region}
  */
  readonly region?: string;
  /**
  * Represents the type of Data Fusion instance. Each type is configured with
the default settings for processing and memory.
- BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
using point and click UI. However, there are certain limitations, such as fewer number
of concurrent pipelines, no support for streaming pipelines, etc.
- ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
available, such as support for streaming pipelines, higher number of concurrent pipelines, etc.
- DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but
with restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration 
pipelines at low cost. Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#type DataFusionInstance#type}
  */
  readonly type: string;
  /**
  * Current version of the Data Fusion.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#version DataFusionInstance#version}
  */
  readonly version?: string;
  /**
  * network_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#network_config DataFusionInstance#network_config}
  */
  readonly networkConfig?: DataFusionInstanceNetworkConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#timeouts DataFusionInstance#timeouts}
  */
  readonly timeouts?: DataFusionInstanceTimeouts;
}
export interface DataFusionInstanceNetworkConfig {
  /**
  * The IP range in CIDR notation to use for the managed Data Fusion instance
nodes. This range must not overlap with any other ranges used in the Data Fusion instance network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#ip_allocation DataFusionInstance#ip_allocation}
  */
  readonly ipAllocation: string;
  /**
  * Name of the network in the project with which the tenant project
will be peered for executing pipelines. In case of shared VPC where the network resides in another host
project the network should specified in the form of projects/{host-project-id}/global/networks/{network}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#network DataFusionInstance#network}
  */
  readonly network: string;
}

export function dataFusionInstanceNetworkConfigToTerraform(struct?: DataFusionInstanceNetworkConfigOutputReference | DataFusionInstanceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_allocation: cdktf.stringToTerraform(struct!.ipAllocation),
    network: cdktf.stringToTerraform(struct!.network),
  }
}

export class DataFusionInstanceNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFusionInstanceNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllocation = this._ipAllocation;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAllocation = undefined;
      this._network = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAllocation = value.ipAllocation;
      this._network = value.network;
    }
  }

  // ip_allocation - computed: false, optional: false, required: true
  private _ipAllocation?: string; 
  public get ipAllocation() {
    return this.getStringAttribute('ip_allocation');
  }
  public set ipAllocation(value: string) {
    this._ipAllocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationInput() {
    return this._ipAllocation;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}
export interface DataFusionInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#create DataFusionInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#delete DataFusionInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance#update DataFusionInstance#update}
  */
  readonly update?: string;
}

export function dataFusionInstanceTimeoutsToTerraform(struct?: DataFusionInstanceTimeoutsOutputReference | DataFusionInstanceTimeouts | cdktf.IResolvable): any {
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

export class DataFusionInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFusionInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFusionInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance google_data_fusion_instance}
*/
export class DataFusionInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_fusion_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/data_fusion_instance google_data_fusion_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFusionInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataFusionInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_fusion_instance',
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
    this._dataprocServiceAccount = config.dataprocServiceAccount;
    this._description = config.description;
    this._enableStackdriverLogging = config.enableStackdriverLogging;
    this._enableStackdriverMonitoring = config.enableStackdriverMonitoring;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._options = config.options;
    this._privateInstance = config.privateInstance;
    this._project = config.project;
    this._region = config.region;
    this._type = config.type;
    this._version = config.version;
    this._networkConfig.internalValue = config.networkConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dataproc_service_account - computed: false, optional: true, required: false
  private _dataprocServiceAccount?: string; 
  public get dataprocServiceAccount() {
    return this.getStringAttribute('dataproc_service_account');
  }
  public set dataprocServiceAccount(value: string) {
    this._dataprocServiceAccount = value;
  }
  public resetDataprocServiceAccount() {
    this._dataprocServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocServiceAccountInput() {
    return this._dataprocServiceAccount;
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

  // enable_stackdriver_logging - computed: false, optional: true, required: false
  private _enableStackdriverLogging?: boolean | cdktf.IResolvable; 
  public get enableStackdriverLogging() {
    return this.getBooleanAttribute('enable_stackdriver_logging');
  }
  public set enableStackdriverLogging(value: boolean | cdktf.IResolvable) {
    this._enableStackdriverLogging = value;
  }
  public resetEnableStackdriverLogging() {
    this._enableStackdriverLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStackdriverLoggingInput() {
    return this._enableStackdriverLogging;
  }

  // enable_stackdriver_monitoring - computed: false, optional: true, required: false
  private _enableStackdriverMonitoring?: boolean | cdktf.IResolvable; 
  public get enableStackdriverMonitoring() {
    return this.getBooleanAttribute('enable_stackdriver_monitoring');
  }
  public set enableStackdriverMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableStackdriverMonitoring = value;
  }
  public resetEnableStackdriverMonitoring() {
    this._enableStackdriverMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStackdriverMonitoringInput() {
    return this._enableStackdriverMonitoring;
  }

  // gcs_bucket - computed: true, optional: false, required: false
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // private_instance - computed: false, optional: true, required: false
  private _privateInstance?: boolean | cdktf.IResolvable; 
  public get privateInstance() {
    return this.getBooleanAttribute('private_instance');
  }
  public set privateInstance(value: boolean | cdktf.IResolvable) {
    this._privateInstance = value;
  }
  public resetPrivateInstance() {
    this._privateInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInstanceInput() {
    return this._privateInstance;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_endpoint - computed: true, optional: false, required: false
  public get serviceEndpoint() {
    return this.getStringAttribute('service_endpoint');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // tenant_project_id - computed: true, optional: false, required: false
  public get tenantProjectId() {
    return this.getStringAttribute('tenant_project_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new DataFusionInstanceNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: DataFusionInstanceNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFusionInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFusionInstanceTimeouts) {
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
      dataproc_service_account: cdktf.stringToTerraform(this._dataprocServiceAccount),
      description: cdktf.stringToTerraform(this._description),
      enable_stackdriver_logging: cdktf.booleanToTerraform(this._enableStackdriverLogging),
      enable_stackdriver_monitoring: cdktf.booleanToTerraform(this._enableStackdriverMonitoring),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
      private_instance: cdktf.booleanToTerraform(this._privateInstance),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      network_config: dataFusionInstanceNetworkConfigToTerraform(this._networkConfig.internalValue),
      timeouts: dataFusionInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
