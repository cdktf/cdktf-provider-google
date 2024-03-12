// https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/data_catalog_policy_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalogPolicyTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of this policy tag. It must: contain only unicode characters, tabs,
  * newlines, carriage returns and page breaks; and be at most 2000 bytes long when
  * encoded in UTF-8. If not set, defaults to an empty description.
  * If not set, defaults to an empty description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/data_catalog_policy_tag#description DataCatalogPolicyTag#description}
  */
  readonly description?: string;
  /**
  * User defined name of this policy tag. It must: be unique within the parent
  * taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces;
  * not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/data_catalog_policy_tag#display_name DataCatalogPolicyTag#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/data_catalog_policy_tag#id DataCatalogPolicyTag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource name of this policy tag's parent policy tag.
  * If empty, it means this policy tag is a top level policy tag.
  * If not set, defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/data_catalog_policy_tag#parent_policy_tag DataCatalogPolicyTag#parent_policy_tag}
  */
  readonly parentPolicyTag?: string;
  /**
  * Taxonomy the policy tag is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/data_catalog_policy_tag#taxonomy DataCatalogPolicyTag#taxonomy}
  */
  readonly taxonomy: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/data_catalog_policy_tag#timeouts DataCatalogPolicyTag#timeouts}
  */
  readonly timeouts?: DataCatalogPolicyTagTimeouts;
}
export interface DataCatalogPolicyTagTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/data_catalog_policy_tag#create DataCatalogPolicyTag#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/data_catalog_policy_tag#delete DataCatalogPolicyTag#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/data_catalog_policy_tag#update DataCatalogPolicyTag#update}
  */
  readonly update?: string;
}

export function dataCatalogPolicyTagTimeoutsToTerraform(struct?: DataCatalogPolicyTagTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataCatalogPolicyTagTimeoutsToHclTerraform(struct?: DataCatalogPolicyTagTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class DataCatalogPolicyTagTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCatalogPolicyTagTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalogPolicyTagTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/data_catalog_policy_tag google_data_catalog_policy_tag}
*/
export class DataCatalogPolicyTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_catalog_policy_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalogPolicyTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalogPolicyTag to import
  * @param importFromId The id of the existing DataCatalogPolicyTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/data_catalog_policy_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalogPolicyTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_data_catalog_policy_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/data_catalog_policy_tag google_data_catalog_policy_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalogPolicyTagConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalogPolicyTagConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_policy_tag',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.20.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._parentPolicyTag = config.parentPolicyTag;
    this._taxonomy = config.taxonomy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_policy_tags - computed: true, optional: false, required: false
  public get childPolicyTags() {
    return this.getListAttribute('child_policy_tags');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_policy_tag - computed: false, optional: true, required: false
  private _parentPolicyTag?: string; 
  public get parentPolicyTag() {
    return this.getStringAttribute('parent_policy_tag');
  }
  public set parentPolicyTag(value: string) {
    this._parentPolicyTag = value;
  }
  public resetParentPolicyTag() {
    this._parentPolicyTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPolicyTagInput() {
    return this._parentPolicyTag;
  }

  // taxonomy - computed: false, optional: false, required: true
  private _taxonomy?: string; 
  public get taxonomy() {
    return this.getStringAttribute('taxonomy');
  }
  public set taxonomy(value: string) {
    this._taxonomy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taxonomyInput() {
    return this._taxonomy;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataCatalogPolicyTagTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataCatalogPolicyTagTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      parent_policy_tag: cdktf.stringToTerraform(this._parentPolicyTag),
      taxonomy: cdktf.stringToTerraform(this._taxonomy),
      timeouts: dataCatalogPolicyTagTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      parent_policy_tag: {
        value: cdktf.stringToHclTerraform(this._parentPolicyTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      taxonomy: {
        value: cdktf.stringToHclTerraform(this._taxonomy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataCatalogPolicyTagTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCatalogPolicyTagTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
