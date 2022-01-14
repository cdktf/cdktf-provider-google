// https://www.terraform.io/docs/providers/google/d/billing_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleBillingAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/billing_account#billing_account DataGoogleBillingAccount#billing_account}
  */
  readonly billingAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/billing_account#display_name DataGoogleBillingAccount#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/billing_account#open DataGoogleBillingAccount#open}
  */
  readonly open?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/billing_account google_billing_account}
*/
export class DataGoogleBillingAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_billing_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/billing_account google_billing_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleBillingAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleBillingAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_billing_account',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._billingAccount = config.billingAccount;
    this._displayName = config.displayName;
    this._open = config.open;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account - computed: false, optional: true, required: false
  private _billingAccount?: string; 
  public get billingAccount() {
    return this.getStringAttribute('billing_account');
  }
  public set billingAccount(value: string) {
    this._billingAccount = value;
  }
  public resetBillingAccount() {
    this._billingAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountInput() {
    return this._billingAccount;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open - computed: true, optional: true, required: false
  private _open?: boolean | cdktf.IResolvable; 
  public get open() {
    return this.getBooleanAttribute('open') as any;
  }
  public set open(value: boolean | cdktf.IResolvable) {
    this._open = value;
  }
  public resetOpen() {
    this._open = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openInput() {
    return this._open;
  }

  // project_ids - computed: true, optional: false, required: false
  public get projectIds() {
    return this.getListAttribute('project_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account: cdktf.stringToTerraform(this._billingAccount),
      display_name: cdktf.stringToTerraform(this._displayName),
      open: cdktf.booleanToTerraform(this._open),
    };
  }
}
