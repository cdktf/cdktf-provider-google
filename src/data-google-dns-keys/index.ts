// https://www.terraform.io/docs/providers/google/d/dns_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleDnsKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Name of the zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_keys#managed_zone DataGoogleDnsKeys#managed_zone}
  */
  readonly managedZone: string;
  /**
  * The ID of the project for the Google Cloud.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_keys#project DataGoogleDnsKeys#project}
  */
  readonly project?: string;
  /**
  * key_signing_keys block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_keys#key_signing_keys DataGoogleDnsKeys#key_signing_keys}
  */
  readonly keySigningKeys?: DataGoogleDnsKeysKeySigningKeys[] | cdktf.IResolvable;
  /**
  * zone_signing_keys block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_keys#zone_signing_keys DataGoogleDnsKeys#zone_signing_keys}
  */
  readonly zoneSigningKeys?: DataGoogleDnsKeysZoneSigningKeys[] | cdktf.IResolvable;
}
export interface DataGoogleDnsKeysKeySigningKeysDigests {
}

export function dataGoogleDnsKeysKeySigningKeysDigestsToTerraform(struct?: DataGoogleDnsKeysKeySigningKeysDigests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleDnsKeysKeySigningKeysDigestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleDnsKeysKeySigningKeysDigests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDnsKeysKeySigningKeysDigests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGoogleDnsKeysKeySigningKeysDigestsList extends cdktf.ComplexList {
  public internalValue? : DataGoogleDnsKeysKeySigningKeysDigests[] | cdktf.IResolvable

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
  public get(index: number): DataGoogleDnsKeysKeySigningKeysDigestsOutputReference {
    return new DataGoogleDnsKeysKeySigningKeysDigestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleDnsKeysKeySigningKeys {
  /**
  * digests block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_keys#digests DataGoogleDnsKeys#digests}
  */
  readonly digests?: DataGoogleDnsKeysKeySigningKeysDigests[] | cdktf.IResolvable;
}

export function dataGoogleDnsKeysKeySigningKeysToTerraform(struct?: DataGoogleDnsKeysKeySigningKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digests: cdktf.listMapper(dataGoogleDnsKeysKeySigningKeysDigestsToTerraform, true)(struct!.digests),
  }
}

export class DataGoogleDnsKeysKeySigningKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleDnsKeysKeySigningKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.digests = this._digests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDnsKeysKeySigningKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digests.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digests.internalValue = value.digests;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ds_record - computed: true, optional: false, required: false
  public get dsRecord() {
    return this.getStringAttribute('ds_record');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // key_length - computed: true, optional: false, required: false
  public get keyLength() {
    return this.getNumberAttribute('key_length');
  }

  // key_tag - computed: true, optional: false, required: false
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // digests - computed: false, optional: true, required: false
  private _digests = new DataGoogleDnsKeysKeySigningKeysDigestsList(this, "digests", false);
  public get digests() {
    return this._digests;
  }
  public putDigests(value: DataGoogleDnsKeysKeySigningKeysDigests[] | cdktf.IResolvable) {
    this._digests.internalValue = value;
  }
  public resetDigests() {
    this._digests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestsInput() {
    return this._digests.internalValue;
  }
}

export class DataGoogleDnsKeysKeySigningKeysList extends cdktf.ComplexList {
  public internalValue? : DataGoogleDnsKeysKeySigningKeys[] | cdktf.IResolvable

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
  public get(index: number): DataGoogleDnsKeysKeySigningKeysOutputReference {
    return new DataGoogleDnsKeysKeySigningKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleDnsKeysZoneSigningKeysDigests {
}

export function dataGoogleDnsKeysZoneSigningKeysDigestsToTerraform(struct?: DataGoogleDnsKeysZoneSigningKeysDigests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleDnsKeysZoneSigningKeysDigests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDnsKeysZoneSigningKeysDigests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGoogleDnsKeysZoneSigningKeysDigestsList extends cdktf.ComplexList {
  public internalValue? : DataGoogleDnsKeysZoneSigningKeysDigests[] | cdktf.IResolvable

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
  public get(index: number): DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference {
    return new DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleDnsKeysZoneSigningKeys {
  /**
  * digests block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_keys#digests DataGoogleDnsKeys#digests}
  */
  readonly digests?: DataGoogleDnsKeysZoneSigningKeysDigests[] | cdktf.IResolvable;
}

export function dataGoogleDnsKeysZoneSigningKeysToTerraform(struct?: DataGoogleDnsKeysZoneSigningKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digests: cdktf.listMapper(dataGoogleDnsKeysZoneSigningKeysDigestsToTerraform, true)(struct!.digests),
  }
}

export class DataGoogleDnsKeysZoneSigningKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleDnsKeysZoneSigningKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.digests = this._digests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDnsKeysZoneSigningKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digests.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digests.internalValue = value.digests;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // key_length - computed: true, optional: false, required: false
  public get keyLength() {
    return this.getNumberAttribute('key_length');
  }

  // key_tag - computed: true, optional: false, required: false
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // digests - computed: false, optional: true, required: false
  private _digests = new DataGoogleDnsKeysZoneSigningKeysDigestsList(this, "digests", false);
  public get digests() {
    return this._digests;
  }
  public putDigests(value: DataGoogleDnsKeysZoneSigningKeysDigests[] | cdktf.IResolvable) {
    this._digests.internalValue = value;
  }
  public resetDigests() {
    this._digests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestsInput() {
    return this._digests.internalValue;
  }
}

export class DataGoogleDnsKeysZoneSigningKeysList extends cdktf.ComplexList {
  public internalValue? : DataGoogleDnsKeysZoneSigningKeys[] | cdktf.IResolvable

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
  public get(index: number): DataGoogleDnsKeysZoneSigningKeysOutputReference {
    return new DataGoogleDnsKeysZoneSigningKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/dns_keys google_dns_keys}
*/
export class DataGoogleDnsKeys extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_keys";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/dns_keys google_dns_keys} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleDnsKeysConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleDnsKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_keys',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.60.1',
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
    this._managedZone = config.managedZone;
    this._project = config.project;
    this._keySigningKeys.internalValue = config.keySigningKeys;
    this._zoneSigningKeys.internalValue = config.zoneSigningKeys;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_zone - computed: false, optional: false, required: true
  private _managedZone?: string; 
  public get managedZone() {
    return this.getStringAttribute('managed_zone');
  }
  public set managedZone(value: string) {
    this._managedZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedZoneInput() {
    return this._managedZone;
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

  // key_signing_keys - computed: false, optional: true, required: false
  private _keySigningKeys = new DataGoogleDnsKeysKeySigningKeysList(this, "key_signing_keys", false);
  public get keySigningKeys() {
    return this._keySigningKeys;
  }
  public putKeySigningKeys(value: DataGoogleDnsKeysKeySigningKeys[] | cdktf.IResolvable) {
    this._keySigningKeys.internalValue = value;
  }
  public resetKeySigningKeys() {
    this._keySigningKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySigningKeysInput() {
    return this._keySigningKeys.internalValue;
  }

  // zone_signing_keys - computed: false, optional: true, required: false
  private _zoneSigningKeys = new DataGoogleDnsKeysZoneSigningKeysList(this, "zone_signing_keys", false);
  public get zoneSigningKeys() {
    return this._zoneSigningKeys;
  }
  public putZoneSigningKeys(value: DataGoogleDnsKeysZoneSigningKeys[] | cdktf.IResolvable) {
    this._zoneSigningKeys.internalValue = value;
  }
  public resetZoneSigningKeys() {
    this._zoneSigningKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSigningKeysInput() {
    return this._zoneSigningKeys.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      managed_zone: cdktf.stringToTerraform(this._managedZone),
      project: cdktf.stringToTerraform(this._project),
      key_signing_keys: cdktf.listMapper(dataGoogleDnsKeysKeySigningKeysToTerraform, true)(this._keySigningKeys.internalValue),
      zone_signing_keys: cdktf.listMapper(dataGoogleDnsKeysZoneSigningKeysToTerraform, true)(this._zoneSigningKeys.internalValue),
    };
  }
}
