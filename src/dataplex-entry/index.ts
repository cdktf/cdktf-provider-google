/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataplexEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The entry group id of the entry group the entry will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#entry_group_id DataplexEntry#entry_group_id}
  */
  readonly entryGroupId?: string;
  /**
  * The entry id of the entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#entry_id DataplexEntry#entry_id}
  */
  readonly entryId?: string;
  /**
  * The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#entry_type DataplexEntry#entry_type}
  */
  readonly entryType: string;
  /**
  * A name for the entry that can be referenced by an external system. For more information, see https://cloud.google.com/dataplex/docs/fully-qualified-names.
  * The maximum size of the field is 4000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#fully_qualified_name DataplexEntry#fully_qualified_name}
  */
  readonly fullyQualifiedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#id DataplexEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location where entry will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#location DataplexEntry#location}
  */
  readonly location?: string;
  /**
  * The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#parent_entry DataplexEntry#parent_entry}
  */
  readonly parentEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#project DataplexEntry#project}
  */
  readonly project?: string;
  /**
  * aspects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#aspects DataplexEntry#aspects}
  */
  readonly aspects?: DataplexEntryAspects[] | cdktf.IResolvable;
  /**
  * entry_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#entry_source DataplexEntry#entry_source}
  */
  readonly entrySource?: DataplexEntryEntrySource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#timeouts DataplexEntry#timeouts}
  */
  readonly timeouts?: DataplexEntryTimeouts;
}
export interface DataplexEntryAspectsAspect {
  /**
  * The content of the aspect in JSON form, according to its aspect type schema. The maximum size of the field is 120KB (encoded as UTF-8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#data DataplexEntry#data}
  */
  readonly data: string;
}

export function dataplexEntryAspectsAspectToTerraform(struct?: DataplexEntryAspectsAspectOutputReference | DataplexEntryAspectsAspect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
  }
}


export function dataplexEntryAspectsAspectToHclTerraform(struct?: DataplexEntryAspectsAspectOutputReference | DataplexEntryAspectsAspect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexEntryAspectsAspectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexEntryAspectsAspect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexEntryAspectsAspect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
    }
  }

  // aspect_type - computed: true, optional: false, required: false
  public get aspectType() {
    return this.getStringAttribute('aspect_type');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}
export interface DataplexEntryAspects {
  /**
  * Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following:
  * 
  * If the aspect is attached directly to the entry: {project_number}.{locationId}.{aspectTypeId}
  * If the aspect is attached to an entry's path: {project_number}.{locationId}.{aspectTypeId}@{path}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#aspect_key DataplexEntry#aspect_key}
  */
  readonly aspectKey: string;
  /**
  * aspect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#aspect DataplexEntry#aspect}
  */
  readonly aspect: DataplexEntryAspectsAspect;
}

export function dataplexEntryAspectsToTerraform(struct?: DataplexEntryAspects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aspect_key: cdktf.stringToTerraform(struct!.aspectKey),
    aspect: dataplexEntryAspectsAspectToTerraform(struct!.aspect),
  }
}


