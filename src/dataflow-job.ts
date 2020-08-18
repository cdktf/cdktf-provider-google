// https://www.terraform.io/docs/providers/google/r/dataflow_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataflowJobConfig extends TerraformMetaArguments {
  /** List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. */
  readonly additionalExperiments?: string[];
  /** The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". */
  readonly ipConfiguration?: string;
  /** User labels to be specified for the job. Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: Google-provided Dataflow templates often provide default labels that begin with goog-dataflow-provided. Unless explicitly set in config, these labels will be ignored to prevent diffs on re-apply. */
  readonly labels?: { [key: string]: string };
  /** The machine type to use for the job. */
  readonly machineType?: string;
  /** The number of workers permitted to work on the job. More workers may improve processing speed at additional cost. */
  readonly maxWorkers?: number;
  /** A unique name for the resource, required by Dataflow. */
  readonly name: string;
  /** The network to which VMs will be assigned. If it is not provided, "default" will be used. */
  readonly network?: string;
  /** One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy. */
  readonly onDelete?: string;
  /** Key/Value pairs to be passed to the Dataflow job (as used in the template). */
  readonly parameters?: { [key: string]: string };
  /** The project in which the resource belongs. */
  readonly project?: string;
  /** The region in which the created job should run. */
  readonly region?: string;
  /** The Service Account email used to create the job. */
  readonly serviceAccountEmail?: string;
  /** The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". */
  readonly subnetwork?: string;
  /** A writeable location on GCS for the Dataflow job to dump its temporary data. */
  readonly tempGcsLocation: string;
  /** The GCS path to the Dataflow job template. */
  readonly templateGcsPath: string;
  /** The zone in which the created job should run. If it is not provided, the provider zone is used. */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: DataflowJobTimeouts;
}
export interface DataflowJobTimeouts {
  readonly update?: string;
}

// Resource

export class DataflowJob extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._ipConfiguration = config.ipConfiguration;
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
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_experiments - computed: false, optional: true, required: false
  private _additionalExperiments?: string[];
  public get additionalExperiments() {
    return this._additionalExperiments;
  }
  public set additionalExperiments(value: string[] | undefined) {
    this._additionalExperiments = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_configuration - computed: false, optional: true, required: false
  private _ipConfiguration?: string;
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public set ipConfiguration(value: string | undefined) {
    this._ipConfiguration = value;
  }

  // job_id - computed: true, optional: false, required: true
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string;
  public get machineType() {
    return this._machineType;
  }
  public set machineType(value: string | undefined) {
    this._machineType = value;
  }

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number;
  public get maxWorkers() {
    return this._maxWorkers;
  }
  public set maxWorkers(value: number | undefined) {
    this._maxWorkers = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string;
  public get network() {
    return this._network;
  }
  public set network(value: string | undefined) {
    this._network = value;
  }

  // on_delete - computed: false, optional: true, required: false
  private _onDelete?: string;
  public get onDelete() {
    return this._onDelete;
  }
  public set onDelete(value: string | undefined) {
    this._onDelete = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string;
  public get serviceAccountEmail() {
    return this._serviceAccountEmail;
  }
  public set serviceAccountEmail(value: string | undefined) {
    this._serviceAccountEmail = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string;
  public get subnetwork() {
    return this._subnetwork;
  }
  public set subnetwork(value: string | undefined) {
    this._subnetwork = value;
  }

  // temp_gcs_location - computed: false, optional: false, required: true
  private _tempGcsLocation: string;
  public get tempGcsLocation() {
    return this._tempGcsLocation;
  }
  public set tempGcsLocation(value: string) {
    this._tempGcsLocation = value;
  }

  // template_gcs_path - computed: false, optional: false, required: true
  private _templateGcsPath: string;
  public get templateGcsPath() {
    return this._templateGcsPath;
  }
  public set templateGcsPath(value: string) {
    this._templateGcsPath = value;
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone;
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataflowJobTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataflowJobTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_experiments: this._additionalExperiments,
      ip_configuration: this._ipConfiguration,
      labels: this._labels,
      machine_type: this._machineType,
      max_workers: this._maxWorkers,
      name: this._name,
      network: this._network,
      on_delete: this._onDelete,
      parameters: this._parameters,
      project: this._project,
      region: this._region,
      service_account_email: this._serviceAccountEmail,
      subnetwork: this._subnetwork,
      temp_gcs_location: this._tempGcsLocation,
      template_gcs_path: this._templateGcsPath,
      zone: this._zone,
      timeouts: this._timeouts,
    };
  }
}
