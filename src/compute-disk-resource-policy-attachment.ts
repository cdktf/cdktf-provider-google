// https://www.terraform.io/docs/providers/google/r/compute_disk_resource_policy_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeDiskResourcePolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the disk in which the resource policies are attached to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk_resource_policy_attachment.html#disk ComputeDiskResourcePolicyAttachment#disk}
  */
  readonly disk: string;
  /**
  * The resource policy to be attached to the disk for scheduling snapshot
creation. Do not specify the self link.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk_resource_policy_attachment.html#name ComputeDiskResourcePolicyAttachment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk_resource_policy_attachment.html#project ComputeDiskResourcePolicyAttachment#project}
  */
  readonly project?: string;
  /**
  * A reference to the zone where the disk resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk_resource_policy_attachment.html#zone ComputeDiskResourcePolicyAttachment#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk_resource_policy_attachment.html#timeouts ComputeDiskResourcePolicyAttachment#timeouts}
  */
  readonly timeouts?: ComputeDiskResourcePolicyAttachmentTimeouts;
}
export interface ComputeDiskResourcePolicyAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk_resource_policy_attachment.html#create ComputeDiskResourcePolicyAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk_resource_policy_attachment.html#delete ComputeDiskResourcePolicyAttachment#delete}
  */
  readonly delete?: string;
}

function computeDiskResourcePolicyAttachmentTimeoutsToTerraform(struct?: ComputeDiskResourcePolicyAttachmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_disk_resource_policy_attachment.html google_compute_disk_resource_policy_attachment}
*/
export class ComputeDiskResourcePolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_disk_resource_policy_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_disk_resource_policy_attachment.html google_compute_disk_resource_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeDiskResourcePolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeDiskResourcePolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_disk_resource_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._disk = config.disk;
    this._name = config.name;
    this._project = config.project;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk - computed: false, optional: false, required: true
  private _disk: string;
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._zone
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeDiskResourcePolicyAttachmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeDiskResourcePolicyAttachmentTimeouts ) {
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
      disk: cdktf.stringToTerraform(this._disk),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: computeDiskResourcePolicyAttachmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
