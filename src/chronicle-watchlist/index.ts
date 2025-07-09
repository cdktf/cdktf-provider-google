/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChronicleWatchlistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Description of the watchlist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#description ChronicleWatchlist#description}
  */
  readonly description?: string;
  /**
  * Required. Display name of the watchlist.
  * Note that it must be at least one character and less than 63 characters
  * (https://google.aip.dev/148).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#display_name ChronicleWatchlist#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique identifier for the Chronicle instance, which is the same as the customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#instance ChronicleWatchlist#instance}
  */
  readonly instance: string;
  /**
  * The location of the resource. This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#location ChronicleWatchlist#location}
  */
  readonly location: string;
  /**
  * Optional. Weight applied to the risk score for entities
  * in this watchlist.
  * The default is 1.0 if it is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#multiplying_factor ChronicleWatchlist#multiplying_factor}
  */
  readonly multiplyingFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}
  */
  readonly project?: string;
  /**
  * Optional. The ID to use for the watchlist,
  * which will become the final component of the watchlist's resource name.
  * This value should be 4-63 characters, and valid characters
  * are /a-z-/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#watchlist_id ChronicleWatchlist#watchlist_id}
  */
  readonly watchlistId?: string;
  /**
  * entity_population_mechanism block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#entity_population_mechanism ChronicleWatchlist#entity_population_mechanism}
  */
  readonly entityPopulationMechanism: ChronicleWatchlistEntityPopulationMechanism;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#timeouts ChronicleWatchlist#timeouts}
  */
  readonly timeouts?: ChronicleWatchlistTimeouts;
  /**
  * watchlist_user_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#watchlist_user_preferences ChronicleWatchlist#watchlist_user_preferences}
  */
  readonly watchlistUserPreferences?: ChronicleWatchlistWatchlistUserPreferences;
}
export interface ChronicleWatchlistEntityCount {
}

export function chronicleWatchlistEntityCountToTerraform(struct?: ChronicleWatchlistEntityCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function chronicleWatchlistEntityCountToHclTerraform(struct?: ChronicleWatchlistEntityCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ChronicleWatchlistEntityCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ChronicleWatchlistEntityCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleWatchlistEntityCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asset - computed: true, optional: false, required: false
  public get asset() {
    return this.getNumberAttribute('asset');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getNumberAttribute('user');
  }
}

export class ChronicleWatchlistEntityCountList extends cdktf.ComplexList {

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
  public get(index: number): ChronicleWatchlistEntityCountOutputReference {
    return new ChronicleWatchlistEntityCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleWatchlistEntityPopulationMechanismManual {
}

export function chronicleWatchlistEntityPopulationMechanismManualToTerraform(struct?: ChronicleWatchlistEntityPopulationMechanismManualOutputReference | ChronicleWatchlistEntityPopulationMechanismManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function chronicleWatchlistEntityPopulationMechanismManualToHclTerraform(struct?: ChronicleWatchlistEntityPopulationMechanismManualOutputReference | ChronicleWatchlistEntityPopulationMechanismManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ChronicleWatchlistEntityPopulationMechanismManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleWatchlistEntityPopulationMechanismManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleWatchlistEntityPopulationMechanismManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ChronicleWatchlistEntityPopulationMechanism {
  /**
  * manual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#manual ChronicleWatchlist#manual}
  */
  readonly manual?: ChronicleWatchlistEntityPopulationMechanismManual;
}

export function chronicleWatchlistEntityPopulationMechanismToTerraform(struct?: ChronicleWatchlistEntityPopulationMechanismOutputReference | ChronicleWatchlistEntityPopulationMechanism): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manual: chronicleWatchlistEntityPopulationMechanismManualToTerraform(struct!.manual),
  }
}


export function chronicleWatchlistEntityPopulationMechanismToHclTerraform(struct?: ChronicleWatchlistEntityPopulationMechanismOutputReference | ChronicleWatchlistEntityPopulationMechanism): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manual: {
      value: chronicleWatchlistEntityPopulationMechanismManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleWatchlistEntityPopulationMechanismManualList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleWatchlistEntityPopulationMechanismOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleWatchlistEntityPopulationMechanism | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleWatchlistEntityPopulationMechanism | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._manual.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._manual.internalValue = value.manual;
    }
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new ChronicleWatchlistEntityPopulationMechanismManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: ChronicleWatchlistEntityPopulationMechanismManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }
}
export interface ChronicleWatchlistTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#create ChronicleWatchlist#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#delete ChronicleWatchlist#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#update ChronicleWatchlist#update}
  */
  readonly update?: string;
}

