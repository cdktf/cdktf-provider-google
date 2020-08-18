// https://www.terraform.io/docs/providers/google/r/billing_account_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BillingAccountIamMemberConfig extends TerraformMetaArguments {
  readonly billingAccountId: string;
  readonly member: string;
  readonly role: string;
  /** condition block */
  readonly condition?: BillingAccountIamMemberCondition[];
}
export interface BillingAccountIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class BillingAccountIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BillingAccountIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_billing_account_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._billingAccountId = config.billingAccountId;
    this._member = config.member;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account_id - computed: false, optional: false, required: true
  private _billingAccountId: string;
  public get billingAccountId() {
    return this._billingAccountId;
  }
  public set billingAccountId(value: string) {
    this._billingAccountId = value;
  }

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

  // condition - computed: false, optional: true, required: false
  private _condition?: BillingAccountIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: BillingAccountIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account_id: this._billingAccountId,
      member: this._member,
      role: this._role,
      condition: this._condition,
    };
  }
}
