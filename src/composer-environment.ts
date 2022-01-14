// https://www.terraform.io/docs/providers/google/r/composer_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComposerEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])?. Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?. No more than 64 labels can be associated with a given environment. Both keys and values must be <= 128 bytes in size.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#labels ComposerEnvironment#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#name ComposerEnvironment#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#project ComposerEnvironment#project}
  */
  readonly project?: string;
  /**
  * The location or Compute Engine region for the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#region ComposerEnvironment#region}
  */
  readonly region?: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#config ComposerEnvironment#config}
  */
  readonly config?: ComposerEnvironmentConfigA;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#timeouts ComposerEnvironment#timeouts}
  */
  readonly timeouts?: ComposerEnvironmentTimeouts;
}
export interface ComposerEnvironmentConfigNodeConfigIpAllocationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cluster_ipv4_cidr_block ComposerEnvironment#cluster_ipv4_cidr_block}
  */
  readonly clusterIpv4CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cluster_secondary_range_name ComposerEnvironment#cluster_secondary_range_name}
  */
  readonly clusterSecondaryRangeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#services_ipv4_cidr_block ComposerEnvironment#services_ipv4_cidr_block}
  */
  readonly servicesIpv4CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#services_secondary_range_name ComposerEnvironment#services_secondary_range_name}
  */
  readonly servicesSecondaryRangeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#use_ip_aliases ComposerEnvironment#use_ip_aliases}
  */
  readonly useIpAliases?: boolean | cdktf.IResolvable;
}

export function composerEnvironmentConfigNodeConfigIpAllocationPolicyToTerraform(struct?: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  * The disk size in GB used for node VMs. Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#disk_size_gb ComposerEnvironment#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Configuration for controlling how IPs are allocated in the GKE cluster. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#ip_allocation_policy ComposerEnvironment#ip_allocation_policy}
  */
  readonly ipAllocationPolicy?: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy[];
  /**
  * The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#machine_type ComposerEnvironment#machine_type}
  */
  readonly machineType?: string;
  /**
  * The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. The network must belong to the environment's project. If unspecified, the "default" network ID in the environment's project is used. If a Custom Subnet Network is provided, subnetwork must also be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#network ComposerEnvironment#network}
  */
  readonly network?: string;
  /**
  * The set of Google API scopes to be made available on all node VMs. Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#oauth_scopes ComposerEnvironment#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs. If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#service_account ComposerEnvironment#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The Compute Engine subnetwork to be used for machine communications, , specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#subnetwork ComposerEnvironment#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#tags ComposerEnvironment#tags}
  */
  readonly tags?: string[];
  /**
  * The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#zone ComposerEnvironment#zone}
  */
  readonly zone?: string;
}

export function composerEnvironmentConfigNodeConfigToTerraform(struct?: ComposerEnvironmentConfigNodeConfigOutputReference | ComposerEnvironmentConfigNodeConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class ComposerEnvironmentConfigNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComposerEnvironmentConfigNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._ipAllocationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllocationPolicy = this._ipAllocationPolicy;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSizeGb = undefined;
      this._ipAllocationPolicy = undefined;
      this._machineType = undefined;
      this._network = undefined;
      this._oauthScopes = undefined;
      this._serviceAccount = undefined;
      this._subnetwork = undefined;
      this._tags = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSizeGb = value.diskSizeGb;
      this._ipAllocationPolicy = value.ipAllocationPolicy;
      this._machineType = value.machineType;
      this._network = value.network;
      this._oauthScopes = value.oauthScopes;
      this._serviceAccount = value.serviceAccount;
      this._subnetwork = value.subnetwork;
      this._tags = value.tags;
      this._zone = value.zone;
    }
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // ip_allocation_policy - computed: true, optional: true, required: false
  private _ipAllocationPolicy?: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy[]; 
  public get ipAllocationPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_allocation_policy') as any;
  }
  public set ipAllocationPolicy(value: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy[]) {
    this._ipAllocationPolicy = value;
  }
  public resetIpAllocationPolicy() {
    this._ipAllocationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationPolicyInput() {
    return this._ipAllocationPolicy;
  }

  // machine_type - computed: true, optional: true, required: false
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

  // network - computed: true, optional: true, required: false
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

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone - computed: true, optional: true, required: false
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
}
export interface ComposerEnvironmentConfigPrivateEnvironmentConfig {
  /**
  * The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from web_server_ipv4_cidr_block.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cloud_sql_ipv4_cidr_block ComposerEnvironment#cloud_sql_ipv4_cidr_block}
  */
  readonly cloudSqlIpv4CidrBlock?: string;
  /**
  * If true, access to the public endpoint of the GKE cluster is denied. If this field is set to true, ip_allocation_policy.use_ip_aliases must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#enable_private_endpoint ComposerEnvironment#enable_private_endpoint}
  */
  readonly enablePrivateEndpoint?: boolean | cdktf.IResolvable;
  /**
  * The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#master_ipv4_cidr_block ComposerEnvironment#master_ipv4_cidr_block}
  */
  readonly masterIpv4CidrBlock?: string;
  /**
  * The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#web_server_ipv4_cidr_block ComposerEnvironment#web_server_ipv4_cidr_block}
  */
  readonly webServerIpv4CidrBlock?: string;
}

