// https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AccessContextManagerServicePerimeterResourceConfig extends TerraformMetaArguments {
  /** The name of the Service Perimeter to add this resource to. */
  readonly perimeterName: string;
  /** A GCP resource that is inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number} */
  readonly resource: string;
  /** timeouts block */
  readonly timeouts?: AccessContextManagerServicePerimeterResourceTimeouts;
}
export interface AccessContextManagerServicePerimeterResourceTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class AccessContextManagerServicePerimeterResource extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessContextManagerServicePerimeterResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_service_perimeter_resource',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._perimeterName = config.perimeterName;
    this._resource = config.resource;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // perimeter_name - computed: false, optional: false, required: true
  private _perimeterName: string;
  public get perimeterName() {
    return this.getStringAttribute('perimeter_name');
  }
  public set perimeterName(value: string) {
    this._perimeterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perimeterNameInput() {
    return this._perimeterName
  }

  // resource - computed: false, optional: false, required: true
  private _resource: string;
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AccessContextManagerServicePerimeterResourceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AccessContextManagerServicePerimeterResourceTimeouts ) {
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
      perimeter_name: this._perimeterName,
      resource: this._resource,
      timeouts: this._timeouts,
    };
  }
}
