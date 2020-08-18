// https://www.terraform.io/docs/providers/google/r/data_google_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataGoogleProjectConfig extends TerraformMetaArguments {
  /** The project ID. Changing this forces a new project to be created. */
  readonly projectId?: string;
}

// Resource

export class DataGoogleProject extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleProjectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_project',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_network - computed: true, optional: false, required: true
  public get autoCreateNetwork() {
    return this.getBooleanAttribute('auto_create_network');
  }

  // billing_account - computed: true, optional: false, required: true
  public get billingAccount() {
    return this.getStringAttribute('billing_account');
  }

  // folder_id - computed: true, optional: false, required: true
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: true, optional: false, required: true
  public labels(key: string): string {
    return new StringMap(this, 'labels').lookup(key);
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // number - computed: true, optional: false, required: true
  public get number() {
    return this.getStringAttribute('number');
  }

  // org_id - computed: true, optional: false, required: true
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string;
  public get projectId() {
    return this._projectId;
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }

  // skip_delete - computed: true, optional: false, required: true
  public get skipDelete() {
    return this.getBooleanAttribute('skip_delete');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: this._projectId,
    };
  }
}
