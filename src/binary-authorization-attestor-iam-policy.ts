// https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BinaryAuthorizationAttestorIamPolicyConfig extends TerraformMetaArguments {
  readonly attestor: string;
  readonly policyData: string;
  readonly project?: string;
}

// Resource

export class BinaryAuthorizationAttestorIamPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BinaryAuthorizationAttestorIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_binary_authorization_attestor_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attestor = config.attestor;
    this._policyData = config.policyData;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attestor - computed: false, optional: false, required: true
  private _attestor: string;
  public get attestor() {
    return this._attestor;
  }
  public set attestor(value: string) {
    this._attestor = value;
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

  // policy_data - computed: false, optional: false, required: true
  private _policyData: string;
  public get policyData() {
    return this._policyData;
  }
  public set policyData(value: string) {
    this._policyData = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      attestor: this._attestor,
      policy_data: this._policyData,
      project: this._project,
    };
  }
}
