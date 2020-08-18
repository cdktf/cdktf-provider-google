// https://www.terraform.io/docs/providers/google/r/billing_account_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BillingAccountIamBindingConfig extends TerraformMetaArguments {
  readonly billingAccountId: string;
  readonly members: string[];
  readonly role: string;
  /** condition block */
  readonly condition?: BillingAccountIamBindingCondition[];
}
export interface BillingAccountIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class BillingAccountIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BillingAccountIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_billing_account_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._billingAccountId = config.billingAccountId;
    this._members = config.members;
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

  // condition - computed: false, optional: true, required: false
  private _condition?: BillingAccountIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: BillingAccountIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account_id: this._billingAccountId,
      members: this._members,
      role: this._role,
      condition: this._condition,
    };
  }
}