export function chronicleWatchlistTimeoutsToTerraform(struct?: ChronicleWatchlistTimeouts | cdktf.IResolvable): any {
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


export function chronicleWatchlistTimeoutsToHclTerraform(struct?: ChronicleWatchlistTimeouts | cdktf.IResolvable): any {
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

export class ChronicleWatchlistTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChronicleWatchlistTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ChronicleWatchlistTimeouts | cdktf.IResolvable | undefined) {
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
export interface ChronicleWatchlistWatchlistUserPreferences {
  /**
  * Optional. Whether the watchlist is pinned on the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#pinned ChronicleWatchlist#pinned}
  */
  readonly pinned?: boolean | cdktf.IResolvable;
}

export function chronicleWatchlistWatchlistUserPreferencesToTerraform(struct?: ChronicleWatchlistWatchlistUserPreferencesOutputReference | ChronicleWatchlistWatchlistUserPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pinned: cdktf.booleanToTerraform(struct!.pinned),
  }
}


export function chronicleWatchlistWatchlistUserPreferencesToHclTerraform(struct?: ChronicleWatchlistWatchlistUserPreferencesOutputReference | ChronicleWatchlistWatchlistUserPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pinned: {
      value: cdktf.booleanToHclTerraform(struct!.pinned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleWatchlistWatchlistUserPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleWatchlistWatchlistUserPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pinned !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinned = this._pinned;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleWatchlistWatchlistUserPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pinned = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pinned = value.pinned;
    }
  }

  // pinned - computed: false, optional: true, required: false
  private _pinned?: boolean | cdktf.IResolvable; 
  public get pinned() {
    return this.getBooleanAttribute('pinned');
  }
  public set pinned(value: boolean | cdktf.IResolvable) {
    this._pinned = value;
  }
  public resetPinned() {
    this._pinned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedInput() {
    return this._pinned;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist google_chronicle_watchlist}
*/
export class ChronicleWatchlist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_watchlist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChronicleWatchlist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChronicleWatchlist to import
  * @param importFromId The id of the existing ChronicleWatchlist that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChronicleWatchlist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_watchlist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist google_chronicle_watchlist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChronicleWatchlistConfig
  */
  public constructor(scope: Construct, id: string, config: ChronicleWatchlistConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_watchlist',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.43.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._multiplyingFactor = config.multiplyingFactor;
    this._project = config.project;
    this._watchlistId = config.watchlistId;
    this._entityPopulationMechanism.internalValue = config.entityPopulationMechanism;
    this._timeouts.internalValue = config.timeouts;
    this._watchlistUserPreferences.internalValue = config.watchlistUserPreferences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // entity_count - computed: true, optional: false, required: false
  private _entityCount = new ChronicleWatchlistEntityCountList(this, "entity_count", false);
  public get entityCount() {
    return this._entityCount;
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // multiplying_factor - computed: false, optional: true, required: false
  private _multiplyingFactor?: number; 
  public get multiplyingFactor() {
    return this.getNumberAttribute('multiplying_factor');
  }
  public set multiplyingFactor(value: number) {
    this._multiplyingFactor = value;
  }
  public resetMultiplyingFactor() {
    this._multiplyingFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplyingFactorInput() {
    return this._multiplyingFactor;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // watchlist_id - computed: true, optional: true, required: false
  private _watchlistId?: string; 
  public get watchlistId() {
    return this.getStringAttribute('watchlist_id');
  }
  public set watchlistId(value: string) {
    this._watchlistId = value;
  }
  public resetWatchlistId() {
    this._watchlistId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchlistIdInput() {
    return this._watchlistId;
  }

  // entity_population_mechanism - computed: false, optional: false, required: true
  private _entityPopulationMechanism = new ChronicleWatchlistEntityPopulationMechanismOutputReference(this, "entity_population_mechanism");
  public get entityPopulationMechanism() {
    return this._entityPopulationMechanism;
  }
  public putEntityPopulationMechanism(value: ChronicleWatchlistEntityPopulationMechanism) {
    this._entityPopulationMechanism.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityPopulationMechanismInput() {
    return this._entityPopulationMechanism.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChronicleWatchlistTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChronicleWatchlistTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // watchlist_user_preferences - computed: false, optional: true, required: false
  private _watchlistUserPreferences = new ChronicleWatchlistWatchlistUserPreferencesOutputReference(this, "watchlist_user_preferences");
  public get watchlistUserPreferences() {
    return this._watchlistUserPreferences;
  }
  public putWatchlistUserPreferences(value: ChronicleWatchlistWatchlistUserPreferences) {
    this._watchlistUserPreferences.internalValue = value;
  }
  public resetWatchlistUserPreferences() {
    this._watchlistUserPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchlistUserPreferencesInput() {
    return this._watchlistUserPreferences.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      location: cdktf.stringToTerraform(this._location),
      multiplying_factor: cdktf.numberToTerraform(this._multiplyingFactor),
      project: cdktf.stringToTerraform(this._project),
      watchlist_id: cdktf.stringToTerraform(this._watchlistId),
      entity_population_mechanism: chronicleWatchlistEntityPopulationMechanismToTerraform(this._entityPopulationMechanism.internalValue),
      timeouts: chronicleWatchlistTimeoutsToTerraform(this._timeouts.internalValue),
      watchlist_user_preferences: chronicleWatchlistWatchlistUserPreferencesToTerraform(this._watchlistUserPreferences.internalValue),
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
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiplying_factor: {
        value: cdktf.numberToHclTerraform(this._multiplyingFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      watchlist_id: {
        value: cdktf.stringToHclTerraform(this._watchlistId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_population_mechanism: {
        value: chronicleWatchlistEntityPopulationMechanismToHclTerraform(this._entityPopulationMechanism.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleWatchlistEntityPopulationMechanismList",
      },
      timeouts: {
        value: chronicleWatchlistTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChronicleWatchlistTimeouts",
      },
      watchlist_user_preferences: {
        value: chronicleWatchlistWatchlistUserPreferencesToHclTerraform(this._watchlistUserPreferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleWatchlistWatchlistUserPreferencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
