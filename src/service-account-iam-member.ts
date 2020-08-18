// https://www.terraform.io/docs/providers/google/r/service_account_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServiceAccountIamMemberConfig extends TerraformMetaArguments {
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

// Resource

export class ServiceAccountIamMember extends TerraformResource {

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

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // member - computed: false, optional: false, required: true
  private _member: string;
  public get member() {
    return this._member;
  }
  public set member(value: string) {
    this._member = value;
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId: string;
  public get serviceAccountId() {
    return this._serviceAccountId;
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: ServiceAccountIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: ServiceAccountIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      member: this._member,
      role: this._role,
      service_account_id: this._serviceAccountId,
      condition: this._condition,
    };
  }
}
