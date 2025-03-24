// https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeonpremVmwareNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations on the node Pool.
  * This field has the same restrictions as Kubernetes annotations.
  * The total size of all keys and values combined is limited to 256k.
  * Key can have 2 segments: prefix (optional) and name (required),
  * separated by a slash (/).
  * Prefix must be a DNS subdomain.
  * Name must be 63 characters or less, begin and end with alphanumerics,
  * with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#annotations GkeonpremVmwareNodePool#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The display name for the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#display_name GkeonpremVmwareNodePool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#id GkeonpremVmwareNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#location GkeonpremVmwareNodePool#location}
  */
  readonly location: string;
  /**
  * The vmware node pool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#name GkeonpremVmwareNodePool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#project GkeonpremVmwareNodePool#project}
  */
  readonly project?: string;
  /**
  * The cluster this node pool belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#vmware_cluster GkeonpremVmwareNodePool#vmware_cluster}
  */
  readonly vmwareCluster: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#config GkeonpremVmwareNodePool#config}
  */
  readonly config: GkeonpremVmwareNodePoolConfigA;
  /**
  * node_pool_autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#node_pool_autoscaling GkeonpremVmwareNodePool#node_pool_autoscaling}
  */
  readonly nodePoolAutoscaling?: GkeonpremVmwareNodePoolNodePoolAutoscaling;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#timeouts GkeonpremVmwareNodePool#timeouts}
  */
  readonly timeouts?: GkeonpremVmwareNodePoolTimeouts;
}
export interface GkeonpremVmwareNodePoolStatusConditions {
}

