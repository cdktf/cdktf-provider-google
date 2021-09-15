// https://www.terraform.io/docs/providers/google/r/compute_target_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeTargetInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_instance.html#description ComputeTargetInstance#description}
  */
  readonly description?: string;
  /**
  * The Compute instance VM handling traffic for this target instance.
Accepts the instance self-link, relative path
(e.g. 'projects/project/zones/zone/instances/instance') or name. If
name is given, the zone will default to the given zone or
the provider-default zone and the project will default to the
provider-level project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_instance.html#instance ComputeTargetInstance#instance}
  */
  readonly instance: string;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_instance.html#name ComputeTargetInstance#name}
  */
  readonly name: string;
  /**
  * NAT option controlling how IPs are NAT'ed to the instance.
Currently only NO_NAT (default value) is supported. Default value: "NO_NAT" Possible values: ["NO_NAT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_instance.html#nat_policy ComputeTargetInstance#nat_policy}
  */
  readonly natPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_instance.html#project ComputeTargetInstance#project}
  */
  readonly project?: string;
  /**
  * URL of the zone where the target instance resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_instance.html#zone ComputeTargetInstance#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_instance.html#timeouts ComputeTargetInstance#timeouts}
  */
  readonly timeouts?: ComputeTargetInstanceTimeouts;
}
export interface ComputeTargetInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_instance.html#create ComputeTargetInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_instance.html#delete ComputeTargetInstance#delete}
  */
  readonly delete?: string;
}

function computeTargetInstanceTimeoutsToTerraform(struct?: ComputeTargetInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_target_instance.html google_compute_target_instance}
*/
export class ComputeTargetInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_target_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_target_instance.html google_compute_target_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeTargetInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeTargetInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_target_instance',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._instance = config.instance;
    this._name = config.name;
    this._natPolicy = config.natPolicy;
    this._project = config.project;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance - computed: false, optional: false, required: true
  private _instance: string;
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance
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

  // nat_policy - computed: false, optional: true, required: false
  private _natPolicy?: string;
  public get natPolicy() {
    return this.getStringAttribute('nat_policy');
  }
  public set natPolicy(value: string ) {
    this._natPolicy = value;
  }
  public resetNatPolicy() {
    this._natPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPolicyInput() {
    return this._natPolicy
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
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
  private _timeouts?: ComputeTargetInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeTargetInstanceTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      instance: cdktf.stringToTerraform(this._instance),
      name: cdktf.stringToTerraform(this._name),
      nat_policy: cdktf.stringToTerraform(this._natPolicy),
      project: cdktf.stringToTerraform(this._project),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: computeTargetInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
