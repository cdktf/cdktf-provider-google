// https://www.terraform.io/docs/providers/google/r/service_account_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServiceAccountIamBindingConfig extends TerraformMetaArguments {
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

// Resource

export class ServiceAccountIamBinding extends TerraformResource {

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

  // members - computed: false, optional: false, required: true
  private _members: string[];
  public get members() {
    return this._members;
  }
  public set members(value: string[]) {
    this._members = value;
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
  private _condition?: ServiceAccountIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: ServiceAccountIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      members: this._members,
      role: this._role,
      service_account_id: this._serviceAccountId,
      condition: this._condition,
    };
  }
}
