// https://www.terraform.io/docs/providers/google/r/cloud_run_service_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudRunServiceIamBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service_iam_binding.html#location CloudRunServiceIamBinding#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service_iam_binding.html#members CloudRunServiceIamBinding#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service_iam_binding.html#project CloudRunServiceIamBinding#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service_iam_binding.html#role CloudRunServiceIamBinding#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service_iam_binding.html#service CloudRunServiceIamBinding#service}
  */
  readonly service: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service_iam_binding.html#condition CloudRunServiceIamBinding#condition}
  */
  readonly condition?: CloudRunServiceIamBindingCondition[];
}
export interface CloudRunServiceIamBindingCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service_iam_binding.html#description CloudRunServiceIamBinding#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service_iam_binding.html#expression CloudRunServiceIamBinding#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service_iam_binding.html#title CloudRunServiceIamBinding#title}
  */
  readonly title: string;
}

function cloudRunServiceIamBindingConditionToTerraform(struct?: CloudRunServiceIamBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service_iam_binding.html google_cloud_run_service_iam_binding}
*/
export class CloudRunServiceIamBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_cloud_run_service_iam_binding";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service_iam_binding.html google_cloud_run_service_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudRunServiceIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: CloudRunServiceIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_run_service_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._members = config.members;
    this._project = config.project;
    this._role = config.role;
    this._service = config.service;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: true, required: false
  private _location?: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // members - computed: false, optional: false, required: true
  private _members: string[];
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members
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

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: CloudRunServiceIamBindingCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: CloudRunServiceIamBindingCondition[] ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: cdktf.stringToTerraform(this._location),
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      project: cdktf.stringToTerraform(this._project),
      role: cdktf.stringToTerraform(this._role),
      service: cdktf.stringToTerraform(this._service),
      condition: cdktf.listMapper(cloudRunServiceIamBindingConditionToTerraform)(this._condition),
    };
  }
}
