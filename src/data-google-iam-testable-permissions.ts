// https://www.terraform.io/docs/providers/google/d/iam_testable_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleIamTestablePermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions#custom_support_level DataGoogleIamTestablePermissions#custom_support_level}
  */
  readonly customSupportLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions#full_resource_name DataGoogleIamTestablePermissions#full_resource_name}
  */
  readonly fullResourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions#id DataGoogleIamTestablePermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions#stages DataGoogleIamTestablePermissions#stages}
  */
  readonly stages?: string[];
}
export interface DataGoogleIamTestablePermissionsPermissions {
}

export function dataGoogleIamTestablePermissionsPermissionsToTerraform(struct?: DataGoogleIamTestablePermissionsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleIamTestablePermissionsPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleIamTestablePermissionsPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamTestablePermissionsPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_disabled - computed: true, optional: false, required: false
  public get apiDisabled() {
    return this.getBooleanAttribute('api_disabled');
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

export class DataGoogleIamTestablePermissionsPermissionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleIamTestablePermissionsPermissionsOutputReference {
    return new DataGoogleIamTestablePermissionsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions google_iam_testable_permissions}
*/
export class DataGoogleIamTestablePermissions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_testable_permissions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions google_iam_testable_permissions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleIamTestablePermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleIamTestablePermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_testable_permissions',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customSupportLevel = config.customSupportLevel;
    this._fullResourceName = config.fullResourceName;
    this._id = config.id;
    this._stages = config.stages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_support_level - computed: false, optional: true, required: false
  private _customSupportLevel?: string; 
  public get customSupportLevel() {
    return this.getStringAttribute('custom_support_level');
  }
  public set customSupportLevel(value: string) {
    this._customSupportLevel = value;
  }
  public resetCustomSupportLevel() {
    this._customSupportLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSupportLevelInput() {
    return this._customSupportLevel;
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
    return this._fullResourceName;
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

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataGoogleIamTestablePermissionsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // stages - computed: false, optional: true, required: false
  private _stages?: string[]; 
  public get stages() {
    return this.getListAttribute('stages');
  }
  public set stages(value: string[]) {
    this._stages = value;
  }
  public resetStages() {
    this._stages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_support_level: cdktf.stringToTerraform(this._customSupportLevel),
      full_resource_name: cdktf.stringToTerraform(this._fullResourceName),
      id: cdktf.stringToTerraform(this._id),
      stages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._stages),
    };
  }
}
