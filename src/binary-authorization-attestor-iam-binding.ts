// https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BinaryAuthorizationAttestorIamBindingConfig extends cdktf.TerraformMetaArguments {
  readonly attestor: string;
  readonly members: string[];
  readonly project?: string;
  readonly role: string;
  /** condition block */
  readonly condition?: BinaryAuthorizationAttestorIamBindingCondition[];
}
export interface BinaryAuthorizationAttestorIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

function binaryAuthorizationAttestorIamBindingConditionToTerraform(struct?: BinaryAuthorizationAttestorIamBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


// Resource

export class BinaryAuthorizationAttestorIamBinding extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BinaryAuthorizationAttestorIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_binary_authorization_attestor_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attestor = config.attestor;
    this._members = config.members;
    this._project = config.project;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attestor - computed: false, optional: false, required: true
  private _attestor: string;
  public get attestor() {
    return this.getStringAttribute('attestor');
  }
  public set attestor(value: string) {
    this._attestor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attestorInput() {
    return this._attestor
  }

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
  private _condition?: BinaryAuthorizationAttestorIamBindingCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: BinaryAuthorizationAttestorIamBindingCondition[] ) {
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
      attestor: cdktf.stringToTerraform(this._attestor),
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      project: cdktf.stringToTerraform(this._project),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(binaryAuthorizationAttestorIamBindingConditionToTerraform)(this._condition),
    };
  }
}
