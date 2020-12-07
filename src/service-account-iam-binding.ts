// https://www.terraform.io/docs/providers/google/r/service_account_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceAccountIamBindingConfig extends cdktf.TerraformMetaArguments {
  readonly members: string[];
  readonly role: string;
  readonly serviceAccountId: string;
  /** condition block */
  readonly condition?: ServiceAccountIamBindingCondition[];
}
export interface ServiceAccountIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

function serviceAccountIamBindingConditionToTerraform(struct?: ServiceAccountIamBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


// Resource

export class ServiceAccountIamBinding extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServiceAccountIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_account_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._members = config.members;
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
  private _condition?: ServiceAccountIamBindingCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: ServiceAccountIamBindingCondition[] ) {
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
      role: cdktf.stringToTerraform(this._role),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      condition: cdktf.listMapper(serviceAccountIamBindingConditionToTerraform)(this._condition),
    };
  }
}
