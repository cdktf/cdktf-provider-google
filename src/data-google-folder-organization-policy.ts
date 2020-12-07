// https://www.terraform.io/docs/providers/google/r/data_google_folder_organization_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleFolderOrganizationPolicyConfig extends cdktf.TerraformMetaArguments {
  /** The name of the Constraint the Policy is configuring, for example, serviceuser.services. */
  readonly constraint: string;
  /** The resource name of the folder to set the policy for. Its format is folders/{folder_id}. */
  readonly folder: string;
}
export class DataGoogleFolderOrganizationPolicyBooleanPolicy extends cdktf.ComplexComputedList {

  // enforced - computed: true, optional: false, required: false
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
}
export class DataGoogleFolderOrganizationPolicyListPolicyAllow extends cdktf.ComplexComputedList {

  // all - computed: true, optional: false, required: false
  public get all() {
    return this.getBooleanAttribute('all');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataGoogleFolderOrganizationPolicyListPolicyDeny extends cdktf.ComplexComputedList {

  // all - computed: true, optional: false, required: false
  public get all() {
    return this.getBooleanAttribute('all');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataGoogleFolderOrganizationPolicyListPolicy extends cdktf.ComplexComputedList {

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.interpolationForAttribute('allow') as any;
  }

  // deny - computed: true, optional: false, required: false
  public get deny() {
    return this.interpolationForAttribute('deny') as any;
  }

  // inherit_from_parent - computed: true, optional: false, required: false
  public get inheritFromParent() {
    return this.getBooleanAttribute('inherit_from_parent');
  }

  // suggested_value - computed: true, optional: false, required: false
  public get suggestedValue() {
    return this.getStringAttribute('suggested_value');
  }
}
export class DataGoogleFolderOrganizationPolicyRestorePolicy extends cdktf.ComplexComputedList {

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }
}

// Resource

export class DataGoogleFolderOrganizationPolicy extends cdktf.TerraformDataSource {

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

  // boolean_policy - computed: true, optional: false, required: false
  public booleanPolicy(index: string) {
    return new DataGoogleFolderOrganizationPolicyBooleanPolicy(this, 'boolean_policy', index);
  }

  // constraint - computed: false, optional: false, required: true
  private _constraint: string;
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // folder - computed: false, optional: false, required: true
  private _folder: string;
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // list_policy - computed: true, optional: false, required: false
  public listPolicy(index: string) {
    return new DataGoogleFolderOrganizationPolicyListPolicy(this, 'list_policy', index);
  }

  // restore_policy - computed: true, optional: false, required: false
  public restorePolicy(index: string) {
    return new DataGoogleFolderOrganizationPolicyRestorePolicy(this, 'restore_policy', index);
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      constraint: cdktf.stringToTerraform(this._constraint),
      folder: cdktf.stringToTerraform(this._folder),
    };
  }
}
