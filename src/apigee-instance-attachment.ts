// https://www.terraform.io/docs/providers/google/r/apigee_instance_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeInstanceAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource ID of the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance_attachment.html#environment ApigeeInstanceAttachment#environment}
  */
  readonly environment: string;
  /**
  * The Apigee instance associated with the Apigee environment,
in the format 'organisations/{{org_name}}/instances/{{instance_name}}'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance_attachment.html#instance_id ApigeeInstanceAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance_attachment.html#timeouts ApigeeInstanceAttachment#timeouts}
  */
  readonly timeouts?: ApigeeInstanceAttachmentTimeouts;
}
export interface ApigeeInstanceAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance_attachment.html#create ApigeeInstanceAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance_attachment.html#delete ApigeeInstanceAttachment#delete}
  */
  readonly delete?: string;
}

function apigeeInstanceAttachmentTimeoutsToTerraform(struct?: ApigeeInstanceAttachmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_instance_attachment.html google_apigee_instance_attachment}
*/
export class ApigeeInstanceAttachment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/apigee_instance_attachment.html google_apigee_instance_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeInstanceAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeInstanceAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_instance_attachment',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._environment = config.environment;
    this._instanceId = config.instanceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment - computed: false, optional: false, required: true
  private _environment: string;
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId: string;
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApigeeInstanceAttachmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApigeeInstanceAttachmentTimeouts ) {
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
      environment: cdktf.stringToTerraform(this._environment),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      timeouts: apigeeInstanceAttachmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
