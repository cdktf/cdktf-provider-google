/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/data_catalog_policy_tag_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalogPolicyTagIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/data_catalog_policy_tag_iam_policy#id DataCatalogPolicyTagIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/data_catalog_policy_tag_iam_policy#policy_data DataCatalogPolicyTagIamPolicy#policy_data}
  */
  readonly policyData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/data_catalog_policy_tag_iam_policy#policy_tag DataCatalogPolicyTagIamPolicy#policy_tag}
  */
  readonly policyTag: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/data_catalog_policy_tag_iam_policy google_data_catalog_policy_tag_iam_policy}
*/
export class DataCatalogPolicyTagIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_catalog_policy_tag_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalogPolicyTagIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalogPolicyTagIamPolicy to import
  * @param importFromId The id of the existing DataCatalogPolicyTagIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/data_catalog_policy_tag_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalogPolicyTagIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_data_catalog_policy_tag_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/data_catalog_policy_tag_iam_policy google_data_catalog_policy_tag_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalogPolicyTagIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalogPolicyTagIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_policy_tag_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.33.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._policyData = config.policyData;
    this._policyTag = config.policyTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // policy_data - computed: false, optional: false, required: true
  private _policyData?: string; 
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData;
  }

  // policy_tag - computed: false, optional: false, required: true
  private _policyTag?: string; 
  public get policyTag() {
    return this.getStringAttribute('policy_tag');
  }
  public set policyTag(value: string) {
    this._policyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTagInput() {
    return this._policyTag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_data: cdktf.stringToTerraform(this._policyData),
      policy_tag: cdktf.stringToTerraform(this._policyTag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_data: {
        value: cdktf.stringToHclTerraform(this._policyData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_tag: {
        value: cdktf.stringToHclTerraform(this._policyTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
