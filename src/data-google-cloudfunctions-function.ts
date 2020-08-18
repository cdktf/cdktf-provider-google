// https://www.terraform.io/docs/providers/google/r/data_google_cloudfunctions_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleCloudfunctionsFunctionConfig extends TerraformMetaArguments {
  /** A user-defined name of the function. Function names must be unique globally. */
  readonly name: string;
  /** Project of the function. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** Region of function. Currently can be only "us-central1". If it is not provided, the provider region is used. */
  readonly region?: string;
}
export class DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy extends ComplexComputedList {

  // retry - computed: true, optional: false, required: true
  public get retry() {
    return this.getBooleanAttribute('retry');
  }
}
export class DataGoogleCloudfunctionsFunctionEventTrigger extends ComplexComputedList {

  // event_type - computed: true, optional: false, required: true
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // failure_policy - computed: true, optional: false, required: true
  public get failurePolicy() {
    return 'not implemented' as any;
  }

  // resource - computed: true, optional: false, required: true
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export class DataGoogleCloudfunctionsFunctionSourceRepository extends ComplexComputedList {

  // deployed_url - computed: true, optional: false, required: true
  public get deployedUrl() {
    return this.getStringAttribute('deployed_url');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }
}

// Resource

export class DataGoogleCloudfunctionsFunction extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // available_memory_mb - computed: true, optional: false, required: true
  public get availableMemoryMb() {
    return this.getNumberAttribute('available_memory_mb');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // entry_point - computed: true, optional: false, required: true
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }

  // environment_variables - computed: true, optional: false, required: true
  public environmentVariables(key: string): string {
    return new StringMap(this, 'environment_variables').lookup(key);
  }

  // event_trigger - computed: true, optional: false, required: true
  public eventTrigger(index: string) {
    return new DataGoogleCloudfunctionsFunctionEventTrigger(this, 'event_trigger', index);
  }

  // https_trigger_url - computed: true, optional: false, required: true
  public get httpsTriggerUrl() {
    return this.getStringAttribute('https_trigger_url');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ingress_settings - computed: true, optional: false, required: true
  public get ingressSettings() {
    return this.getStringAttribute('ingress_settings');
  }

  // labels - computed: true, optional: false, required: true
  public labels(key: string): string {
    return new StringMap(this, 'labels').lookup(key);
  }

  // max_instances - computed: true, optional: false, required: true
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
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

  // runtime - computed: true, optional: false, required: true
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // service_account_email - computed: true, optional: false, required: true
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }

  // source_archive_bucket - computed: true, optional: false, required: true
  public get sourceArchiveBucket() {
    return this.getStringAttribute('source_archive_bucket');
  }

  // source_archive_object - computed: true, optional: false, required: true
  public get sourceArchiveObject() {
    return this.getStringAttribute('source_archive_object');
  }

  // source_repository - computed: true, optional: false, required: true
  public sourceRepository(index: string) {
    return new DataGoogleCloudfunctionsFunctionSourceRepository(this, 'source_repository', index);
  }

  // timeout - computed: true, optional: false, required: true
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // trigger_http - computed: true, optional: false, required: true
  public get triggerHttp() {
    return this.getBooleanAttribute('trigger_http');
  }

  // vpc_connector - computed: true, optional: false, required: true
  public get vpcConnector() {
    return this.getStringAttribute('vpc_connector');
  }

  // vpc_connector_egress_settings - computed: true, optional: false, required: true
  public get vpcConnectorEgressSettings() {
    return this.getStringAttribute('vpc_connector_egress_settings');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
      region: this._region,
    };
  }
}
