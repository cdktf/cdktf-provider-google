// https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigtableGcPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the column family.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#column_family BigtableGcPolicy#column_family}
  */
  readonly columnFamily: string;
  /**
  * Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#gc_rules BigtableGcPolicy#gc_rules}
  */
  readonly gcRules?: string;
  /**
  * The name of the Bigtable instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#instance_name BigtableGcPolicy#instance_name}
  */
  readonly instanceName: string;
  /**
  * If multiple policies are set, you should choose between UNION OR INTERSECTION.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#mode BigtableGcPolicy#mode}
  */
  readonly mode?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#project BigtableGcPolicy#project}
  */
  readonly project?: string;
  /**
  * The name of the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#table BigtableGcPolicy#table}
  */
  readonly table: string;
  /**
  * max_age block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#max_age BigtableGcPolicy#max_age}
  */
  readonly maxAge?: BigtableGcPolicyMaxAge;
  /**
  * max_version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#max_version BigtableGcPolicy#max_version}
  */
  readonly maxVersion?: BigtableGcPolicyMaxVersion[] | cdktf.IResolvable;
}
export interface BigtableGcPolicyMaxAge {
  /**
  * Number of days before applying GC policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#days BigtableGcPolicy#days}
  */
  readonly days?: number;
  /**
  * Duration before applying GC policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#duration BigtableGcPolicy#duration}
  */
  readonly duration?: string;
}

export function bigtableGcPolicyMaxAgeToTerraform(struct?: BigtableGcPolicyMaxAgeOutputReference | BigtableGcPolicyMaxAge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}

export class BigtableGcPolicyMaxAgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigtableGcPolicyMaxAge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigtableGcPolicyMaxAge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._duration = value.duration;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface BigtableGcPolicyMaxVersion {
  /**
  * Number of version before applying the GC policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#number BigtableGcPolicy#number}
  */
  readonly number: number;
}

export function bigtableGcPolicyMaxVersionToTerraform(struct?: BigtableGcPolicyMaxVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy google_bigtable_gc_policy}
*/
export class BigtableGcPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigtable_gc_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy google_bigtable_gc_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigtableGcPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BigtableGcPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_gc_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.20.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._columnFamily = config.columnFamily;
    this._gcRules = config.gcRules;
    this._instanceName = config.instanceName;
    this._mode = config.mode;
    this._project = config.project;
    this._table = config.table;
    this._maxAge.internalValue = config.maxAge;
    this._maxVersion = config.maxVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // column_family - computed: false, optional: false, required: true
  private _columnFamily?: string; 
  public get columnFamily() {
    return this.getStringAttribute('column_family');
  }
  public set columnFamily(value: string) {
    this._columnFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnFamilyInput() {
    return this._columnFamily;
  }

  // gc_rules - computed: false, optional: true, required: false
  private _gcRules?: string; 
  public get gcRules() {
    return this.getStringAttribute('gc_rules');
  }
  public set gcRules(value: string) {
    this._gcRules = value;
  }
  public resetGcRules() {
    this._gcRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcRulesInput() {
    return this._gcRules;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge = new BigtableGcPolicyMaxAgeOutputReference(this, "max_age");
  public get maxAge() {
    return this._maxAge;
  }
  public putMaxAge(value: BigtableGcPolicyMaxAge) {
    this._maxAge.internalValue = value;
  }
  public resetMaxAge() {
    this._maxAge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge.internalValue;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: BigtableGcPolicyMaxVersion[] | cdktf.IResolvable; 
  public get maxVersion() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('max_version');
  }
  public set maxVersion(value: BigtableGcPolicyMaxVersion[] | cdktf.IResolvable) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      column_family: cdktf.stringToTerraform(this._columnFamily),
      gc_rules: cdktf.stringToTerraform(this._gcRules),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      mode: cdktf.stringToTerraform(this._mode),
      project: cdktf.stringToTerraform(this._project),
      table: cdktf.stringToTerraform(this._table),
      max_age: bigtableGcPolicyMaxAgeToTerraform(this._maxAge.internalValue),
      max_version: cdktf.listMapper(bigtableGcPolicyMaxVersionToTerraform)(this._maxVersion),
    };
  }
}
