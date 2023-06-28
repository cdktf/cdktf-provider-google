/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/billing_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleBillingAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/billing_account#billing_account DataGoogleBillingAccount#billing_account}
  */
  readonly billingAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/billing_account#display_name DataGoogleBillingAccount#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/billing_account#id DataGoogleBillingAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/billing_account#lookup_projects DataGoogleBillingAccount#lookup_projects}
  */
  readonly lookupProjects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/billing_account#open DataGoogleBillingAccount#open}
  */
  readonly open?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/billing_account google_billing_account}
*/
export class DataGoogleBillingAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_billing_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/billing_account google_billing_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleBillingAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleBillingAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_billing_account',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.71.0',
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
    this._billingAccount = config.billingAccount;
    this._displayName = config.displayName;
    this._id = config.id;
    this._lookupProjects = config.lookupProjects;
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

  // lookup_projects - computed: false, optional: true, required: false
  private _lookupProjects?: boolean | cdktf.IResolvable; 
  public get lookupProjects() {
    return this.getBooleanAttribute('lookup_projects');
  }
  public set lookupProjects(value: boolean | cdktf.IResolvable) {
    this._lookupProjects = value;
  }
  public resetLookupProjects() {
    this._lookupProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupProjectsInput() {
    return this._lookupProjects;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open - computed: true, optional: true, required: false
  private _open?: boolean | cdktf.IResolvable; 
  public get open() {
    return this.getBooleanAttribute('open');
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
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account: cdktf.stringToTerraform(this._billingAccount),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      lookup_projects: cdktf.booleanToTerraform(this._lookupProjects),
      open: cdktf.booleanToTerraform(this._open),
    };
  }
}
