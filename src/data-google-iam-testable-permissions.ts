// https://www.terraform.io/docs/providers/google/d/iam_testable_permissions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleIamTestablePermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions.html#custom_support_level DataGoogleIamTestablePermissions#custom_support_level}
  */
  readonly customSupportLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions.html#full_resource_name DataGoogleIamTestablePermissions#full_resource_name}
  */
  readonly fullResourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions.html#stages DataGoogleIamTestablePermissions#stages}
  */
  readonly stages?: string[];
}
export class DataGoogleIamTestablePermissionsPermissions extends cdktf.ComplexComputedList {

  // api_disabled - computed: true, optional: false, required: false
  public get apiDisabled() {
    return this.getBooleanAttribute('api_disabled') as any;
  }

  // custom_support_level - computed: true, optional: false, required: false
  public get customSupportLevel() {
    return this.getStringAttribute('custom_support_level');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions.html google_iam_testable_permissions}
*/
export class DataGoogleIamTestablePermissions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_iam_testable_permissions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions.html google_iam_testable_permissions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleIamTestablePermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleIamTestablePermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_testable_permissions',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customSupportLevel = config.customSupportLevel;
    this._fullResourceName = config.fullResourceName;
    this._stages = config.stages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_support_level - computed: false, optional: true, required: false
  private _customSupportLevel?: string | undefined; 
  public get customSupportLevel() {
    return this.getStringAttribute('custom_support_level');
  }
  public set customSupportLevel(value: string | undefined) {
    this._customSupportLevel = value;
  }
  public resetCustomSupportLevel() {
    this._customSupportLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSupportLevelInput() {
    return this._customSupportLevel
  }

  // full_resource_name - computed: false, optional: false, required: true
  private _fullResourceName?: string; 
  public get fullResourceName() {
    return this.getStringAttribute('full_resource_name');
  }
  public set fullResourceName(value: string) {
    this._fullResourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullResourceNameInput() {
    return this._fullResourceName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permissions - computed: true, optional: false, required: false
  public permissions(index: string) {
    return new DataGoogleIamTestablePermissionsPermissions(this, 'permissions', index);
  }

  // stages - computed: false, optional: true, required: false
  private _stages?: string[] | undefined; 
  public get stages() {
    return this.getListAttribute('stages');
  }
  public set stages(value: string[] | undefined) {
    this._stages = value;
  }
  public resetStages() {
    this._stages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_support_level: cdktf.stringToTerraform(this._customSupportLevel),
      full_resource_name: cdktf.stringToTerraform(this._fullResourceName),
      stages: cdktf.listMapper(cdktf.stringToTerraform)(this._stages),
    };
  }
}
