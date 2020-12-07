// https://www.terraform.io/docs/providers/google/r/compute_backend_service_signed_url_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeBackendServiceSignedUrlKeyConfig extends cdktf.TerraformMetaArguments {
  /** The backend service this signed URL key belongs. */
  readonly backendService: string;
  /** 128-bit key value used for signing the URL. The key value must be a
valid RFC 4648 Section 5 base64url encoded string. */
  readonly keyValue: string;
  /** Name of the signed URL key. */
  readonly name: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: ComputeBackendServiceSignedUrlKeyTimeouts;
}
export interface ComputeBackendServiceSignedUrlKeyTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function computeBackendServiceSignedUrlKeyTimeoutsToTerraform(struct?: ComputeBackendServiceSignedUrlKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ComputeBackendServiceSignedUrlKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeBackendServiceSignedUrlKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_backend_service_signed_url_key',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendService = config.backendService;
    this._keyValue = config.keyValue;
    this._name = config.name;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_service - computed: false, optional: false, required: true
  private _backendService: string;
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_value - computed: false, optional: false, required: true
  private _keyValue: string;
  public get keyValue() {
    return this.getStringAttribute('key_value');
  }
  public set keyValue(value: string) {
    this._keyValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueInput() {
    return this._keyValue
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeBackendServiceSignedUrlKeyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeBackendServiceSignedUrlKeyTimeouts ) {
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
      backend_service: cdktf.stringToTerraform(this._backendService),
      key_value: cdktf.stringToTerraform(this._keyValue),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      timeouts: computeBackendServiceSignedUrlKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}
