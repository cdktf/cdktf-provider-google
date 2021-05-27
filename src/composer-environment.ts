// https://www.terraform.io/docs/providers/google/r/composer_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComposerEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])?. Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?. No more than 64 labels can be associated with a given environment. Both keys and values must be <= 128 bytes in size.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#labels ComposerEnvironment#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#name ComposerEnvironment#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#project ComposerEnvironment#project}
  */
  readonly project?: string;
  /**
  * The location or Compute Engine region for the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#region ComposerEnvironment#region}
  */
  readonly region?: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#config ComposerEnvironment#config}
  */
  readonly config?: ComposerEnvironmentConfigA[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#timeouts ComposerEnvironment#timeouts}
  */
  readonly timeouts?: ComposerEnvironmentTimeouts;
}
export interface ComposerEnvironmentConfigNodeConfigIpAllocationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#cluster_ipv4_cidr_block ComposerEnvironment#cluster_ipv4_cidr_block}
  */
  readonly clusterIpv4CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#cluster_secondary_range_name ComposerEnvironment#cluster_secondary_range_name}
  */
  readonly clusterSecondaryRangeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#services_ipv4_cidr_block ComposerEnvironment#services_ipv4_cidr_block}
  */
  readonly servicesIpv4CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#services_secondary_range_name ComposerEnvironment#services_secondary_range_name}
  */
  readonly servicesSecondaryRangeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#use_ip_aliases ComposerEnvironment#use_ip_aliases}
  */
  readonly useIpAliases?: boolean;
}

function composerEnvironmentConfigNodeConfigIpAllocationPolicyToTerraform(struct?: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_ipv4_cidr_block: cdktf.stringToTerraform(struct!.clusterIpv4CidrBlock),
    cluster_secondary_range_name: cdktf.stringToTerraform(struct!.clusterSecondaryRangeName),
    services_ipv4_cidr_block: cdktf.stringToTerraform(struct!.servicesIpv4CidrBlock),
    services_secondary_range_name: cdktf.stringToTerraform(struct!.servicesSecondaryRangeName),
    use_ip_aliases: cdktf.booleanToTerraform(struct!.useIpAliases),
  }
}

export interface ComposerEnvironmentConfigNodeConfig {
  /**
  * The disk size in GB used for node VMs. Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#disk_size_gb ComposerEnvironment#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Configuration for controlling how IPs are allocated in the GKE cluster. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#ip_allocation_policy ComposerEnvironment#ip_allocation_policy}
  */
  readonly ipAllocationPolicy?: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy[];
  /**
  * The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#machine_type ComposerEnvironment#machine_type}
  */
  readonly machineType?: string;
  /**
  * The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. The network must belong to the environment's project. If unspecified, the "default" network ID in the environment's project is used. If a Custom Subnet Network is provided, subnetwork must also be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#network ComposerEnvironment#network}
  */
  readonly network?: string;
  /**
  * The set of Google API scopes to be made available on all node VMs. Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#oauth_scopes ComposerEnvironment#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs. If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#service_account ComposerEnvironment#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The Compute Engine subnetwork to be used for machine communications, , specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#subnetwork ComposerEnvironment#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#tags ComposerEnvironment#tags}
  */
  readonly tags?: string[];
  /**
  * The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#zone ComposerEnvironment#zone}
  */
  readonly zone: string;
}

function composerEnvironmentConfigNodeConfigToTerraform(struct?: ComposerEnvironmentConfigNodeConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    ip_allocation_policy: cdktf.listMapper(composerEnvironmentConfigNodeConfigIpAllocationPolicyToTerraform)(struct!.ipAllocationPolicy),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    network: cdktf.stringToTerraform(struct!.network),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}

export interface ComposerEnvironmentConfigPrivateEnvironmentConfig {
  /**
  * The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from web_server_ipv4_cidr_block.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#cloud_sql_ipv4_cidr_block ComposerEnvironment#cloud_sql_ipv4_cidr_block}
  */
  readonly cloudSqlIpv4CidrBlock?: string;
  /**
  * If true, access to the public endpoint of the GKE cluster is denied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#enable_private_endpoint ComposerEnvironment#enable_private_endpoint}
  */
  readonly enablePrivateEndpoint?: boolean;
  /**
  * The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#master_ipv4_cidr_block ComposerEnvironment#master_ipv4_cidr_block}
  */
  readonly masterIpv4CidrBlock?: string;
  /**
  * The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#web_server_ipv4_cidr_block ComposerEnvironment#web_server_ipv4_cidr_block}
  */
  readonly webServerIpv4CidrBlock?: string;
}

function composerEnvironmentConfigPrivateEnvironmentConfigToTerraform(struct?: ComposerEnvironmentConfigPrivateEnvironmentConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloud_sql_ipv4_cidr_block: cdktf.stringToTerraform(struct!.cloudSqlIpv4CidrBlock),
    enable_private_endpoint: cdktf.booleanToTerraform(struct!.enablePrivateEndpoint),
    master_ipv4_cidr_block: cdktf.stringToTerraform(struct!.masterIpv4CidrBlock),
    web_server_ipv4_cidr_block: cdktf.stringToTerraform(struct!.webServerIpv4CidrBlock),
  }
}

