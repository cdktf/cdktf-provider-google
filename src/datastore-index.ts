// https://www.terraform.io/docs/providers/google/r/datastore_index.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatastoreIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy for including ancestors in the index. Default value: "NONE" Possible values: ["NONE", "ALL_ANCESTORS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastore_index.html#ancestor DatastoreIndex#ancestor}
  */
  readonly ancestor?: string;
  /**
  * The entity kind which the index applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastore_index.html#kind DatastoreIndex#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastore_index.html#project DatastoreIndex#project}
  */
  readonly project?: string;
  /**
  * properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastore_index.html#properties DatastoreIndex#properties}
  */
  readonly properties?: DatastoreIndexProperties[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastore_index.html#timeouts DatastoreIndex#timeouts}
  */
  readonly timeouts?: DatastoreIndexTimeouts;
}
export interface DatastoreIndexProperties {
  /**
  * The direction the index should optimize for sorting. Possible values: ["ASCENDING", "DESCENDING"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastore_index.html#direction DatastoreIndex#direction}
  */
  readonly direction: string;
  /**
  * The property name to index.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastore_index.html#name DatastoreIndex#name}
  */
  readonly name: string;
}

export function datastoreIndexPropertiesToTerraform(struct?: DatastoreIndexProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DatastoreIndexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastore_index.html#create DatastoreIndex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastore_index.html#delete DatastoreIndex#delete}
  */
  readonly delete?: string;
}

export function datastoreIndexTimeoutsToTerraform(struct?: DatastoreIndexTimeoutsOutputReference | DatastoreIndexTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class DatastoreIndexTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DatastoreIndexTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreIndexTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/datastore_index.html google_datastore_index}
*/
export class DatastoreIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_datastore_index";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/datastore_index.html google_datastore_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatastoreIndexConfig
  */
  public constructor(scope: Construct, id: string, config: DatastoreIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'google_datastore_index',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ancestor = config.ancestor;
    this._kind = config.kind;
    this._project = config.project;
    this._properties = config.properties;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ancestor - computed: false, optional: true, required: false
  private _ancestor?: string; 
  public get ancestor() {
    return this.getStringAttribute('ancestor');
  }
  public set ancestor(value: string) {
    this._ancestor = value;
  }
  public resetAncestor() {
    this._ancestor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorInput() {
    return this._ancestor;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_id - computed: true, optional: false, required: false
  public get indexId() {
    return this.getStringAttribute('index_id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // properties - computed: false, optional: true, required: false
  private _properties?: DatastoreIndexProperties[]; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: DatastoreIndexProperties[]) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatastoreIndexTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatastoreIndexTimeouts) {
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
      ancestor: cdktf.stringToTerraform(this._ancestor),
      kind: cdktf.stringToTerraform(this._kind),
      project: cdktf.stringToTerraform(this._project),
      properties: cdktf.listMapper(datastoreIndexPropertiesToTerraform)(this._properties),
      timeouts: datastoreIndexTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
