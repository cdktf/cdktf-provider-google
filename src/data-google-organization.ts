// https://www.terraform.io/docs/providers/google/r/data_google_organization.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleOrganizationConfig extends TerraformMetaArguments {
  readonly domain?: string;
  readonly organization?: string;
}

// Resource

export class DataGoogleOrganization extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleOrganizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_organization',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
    this._organization = config.organization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // directory_customer_id - computed: true, optional: false, required: true
  public get directoryCustomerId() {
    return this.getStringAttribute('directory_customer_id');
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string;
  public get domain() {
    return this._domain ?? this.getStringAttribute('domain');
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lifecycle_state - computed: true, optional: false, required: true
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: true, optional: false, required: true
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string;
  public get organization() {
    return this._organization;
  }
  public set organization(value: string | undefined) {
    this._organization = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: this._domain,
      organization: this._organization,
    };
  }
}
