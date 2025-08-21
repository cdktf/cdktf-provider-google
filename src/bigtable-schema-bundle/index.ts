/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigtableSchemaBundleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#id BigtableSchemaBundle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, allow backwards incompatible changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#ignore_warnings BigtableSchemaBundle#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * The name of the instance to create the schema bundle within.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#instance BigtableSchemaBundle#instance}
  */
  readonly instance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#project BigtableSchemaBundle#project}
  */
  readonly project?: string;
  /**
  * The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#schema_bundle_id BigtableSchemaBundle#schema_bundle_id}
  */
  readonly schemaBundleId: string;
  /**
  * The name of the table to create the schema bundle within.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#table BigtableSchemaBundle#table}
  */
  readonly table?: string;
  /**
  * proto_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#proto_schema BigtableSchemaBundle#proto_schema}
  */
  readonly protoSchema: BigtableSchemaBundleProtoSchema;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#timeouts BigtableSchemaBundle#timeouts}
  */
  readonly timeouts?: BigtableSchemaBundleTimeouts;
}
export interface BigtableSchemaBundleProtoSchema {
  /**
  * Base64 encoded content of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#proto_descriptors BigtableSchemaBundle#proto_descriptors}
  */
  readonly protoDescriptors: string;
}

export function bigtableSchemaBundleProtoSchemaToTerraform(struct?: BigtableSchemaBundleProtoSchemaOutputReference | BigtableSchemaBundleProtoSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proto_descriptors: cdktf.stringToTerraform(struct!.protoDescriptors),
  }
}


export function bigtableSchemaBundleProtoSchemaToHclTerraform(struct?: BigtableSchemaBundleProtoSchemaOutputReference | BigtableSchemaBundleProtoSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proto_descriptors: {
      value: cdktf.stringToHclTerraform(struct!.protoDescriptors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigtableSchemaBundleProtoSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigtableSchemaBundleProtoSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protoDescriptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoDescriptors = this._protoDescriptors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigtableSchemaBundleProtoSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._protoDescriptors = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._protoDescriptors = value.protoDescriptors;
    }
  }

  // proto_descriptors - computed: false, optional: false, required: true
  private _protoDescriptors?: string; 
  public get protoDescriptors() {
    return this.getStringAttribute('proto_descriptors');
  }
  public set protoDescriptors(value: string) {
    this._protoDescriptors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoDescriptorsInput() {
    return this._protoDescriptors;
  }
}
export interface BigtableSchemaBundleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#create BigtableSchemaBundle#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#delete BigtableSchemaBundle#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#update BigtableSchemaBundle#update}
  */
  readonly update?: string;
}

export function bigtableSchemaBundleTimeoutsToTerraform(struct?: BigtableSchemaBundleTimeouts | cdktf.IResolvable): any {
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


export function bigtableSchemaBundleTimeoutsToHclTerraform(struct?: BigtableSchemaBundleTimeouts | cdktf.IResolvable): any {
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

export class BigtableSchemaBundleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigtableSchemaBundleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BigtableSchemaBundleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle google_bigtable_schema_bundle}
*/
export class BigtableSchemaBundle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigtable_schema_bundle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BigtableSchemaBundle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigtableSchemaBundle to import
  * @param importFromId The id of the existing BigtableSchemaBundle that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigtableSchemaBundle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigtable_schema_bundle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle google_bigtable_schema_bundle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigtableSchemaBundleConfig
  */
  public constructor(scope: Construct, id: string, config: BigtableSchemaBundleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_schema_bundle',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.1',
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
    this._id = config.id;
    this._ignoreWarnings = config.ignoreWarnings;
    this._instance = config.instance;
    this._project = config.project;
    this._schemaBundleId = config.schemaBundleId;
    this._table = config.table;
    this._protoSchema.internalValue = config.protoSchema;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // schema_bundle_id - computed: false, optional: false, required: true
  private _schemaBundleId?: string; 
  public get schemaBundleId() {
    return this.getStringAttribute('schema_bundle_id');
  }
  public set schemaBundleId(value: string) {
    this._schemaBundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaBundleIdInput() {
    return this._schemaBundleId;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // proto_schema - computed: false, optional: false, required: true
  private _protoSchema = new BigtableSchemaBundleProtoSchemaOutputReference(this, "proto_schema");
  public get protoSchema() {
    return this._protoSchema;
  }
  public putProtoSchema(value: BigtableSchemaBundleProtoSchema) {
    this._protoSchema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoSchemaInput() {
    return this._protoSchema.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigtableSchemaBundleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigtableSchemaBundleTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      instance: cdktf.stringToTerraform(this._instance),
      project: cdktf.stringToTerraform(this._project),
      schema_bundle_id: cdktf.stringToTerraform(this._schemaBundleId),
      table: cdktf.stringToTerraform(this._table),
      proto_schema: bigtableSchemaBundleProtoSchemaToTerraform(this._protoSchema.internalValue),
      timeouts: bigtableSchemaBundleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
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
      schema_bundle_id: {
        value: cdktf.stringToHclTerraform(this._schemaBundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table: {
        value: cdktf.stringToHclTerraform(this._table),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proto_schema: {
        value: bigtableSchemaBundleProtoSchemaToHclTerraform(this._protoSchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigtableSchemaBundleProtoSchemaList",
      },
      timeouts: {
        value: bigtableSchemaBundleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigtableSchemaBundleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
