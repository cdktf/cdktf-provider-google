// https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BigtableGcPolicyConfig extends TerraformMetaArguments {
  /** The name of the column family. */
  readonly columnFamily: string;
  /** The name of the Bigtable instance. */
  readonly instanceName: string;
  /** If multiple policies are set, you should choose between UNION OR INTERSECTION. */
  readonly mode?: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** The name of the table. */
  readonly table: string;
  /** max_age block */
  readonly maxAge?: BigtableGcPolicyMaxAge[];
  /** max_version block */
  readonly maxVersion?: BigtableGcPolicyMaxVersion[];
}
export interface BigtableGcPolicyMaxAge {
  /** Number of days before applying GC policy. */
  readonly days: number;
}
export interface BigtableGcPolicyMaxVersion {
  /** Number of version before applying the GC policy. */
  readonly number: number;
}

// Resource

export class BigtableGcPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BigtableGcPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_gc_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._columnFamily = config.columnFamily;
    this._instanceName = config.instanceName;
    this._mode = config.mode;
    this._project = config.project;
    this._table = config.table;
    this._maxAge = config.maxAge;
    this._maxVersion = config.maxVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // column_family - computed: false, optional: false, required: true
  private _columnFamily: string;
  public get columnFamily() {
    return this.getStringAttribute('column_family');
  }
  public set columnFamily(value: string) {
    this._columnFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnFamilyInput() {
    return this._columnFamily
  }

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

  // mode - computed: false, optional: true, required: false
  private _mode?: string;
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string ) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
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

  // table - computed: false, optional: false, required: true
  private _table: string;
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: BigtableGcPolicyMaxAge[];
  public get maxAge() {
    return this.interpolationForAttribute('max_age') as any;
  }
  public set maxAge(value: BigtableGcPolicyMaxAge[] ) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: BigtableGcPolicyMaxVersion[];
  public get maxVersion() {
    return this.interpolationForAttribute('max_version') as any;
  }
  public set maxVersion(value: BigtableGcPolicyMaxVersion[] ) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      column_family: this._columnFamily,
      instance_name: this._instanceName,
      mode: this._mode,
      project: this._project,
      table: this._table,
      max_age: this._maxAge,
      max_version: this._maxVersion,
    };
  }
}