export function gkeonpremVmwareNodePoolStatusConditionsToTerraform(struct?: GkeonpremVmwareNodePoolStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremVmwareNodePoolStatusConditionsToHclTerraform(struct?: GkeonpremVmwareNodePoolStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremVmwareNodePoolStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareNodePoolStatusConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareNodePoolStatusConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_transition_time - computed: true, optional: false, required: false
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GkeonpremVmwareNodePoolStatusConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremVmwareNodePoolStatusConditionsOutputReference {
    return new GkeonpremVmwareNodePoolStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareNodePoolStatus {
}

export function gkeonpremVmwareNodePoolStatusToTerraform(struct?: GkeonpremVmwareNodePoolStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremVmwareNodePoolStatusToHclTerraform(struct?: GkeonpremVmwareNodePoolStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremVmwareNodePoolStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareNodePoolStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareNodePoolStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GkeonpremVmwareNodePoolStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class GkeonpremVmwareNodePoolStatusList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremVmwareNodePoolStatusOutputReference {
    return new GkeonpremVmwareNodePoolStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareNodePoolConfigTaints {
  /**
  * Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#effect GkeonpremVmwareNodePool#effect}
  */
  readonly effect?: string;
  /**
  * Key associated with the effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#key GkeonpremVmwareNodePool#key}
  */
  readonly key: string;
  /**
  * Value associated with the effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#value GkeonpremVmwareNodePool#value}
  */
  readonly value: string;
}

export function gkeonpremVmwareNodePoolConfigTaintsToTerraform(struct?: GkeonpremVmwareNodePoolConfigTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gkeonpremVmwareNodePoolConfigTaintsToHclTerraform(struct?: GkeonpremVmwareNodePoolConfigTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareNodePoolConfigTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareNodePoolConfigTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareNodePoolConfigTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class GkeonpremVmwareNodePoolConfigTaintsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremVmwareNodePoolConfigTaints[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremVmwareNodePoolConfigTaintsOutputReference {
    return new GkeonpremVmwareNodePoolConfigTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareNodePoolConfigVsphereConfigTags {
  /**
  * The Vsphere tag category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#category GkeonpremVmwareNodePool#category}
  */
  readonly category?: string;
  /**
  * The Vsphere tag name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#tag GkeonpremVmwareNodePool#tag}
  */
  readonly tag?: string;
}

export function gkeonpremVmwareNodePoolConfigVsphereConfigTagsToTerraform(struct?: GkeonpremVmwareNodePoolConfigVsphereConfigTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function gkeonpremVmwareNodePoolConfigVsphereConfigTagsToHclTerraform(struct?: GkeonpremVmwareNodePoolConfigVsphereConfigTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareNodePoolConfigVsphereConfigTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareNodePoolConfigVsphereConfigTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._tag = value.tag;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class GkeonpremVmwareNodePoolConfigVsphereConfigTagsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremVmwareNodePoolConfigVsphereConfigTags[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference {
    return new GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareNodePoolConfigVsphereConfig {
  /**
  * The name of the vCenter datastore. Inherited from the user cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#datastore GkeonpremVmwareNodePool#datastore}
  */
  readonly datastore?: string;
  /**
  * Vsphere host groups to apply to all VMs in the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#host_groups GkeonpremVmwareNodePool#host_groups}
  */
  readonly hostGroups?: string[];
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#tags GkeonpremVmwareNodePool#tags}
  */
  readonly tags?: GkeonpremVmwareNodePoolConfigVsphereConfigTags[] | cdktf.IResolvable;
}

export function gkeonpremVmwareNodePoolConfigVsphereConfigToTerraform(struct?: GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference | GkeonpremVmwareNodePoolConfigVsphereConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore: cdktf.stringToTerraform(struct!.datastore),
    host_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostGroups),
    tags: cdktf.listMapper(gkeonpremVmwareNodePoolConfigVsphereConfigTagsToTerraform, true)(struct!.tags),
  }
}


export function gkeonpremVmwareNodePoolConfigVsphereConfigToHclTerraform(struct?: GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference | GkeonpremVmwareNodePoolConfigVsphereConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(gkeonpremVmwareNodePoolConfigVsphereConfigTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareNodePoolConfigVsphereConfigTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareNodePoolConfigVsphereConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._hostGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostGroups = this._hostGroups;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareNodePoolConfigVsphereConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datastore = undefined;
      this._hostGroups = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datastore = value.datastore;
      this._hostGroups = value.hostGroups;
      this._tags.internalValue = value.tags;
    }
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  public resetDatastore() {
    this._datastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // host_groups - computed: false, optional: true, required: false
  private _hostGroups?: string[]; 
  public get hostGroups() {
    return this.getListAttribute('host_groups');
  }
  public set hostGroups(value: string[]) {
    this._hostGroups = value;
  }
  public resetHostGroups() {
    this._hostGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupsInput() {
    return this._hostGroups;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new GkeonpremVmwareNodePoolConfigVsphereConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: GkeonpremVmwareNodePoolConfigVsphereConfigTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface GkeonpremVmwareNodePoolConfigA {
  /**
  * VMware disk size to be used during creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#boot_disk_size_gb GkeonpremVmwareNodePool#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The number of CPUs for each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#cpus GkeonpremVmwareNodePool#cpus}
  */
  readonly cpus?: number;
  /**
  * Allow node pool traffic to be load balanced. Only works for clusters with
  * MetalLB load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#enable_load_balancer GkeonpremVmwareNodePool#enable_load_balancer}
  */
  readonly enableLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * The OS image name in vCenter, only valid when using Windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#image GkeonpremVmwareNodePool#image}
  */
  readonly image?: string;
  /**
  * The OS image to be used for each node in a node pool.
  * Currently 'cos', 'cos_cgv2', 'ubuntu', 'ubuntu_cgv2', 'ubuntu_containerd' and 'windows' are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#image_type GkeonpremVmwareNodePool#image_type}
  */
  readonly imageType: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node.
  * These will added in addition to any default label(s) that
  * Kubernetes may apply to the node.
  * In case of conflict in label keys, the applied set may differ depending on
  * the Kubernetes version -- it's best to assume the behavior is undefined
  * and conflicts should be avoided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#labels GkeonpremVmwareNodePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The megabytes of memory for each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#memory_mb GkeonpremVmwareNodePool#memory_mb}
  */
  readonly memoryMb?: number;
  /**
  * The number of nodes in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#replicas GkeonpremVmwareNodePool#replicas}
  */
  readonly replicas?: number;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#taints GkeonpremVmwareNodePool#taints}
  */
  readonly taints?: GkeonpremVmwareNodePoolConfigTaints[] | cdktf.IResolvable;
  /**
  * vsphere_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#vsphere_config GkeonpremVmwareNodePool#vsphere_config}
  */
  readonly vsphereConfig?: GkeonpremVmwareNodePoolConfigVsphereConfig;
}

export function gkeonpremVmwareNodePoolConfigAToTerraform(struct?: GkeonpremVmwareNodePoolConfigAOutputReference | GkeonpremVmwareNodePoolConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    cpus: cdktf.numberToTerraform(struct!.cpus),
    enable_load_balancer: cdktf.booleanToTerraform(struct!.enableLoadBalancer),
    image: cdktf.stringToTerraform(struct!.image),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    memory_mb: cdktf.numberToTerraform(struct!.memoryMb),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    taints: cdktf.listMapper(gkeonpremVmwareNodePoolConfigTaintsToTerraform, true)(struct!.taints),
    vsphere_config: gkeonpremVmwareNodePoolConfigVsphereConfigToTerraform(struct!.vsphereConfig),
  }
}


export function gkeonpremVmwareNodePoolConfigAToHclTerraform(struct?: GkeonpremVmwareNodePoolConfigAOutputReference | GkeonpremVmwareNodePoolConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.bootDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpus: {
      value: cdktf.numberToHclTerraform(struct!.cpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_load_balancer: {
      value: cdktf.booleanToHclTerraform(struct!.enableLoadBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
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
    memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    taints: {
      value: cdktf.listMapperHcl(gkeonpremVmwareNodePoolConfigTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareNodePoolConfigTaintsList",
    },
    vsphere_config: {
      value: gkeonpremVmwareNodePoolConfigVsphereConfigToHclTerraform(struct!.vsphereConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareNodePoolConfigVsphereConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareNodePoolConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareNodePoolConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._enableLoadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLoadBalancer = this._enableLoadBalancer;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._memoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMb = this._memoryMb;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    if (this._vsphereConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereConfig = this._vsphereConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareNodePoolConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskSizeGb = undefined;
      this._cpus = undefined;
      this._enableLoadBalancer = undefined;
      this._image = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._memoryMb = undefined;
      this._replicas = undefined;
      this._taints.internalValue = undefined;
      this._vsphereConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._cpus = value.cpus;
      this._enableLoadBalancer = value.enableLoadBalancer;
      this._image = value.image;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._memoryMb = value.memoryMb;
      this._replicas = value.replicas;
      this._taints.internalValue = value.taints;
      this._vsphereConfig.internalValue = value.vsphereConfig;
    }
  }

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // cpus - computed: false, optional: true, required: false
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // enable_load_balancer - computed: false, optional: true, required: false
  private _enableLoadBalancer?: boolean | cdktf.IResolvable; 
  public get enableLoadBalancer() {
    return this.getBooleanAttribute('enable_load_balancer');
  }
  public set enableLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._enableLoadBalancer = value;
  }
  public resetEnableLoadBalancer() {
    this._enableLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoadBalancerInput() {
    return this._enableLoadBalancer;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_type - computed: false, optional: false, required: true
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // labels - computed: true, optional: true, required: false
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

  // memory_mb - computed: false, optional: true, required: false
  private _memoryMb?: number; 
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
  public set memoryMb(value: number) {
    this._memoryMb = value;
  }
  public resetMemoryMb() {
    this._memoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMbInput() {
    return this._memoryMb;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new GkeonpremVmwareNodePoolConfigTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: GkeonpremVmwareNodePoolConfigTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // vsphere_config - computed: false, optional: true, required: false
  private _vsphereConfig = new GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference(this, "vsphere_config");
  public get vsphereConfig() {
    return this._vsphereConfig;
  }
  public putVsphereConfig(value: GkeonpremVmwareNodePoolConfigVsphereConfig) {
    this._vsphereConfig.internalValue = value;
  }
  public resetVsphereConfig() {
    this._vsphereConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereConfigInput() {
    return this._vsphereConfig.internalValue;
  }
}
export interface GkeonpremVmwareNodePoolNodePoolAutoscaling {
  /**
  * Maximum number of replicas in the NodePool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#max_replicas GkeonpremVmwareNodePool#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * Minimum number of replicas in the NodePool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#min_replicas GkeonpremVmwareNodePool#min_replicas}
  */
  readonly minReplicas: number;
}

export function gkeonpremVmwareNodePoolNodePoolAutoscalingToTerraform(struct?: GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference | GkeonpremVmwareNodePoolNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
  }
}


export function gkeonpremVmwareNodePoolNodePoolAutoscalingToHclTerraform(struct?: GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference | GkeonpremVmwareNodePoolNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareNodePoolNodePoolAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareNodePoolNodePoolAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
    }
  }

  // max_replicas - computed: false, optional: false, required: true
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: false, required: true
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }
}
export interface GkeonpremVmwareNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#create GkeonpremVmwareNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#delete GkeonpremVmwareNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#update GkeonpremVmwareNodePool#update}
  */
  readonly update?: string;
}

export function gkeonpremVmwareNodePoolTimeoutsToTerraform(struct?: GkeonpremVmwareNodePoolTimeouts | cdktf.IResolvable): any {
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


export function gkeonpremVmwareNodePoolTimeoutsToHclTerraform(struct?: GkeonpremVmwareNodePoolTimeouts | cdktf.IResolvable): any {
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

export class GkeonpremVmwareNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeonpremVmwareNodePoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeonpremVmwareNodePoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool google_gkeonprem_vmware_node_pool}
*/
export class GkeonpremVmwareNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gkeonprem_vmware_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GkeonpremVmwareNodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GkeonpremVmwareNodePool to import
  * @param importFromId The id of the existing GkeonpremVmwareNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GkeonpremVmwareNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gkeonprem_vmware_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gkeonprem_vmware_node_pool google_gkeonprem_vmware_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeonpremVmwareNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: GkeonpremVmwareNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gkeonprem_vmware_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.26.0',
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
    this._annotations = config.annotations;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._vmwareCluster = config.vmwareCluster;
    this._config.internalValue = config.config;
    this._nodePoolAutoscaling.internalValue = config.nodePoolAutoscaling;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // on_prem_version - computed: true, optional: false, required: false
  public get onPremVersion() {
    return this.getStringAttribute('on_prem_version');
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  private _status = new GkeonpremVmwareNodePoolStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // vmware_cluster - computed: false, optional: false, required: true
  private _vmwareCluster?: string; 
  public get vmwareCluster() {
    return this.getStringAttribute('vmware_cluster');
  }
  public set vmwareCluster(value: string) {
    this._vmwareCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareClusterInput() {
    return this._vmwareCluster;
  }

  // config - computed: false, optional: false, required: true
  private _config = new GkeonpremVmwareNodePoolConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GkeonpremVmwareNodePoolConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // node_pool_autoscaling - computed: false, optional: true, required: false
  private _nodePoolAutoscaling = new GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference(this, "node_pool_autoscaling");
  public get nodePoolAutoscaling() {
    return this._nodePoolAutoscaling;
  }
  public putNodePoolAutoscaling(value: GkeonpremVmwareNodePoolNodePoolAutoscaling) {
    this._nodePoolAutoscaling.internalValue = value;
  }
  public resetNodePoolAutoscaling() {
    this._nodePoolAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolAutoscalingInput() {
    return this._nodePoolAutoscaling.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeonpremVmwareNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeonpremVmwareNodePoolTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      vmware_cluster: cdktf.stringToTerraform(this._vmwareCluster),
      config: gkeonpremVmwareNodePoolConfigAToTerraform(this._config.internalValue),
      node_pool_autoscaling: gkeonpremVmwareNodePoolNodePoolAutoscalingToTerraform(this._nodePoolAutoscaling.internalValue),
      timeouts: gkeonpremVmwareNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmware_cluster: {
        value: cdktf.stringToHclTerraform(this._vmwareCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: gkeonpremVmwareNodePoolConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremVmwareNodePoolConfigAList",
      },
      node_pool_autoscaling: {
        value: gkeonpremVmwareNodePoolNodePoolAutoscalingToHclTerraform(this._nodePoolAutoscaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremVmwareNodePoolNodePoolAutoscalingList",
      },
      timeouts: {
        value: gkeonpremVmwareNodePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GkeonpremVmwareNodePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
