// https://www.terraform.io/docs/providers/google/r/folder_organization_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FolderOrganizationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Constraint the Policy is configuring, for example, serviceuser.services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#constraint FolderOrganizationPolicy#constraint}
  */
  readonly constraint: string;
  /**
  * The resource name of the folder to set the policy for. Its format is folders/{folder_id}.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#folder FolderOrganizationPolicy#folder}
  */
  readonly folder: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#id FolderOrganizationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Version of the Policy. Default version is 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#version FolderOrganizationPolicy#version}
  */
  readonly version?: number;
  /**
  * boolean_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#boolean_policy FolderOrganizationPolicy#boolean_policy}
  */
  readonly booleanPolicy?: FolderOrganizationPolicyBooleanPolicy;
  /**
  * list_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#list_policy FolderOrganizationPolicy#list_policy}
  */
  readonly listPolicy?: FolderOrganizationPolicyListPolicy;
  /**
  * restore_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#restore_policy FolderOrganizationPolicy#restore_policy}
  */
  readonly restorePolicy?: FolderOrganizationPolicyRestorePolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#timeouts FolderOrganizationPolicy#timeouts}
  */
  readonly timeouts?: FolderOrganizationPolicyTimeouts;
}
export interface FolderOrganizationPolicyBooleanPolicy {
  /**
  * If true, then the Policy is enforced. If false, then any configuration is acceptable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#enforced FolderOrganizationPolicy#enforced}
  */
  readonly enforced: boolean | cdktf.IResolvable;
}

export function folderOrganizationPolicyBooleanPolicyToTerraform(struct?: FolderOrganizationPolicyBooleanPolicyOutputReference | FolderOrganizationPolicyBooleanPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforced: cdktf.booleanToTerraform(struct!.enforced),
  }
}

export class FolderOrganizationPolicyBooleanPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FolderOrganizationPolicyBooleanPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforced = this._enforced;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FolderOrganizationPolicyBooleanPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforced = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforced = value.enforced;
    }
  }

  // enforced - computed: false, optional: false, required: true
  private _enforced?: boolean | cdktf.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
  public set enforced(value: boolean | cdktf.IResolvable) {
    this._enforced = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
  }
}
export interface FolderOrganizationPolicyListPolicyAllow {
  /**
  * The policy allows or denies all values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#all FolderOrganizationPolicy#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * The policy can define specific values that are allowed or denied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#values FolderOrganizationPolicy#values}
  */
  readonly values?: string[];
}

export function folderOrganizationPolicyListPolicyAllowToTerraform(struct?: FolderOrganizationPolicyListPolicyAllowOutputReference | FolderOrganizationPolicyListPolicyAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class FolderOrganizationPolicyListPolicyAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FolderOrganizationPolicyListPolicyAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FolderOrganizationPolicyListPolicyAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._values = value.values;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FolderOrganizationPolicyListPolicyDeny {
  /**
  * The policy allows or denies all values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#all FolderOrganizationPolicy#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * The policy can define specific values that are allowed or denied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#values FolderOrganizationPolicy#values}
  */
  readonly values?: string[];
}

export function folderOrganizationPolicyListPolicyDenyToTerraform(struct?: FolderOrganizationPolicyListPolicyDenyOutputReference | FolderOrganizationPolicyListPolicyDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class FolderOrganizationPolicyListPolicyDenyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FolderOrganizationPolicyListPolicyDeny | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FolderOrganizationPolicyListPolicyDeny | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._values = value.values;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FolderOrganizationPolicyListPolicy {
  /**
  * If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#inherit_from_parent FolderOrganizationPolicy#inherit_from_parent}
  */
  readonly inheritFromParent?: boolean | cdktf.IResolvable;
  /**
  * The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#suggested_value FolderOrganizationPolicy#suggested_value}
  */
  readonly suggestedValue?: string;
  /**
  * allow block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#allow FolderOrganizationPolicy#allow}
  */
  readonly allow?: FolderOrganizationPolicyListPolicyAllow;
  /**
  * deny block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#deny FolderOrganizationPolicy#deny}
  */
  readonly deny?: FolderOrganizationPolicyListPolicyDeny;
}

export function folderOrganizationPolicyListPolicyToTerraform(struct?: FolderOrganizationPolicyListPolicyOutputReference | FolderOrganizationPolicyListPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inherit_from_parent: cdktf.booleanToTerraform(struct!.inheritFromParent),
    suggested_value: cdktf.stringToTerraform(struct!.suggestedValue),
    allow: folderOrganizationPolicyListPolicyAllowToTerraform(struct!.allow),
    deny: folderOrganizationPolicyListPolicyDenyToTerraform(struct!.deny),
  }
}

export class FolderOrganizationPolicyListPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FolderOrganizationPolicyListPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inheritFromParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritFromParent = this._inheritFromParent;
    }
    if (this._suggestedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestedValue = this._suggestedValue;
    }
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._deny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FolderOrganizationPolicyListPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inheritFromParent = undefined;
      this._suggestedValue = undefined;
      this._allow.internalValue = undefined;
      this._deny.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inheritFromParent = value.inheritFromParent;
      this._suggestedValue = value.suggestedValue;
      this._allow.internalValue = value.allow;
      this._deny.internalValue = value.deny;
    }
  }

  // inherit_from_parent - computed: false, optional: true, required: false
  private _inheritFromParent?: boolean | cdktf.IResolvable; 
  public get inheritFromParent() {
    return this.getBooleanAttribute('inherit_from_parent');
  }
  public set inheritFromParent(value: boolean | cdktf.IResolvable) {
    this._inheritFromParent = value;
  }
  public resetInheritFromParent() {
    this._inheritFromParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritFromParentInput() {
    return this._inheritFromParent;
  }

  // suggested_value - computed: true, optional: true, required: false
  private _suggestedValue?: string; 
  public get suggestedValue() {
    return this.getStringAttribute('suggested_value');
  }
  public set suggestedValue(value: string) {
    this._suggestedValue = value;
  }
  public resetSuggestedValue() {
    this._suggestedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestedValueInput() {
    return this._suggestedValue;
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new FolderOrganizationPolicyListPolicyAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: FolderOrganizationPolicyListPolicyAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // deny - computed: false, optional: true, required: false
  private _deny = new FolderOrganizationPolicyListPolicyDenyOutputReference(this, "deny");
  public get deny() {
    return this._deny;
  }
  public putDeny(value: FolderOrganizationPolicyListPolicyDeny) {
    this._deny.internalValue = value;
  }
  public resetDeny() {
    this._deny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny.internalValue;
  }
}
export interface FolderOrganizationPolicyRestorePolicy {
  /**
  * May only be set to true. If set, then the default Policy is restored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#default FolderOrganizationPolicy#default}
  */
  readonly default: boolean | cdktf.IResolvable;
}

export function folderOrganizationPolicyRestorePolicyToTerraform(struct?: FolderOrganizationPolicyRestorePolicyOutputReference | FolderOrganizationPolicyRestorePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
  }
}

export class FolderOrganizationPolicyRestorePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FolderOrganizationPolicyRestorePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FolderOrganizationPolicyRestorePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: false, required: true
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}
export interface FolderOrganizationPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#create FolderOrganizationPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#delete FolderOrganizationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#read FolderOrganizationPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy#update FolderOrganizationPolicy#update}
  */
  readonly update?: string;
}