export function composerEnvironmentConfigPrivateEnvironmentConfigToTerraform(struct?: ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference | ComposerEnvironmentConfigPrivateEnvironmentConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_sql_ipv4_cidr_block: cdktf.stringToTerraform(struct!.cloudSqlIpv4CidrBlock),
    enable_private_endpoint: cdktf.booleanToTerraform(struct!.enablePrivateEndpoint),
    master_ipv4_cidr_block: cdktf.stringToTerraform(struct!.masterIpv4CidrBlock),
    web_server_ipv4_cidr_block: cdktf.stringToTerraform(struct!.webServerIpv4CidrBlock),
  }
}

export class ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComposerEnvironmentConfigPrivateEnvironmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudSqlIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSqlIpv4CidrBlock = this._cloudSqlIpv4CidrBlock;
    }
    if (this._enablePrivateEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateEndpoint = this._enablePrivateEndpoint;
    }
    if (this._masterIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterIpv4CidrBlock = this._masterIpv4CidrBlock;
    }
    if (this._webServerIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.webServerIpv4CidrBlock = this._webServerIpv4CidrBlock;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigPrivateEnvironmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudSqlIpv4CidrBlock = undefined;
      this._enablePrivateEndpoint = undefined;
      this._masterIpv4CidrBlock = undefined;
      this._webServerIpv4CidrBlock = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudSqlIpv4CidrBlock = value.cloudSqlIpv4CidrBlock;
      this._enablePrivateEndpoint = value.enablePrivateEndpoint;
      this._masterIpv4CidrBlock = value.masterIpv4CidrBlock;
      this._webServerIpv4CidrBlock = value.webServerIpv4CidrBlock;
    }
  }

  // cloud_sql_ipv4_cidr_block - computed: true, optional: true, required: false
  private _cloudSqlIpv4CidrBlock?: string; 
  public get cloudSqlIpv4CidrBlock() {
    return this.getStringAttribute('cloud_sql_ipv4_cidr_block');
  }
  public set cloudSqlIpv4CidrBlock(value: string) {
    this._cloudSqlIpv4CidrBlock = value;
  }
  public resetCloudSqlIpv4CidrBlock() {
    this._cloudSqlIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlIpv4CidrBlockInput() {
    return this._cloudSqlIpv4CidrBlock;
  }

  // enable_private_endpoint - computed: false, optional: true, required: false
  private _enablePrivateEndpoint?: boolean | cdktf.IResolvable; 
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint') as any;
  }
  public set enablePrivateEndpoint(value: boolean | cdktf.IResolvable) {
    this._enablePrivateEndpoint = value;
  }
  public resetEnablePrivateEndpoint() {
    this._enablePrivateEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateEndpointInput() {
    return this._enablePrivateEndpoint;
  }

  // master_ipv4_cidr_block - computed: true, optional: true, required: false
  private _masterIpv4CidrBlock?: string; 
  public get masterIpv4CidrBlock() {
    return this.getStringAttribute('master_ipv4_cidr_block');
  }
  public set masterIpv4CidrBlock(value: string) {
    this._masterIpv4CidrBlock = value;
  }
  public resetMasterIpv4CidrBlock() {
    this._masterIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIpv4CidrBlockInput() {
    return this._masterIpv4CidrBlock;
  }

  // web_server_ipv4_cidr_block - computed: true, optional: true, required: false
  private _webServerIpv4CidrBlock?: string; 
  public get webServerIpv4CidrBlock() {
    return this.getStringAttribute('web_server_ipv4_cidr_block');
  }
  public set webServerIpv4CidrBlock(value: string) {
    this._webServerIpv4CidrBlock = value;
  }
  public resetWebServerIpv4CidrBlock() {
    this._webServerIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServerIpv4CidrBlockInput() {
    return this._webServerIpv4CidrBlock;
  }
}
export interface ComposerEnvironmentConfigSoftwareConfig {
  /**
  * Apache Airflow configuration properties to override. Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and cannot contain "=" or ";". Section and property names cannot contain characters: "." Apache Airflow configuration property names must be written in snake_case. Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are blacklisted, and cannot be overridden.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#airflow_config_overrides ComposerEnvironment#airflow_config_overrides}
  */
  readonly airflowConfigOverrides?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Additional environment variables to provide to the Apache Airflow schedulerf, worker, and webserver processes. Environment variable names must match the regular expression [a-zA-Z_][a-zA-Z0-9_]*. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+), and they cannot match any of the following reserved names: AIRFLOW_HOME C_FORCE_ROOT CONTAINER_NAME DAGS_FOLDER GCP_PROJECT GCS_BUCKET GKE_CLUSTER_NAME SQL_DATABASE SQL_INSTANCE SQL_PASSWORD SQL_PROJECT SQL_REGION SQL_USER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#env_variables ComposerEnvironment#env_variables}
  */
  readonly envVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression composer-[0-9]+\.[0-9]+(\.[0-9]+)?-airflow-[0-9]+\.[0-9]+(\.[0-9]+.*)?. The Cloud Composer portion of the version is a semantic version. The portion of the image version following 'airflow-' is an official Apache Airflow repository release name. See documentation for allowed release names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#image_version ComposerEnvironment#image_version}
  */
  readonly imageVersion?: string;
  /**
  * Custom Python Package Index (PyPI) packages to be installed in the environment. Keys refer to the lowercase package name (e.g. "numpy"). Values are the lowercase extras and version specifier (e.g. "==1.12.0", "[devel,gcp_api]", "[devel]>=1.8.2, <1.9.2"). To specify a package without pinning it to a version specifier, use the empty string as the value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#pypi_packages ComposerEnvironment#pypi_packages}
  */
  readonly pypiPackages?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. Can be set to '2' or '3'. If not specified, the default is '2'. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#python_version ComposerEnvironment#python_version}
  */
  readonly pythonVersion?: string;
  /**
  * The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#scheduler_count ComposerEnvironment#scheduler_count}
  */
  readonly schedulerCount?: number;
}

export function composerEnvironmentConfigSoftwareConfigToTerraform(struct?: ComposerEnvironmentConfigSoftwareConfigOutputReference | ComposerEnvironmentConfigSoftwareConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    airflow_config_overrides: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.airflowConfigOverrides),
    env_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.envVariables),
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
    pypi_packages: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.pypiPackages),
    python_version: cdktf.stringToTerraform(struct!.pythonVersion),
    scheduler_count: cdktf.numberToTerraform(struct!.schedulerCount),
  }
}

export class ComposerEnvironmentConfigSoftwareConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComposerEnvironmentConfigSoftwareConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._airflowConfigOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.airflowConfigOverrides = this._airflowConfigOverrides;
    }
    if (this._envVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVariables = this._envVariables;
    }
    if (this._imageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersion = this._imageVersion;
    }
    if (this._pypiPackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.pypiPackages = this._pypiPackages;
    }
    if (this._pythonVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonVersion = this._pythonVersion;
    }
    if (this._schedulerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerCount = this._schedulerCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigSoftwareConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._airflowConfigOverrides = undefined;
      this._envVariables = undefined;
      this._imageVersion = undefined;
      this._pypiPackages = undefined;
      this._pythonVersion = undefined;
      this._schedulerCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._airflowConfigOverrides = value.airflowConfigOverrides;
      this._envVariables = value.envVariables;
      this._imageVersion = value.imageVersion;
      this._pypiPackages = value.pypiPackages;
      this._pythonVersion = value.pythonVersion;
      this._schedulerCount = value.schedulerCount;
    }
  }

  // airflow_config_overrides - computed: false, optional: true, required: false
  private _airflowConfigOverrides?: { [key: string]: string } | cdktf.IResolvable; 
  public get airflowConfigOverrides() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('airflow_config_overrides') as any;
  }
  public set airflowConfigOverrides(value: { [key: string]: string } | cdktf.IResolvable) {
    this._airflowConfigOverrides = value;
  }
  public resetAirflowConfigOverrides() {
    this._airflowConfigOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowConfigOverridesInput() {
    return this._airflowConfigOverrides;
  }

  // env_variables - computed: false, optional: true, required: false
  private _envVariables?: { [key: string]: string } | cdktf.IResolvable; 
  public get envVariables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('env_variables') as any;
  }
  public set envVariables(value: { [key: string]: string } | cdktf.IResolvable) {
    this._envVariables = value;
  }
  public resetEnvVariables() {
    this._envVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVariablesInput() {
    return this._envVariables;
  }

  // image_version - computed: true, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // pypi_packages - computed: false, optional: true, required: false
  private _pypiPackages?: { [key: string]: string } | cdktf.IResolvable; 
  public get pypiPackages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pypi_packages') as any;
  }
  public set pypiPackages(value: { [key: string]: string } | cdktf.IResolvable) {
    this._pypiPackages = value;
  }
  public resetPypiPackages() {
    this._pypiPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pypiPackagesInput() {
    return this._pypiPackages;
  }

  // python_version - computed: true, optional: true, required: false
  private _pythonVersion?: string; 
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }
  public set pythonVersion(value: string) {
    this._pythonVersion = value;
  }
  public resetPythonVersion() {
    this._pythonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonVersionInput() {
    return this._pythonVersion;
  }

  // scheduler_count - computed: true, optional: true, required: false
  private _schedulerCount?: number; 
  public get schedulerCount() {
    return this.getNumberAttribute('scheduler_count');
  }
  public set schedulerCount(value: number) {
    this._schedulerCount = value;
  }
  public resetSchedulerCount() {
    this._schedulerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerCountInput() {
    return this._schedulerCount;
  }
}
export interface ComposerEnvironmentConfigA {
  /**
  * The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#node_count ComposerEnvironment#node_count}
  */
  readonly nodeCount?: number;
  /**
  * node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#node_config ComposerEnvironment#node_config}
  */
  readonly nodeConfig?: ComposerEnvironmentConfigNodeConfig;
  /**
  * private_environment_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#private_environment_config ComposerEnvironment#private_environment_config}
  */
  readonly privateEnvironmentConfig?: ComposerEnvironmentConfigPrivateEnvironmentConfig;
  /**
  * software_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#software_config ComposerEnvironment#software_config}
  */
  readonly softwareConfig?: ComposerEnvironmentConfigSoftwareConfig;
}

export function composerEnvironmentConfigAToTerraform(struct?: ComposerEnvironmentConfigAOutputReference | ComposerEnvironmentConfigA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_config: composerEnvironmentConfigNodeConfigToTerraform(struct!.nodeConfig),
    private_environment_config: composerEnvironmentConfigPrivateEnvironmentConfigToTerraform(struct!.privateEnvironmentConfig),
    software_config: composerEnvironmentConfigSoftwareConfigToTerraform(struct!.softwareConfig),
  }
}

