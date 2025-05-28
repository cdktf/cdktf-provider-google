// https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigtableAuthorizedViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited.
  * If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#deletion_protection BigtableAuthorizedView#deletion_protection}
  */
  readonly deletionProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#id BigtableAuthorizedView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Bigtable instance in which the authorized view belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#instance_name BigtableAuthorizedView#instance_name}
  */
  readonly instanceName: string;
  /**
  * The name of the authorized view. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#name BigtableAuthorizedView#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#project BigtableAuthorizedView#project}
  */
  readonly project?: string;
  /**
  * The name of the Bigtable table in which the authorized view belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#table_name BigtableAuthorizedView#table_name}
  */
  readonly tableName: string;
  /**
  * subset_view block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#subset_view BigtableAuthorizedView#subset_view}
  */
  readonly subsetView?: BigtableAuthorizedViewSubsetView;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#timeouts BigtableAuthorizedView#timeouts}
  */
  readonly timeouts?: BigtableAuthorizedViewTimeouts;
}
export interface BigtableAuthorizedViewSubsetViewFamilySubsets {
  /**
  * Name of the column family to be included in the authorized view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#family_name BigtableAuthorizedView#family_name}
  */
  readonly familyName: string;
  /**
  * Base64-encoded prefixes for qualifiers of the column family to be included in the authorized view. Every qualifier starting with one of these prefixes is included in the authorized view. To provide access to all qualifiers, include the empty string as a prefix ("").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#qualifier_prefixes BigtableAuthorizedView#qualifier_prefixes}
  */
  readonly qualifierPrefixes?: string[];
  /**
  * Base64-encoded individual exact column qualifiers of the column family to be included in the authorized view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#qualifiers BigtableAuthorizedView#qualifiers}
  */
  readonly qualifiers?: string[];
}

export function bigtableAuthorizedViewSubsetViewFamilySubsetsToTerraform(struct?: BigtableAuthorizedViewSubsetViewFamilySubsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family_name: cdktf.stringToTerraform(struct!.familyName),
    qualifier_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.qualifierPrefixes),
    qualifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.qualifiers),
  }
}


export function bigtableAuthorizedViewSubsetViewFamilySubsetsToHclTerraform(struct?: BigtableAuthorizedViewSubsetViewFamilySubsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family_name: {
      value: cdktf.stringToHclTerraform(struct!.familyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.qualifierPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    qualifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.qualifiers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BigtableAuthorizedViewSubsetViewFamilySubsets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._familyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyName = this._familyName;
    }
    if (this._qualifierPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifierPrefixes = this._qualifierPrefixes;
    }
    if (this._qualifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifiers = this._qualifiers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigtableAuthorizedViewSubsetViewFamilySubsets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._familyName = undefined;
      this._qualifierPrefixes = undefined;
      this._qualifiers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._familyName = value.familyName;
      this._qualifierPrefixes = value.qualifierPrefixes;
      this._qualifiers = value.qualifiers;
    }
  }

  // family_name - computed: false, optional: false, required: true
  private _familyName?: string; 
  public get familyName() {
    return this.getStringAttribute('family_name');
  }
  public set familyName(value: string) {
    this._familyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyNameInput() {
    return this._familyName;
  }

  // qualifier_prefixes - computed: false, optional: true, required: false
  private _qualifierPrefixes?: string[]; 
  public get qualifierPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('qualifier_prefixes'));
  }
  public set qualifierPrefixes(value: string[]) {
    this._qualifierPrefixes = value;
  }
  public resetQualifierPrefixes() {
    this._qualifierPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierPrefixesInput() {
    return this._qualifierPrefixes;
  }

  // qualifiers - computed: false, optional: true, required: false
  private _qualifiers?: string[]; 
  public get qualifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('qualifiers'));
  }
  public set qualifiers(value: string[]) {
    this._qualifiers = value;
  }
  public resetQualifiers() {
    this._qualifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifiersInput() {
    return this._qualifiers;
  }
}

export class BigtableAuthorizedViewSubsetViewFamilySubsetsList extends cdktf.ComplexList {
  public internalValue? : BigtableAuthorizedViewSubsetViewFamilySubsets[] | cdktf.IResolvable

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
  public get(index: number): BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference {
    return new BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigtableAuthorizedViewSubsetView {
  /**
  * Base64-encoded row prefixes to be included in the authorized view. To provide access to all rows, include the empty string as a prefix ("").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#row_prefixes BigtableAuthorizedView#row_prefixes}
  */
  readonly rowPrefixes?: string[];
  /**
  * family_subsets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#family_subsets BigtableAuthorizedView#family_subsets}
  */
  readonly familySubsets?: BigtableAuthorizedViewSubsetViewFamilySubsets[] | cdktf.IResolvable;
}

export function bigtableAuthorizedViewSubsetViewToTerraform(struct?: BigtableAuthorizedViewSubsetViewOutputReference | BigtableAuthorizedViewSubsetView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    row_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rowPrefixes),
    family_subsets: cdktf.listMapper(bigtableAuthorizedViewSubsetViewFamilySubsetsToTerraform, true)(struct!.familySubsets),
  }
}


