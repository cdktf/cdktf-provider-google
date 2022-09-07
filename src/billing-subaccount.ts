// https://www.terraform.io/docs/providers/google/r/billing_subaccount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BillingSubaccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_subaccount#deletion_policy BillingSubaccount#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_subaccount#display_name BillingSubaccount#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_subaccount#id BillingSubaccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_subaccount#master_billing_account BillingSubaccount#master_billing_account}
  */
  readonly masterBillingAccount: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/billing_subaccount google_billing_subaccount}
*/
export class BillingSubaccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_billing_subaccount";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/billing_subaccount google_billing_subaccount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BillingSubaccountConfig
  */
  public constructor(scope: Construct, id: string, config: BillingSubaccountConfig) {
    super(scope, id, {
      terraformResourceType: 'google_billing_subaccount',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._masterBillingAccount = config.masterBillingAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account_id - computed: true, optional: false, required: false
  public get billingAccountId() {
    return this.getStringAttribute('billing_account_id');
  }

  // deletion_policy - computed: false, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // master_billing_account - computed: false, optional: false, required: true
  private _masterBillingAccount?: string; 
  public get masterBillingAccount() {
    return this.getStringAttribute('master_billing_account');
  }
  public set masterBillingAccount(value: string) {
    this._masterBillingAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterBillingAccountInput() {
    return this._masterBillingAccount;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open - computed: true, optional: false, required: false
  public get open() {
    return this.getBooleanAttribute('open');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      master_billing_account: cdktf.stringToTerraform(this._masterBillingAccount),
    };
  }
}
