// https://www.terraform.io/docs/providers/google/d/composer_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComposerEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/composer_environment.html#name DataGoogleComposerEnvironment#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/composer_environment.html#project DataGoogleComposerEnvironment#project}
  */
  readonly project?: string;
  /**
  * The location or Compute Engine region for the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/composer_environment.html#region DataGoogleComposerEnvironment#region}
  */
  readonly region?: string;
}
export class DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy extends cdktf.ComplexComputedList {

  // cluster_ipv4_cidr_block - computed: true, optional: false, required: false
  public get clusterIpv4CidrBlock() {
    return this.getStringAttribute('cluster_ipv4_cidr_block');
  }

  // cluster_secondary_range_name - computed: true, optional: false, required: false
  public get clusterSecondaryRangeName() {
    return this.getStringAttribute('cluster_secondary_range_name');
  }

  // services_ipv4_cidr_block - computed: true, optional: false, required: false
  public get servicesIpv4CidrBlock() {
    return this.getStringAttribute('services_ipv4_cidr_block');
  }

  // services_secondary_range_name - computed: true, optional: false, required: false
  public get servicesSecondaryRangeName() {
    return this.getStringAttribute('services_secondary_range_name');
  }

  // use_ip_aliases - computed: true, optional: false, required: false
  public get useIpAliases() {
    return this.getBooleanAttribute('use_ip_aliases') as any;
  }
}
export class DataGoogleComposerEnvironmentConfigNodeConfig extends cdktf.ComplexComputedList {

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // ip_allocation_policy - computed: true, optional: false, required: false
  public get ipAllocationPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_allocation_policy') as any;
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // subnetwork - computed: true, optional: false, required: false
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}
export class DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig extends cdktf.ComplexComputedList {

  // cloud_sql_ipv4_cidr_block - computed: true, optional: false, required: false
  public get cloudSqlIpv4CidrBlock() {
    return this.getStringAttribute('cloud_sql_ipv4_cidr_block');
  }

  // enable_private_endpoint - computed: true, optional: false, required: false
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint') as any;
  }

  // master_ipv4_cidr_block - computed: true, optional: false, required: false
  public get masterIpv4CidrBlock() {
    return this.getStringAttribute('master_ipv4_cidr_block');
  }

  // web_server_ipv4_cidr_block - computed: true, optional: false, required: false
  public get webServerIpv4CidrBlock() {
    return this.getStringAttribute('web_server_ipv4_cidr_block');
  }
}
export class DataGoogleComposerEnvironmentConfigSoftwareConfig extends cdktf.ComplexComputedList {

  // airflow_config_overrides - computed: true, optional: false, required: false
  public get airflowConfigOverrides() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('airflow_config_overrides') as any;
  }

  // env_variables - computed: true, optional: false, required: false
  public get envVariables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('env_variables') as any;
  }

  // image_version - computed: true, optional: false, required: false
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }

  // pypi_packages - computed: true, optional: false, required: false
  public get pypiPackages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pypi_packages') as any;
  }

  // python_version - computed: true, optional: false, required: false
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }

  // scheduler_count - computed: true, optional: false, required: false
  public get schedulerCount() {
    return this.getNumberAttribute('scheduler_count');
  }
}
export class DataGoogleComposerEnvironmentConfigA extends cdktf.ComplexComputedList {

  // airflow_uri - computed: true, optional: false, required: false
  public get airflowUri() {
    return this.getStringAttribute('airflow_uri');
  }

  // dag_gcs_prefix - computed: true, optional: false, required: false
  public get dagGcsPrefix() {
    return this.getStringAttribute('dag_gcs_prefix');
  }

  // gke_cluster - computed: true, optional: false, required: false
  public get gkeCluster() {
    return this.getStringAttribute('gke_cluster');
  }

  // node_config - computed: true, optional: false, required: false
  public get nodeConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_config') as any;
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // private_environment_config - computed: true, optional: false, required: false
  public get privateEnvironmentConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('private_environment_config') as any;
  }

  // software_config - computed: true, optional: false, required: false
  public get softwareConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('software_config') as any;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/composer_environment.html google_composer_environment}
*/
export class DataGoogleComposerEnvironment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_composer_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/composer_environment.html google_composer_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComposerEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComposerEnvironmentConfig) {
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
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  public config(index: string) {
    return new DataGoogleComposerEnvironmentConfigA(this, 'config', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string {
    return new cdktf.StringMap(this, 'labels').lookup(key);
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
    return this._name
  }

  // project - computed: false, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
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
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
    };
  }
}
