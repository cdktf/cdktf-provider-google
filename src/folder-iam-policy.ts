// https://www.terraform.io/docs/providers/google/r/folder_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface FolderIamPolicyConfig extends TerraformMetaArguments {
  readonly folder: string;
  readonly policyData: string;
}

// Resource

export class FolderIamPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FolderIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_folder_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._folder = config.folder;
    this._policyData = config.policyData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // folder - computed: false, optional: false, required: true
  private _folder: string;
  public get folder() {
    return this._folder;
  }
  public set folder(value: string) {
    this._folder = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData: string;
  public get policyData() {
    return this._policyData;
  }
  public set policyData(value: string) {
    this._policyData = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      folder: this._folder,
      policy_data: this._policyData,
    };
  }
}
