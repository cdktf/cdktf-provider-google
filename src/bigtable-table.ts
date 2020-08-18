// https://www.terraform.io/docs/providers/google/r/bigtable_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BigtableTableConfig extends TerraformMetaArguments {
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

// Resource

export class BigtableTable extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName: string;
  public get instanceName() {
    return this._instanceName;
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // split_keys - computed: false, optional: true, required: false
  private _splitKeys?: string[];
  public get splitKeys() {
    return this._splitKeys;
  }
  public set splitKeys(value: string[] | undefined) {
    this._splitKeys = value;
  }

  // column_family - computed: false, optional: true, required: false
  private _columnFamily?: BigtableTableColumnFamily[];
  public get columnFamily() {
    return this._columnFamily;
  }
  public set columnFamily(value: BigtableTableColumnFamily[] | undefined) {
    this._columnFamily = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_name: this._instanceName,
      name: this._name,
      project: this._project,
      split_keys: this._splitKeys,
      column_family: this._columnFamily,
    };
  }
}
