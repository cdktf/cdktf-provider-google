// https://www.terraform.io/docs/providers/google/r/data_google_iam_testable_permissions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleIamTestablePermissionsConfig extends TerraformMetaArguments {
  readonly customSupportLevel?: string;
  readonly fullResourceName: string;
  readonly stages?: string[];
}
export class DataGoogleIamTestablePermissionsPermissions extends ComplexComputedList {

  // api_disabled - computed: true, optional: false, required: true
  public get apiDisabled() {
    return this.getBooleanAttribute('api_disabled');
  }

  // custom_support_level - computed: true, optional: false, required: true
  public get customSupportLevel() {
    return this.getStringAttribute('custom_support_level');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // stage - computed: true, optional: false, required: true
  public get stage() {
    return this.getStringAttribute('stage');
  }

  // title - computed: true, optional: false, required: true
  public get title() {
    return this.getStringAttribute('title');
  }
}

// Resource

export class DataGoogleIamTestablePermissions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _customSupportLevel?: string;
  public get customSupportLevel() {
    return this._customSupportLevel;
  }
  public set customSupportLevel(value: string | undefined) {
    this._customSupportLevel = value;
  }

  // full_resource_name - computed: false, optional: false, required: true
  private _fullResourceName: string;
  public get fullResourceName() {
    return this._fullResourceName;
  }
  public set fullResourceName(value: string) {
    this._fullResourceName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // permissions - computed: true, optional: false, required: true
  public permissions(index: string) {
    return new DataGoogleIamTestablePermissionsPermissions(this, 'permissions', index);
  }

  // stages - computed: false, optional: true, required: false
  private _stages?: string[];
  public get stages() {
    return this._stages;
  }
  public set stages(value: string[] | undefined) {
    this._stages = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_support_level: this._customSupportLevel,
      full_resource_name: this._fullResourceName,
      stages: this._stages,
    };
  }
}
