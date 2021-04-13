// https://www.terraform.io/docs/providers/google/r/apigee_envgroup_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeEnvgroupAttachmentConfig extends cdktf.TerraformMetaArguments {
  /** The Apigee environment group associated with the Apigee environment,
in the format 'organizations/{{org_name}}/envgroups/{{envgroup_name}}'. */
  readonly envgroupId: string;
  /** The resource ID of the environment. */
  readonly environment: string;
  /** timeouts block */
  readonly timeouts?: ApigeeEnvgroupAttachmentTimeouts;
}
export interface ApigeeEnvgroupAttachmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function apigeeEnvgroupAttachmentTimeoutsToTerraform(struct?: ApigeeEnvgroupAttachmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ApigeeEnvgroupAttachment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApigeeEnvgroupAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_envgroup_attachment',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._envgroupId = config.envgroupId;
    this._environment = config.environment;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // envgroup_id - computed: false, optional: false, required: true
  private _envgroupId: string;
  public get envgroupId() {
    return this.getStringAttribute('envgroup_id');
  }
  public set envgroupId(value: string) {
    this._envgroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envgroupIdInput() {
    return this._envgroupId
  }

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApigeeEnvgroupAttachmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApigeeEnvgroupAttachmentTimeouts ) {
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
      envgroup_id: cdktf.stringToTerraform(this._envgroupId),
      environment: cdktf.stringToTerraform(this._environment),
      timeouts: apigeeEnvgroupAttachmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
