// https://www.terraform.io/docs/providers/google/r/organization_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationIamBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_iam_binding.html#members OrganizationIamBinding#members}
  */
  readonly members: string[];
  /**
  * The numeric ID of the organization in which you want to manage the audit logging config.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_iam_binding.html#org_id OrganizationIamBinding#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_iam_binding.html#role OrganizationIamBinding#role}
  */
  readonly role: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_iam_binding.html#condition OrganizationIamBinding#condition}
  */
  readonly condition?: OrganizationIamBindingCondition[];
}
export interface OrganizationIamBindingCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_iam_binding.html#description OrganizationIamBinding#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_iam_binding.html#expression OrganizationIamBinding#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_iam_binding.html#title OrganizationIamBinding#title}
  */
  readonly title: string;
}

function organizationIamBindingConditionToTerraform(struct?: OrganizationIamBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/organization_iam_binding.html google_organization_iam_binding}
*/
export class OrganizationIamBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_organization_iam_binding";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/organization_iam_binding.html google_organization_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_organization_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._members = config.members;
    this._orgId = config.orgId;
    this._role = config.role;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId: string;
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId
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
  private _condition?: OrganizationIamBindingCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: OrganizationIamBindingCondition[] ) {
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
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      org_id: cdktf.stringToTerraform(this._orgId),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(organizationIamBindingConditionToTerraform)(this._condition),
    };
  }
}
