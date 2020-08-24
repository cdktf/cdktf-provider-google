// https://www.terraform.io/docs/providers/google/r/composer_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComposerEnvironmentConfig extends TerraformMetaArguments {
  /** User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])?. Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?. No more than 64 labels can be associated with a given environment. Both keys and values must be <= 128 bytes in size. */
  readonly labels?: { [key: string]: string };
  /** Name of the environment. */
  readonly name: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** The location or Compute Engine region for the environment. */
  readonly region?: string;
  /** config block */
  readonly config?: ComposerEnvironmentConfigA[];
  /** timeouts block */
  readonly timeouts?: ComposerEnvironmentTimeouts;
}
export interface ComposerEnvironmentConfigNodeConfigIpAllocationPolicy {
  readonly clusterIpv4CidrBlock?: string;
  readonly clusterSecondaryRangeName?: string;
  readonly servicesIpv4CidrBlock?: string;
  readonly servicesSecondaryRangeName?: string;
  readonly useIpAliases?: boolean;
}
export interface ComposerEnvironmentConfigNodeConfig {
  /** The disk size in GB used for node VMs. Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated. */
  readonly diskSizeGb?: number;
  /** Configuration for controlling how IPs are allocated in the GKE cluster. Cannot be updated. */
  readonly ipAllocationPolicy?: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy[];
  /** The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. */
  readonly machineType?: string;
  /** The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. The network must belong to the environment's project. If unspecified, the "default" network ID in the environment's project is used. If a Custom Subnet Network is provided, subnetwork must also be provided. */
  readonly network?: string;
  /** The set of Google API scopes to be made available on all node VMs. Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. */
  readonly oauthScopes?: string[];
  /** The Google Cloud Platform Service Account to be used by the node VMs. If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment. */
  readonly serviceAccount?: string;
  /** The Compute Engine subnetwork to be used for machine communications, , specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region. */
  readonly subnetwork?: string;
  /** The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated. */
  readonly tags?: string[];
  /** The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. */
  readonly zone: string;
}
export interface ComposerEnvironmentConfigPrivateEnvironmentConfig {
  /** The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from web_server_ipv4_cidr_block. */
  readonly cloudSqlIpv4CidrBlock?: string;
  /** If true, access to the public endpoint of the GKE cluster is denied. */
  readonly enablePrivateEndpoint?: boolean;
  /** The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used. */
  readonly masterIpv4CidrBlock?: string;
  /** The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. */
  readonly webServerIpv4CidrBlock?: string;
}
export interface ComposerEnvironmentConfigSoftwareConfig {
  /** Apache Airflow configuration properties to override. Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and cannot contain "=" or ";". Section and property names cannot contain characters: "." Apache Airflow configuration property names must be written in snake_case. Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are blacklisted, and cannot be overridden. */
  readonly airflowConfigOverrides?: { [key: string]: string };
  /** Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. Environment variable names must match the regular expression [a-zA-Z_][a-zA-Z0-9_]*. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+), and they cannot match any of the following reserved names: AIRFLOW_HOME C_FORCE_ROOT CONTAINER_NAME DAGS_FOLDER GCP_PROJECT GCS_BUCKET GKE_CLUSTER_NAME SQL_DATABASE SQL_INSTANCE SQL_PASSWORD SQL_PROJECT SQL_REGION SQL_USER. */
  readonly envVariables?: { [key: string]: string };
  /** The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression composer-[0-9]+\.[0-9]+(\.[0-9]+)?-airflow-[0-9]+\.[0-9]+(\.[0-9]+.*)?. The Cloud Composer portion of the version is a semantic version. The portion of the image version following 'airflow-' is an official Apache Airflow repository release name. See documentation for allowed release names. */
  readonly imageVersion?: string;
  /** Custom Python Package Index (PyPI) packages to be installed in the environment. Keys refer to the lowercase package name (e.g. "numpy"). Values are the lowercase extras and version specifier (e.g. "==1.12.0", "[devel,gcp_api]", "[devel]>=1.8.2, <1.9.2"). To specify a package without pinning it to a version specifier, use the empty string as the value. */
  readonly pypiPackages?: { [key: string]: string };
  /** The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. Can be set to '2' or '3'. If not specified, the default is '2'. Cannot be updated. */
  readonly pythonVersion?: string;
}
export interface ComposerEnvironmentConfigA {
  /** The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. */
  readonly nodeCount?: number;
  /** node_config block */
  readonly nodeConfig?: ComposerEnvironmentConfigNodeConfig[];
  /** private_environment_config block */
  readonly privateEnvironmentConfig?: ComposerEnvironmentConfigPrivateEnvironmentConfig[];
  /** software_config block */
  readonly softwareConfig?: ComposerEnvironmentConfigSoftwareConfig[];
}
export interface ComposerEnvironmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComposerEnvironment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComposerEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_composer_environment',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._config = config.config;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
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

  // config - computed: false, optional: true, required: false
  private _config?: ComposerEnvironmentConfigA[];
  public get config() {
    return this._config;
  }
  public set config(value: ComposerEnvironmentConfigA[] | undefined) {
    this._config = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComposerEnvironmentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComposerEnvironmentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: this._labels,
      name: this._name,
      project: this._project,
      region: this._region,
      config: this._config,
      timeouts: this._timeouts,
    };
  }
}