export function bigtableAuthorizedViewSubsetViewToHclTerraform(struct?: BigtableAuthorizedViewSubsetViewOutputReference | BigtableAuthorizedViewSubsetView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    row_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rowPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    family_subsets: {
      value: cdktf.listMapperHcl(bigtableAuthorizedViewSubsetViewFamilySubsetsToHclTerraform, true)(struct!.familySubsets),
      isBlock: true,
      type: "set",
      storageClassType: "BigtableAuthorizedViewSubsetViewFamilySubsetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigtableAuthorizedViewSubsetViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigtableAuthorizedViewSubsetView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rowPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowPrefixes = this._rowPrefixes;
    }
    if (this._familySubsets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.familySubsets = this._familySubsets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigtableAuthorizedViewSubsetView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rowPrefixes = undefined;
      this._familySubsets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rowPrefixes = value.rowPrefixes;
      this._familySubsets.internalValue = value.familySubsets;
    }
  }

  // row_prefixes - computed: false, optional: true, required: false
  private _rowPrefixes?: string[]; 
  public get rowPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('row_prefixes'));
  }
  public set rowPrefixes(value: string[]) {
    this._rowPrefixes = value;
  }
  public resetRowPrefixes() {
    this._rowPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowPrefixesInput() {
    return this._rowPrefixes;
  }

  // family_subsets - computed: false, optional: true, required: false
  private _familySubsets = new BigtableAuthorizedViewSubsetViewFamilySubsetsList(this, "family_subsets", true);
  public get familySubsets() {
    return this._familySubsets;
  }
  public putFamilySubsets(value: BigtableAuthorizedViewSubsetViewFamilySubsets[] | cdktf.IResolvable) {
    this._familySubsets.internalValue = value;
  }
  public resetFamilySubsets() {
    this._familySubsets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familySubsetsInput() {
    return this._familySubsets.internalValue;
  }
}
export interface BigtableAuthorizedViewTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#create BigtableAuthorizedView#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#update BigtableAuthorizedView#update}
  */
  readonly update?: string;
}

export function bigtableAuthorizedViewTimeoutsToTerraform(struct?: BigtableAuthorizedViewTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function bigtableAuthorizedViewTimeoutsToHclTerraform(struct?: BigtableAuthorizedViewTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigtableAuthorizedViewTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigtableAuthorizedViewTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigtableAuthorizedViewTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view google_bigtable_authorized_view}
*/
export class BigtableAuthorizedView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigtable_authorized_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BigtableAuthorizedView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigtableAuthorizedView to import
  * @param importFromId The id of the existing BigtableAuthorizedView that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigtableAuthorizedView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigtable_authorized_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/bigtable_authorized_view google_bigtable_authorized_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigtableAuthorizedViewConfig
  */
  public constructor(scope: Construct, id: string, config: BigtableAuthorizedViewConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_authorized_view',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.37.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionProtection = config.deletionProtection;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._name = config.name;
    this._project = config.project;
    this._tableName = config.tableName;
    this._subsetView.internalValue = config.subsetView;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: string; 
  public get deletionProtection() {
    return this.getStringAttribute('deletion_protection');
  }
  public set deletionProtection(value: string) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // subset_view - computed: false, optional: true, required: false
  private _subsetView = new BigtableAuthorizedViewSubsetViewOutputReference(this, "subset_view");
  public get subsetView() {
    return this._subsetView;
  }
  public putSubsetView(value: BigtableAuthorizedViewSubsetView) {
    this._subsetView.internalValue = value;
  }
  public resetSubsetView() {
    this._subsetView.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetViewInput() {
    return this._subsetView.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigtableAuthorizedViewTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigtableAuthorizedViewTimeouts) {
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
      deletion_protection: cdktf.stringToTerraform(this._deletionProtection),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      table_name: cdktf.stringToTerraform(this._tableName),
      subset_view: bigtableAuthorizedViewSubsetViewToTerraform(this._subsetView.internalValue),
      timeouts: bigtableAuthorizedViewTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection: {
        value: cdktf.stringToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subset_view: {
        value: bigtableAuthorizedViewSubsetViewToHclTerraform(this._subsetView.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigtableAuthorizedViewSubsetViewList",
      },
      timeouts: {
        value: bigtableAuthorizedViewTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigtableAuthorizedViewTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
