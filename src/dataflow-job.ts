// https://www.terraform.io/docs/providers/google/r/dataflow_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataflowJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#additional_experiments DataflowJob#additional_experiments}
  */
  readonly additionalExperiments?: string[];
  /**
  * Indicates if the job should use the streaming engine feature.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#enable_streaming_engine DataflowJob#enable_streaming_engine}
  */
  readonly enableStreamingEngine?: boolean | cdktf.IResolvable;
  /**
  * The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#ip_configuration DataflowJob#ip_configuration}
  */
  readonly ipConfiguration?: string;
  /**
  * The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#kms_key_name DataflowJob#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * User labels to be specified for the job. Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: Google-provided Dataflow templates often provide default labels that begin with goog-dataflow-provided. Unless explicitly set in config, these labels will be ignored to prevent diffs on re-apply.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#labels DataflowJob#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The machine type to use for the job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#machine_type DataflowJob#machine_type}
  */
  readonly machineType?: string;
  /**
  * The number of workers permitted to work on the job. More workers may improve processing speed at additional cost.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#max_workers DataflowJob#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * A unique name for the resource, required by Dataflow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#name DataflowJob#name}
  */
  readonly name: string;
  /**
  * The network to which VMs will be assigned. If it is not provided, "default" will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#network DataflowJob#network}
  */
  readonly network?: string;
  /**
  * One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#on_delete DataflowJob#on_delete}
  */
  readonly onDelete?: string;
  /**
  * Key/Value pairs to be passed to the Dataflow job (as used in the template).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#parameters DataflowJob#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The project in which the resource belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#project DataflowJob#project}
  */
  readonly project?: string;
  /**
  * The region in which the created job should run.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#region DataflowJob#region}
  */
  readonly region?: string;
  /**
  * The Service Account email used to create the job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#service_account_email DataflowJob#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#subnetwork DataflowJob#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#temp_gcs_location DataflowJob#temp_gcs_location}
  */
  readonly tempGcsLocation: string;
  /**
  * The Google Cloud Storage path to the Dataflow job template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#template_gcs_path DataflowJob#template_gcs_path}
  */
  readonly templateGcsPath: string;
  /**
  * Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#transform_name_mapping DataflowJob#transform_name_mapping}
  */
  readonly transformNameMapping?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The zone in which the created job should run. If it is not provided, the provider zone is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#zone DataflowJob#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#timeouts DataflowJob#timeouts}
  */
  readonly timeouts?: DataflowJobTimeouts;
}
export interface DataflowJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#update DataflowJob#update}
  */
  readonly update?: string;
}

export function dataflowJobTimeoutsToTerraform(struct?: DataflowJobTimeoutsOutputReference | DataflowJobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DataflowJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataflowJobTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataflowJobTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._update = value.update;
    }
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dataflow_job google_dataflow_job}
*/
export class DataflowJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_dataflow_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dataflow_job google_dataflow_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataflowJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataflowJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataflow_job',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalExperiments = config.additionalExperiments;
    this._enableStreamingEngine = config.enableStreamingEngine;
    this._ipConfiguration = config.ipConfiguration;
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._machineType = config.machineType;
    this._maxWorkers = config.maxWorkers;
    this._name = config.name;
    this._network = config.network;
    this._onDelete = config.onDelete;
    this._parameters = config.parameters;
    this._project = config.project;
    this._region = config.region;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._subnetwork = config.subnetwork;
    this._tempGcsLocation = config.tempGcsLocation;
    this._templateGcsPath = config.templateGcsPath;
    this._transformNameMapping = config.transformNameMapping;
    this._zone = config.zone;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_experiments - computed: false, optional: true, required: false
  private _additionalExperiments?: string[]; 
  public get additionalExperiments() {
    return this.getListAttribute('additional_experiments');
  }
  public set additionalExperiments(value: string[]) {
    this._additionalExperiments = value;
  }
  public resetAdditionalExperiments() {
    this._additionalExperiments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExperimentsInput() {
    return this._additionalExperiments;
  }

  // enable_streaming_engine - computed: false, optional: true, required: false
  private _enableStreamingEngine?: boolean | cdktf.IResolvable; 
  public get enableStreamingEngine() {
    return this.getBooleanAttribute('enable_streaming_engine') as any;
  }
  public set enableStreamingEngine(value: boolean | cdktf.IResolvable) {
    this._enableStreamingEngine = value;
  }
  public resetEnableStreamingEngine() {
    this._enableStreamingEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStreamingEngineInput() {
    return this._enableStreamingEngine;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_configuration - computed: false, optional: true, required: false
  private _ipConfiguration?: string; 
  public get ipConfiguration() {
    return this.getStringAttribute('ip_configuration');
  }
  public set ipConfiguration(value: string) {
    this._ipConfiguration = value;
  }
  public resetIpConfiguration() {
    this._ipConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration;
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // on_delete - computed: false, optional: true, required: false
  private _onDelete?: string; 
  public get onDelete() {
    return this.getStringAttribute('on_delete');
  }
  public set onDelete(value: string) {
    this._onDelete = value;
  }
  public resetOnDelete() {
    this._onDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDeleteInput() {
    return this._onDelete;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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

  // region - computed: false, optional: true, required: false
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

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // temp_gcs_location - computed: false, optional: false, required: true
  private _tempGcsLocation?: string; 
  public get tempGcsLocation() {
    return this.getStringAttribute('temp_gcs_location');
  }
  public set tempGcsLocation(value: string) {
    this._tempGcsLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tempGcsLocationInput() {
    return this._tempGcsLocation;
  }

  // template_gcs_path - computed: false, optional: false, required: true
  private _templateGcsPath?: string; 
  public get templateGcsPath() {
    return this.getStringAttribute('template_gcs_path');
  }
  public set templateGcsPath(value: string) {
    this._templateGcsPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateGcsPathInput() {
    return this._templateGcsPath;
  }

  // transform_name_mapping - computed: false, optional: true, required: false
  private _transformNameMapping?: { [key: string]: string } | cdktf.IResolvable; 
  public get transformNameMapping() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('transform_name_mapping') as any;
  }
  public set transformNameMapping(value: { [key: string]: string } | cdktf.IResolvable) {
    this._transformNameMapping = value;
  }
  public resetTransformNameMapping() {
    this._transformNameMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformNameMappingInput() {
    return this._transformNameMapping;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataflowJobTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataflowJobTimeouts) {
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
      additional_experiments: cdktf.listMapper(cdktf.stringToTerraform)(this._additionalExperiments),
      enable_streaming_engine: cdktf.booleanToTerraform(this._enableStreamingEngine),
      ip_configuration: cdktf.stringToTerraform(this._ipConfiguration),
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      machine_type: cdktf.stringToTerraform(this._machineType),
      max_workers: cdktf.numberToTerraform(this._maxWorkers),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      on_delete: cdktf.stringToTerraform(this._onDelete),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      temp_gcs_location: cdktf.stringToTerraform(this._tempGcsLocation),
      template_gcs_path: cdktf.stringToTerraform(this._templateGcsPath),
      transform_name_mapping: cdktf.hashMapper(cdktf.anyToTerraform)(this._transformNameMapping),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: dataflowJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
