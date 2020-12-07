// https://www.terraform.io/docs/providers/google/r/bigtable_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigtableTableConfig extends cdktf.TerraformMetaArguments {
  /** The name of the Bigtable instance. */
  readonly instanceName: string;
  /** The name of the table. */
  readonly name: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** A list of predefined keys to split the table on. !> Warning: Modifying the split_keys of an existing table will cause Terraform to delete/recreate the entire google_bigtable_table resource. */
  readonly splitKeys?: string[];
  /** column_family block */
  readonly columnFamily?: BigtableTableColumnFamily[];
}
export interface BigtableTableColumnFamily {
  /** The name of the column family. */
  readonly family: string;
}

function bigtableTableColumnFamilyToTerraform(struct?: BigtableTableColumnFamily): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    family: cdktf.stringToTerraform(struct!.family),
  }
}


// Resource

export class BigtableTable extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BigtableTableConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_table',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceName = config.instanceName;
    this._name = config.name;
    this._project = config.project;
    this._splitKeys = config.splitKeys;
    this._columnFamily = config.columnFamily;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName: string;
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._project
  }

  // split_keys - computed: false, optional: true, required: false
  private _splitKeys?: string[];
  public get splitKeys() {
    return this.getListAttribute('split_keys');
  }
  public set splitKeys(value: string[] ) {
    this._splitKeys = value;
  }
  public resetSplitKeys() {
    this._splitKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitKeysInput() {
    return this._splitKeys
  }

  // column_family - computed: false, optional: true, required: false
  private _columnFamily?: BigtableTableColumnFamily[];
  public get columnFamily() {
    return this.interpolationForAttribute('column_family') as any;
  }
  public set columnFamily(value: BigtableTableColumnFamily[] ) {
    this._columnFamily = value;
  }
  public resetColumnFamily() {
    this._columnFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnFamilyInput() {
    return this._columnFamily
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_name: cdktf.stringToTerraform(this._instanceName),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      split_keys: cdktf.listMapper(cdktf.stringToTerraform)(this._splitKeys),
      column_family: cdktf.listMapper(bigtableTableColumnFamilyToTerraform)(this._columnFamily),
    };
  }
}
