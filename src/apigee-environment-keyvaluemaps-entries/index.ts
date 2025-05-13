// https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_environment_keyvaluemaps_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeEnvironmentKeyvaluemapsEntriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Apigee environment keyvalumaps Id associated with the Apigee environment,
  * in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_environment_keyvaluemaps_entries#env_keyvaluemap_id ApigeeEnvironmentKeyvaluemapsEntries#env_keyvaluemap_id}
  */
  readonly envKeyvaluemapId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_environment_keyvaluemaps_entries#id ApigeeEnvironmentKeyvaluemapsEntries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Required. Resource URI that can be used to identify the scope of the key value map entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_environment_keyvaluemaps_entries#name ApigeeEnvironmentKeyvaluemapsEntries#name}
  */
  readonly name: string;
  /**
  * Required. Data or payload that is being retrieved and associated with the unique key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_environment_keyvaluemaps_entries#value ApigeeEnvironmentKeyvaluemapsEntries#value}
  */
  readonly value: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_environment_keyvaluemaps_entries#timeouts ApigeeEnvironmentKeyvaluemapsEntries#timeouts}
  */
  readonly timeouts?: ApigeeEnvironmentKeyvaluemapsEntriesTimeouts;
}
export interface ApigeeEnvironmentKeyvaluemapsEntriesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_environment_keyvaluemaps_entries#create ApigeeEnvironmentKeyvaluemapsEntries#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_environment_keyvaluemaps_entries#delete ApigeeEnvironmentKeyvaluemapsEntries#delete}
  */
  readonly delete?: string;
}

export function apigeeEnvironmentKeyvaluemapsEntriesTimeoutsToTerraform(struct?: ApigeeEnvironmentKeyvaluemapsEntriesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function apigeeEnvironmentKeyvaluemapsEntriesTimeoutsToHclTerraform(struct?: ApigeeEnvironmentKeyvaluemapsEntriesTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigeeEnvironmentKeyvaluemapsEntriesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApigeeEnvironmentKeyvaluemapsEntriesTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_environment_keyvaluemaps_entries google_apigee_environment_keyvaluemaps_entries}
*/
export class ApigeeEnvironmentKeyvaluemapsEntries extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_environment_keyvaluemaps_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApigeeEnvironmentKeyvaluemapsEntries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigeeEnvironmentKeyvaluemapsEntries to import
  * @param importFromId The id of the existing ApigeeEnvironmentKeyvaluemapsEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_environment_keyvaluemaps_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigeeEnvironmentKeyvaluemapsEntries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_environment_keyvaluemaps_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_environment_keyvaluemaps_entries google_apigee_environment_keyvaluemaps_entries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeEnvironmentKeyvaluemapsEntriesConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeEnvironmentKeyvaluemapsEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_environment_keyvaluemaps_entries',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.34.1',
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
    this._envKeyvaluemapId = config.envKeyvaluemapId;
    this._id = config.id;
    this._name = config.name;
    this._value = config.value;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // env_keyvaluemap_id - computed: false, optional: false, required: true
  private _envKeyvaluemapId?: string; 
  public get envKeyvaluemapId() {
    return this.getStringAttribute('env_keyvaluemap_id');
  }
  public set envKeyvaluemapId(value: string) {
    this._envKeyvaluemapId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envKeyvaluemapIdInput() {
    return this._envKeyvaluemapId;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeEnvironmentKeyvaluemapsEntriesTimeouts) {
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
      env_keyvaluemap_id: cdktf.stringToTerraform(this._envKeyvaluemapId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      value: cdktf.stringToTerraform(this._value),
      timeouts: apigeeEnvironmentKeyvaluemapsEntriesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env_keyvaluemap_id: {
        value: cdktf.stringToHclTerraform(this._envKeyvaluemapId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apigeeEnvironmentKeyvaluemapsEntriesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApigeeEnvironmentKeyvaluemapsEntriesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