export function folderOrganizationPolicyTimeoutsToTerraform(struct?: FolderOrganizationPolicyTimeoutsOutputReference | FolderOrganizationPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class FolderOrganizationPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FolderOrganizationPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FolderOrganizationPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy google_folder_organization_policy}
*/
export class FolderOrganizationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_folder_organization_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/folder_organization_policy google_folder_organization_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FolderOrganizationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FolderOrganizationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_folder_organization_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._constraint = config.constraint;
    this._folder = config.folder;
    this._id = config.id;
    this._version = config.version;
    this._booleanPolicy.internalValue = config.booleanPolicy;
    this._listPolicy.internalValue = config.listPolicy;
    this._restorePolicy.internalValue = config.restorePolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // constraint - computed: false, optional: false, required: true
  private _constraint?: string; 
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // folder - computed: false, optional: false, required: true
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // boolean_policy - computed: false, optional: true, required: false
  private _booleanPolicy = new FolderOrganizationPolicyBooleanPolicyOutputReference(this, "boolean_policy");
  public get booleanPolicy() {
    return this._booleanPolicy;
  }
  public putBooleanPolicy(value: FolderOrganizationPolicyBooleanPolicy) {
    this._booleanPolicy.internalValue = value;
  }
  public resetBooleanPolicy() {
    this._booleanPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanPolicyInput() {
    return this._booleanPolicy.internalValue;
  }

  // list_policy - computed: false, optional: true, required: false
  private _listPolicy = new FolderOrganizationPolicyListPolicyOutputReference(this, "list_policy");
  public get listPolicy() {
    return this._listPolicy;
  }
  public putListPolicy(value: FolderOrganizationPolicyListPolicy) {
    this._listPolicy.internalValue = value;
  }
  public resetListPolicy() {
    this._listPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listPolicyInput() {
    return this._listPolicy.internalValue;
  }

  // restore_policy - computed: false, optional: true, required: false
  private _restorePolicy = new FolderOrganizationPolicyRestorePolicyOutputReference(this, "restore_policy");
  public get restorePolicy() {
    return this._restorePolicy;
  }
  public putRestorePolicy(value: FolderOrganizationPolicyRestorePolicy) {
    this._restorePolicy.internalValue = value;
  }
  public resetRestorePolicy() {
    this._restorePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorePolicyInput() {
    return this._restorePolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FolderOrganizationPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FolderOrganizationPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      constraint: cdktf.stringToTerraform(this._constraint),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      version: cdktf.numberToTerraform(this._version),
      boolean_policy: folderOrganizationPolicyBooleanPolicyToTerraform(this._booleanPolicy.internalValue),
      list_policy: folderOrganizationPolicyListPolicyToTerraform(this._listPolicy.internalValue),
      restore_policy: folderOrganizationPolicyRestorePolicyToTerraform(this._restorePolicy.internalValue),
      timeouts: folderOrganizationPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
