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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#id DataflowJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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
  readonly labels?: { [key: string]: string };
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
  readonly parameters?: { [key: string]: string };
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
  * If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#skip_wait_on_job_termination DataflowJob#skip_wait_on_job_termination}
  */
  readonly skipWaitOnJobTermination?: boolean | cdktf.IResolvable;
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
  readonly transformNameMapping?: { [key: string]: string };
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

export function dataflowJobTimeoutsToTerraform(struct?: DataflowJobTimeoutsOutputReference | DataflowJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DataflowJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataflowJobTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataflowJobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  public static readonly tfResourceType = "google_dataflow_job";

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
    this._additionalExperiments = config.additionalExperiments;
    this._enableStreamingEngine = config.enableStreamingEngine;
    this._id = config.id;
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
    this._skipWaitOnJobTermination = config.skipWaitOnJobTermination;
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

  // additional_experiments - computed: true, optional: true, required: false
  private _additionalExperiments?: string[]; 
  public get additionalExperiments() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_experiments'));
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
    return this.getBooleanAttribute('enable_streaming_engine');
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
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
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

  // skip_wait_on_job_termination - computed: false, optional: true, required: false
  private _skipWaitOnJobTermination?: boolean | cdktf.IResolvable; 
  public get skipWaitOnJobTermination() {
    return this.getBooleanAttribute('skip_wait_on_job_termination');
  }
  public set skipWaitOnJobTermination(value: boolean | cdktf.IResolvable) {
    this._skipWaitOnJobTermination = value;
  }
  public resetSkipWaitOnJobTermination() {
    this._skipWaitOnJobTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWaitOnJobTerminationInput() {
    return this._skipWaitOnJobTermination;
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
  private _transformNameMapping?: { [key: string]: string }; 
  public get transformNameMapping() {
    return this.getStringMapAttribute('transform_name_mapping');
  }
  public set transformNameMapping(value: { [key: string]: string }) {
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
  private _timeouts = new DataflowJobTimeoutsOutputReference(this, "timeouts");
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
      additional_experiments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalExperiments),
      enable_streaming_engine: cdktf.booleanToTerraform(this._enableStreamingEngine),
      id: cdktf.stringToTerraform(this._id),
      ip_configuration: cdktf.stringToTerraform(this._ipConfiguration),
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      machine_type: cdktf.stringToTerraform(this._machineType),
      max_workers: cdktf.numberToTerraform(this._maxWorkers),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      on_delete: cdktf.stringToTerraform(this._onDelete),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      skip_wait_on_job_termination: cdktf.booleanToTerraform(this._skipWaitOnJobTermination),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      temp_gcs_location: cdktf.stringToTerraform(this._tempGcsLocation),
      template_gcs_path: cdktf.stringToTerraform(this._templateGcsPath),
      transform_name_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(this._transformNameMapping),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: dataflowJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
