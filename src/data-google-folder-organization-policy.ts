// https://www.terraform.io/docs/providers/google/r/data_google_folder_organization_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleFolderOrganizationPolicyConfig extends TerraformMetaArguments {
  /** The name of the Constraint the Policy is configuring, for example, serviceuser.services. */
  readonly constraint: string;
  /** The resource name of the folder to set the policy for. Its format is folders/{folder_id}. */
  readonly folder: string;
}
export class DataGoogleFolderOrganizationPolicyBooleanPolicy extends ComplexComputedList {

  // enforced - computed: true, optional: false, required: true
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
}
export class DataGoogleFolderOrganizationPolicyListPolicyAllow extends ComplexComputedList {

  // all - computed: true, optional: false, required: true
  public get all() {
    return this.getBooleanAttribute('all');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataGoogleFolderOrganizationPolicyListPolicyDeny extends ComplexComputedList {

  // all - computed: true, optional: false, required: true
  public get all() {
    return this.getBooleanAttribute('all');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataGoogleFolderOrganizationPolicyListPolicy extends ComplexComputedList {

  // allow - computed: true, optional: false, required: true
  public get allow() {
    return 'not implemented' as any;
  }

  // deny - computed: true, optional: false, required: true
  public get deny() {
    return 'not implemented' as any;
  }

  // inherit_from_parent - computed: true, optional: false, required: true
  public get inheritFromParent() {
    return this.getBooleanAttribute('inherit_from_parent');
  }

  // suggested_value - computed: true, optional: false, required: true
  public get suggestedValue() {
    return this.getStringAttribute('suggested_value');
  }
}
export class DataGoogleFolderOrganizationPolicyRestorePolicy extends ComplexComputedList {

  // default - computed: true, optional: false, required: true
  public get default() {
    return this.getBooleanAttribute('default');
  }
}

// Resource

export class DataGoogleFolderOrganizationPolicy extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleFolderOrganizationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_folder_organization_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._constraint = config.constraint;
    this._folder = config.folder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boolean_policy - computed: true, optional: false, required: true
  public booleanPolicy(index: string) {
    return new DataGoogleFolderOrganizationPolicyBooleanPolicy(this, 'boolean_policy', index);
  }

  // constraint - computed: false, optional: false, required: true
  private _constraint: string;
  public get constraint() {
    return this._constraint;
  }
  public set constraint(value: string) {
    this._constraint = value;
  }

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

  // list_policy - computed: true, optional: false, required: true
  public listPolicy(index: string) {
    return new DataGoogleFolderOrganizationPolicyListPolicy(this, 'list_policy', index);
  }

  // restore_policy - computed: true, optional: false, required: true
  public restorePolicy(index: string) {
    return new DataGoogleFolderOrganizationPolicyRestorePolicy(this, 'restore_policy', index);
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      constraint: this._constraint,
      folder: this._folder,
    };
  }
}
