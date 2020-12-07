// https://www.terraform.io/docs/providers/google/r/service_account_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceAccountIamMemberConfig extends cdktf.TerraformMetaArguments {
  readonly member: string;
  readonly role: string;
  readonly serviceAccountId: string;
  /** condition block */
  readonly condition?: ServiceAccountIamMemberCondition[];
}
export interface ServiceAccountIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

function serviceAccountIamMemberConditionToTerraform(struct?: ServiceAccountIamMemberCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


// Resource

export class ServiceAccountIamMember extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServiceAccountIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_account_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._member = config.member;
    this._role = config.role;
    this._serviceAccountId = config.serviceAccountId;
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

  // member - computed: false, optional: false, required: true
  private _member: string;
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member
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

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId: string;
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: ServiceAccountIamMemberCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: ServiceAccountIamMemberCondition[] ) {
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
      member: cdktf.stringToTerraform(this._member),
      role: cdktf.stringToTerraform(this._role),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      condition: cdktf.listMapper(serviceAccountIamMemberConditionToTerraform)(this._condition),
    };
  }
}