export class ComposerEnvironmentConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComposerEnvironmentConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfig = this._nodeConfig?.internalValue;
    }
    if (this._privateEnvironmentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEnvironmentConfig = this._privateEnvironmentConfig?.internalValue;
    }
    if (this._softwareConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareConfig = this._softwareConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeCount = undefined;
      this._nodeConfig.internalValue = undefined;
      this._privateEnvironmentConfig.internalValue = undefined;
      this._softwareConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeCount = value.nodeCount;
      this._nodeConfig.internalValue = value.nodeConfig;
      this._privateEnvironmentConfig.internalValue = value.privateEnvironmentConfig;
      this._softwareConfig.internalValue = value.softwareConfig;
    }
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new ComposerEnvironmentConfigNodeConfigOutputReference(this as any, "node_config", true);
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: ComposerEnvironmentConfigNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // private_environment_config - computed: false, optional: true, required: false
  private _privateEnvironmentConfig = new ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference(this as any, "private_environment_config", true);
  public get privateEnvironmentConfig() {
    return this._privateEnvironmentConfig;
  }
  public putPrivateEnvironmentConfig(value: ComposerEnvironmentConfigPrivateEnvironmentConfig) {
    this._privateEnvironmentConfig.internalValue = value;
  }
  public resetPrivateEnvironmentConfig() {
    this._privateEnvironmentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEnvironmentConfigInput() {
    return this._privateEnvironmentConfig.internalValue;
  }

  // software_config - computed: false, optional: true, required: false
  private _softwareConfig = new ComposerEnvironmentConfigSoftwareConfigOutputReference(this as any, "software_config", true);
  public get softwareConfig() {
    return this._softwareConfig;
  }
  public putSoftwareConfig(value: ComposerEnvironmentConfigSoftwareConfig) {
    this._softwareConfig.internalValue = value;
  }
  public resetSoftwareConfig() {
    this._softwareConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareConfigInput() {
    return this._softwareConfig.internalValue;
  }
}
export interface ComposerEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#create ComposerEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#delete ComposerEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#update ComposerEnvironment#update}
  */
  readonly update?: string;
}

export function composerEnvironmentTimeoutsToTerraform(struct?: ComposerEnvironmentTimeoutsOutputReference | ComposerEnvironmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ComposerEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComposerEnvironmentTimeouts | undefined {
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

  public set internalValue(value: ComposerEnvironmentTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/composer_environment google_composer_environment}
*/
export class ComposerEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_composer_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/composer_environment google_composer_environment} Resource
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
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // config - computed: false, optional: true, required: false
  private _config = new ComposerEnvironmentConfigAOutputReference(this as any, "config", true);
  public get config() {
    return this._config;
  }
  public putConfig(value: ComposerEnvironmentConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComposerEnvironmentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComposerEnvironmentTimeouts) {
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
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      config: composerEnvironmentConfigAToTerraform(this._config.internalValue),
      timeouts: composerEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
