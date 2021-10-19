// https://www.terraform.io/docs/providers/google/d/cloudfunctions_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleCloudfunctionsFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A user-defined name of the function. Function names must be unique globally.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions_function.html#name DataGoogleCloudfunctionsFunction#name}
  */
  readonly name: string;
  /**
  * Project of the function. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions_function.html#project DataGoogleCloudfunctionsFunction#project}
  */
  readonly project?: string;
  /**
  * Region of function. If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions_function.html#region DataGoogleCloudfunctionsFunction#region}
  */
  readonly region?: string;
}
export class DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy extends cdktf.ComplexComputedList {

  // retry - computed: true, optional: false, required: false
  public get retry() {
    return this.getBooleanAttribute('retry') as any;
  }
}
export class DataGoogleCloudfunctionsFunctionEventTrigger extends cdktf.ComplexComputedList {

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // failure_policy - computed: true, optional: false, required: false
  public get failurePolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('failure_policy') as any;
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export class DataGoogleCloudfunctionsFunctionSourceRepository extends cdktf.ComplexComputedList {

  // deployed_url - computed: true, optional: false, required: false
  public get deployedUrl() {
    return this.getStringAttribute('deployed_url');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions_function.html google_cloudfunctions_function}
*/
export class DataGoogleCloudfunctionsFunction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_cloudfunctions_function";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions_function.html google_cloudfunctions_function} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleCloudfunctionsFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleCloudfunctionsFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudfunctions_function',
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

  // available_memory_mb - computed: true, optional: false, required: false
  public get availableMemoryMb() {
    return this.getNumberAttribute('available_memory_mb');
  }

  // build_environment_variables - computed: true, optional: false, required: false
  public buildEnvironmentVariables(key: string): string {
    return new cdktf.StringMap(this, 'build_environment_variables').lookup(key);
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entry_point - computed: true, optional: false, required: false
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }

  // environment_variables - computed: true, optional: false, required: false
  public environmentVariables(key: string): string {
    return new cdktf.StringMap(this, 'environment_variables').lookup(key);
  }

  // event_trigger - computed: true, optional: false, required: false
  public eventTrigger(index: string) {
    return new DataGoogleCloudfunctionsFunctionEventTrigger(this, 'event_trigger', index);
  }

  // https_trigger_url - computed: true, optional: false, required: false
  public get httpsTriggerUrl() {
    return this.getStringAttribute('https_trigger_url');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_settings - computed: true, optional: false, required: false
  public get ingressSettings() {
    return this.getStringAttribute('ingress_settings');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // max_instances - computed: true, optional: false, required: false
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
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

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // service_account_email - computed: true, optional: false, required: false
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }

  // source_archive_bucket - computed: true, optional: false, required: false
  public get sourceArchiveBucket() {
    return this.getStringAttribute('source_archive_bucket');
  }

  // source_archive_object - computed: true, optional: false, required: false
  public get sourceArchiveObject() {
    return this.getStringAttribute('source_archive_object');
  }

  // source_repository - computed: true, optional: false, required: false
  public sourceRepository(index: string) {
    return new DataGoogleCloudfunctionsFunctionSourceRepository(this, 'source_repository', index);
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // trigger_http - computed: true, optional: false, required: false
  public get triggerHttp() {
    return this.getBooleanAttribute('trigger_http') as any;
  }

  // vpc_connector - computed: true, optional: false, required: false
  public get vpcConnector() {
    return this.getStringAttribute('vpc_connector');
  }

  // vpc_connector_egress_settings - computed: true, optional: false, required: false
  public get vpcConnectorEgressSettings() {
    return this.getStringAttribute('vpc_connector_egress_settings');
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
