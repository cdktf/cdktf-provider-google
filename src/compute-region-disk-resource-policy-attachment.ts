// https://www.terraform.io/docs/providers/google/r/compute_region_disk_resource_policy_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionDiskResourcePolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the regional disk in which the resource policies are attached to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_disk_resource_policy_attachment.html#disk ComputeRegionDiskResourcePolicyAttachment#disk}
  */
  readonly disk: string;
  /**
  * The resource policy to be attached to the disk for scheduling snapshot
creation. Do not specify the self link.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_disk_resource_policy_attachment.html#name ComputeRegionDiskResourcePolicyAttachment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_disk_resource_policy_attachment.html#project ComputeRegionDiskResourcePolicyAttachment#project}
  */
  readonly project?: string;
  /**
  * A reference to the region where the disk resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_disk_resource_policy_attachment.html#region ComputeRegionDiskResourcePolicyAttachment#region}
  */
  readonly region?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_disk_resource_policy_attachment.html#timeouts ComputeRegionDiskResourcePolicyAttachment#timeouts}
  */
  readonly timeouts?: ComputeRegionDiskResourcePolicyAttachmentTimeouts;
}
export interface ComputeRegionDiskResourcePolicyAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_disk_resource_policy_attachment.html#create ComputeRegionDiskResourcePolicyAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_disk_resource_policy_attachment.html#delete ComputeRegionDiskResourcePolicyAttachment#delete}
  */
  readonly delete?: string;
}

function computeRegionDiskResourcePolicyAttachmentTimeoutsToTerraform(struct?: ComputeRegionDiskResourcePolicyAttachmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_disk_resource_policy_attachment.html google_compute_region_disk_resource_policy_attachment}
*/
export class ComputeRegionDiskResourcePolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_region_disk_resource_policy_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_region_disk_resource_policy_attachment.html google_compute_region_disk_resource_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRegionDiskResourcePolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRegionDiskResourcePolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_disk_resource_policy_attachment',
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
    this._region = config.region;
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

  // region - computed: true, optional: true, required: false
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
    return this._region
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRegionDiskResourcePolicyAttachmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeRegionDiskResourcePolicyAttachmentTimeouts ) {
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
      region: cdktf.stringToTerraform(this._region),
      timeouts: computeRegionDiskResourcePolicyAttachmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