export interface ComposerEnvironmentConfigSoftwareConfig {
  /**
  * Apache Airflow configuration properties to override. Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and cannot contain "=" or ";". Section and property names cannot contain characters: "." Apache Airflow configuration property names must be written in snake_case. Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are blacklisted, and cannot be overridden.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#airflow_config_overrides ComposerEnvironment#airflow_config_overrides}
  */
  readonly airflowConfigOverrides?: { [key: string]: string };
  /**
  * Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. Environment variable names must match the regular expression [a-zA-Z_][a-zA-Z0-9_]*. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+), and they cannot match any of the following reserved names: AIRFLOW_HOME C_FORCE_ROOT CONTAINER_NAME DAGS_FOLDER GCP_PROJECT GCS_BUCKET GKE_CLUSTER_NAME SQL_DATABASE SQL_INSTANCE SQL_PASSWORD SQL_PROJECT SQL_REGION SQL_USER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#env_variables ComposerEnvironment#env_variables}
  */
  readonly envVariables?: { [key: string]: string };
  /**
  * The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression composer-[0-9]+\.[0-9]+(\.[0-9]+)?-airflow-[0-9]+\.[0-9]+(\.[0-9]+.*)?. The Cloud Composer portion of the version is a semantic version. The portion of the image version following 'airflow-' is an official Apache Airflow repository release name. See documentation for allowed release names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#image_version ComposerEnvironment#image_version}
  */
  readonly imageVersion?: string;
  /**
  * Custom Python Package Index (PyPI) packages to be installed in the environment. Keys refer to the lowercase package name (e.g. "numpy"). Values are the lowercase extras and version specifier (e.g. "==1.12.0", "[devel,gcp_api]", "[devel]>=1.8.2, <1.9.2"). To specify a package without pinning it to a version specifier, use the empty string as the value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#pypi_packages ComposerEnvironment#pypi_packages}
  */
  readonly pypiPackages?: { [key: string]: string };
  /**
  * The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. Can be set to '2' or '3'. If not specified, the default is '2'. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#python_version ComposerEnvironment#python_version}
  */
  readonly pythonVersion?: string;
}

function composerEnvironmentConfigSoftwareConfigToTerraform(struct?: ComposerEnvironmentConfigSoftwareConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    airflow_config_overrides: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.airflowConfigOverrides),
    env_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.envVariables),
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
    pypi_packages: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.pypiPackages),
    python_version: cdktf.stringToTerraform(struct!.pythonVersion),
  }
}

export interface ComposerEnvironmentConfigA {
  /**
  * The number of nodes in the Kubernetes Engine cluster that will be used to run this environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#node_count ComposerEnvironment#node_count}
  */
  readonly nodeCount?: number;
  /**
  * node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#node_config ComposerEnvironment#node_config}
  */
  readonly nodeConfig?: ComposerEnvironmentConfigNodeConfig[];
  /**
  * private_environment_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#private_environment_config ComposerEnvironment#private_environment_config}
  */
  readonly privateEnvironmentConfig?: ComposerEnvironmentConfigPrivateEnvironmentConfig[];
  /**
  * software_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#software_config ComposerEnvironment#software_config}
  */
  readonly softwareConfig?: ComposerEnvironmentConfigSoftwareConfig[];
}

function composerEnvironmentConfigAToTerraform(struct?: ComposerEnvironmentConfigA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_config: cdktf.listMapper(composerEnvironmentConfigNodeConfigToTerraform)(struct!.nodeConfig),
    private_environment_config: cdktf.listMapper(composerEnvironmentConfigPrivateEnvironmentConfigToTerraform)(struct!.privateEnvironmentConfig),
    software_config: cdktf.listMapper(composerEnvironmentConfigSoftwareConfigToTerraform)(struct!.softwareConfig),
  }
}

export interface ComposerEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#create ComposerEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#delete ComposerEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html#update ComposerEnvironment#update}
  */
  readonly update?: string;
}

function composerEnvironmentTimeoutsToTerraform(struct?: ComposerEnvironmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html google_composer_environment}
*/
export class ComposerEnvironment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/composer_environment.html google_composer_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComposerEnvironmentConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._project
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string ) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // config - computed: false, optional: true, required: false
  private _config?: ComposerEnvironmentConfigA[];
  public get config() {
    return this.interpolationForAttribute('config') as any;
  }
  public set config(value: ComposerEnvironmentConfigA[] ) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComposerEnvironmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComposerEnvironmentTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      config: cdktf.listMapper(composerEnvironmentConfigAToTerraform)(this._config),
      timeouts: composerEnvironmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
