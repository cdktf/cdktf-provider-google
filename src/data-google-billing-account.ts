// https://www.terraform.io/docs/providers/google/r/data_google_billing_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleBillingAccountConfig extends TerraformMetaArguments {
  readonly billingAccount?: string;
  readonly displayName?: string;
  readonly open?: boolean;
}

// Resource

export class DataGoogleBillingAccount extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._billingAccount;
  }
  public set billingAccount(value: string | undefined) {
    this._billingAccount = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // open - computed: true, optional: true, required: false
  private _open?: boolean;
  public get open() {
    return this._open ?? this.getBooleanAttribute('open');
  }
  public set open(value: boolean | undefined) {
    this._open = value;
  }

  // project_ids - computed: true, optional: false, required: true
  public get projectIds() {
    return this.getListAttribute('project_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account: this._billingAccount,
      display_name: this._displayName,
      open: this._open,
    };
  }
}
