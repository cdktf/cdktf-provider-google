// https://www.terraform.io/docs/providers/google/r/privateca_ca_pool_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatecaCaPoolIamBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool_iam_binding.html#ca_pool PrivatecaCaPoolIamBinding#ca_pool}
  */
  readonly caPool: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool_iam_binding.html#location PrivatecaCaPoolIamBinding#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool_iam_binding.html#members PrivatecaCaPoolIamBinding#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool_iam_binding.html#project PrivatecaCaPoolIamBinding#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool_iam_binding.html#role PrivatecaCaPoolIamBinding#role}
  */
  readonly role: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool_iam_binding.html#condition PrivatecaCaPoolIamBinding#condition}
  */
  readonly condition?: PrivatecaCaPoolIamBindingCondition[];
}
export interface PrivatecaCaPoolIamBindingCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool_iam_binding.html#description PrivatecaCaPoolIamBinding#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool_iam_binding.html#expression PrivatecaCaPoolIamBinding#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool_iam_binding.html#title PrivatecaCaPoolIamBinding#title}
  */
  readonly title: string;
}

function privatecaCaPoolIamBindingConditionToTerraform(struct?: PrivatecaCaPoolIamBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool_iam_binding.html google_privateca_ca_pool_iam_binding}
*/
export class PrivatecaCaPoolIamBinding extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool_iam_binding.html google_privateca_ca_pool_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatecaCaPoolIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: PrivatecaCaPoolIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_privateca_ca_pool_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._caPool = config.caPool;
    this._location = config.location;
    this._members = config.members;
    this._project = config.project;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_pool - computed: false, optional: false, required: true
  private _caPool: string;
  public get caPool() {
    return this.getStringAttribute('ca_pool');
  }
  public set caPool(value: string) {
    this._caPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caPoolInput() {
    return this._caPool
  }

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

  // condition - computed: false, optional: true, required: false
  private _condition?: PrivatecaCaPoolIamBindingCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: PrivatecaCaPoolIamBindingCondition[] ) {
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
      ca_pool: cdktf.stringToTerraform(this._caPool),
      location: cdktf.stringToTerraform(this._location),
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      project: cdktf.stringToTerraform(this._project),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(privatecaCaPoolIamBindingConditionToTerraform)(this._condition),
    };
  }
}
