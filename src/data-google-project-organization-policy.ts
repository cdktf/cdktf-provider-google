// https://www.terraform.io/docs/providers/google/r/data_google_project_organization_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleProjectOrganizationPolicyConfig extends cdktf.TerraformMetaArguments {
  /** The name of the Constraint the Policy is configuring, for example, serviceuser.services. */
  readonly constraint: string;
  /** The project ID. */
  readonly project: string;
}
export class DataGoogleProjectOrganizationPolicyBooleanPolicy extends cdktf.ComplexComputedList {

  // enforced - computed: true, optional: false, required: false
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
}
export class DataGoogleProjectOrganizationPolicyListPolicyAllow extends cdktf.ComplexComputedList {

  // all - computed: true, optional: false, required: false
  public get all() {
    return this.getBooleanAttribute('all');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataGoogleProjectOrganizationPolicyListPolicyDeny extends cdktf.ComplexComputedList {

  // all - computed: true, optional: false, required: false
  public get all() {
    return this.getBooleanAttribute('all');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataGoogleProjectOrganizationPolicyListPolicy extends cdktf.ComplexComputedList {

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
export class DataGoogleProjectOrganizationPolicyRestorePolicy extends cdktf.ComplexComputedList {

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }
}

// Resource

export class DataGoogleProjectOrganizationPolicy extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleProjectOrganizationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_project_organization_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._constraint = config.constraint;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boolean_policy - computed: true, optional: false, required: false
  public booleanPolicy(index: string) {
    return new DataGoogleProjectOrganizationPolicyBooleanPolicy(this, 'boolean_policy', index);
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // list_policy - computed: true, optional: false, required: false
  public listPolicy(index: string) {
    return new DataGoogleProjectOrganizationPolicyListPolicy(this, 'list_policy', index);
  }

  // project - computed: false, optional: false, required: true
  private _project: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // restore_policy - computed: true, optional: false, required: false
  public restorePolicy(index: string) {
    return new DataGoogleProjectOrganizationPolicyRestorePolicy(this, 'restore_policy', index);
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
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