export function dataplexEntryAspectsToHclTerraform(struct?: DataplexEntryAspects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aspect_key: {
      value: cdktf.stringToHclTerraform(struct!.aspectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aspect: {
      value: dataplexEntryAspectsAspectToHclTerraform(struct!.aspect),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexEntryAspectsAspectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexEntryAspectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplexEntryAspects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aspectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspectKey = this._aspectKey;
    }
    if (this._aspect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspect = this._aspect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexEntryAspects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aspectKey = undefined;
      this._aspect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aspectKey = value.aspectKey;
      this._aspect.internalValue = value.aspect;
    }
  }

  // aspect_key - computed: false, optional: false, required: true
  private _aspectKey?: string; 
  public get aspectKey() {
    return this.getStringAttribute('aspect_key');
  }
  public set aspectKey(value: string) {
    this._aspectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectKeyInput() {
    return this._aspectKey;
  }

  // aspect - computed: false, optional: false, required: true
  private _aspect = new DataplexEntryAspectsAspectOutputReference(this, "aspect");
  public get aspect() {
    return this._aspect;
  }
  public putAspect(value: DataplexEntryAspectsAspect) {
    this._aspect.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectInput() {
    return this._aspect.internalValue;
  }
}

export class DataplexEntryAspectsList extends cdktf.ComplexList {
  public internalValue? : DataplexEntryAspects[] | cdktf.IResolvable

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
  public get(index: number): DataplexEntryAspectsOutputReference {
    return new DataplexEntryAspectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexEntryEntrySourceAncestors {
  /**
  * The name of the ancestor resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#name DataplexEntry#name}
  */
  readonly name?: string;
  /**
  * The type of the ancestor resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#type DataplexEntry#type}
  */
  readonly type?: string;
}

export function dataplexEntryEntrySourceAncestorsToTerraform(struct?: DataplexEntryEntrySourceAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataplexEntryEntrySourceAncestorsToHclTerraform(struct?: DataplexEntryEntrySourceAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexEntryEntrySourceAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplexEntryEntrySourceAncestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexEntryEntrySourceAncestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataplexEntryEntrySourceAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataplexEntryEntrySourceAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataplexEntryEntrySourceAncestorsOutputReference {
    return new DataplexEntryEntrySourceAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexEntryEntrySource {
  /**
  * The time when the resource was created in the source system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#create_time DataplexEntry#create_time}
  */
  readonly createTime?: string;
  /**
  * A description of the data resource. Maximum length is 2,000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#description DataplexEntry#description}
  */
  readonly description?: string;
  /**
  * A user-friendly display name. Maximum length is 500 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#display_name DataplexEntry#display_name}
  */
  readonly displayName?: string;
  /**
  * User-defined labels. The maximum size of keys and values is 128 characters each.
  * An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#labels DataplexEntry#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The platform containing the source system. Maximum length is 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#platform DataplexEntry#platform}
  */
  readonly platform?: string;
  /**
  * The name of the resource in the source system. Maximum length is 4,000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#resource DataplexEntry#resource}
  */
  readonly resource?: string;
  /**
  * The name of the source system. Maximum length is 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#system DataplexEntry#system}
  */
  readonly systemAttribute?: string;
  /**
  * The time when the resource was last updated in the source system.
  * If the entry exists in the system and its EntrySource has updateTime populated,
  * further updates to the EntrySource of the entry must provide incremental updates to its updateTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#update_time DataplexEntry#update_time}
  */
  readonly updateTime?: string;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#ancestors DataplexEntry#ancestors}
  */
  readonly ancestors?: DataplexEntryEntrySourceAncestors[] | cdktf.IResolvable;
}

export function dataplexEntryEntrySourceToTerraform(struct?: DataplexEntryEntrySourceOutputReference | DataplexEntryEntrySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_time: cdktf.stringToTerraform(struct!.createTime),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    platform: cdktf.stringToTerraform(struct!.platform),
    resource: cdktf.stringToTerraform(struct!.resource),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    update_time: cdktf.stringToTerraform(struct!.updateTime),
    ancestors: cdktf.listMapper(dataplexEntryEntrySourceAncestorsToTerraform, true)(struct!.ancestors),
  }
}


export function dataplexEntryEntrySourceToHclTerraform(struct?: DataplexEntryEntrySourceOutputReference | DataplexEntryEntrySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_time: {
      value: cdktf.stringToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_time: {
      value: cdktf.stringToHclTerraform(struct!.updateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ancestors: {
      value: cdktf.listMapperHcl(dataplexEntryEntrySourceAncestorsToHclTerraform, true)(struct!.ancestors),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexEntryEntrySourceAncestorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexEntryEntrySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexEntryEntrySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._updateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTime = this._updateTime;
    }
    if (this._ancestors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestors = this._ancestors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexEntryEntrySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createTime = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._labels = undefined;
      this._platform = undefined;
      this._resource = undefined;
      this._system = undefined;
      this._updateTime = undefined;
      this._ancestors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createTime = value.createTime;
      this._description = value.description;
      this._displayName = value.displayName;
      this._labels = value.labels;
      this._platform = value.platform;
      this._resource = value.resource;
      this._system = value.systemAttribute;
      this._updateTime = value.updateTime;
      this._ancestors.internalValue = value.ancestors;
    }
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // system - computed: false, optional: true, required: false
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // update_time - computed: false, optional: true, required: false
  private _updateTime?: string; 
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
  public set updateTime(value: string) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataplexEntryEntrySourceAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataplexEntryEntrySourceAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }
}
export interface DataplexEntryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#create DataplexEntry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#delete DataplexEntry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#update DataplexEntry#update}
  */
  readonly update?: string;
}

export function dataplexEntryTimeoutsToTerraform(struct?: DataplexEntryTimeouts | cdktf.IResolvable): any {
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


export function dataplexEntryTimeoutsToHclTerraform(struct?: DataplexEntryTimeouts | cdktf.IResolvable): any {
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

export class DataplexEntryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataplexEntryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataplexEntryTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry google_dataplex_entry}
*/
export class DataplexEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataplex_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataplexEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataplexEntry to import
  * @param importFromId The id of the existing DataplexEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataplexEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataplex_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_entry google_dataplex_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataplexEntryConfig
  */
  public constructor(scope: Construct, id: string, config: DataplexEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataplex_entry',
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
    this._entryGroupId = config.entryGroupId;
    this._entryId = config.entryId;
    this._entryType = config.entryType;
    this._fullyQualifiedName = config.fullyQualifiedName;
    this._id = config.id;
    this._location = config.location;
    this._parentEntry = config.parentEntry;
    this._project = config.project;
    this._aspects.internalValue = config.aspects;
    this._entrySource.internalValue = config.entrySource;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // entry_group_id - computed: false, optional: true, required: false
  private _entryGroupId?: string; 
  public get entryGroupId() {
    return this.getStringAttribute('entry_group_id');
  }
  public set entryGroupId(value: string) {
    this._entryGroupId = value;
  }
  public resetEntryGroupId() {
    this._entryGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryGroupIdInput() {
    return this._entryGroupId;
  }

  // entry_id - computed: false, optional: true, required: false
  private _entryId?: string; 
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }
  public set entryId(value: string) {
    this._entryId = value;
  }
  public resetEntryId() {
    this._entryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryIdInput() {
    return this._entryId;
  }

  // entry_type - computed: false, optional: false, required: true
  private _entryType?: string; 
  public get entryType() {
    return this.getStringAttribute('entry_type');
  }
  public set entryType(value: string) {
    this._entryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryTypeInput() {
    return this._entryType;
  }

  // fully_qualified_name - computed: false, optional: true, required: false
  private _fullyQualifiedName?: string; 
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }
  public set fullyQualifiedName(value: string) {
    this._fullyQualifiedName = value;
  }
  public resetFullyQualifiedName() {
    this._fullyQualifiedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullyQualifiedNameInput() {
    return this._fullyQualifiedName;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_entry - computed: false, optional: true, required: false
  private _parentEntry?: string; 
  public get parentEntry() {
    return this.getStringAttribute('parent_entry');
  }
  public set parentEntry(value: string) {
    this._parentEntry = value;
  }
  public resetParentEntry() {
    this._parentEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentEntryInput() {
    return this._parentEntry;
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

  // aspects - computed: false, optional: true, required: false
  private _aspects = new DataplexEntryAspectsList(this, "aspects", false);
  public get aspects() {
    return this._aspects;
  }
  public putAspects(value: DataplexEntryAspects[] | cdktf.IResolvable) {
    this._aspects.internalValue = value;
  }
  public resetAspects() {
    this._aspects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectsInput() {
    return this._aspects.internalValue;
  }

  // entry_source - computed: false, optional: true, required: false
  private _entrySource = new DataplexEntryEntrySourceOutputReference(this, "entry_source");
  public get entrySource() {
    return this._entrySource;
  }
  public putEntrySource(value: DataplexEntryEntrySource) {
    this._entrySource.internalValue = value;
  }
  public resetEntrySource() {
    this._entrySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrySourceInput() {
    return this._entrySource.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataplexEntryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataplexEntryTimeouts) {
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
      entry_group_id: cdktf.stringToTerraform(this._entryGroupId),
      entry_id: cdktf.stringToTerraform(this._entryId),
      entry_type: cdktf.stringToTerraform(this._entryType),
      fully_qualified_name: cdktf.stringToTerraform(this._fullyQualifiedName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      parent_entry: cdktf.stringToTerraform(this._parentEntry),
      project: cdktf.stringToTerraform(this._project),
      aspects: cdktf.listMapper(dataplexEntryAspectsToTerraform, true)(this._aspects.internalValue),
      entry_source: dataplexEntryEntrySourceToTerraform(this._entrySource.internalValue),
      timeouts: dataplexEntryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entry_group_id: {
        value: cdktf.stringToHclTerraform(this._entryGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_id: {
        value: cdktf.stringToHclTerraform(this._entryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_type: {
        value: cdktf.stringToHclTerraform(this._entryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fully_qualified_name: {
        value: cdktf.stringToHclTerraform(this._fullyQualifiedName),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_entry: {
        value: cdktf.stringToHclTerraform(this._parentEntry),
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
      aspects: {
        value: cdktf.listMapperHcl(dataplexEntryAspectsToHclTerraform, true)(this._aspects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataplexEntryAspectsList",
      },
      entry_source: {
        value: dataplexEntryEntrySourceToHclTerraform(this._entrySource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataplexEntryEntrySourceList",
      },
      timeouts: {
        value: dataplexEntryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataplexEntryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
