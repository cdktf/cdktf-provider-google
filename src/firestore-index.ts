// https://www.terraform.io/docs/providers/google/r/firestore_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirestoreIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * The collection being indexed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index#collection FirestoreIndex#collection}
  */
  readonly collection: string;
  /**
  * The Firestore database id. Defaults to '"(default)"'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index#database FirestoreIndex#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index#id FirestoreIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index#project FirestoreIndex#project}
  */
  readonly project?: string;
  /**
  * The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index#query_scope FirestoreIndex#query_scope}
  */
  readonly queryScope?: string;
  /**
  * fields block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index#fields FirestoreIndex#fields}
  */
  readonly fields: FirestoreIndexFields[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index#timeouts FirestoreIndex#timeouts}
  */
  readonly timeouts?: FirestoreIndexTimeouts;
}
export interface FirestoreIndexFields {
  /**
  * Indicates that this field supports operations on arrayValues. Only one of 'order' and 'arrayConfig' can
be specified. Possible values: ["CONTAINS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index#array_config FirestoreIndex#array_config}
  */
  readonly arrayConfig?: string;
  /**
  * Name of the field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index#field_path FirestoreIndex#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.
Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index#order FirestoreIndex#order}
  */
  readonly order?: string;
}

export function firestoreIndexFieldsToTerraform(struct?: FirestoreIndexFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_config: cdktf.stringToTerraform(struct!.arrayConfig),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class FirestoreIndexFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirestoreIndexFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayConfig = this._arrayConfig;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirestoreIndexFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayConfig = undefined;
      this._fieldPath = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayConfig = value.arrayConfig;
      this._fieldPath = value.fieldPath;
      this._order = value.order;
    }
  }

  // array_config - computed: false, optional: true, required: false
  private _arrayConfig?: string; 
  public get arrayConfig() {
    return this.getStringAttribute('array_config');
  }
  public set arrayConfig(value: string) {
    this._arrayConfig = value;
  }
  public resetArrayConfig() {
    this._arrayConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayConfigInput() {
    return this._arrayConfig;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class FirestoreIndexFieldsList extends cdktf.ComplexList {
  public internalValue? : FirestoreIndexFields[] | cdktf.IResolvable

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
  public get(index: number): FirestoreIndexFieldsOutputReference {
    return new FirestoreIndexFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirestoreIndexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index#create FirestoreIndex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index#delete FirestoreIndex#delete}
  */
  readonly delete?: string;
}

export function firestoreIndexTimeoutsToTerraform(struct?: FirestoreIndexTimeoutsOutputReference | FirestoreIndexTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class FirestoreIndexTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirestoreIndexTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirestoreIndexTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/firestore_index google_firestore_index}
*/
export class FirestoreIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firestore_index";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/firestore_index google_firestore_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirestoreIndexConfig
  */
  public constructor(scope: Construct, id: string, config: FirestoreIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firestore_index',
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
    this._collection = config.collection;
    this._database = config.database;
    this._id = config.id;
    this._project = config.project;
    this._queryScope = config.queryScope;
    this._fields.internalValue = config.fields;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection - computed: false, optional: false, required: true
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // query_scope - computed: false, optional: true, required: false
  private _queryScope?: string; 
  public get queryScope() {
    return this.getStringAttribute('query_scope');
  }
  public set queryScope(value: string) {
    this._queryScope = value;
  }
  public resetQueryScope() {
    this._queryScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryScopeInput() {
    return this._queryScope;
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new FirestoreIndexFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: FirestoreIndexFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FirestoreIndexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FirestoreIndexTimeouts) {
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
      collection: cdktf.stringToTerraform(this._collection),
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      query_scope: cdktf.stringToTerraform(this._queryScope),
      fields: cdktf.listMapper(firestoreIndexFieldsToTerraform, true)(this._fields.internalValue),
      timeouts: firestoreIndexTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
