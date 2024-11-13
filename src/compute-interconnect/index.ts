/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInterconnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Administrative status of the interconnect. When this is set to true, the Interconnect is
  * functional and can carry traffic. When set to false, no packets can be carried over the
  * interconnect and no BGP routes are exchanged over it. By default, the status is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#admin_enabled ComputeInterconnect#admin_enabled}
  */
  readonly adminEnabled?: boolean | cdktf.IResolvable;
  /**
  * Customer name, to put in the Letter of Authorization as the party authorized to request a
  * crossconnect. This field is required for Dedicated and Partner Interconnect, should not be specified
  * for cross-cloud interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#customer_name ComputeInterconnect#customer_name}
  */
  readonly customerName?: string;
  /**
  * An optional description of this resource. Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#description ComputeInterconnect#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#id ComputeInterconnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of interconnect. Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED.
  * Can take one of the following values:
  *   - PARTNER: A partner-managed interconnection shared between customers though a partner.
  *   - DEDICATED: A dedicated physical interconnection with the customer. Possible values: ["DEDICATED", "PARTNER", "IT_PRIVATE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#interconnect_type ComputeInterconnect#interconnect_type}
  */
  readonly interconnectType: string;
  /**
  * Labels for this resource. These can only be added or modified by the setLabels
  * method. Each label key/value pair must comply with RFC1035. Label values may be empty.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#labels ComputeInterconnect#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Type of link requested. Note that this field indicates the speed of each of the links in the
  * bundle, not the speed of the entire bundle. Can take one of the following values:
  *   - LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics.
  *   - LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics. Possible values: ["LINK_TYPE_ETHERNET_10G_LR", "LINK_TYPE_ETHERNET_100G_LR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#link_type ComputeInterconnect#link_type}
  */
  readonly linkType: string;
  /**
  * URL of the InterconnectLocation object that represents where this connection is to be provisioned.
  * Specifies the location inside Google's Networks, should not be passed in case of cross-cloud interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#location ComputeInterconnect#location}
  */
  readonly location?: string;
  /**
  * Enable or disable MACsec on this Interconnect connection.
  * MACsec enablement fails if the MACsec object is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#macsec_enabled ComputeInterconnect#macsec_enabled}
  */
  readonly macsecEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the resource. Provided by the client when the resource is created. The name must be
  * 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
  * long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
  * character must be a lowercase letter, and all following characters must be a dash,
  * lowercase letter, or digit, except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#name ComputeInterconnect#name}
  */
  readonly name: string;
  /**
  * Email address to contact the customer NOC for operations and maintenance notifications
  * regarding this Interconnect. If specified, this will be used for notifications in addition to
  * all other forms described, such as Cloud Monitoring logs alerting and Cloud Notifications.
  * This field is required for users who sign up for Cloud Interconnect using workforce identity
  * federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#noc_contact_email ComputeInterconnect#noc_contact_email}
  */
  readonly nocContactEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#project ComputeInterconnect#project}
  */
  readonly project?: string;
  /**
  * Indicates that this is a Cross-Cloud Interconnect. This field specifies the location outside
  * of Google's network that the interconnect is connected to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#remote_location ComputeInterconnect#remote_location}
  */
  readonly remoteLocation?: string;
  /**
  * interconnects.list of features requested for this Interconnect connection. Options: IF_MACSEC (
  * If specified then the connection is created on MACsec capable hardware ports. If not
  * specified, the default value is false, which allocates non-MACsec capable ports first if
  * available). Note that MACSEC is still technically allowed for compatibility reasons, but it
  * does not work with the API, and will be removed in an upcoming major version. Possible values: ["MACSEC", "IF_MACSEC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#requested_features ComputeInterconnect#requested_features}
  */
  readonly requestedFeatures?: string[];
  /**
  * Target number of physical links in the link bundle, as requested by the customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#requested_link_count ComputeInterconnect#requested_link_count}
  */
  readonly requestedLinkCount: number;
  /**
  * macsec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#macsec ComputeInterconnect#macsec}
  */
  readonly macsec?: ComputeInterconnectMacsec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#timeouts ComputeInterconnect#timeouts}
  */
  readonly timeouts?: ComputeInterconnectTimeouts;
}
export interface ComputeInterconnectCircuitInfos {
}

export function computeInterconnectCircuitInfosToTerraform(struct?: ComputeInterconnectCircuitInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectCircuitInfosToHclTerraform(struct?: ComputeInterconnectCircuitInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectCircuitInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInterconnectCircuitInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectCircuitInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_demarc_id - computed: true, optional: false, required: false
  public get customerDemarcId() {
    return this.getStringAttribute('customer_demarc_id');
  }

  // google_circuit_id - computed: true, optional: false, required: false
  public get googleCircuitId() {
    return this.getStringAttribute('google_circuit_id');
  }

  // google_demarc_id - computed: true, optional: false, required: false
  public get googleDemarcId() {
    return this.getStringAttribute('google_demarc_id');
  }
}

export class ComputeInterconnectCircuitInfosList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInterconnectCircuitInfosOutputReference {
    return new ComputeInterconnectCircuitInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectExpectedOutages {
}

export function computeInterconnectExpectedOutagesToTerraform(struct?: ComputeInterconnectExpectedOutages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectExpectedOutagesToHclTerraform(struct?: ComputeInterconnectExpectedOutages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectExpectedOutagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInterconnectExpectedOutages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectExpectedOutages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // affected_circuits - computed: true, optional: false, required: false
  public get affectedCircuits() {
    return this.getListAttribute('affected_circuits');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // issue_type - computed: true, optional: false, required: false
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ComputeInterconnectExpectedOutagesList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInterconnectExpectedOutagesOutputReference {
    return new ComputeInterconnectExpectedOutagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectMacsecPreSharedKeys {
  /**
  * If set to true, the Interconnect connection is configured with a should-secure
  * MACsec security policy, that allows the Google router to fallback to cleartext
  * traffic if the MKA session cannot be established. By default, the Interconnect
  * connection is configured with a must-secure security policy that drops all traffic
  * if the MKA session cannot be established with your router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#fail_open ComputeInterconnect#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * A name for this pre-shared key. The name must be 1-63 characters long, and
  *  comply with RFC1035. Specifically, the name must be 1-63 characters long and match
  *  the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character
  *  must be a lowercase letter, and all following characters must be a dash, lowercase
  *  letter, or digit, except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#name ComputeInterconnect#name}
  */
  readonly name: string;
  /**
  * A RFC3339 timestamp on or after which the key is valid. startTime can be in the
  * future. If the keychain has a single key, startTime can be omitted. If the keychain
  * has multiple keys, startTime is mandatory for each key. The start times of keys must
  * be in increasing order. The start times of two consecutive keys must be at least 6
  * hours apart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#start_time ComputeInterconnect#start_time}
  */
  readonly startTime?: string;
}

export function computeInterconnectMacsecPreSharedKeysToTerraform(struct?: ComputeInterconnectMacsecPreSharedKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
    name: cdktf.stringToTerraform(struct!.name),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function computeInterconnectMacsecPreSharedKeysToHclTerraform(struct?: ComputeInterconnectMacsecPreSharedKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInterconnectMacsecPreSharedKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInterconnectMacsecPreSharedKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectMacsecPreSharedKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failOpen = undefined;
      this._name = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failOpen = value.failOpen;
      this._name = value.name;
      this._startTime = value.startTime;
    }
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
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

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class ComputeInterconnectMacsecPreSharedKeysList extends cdktf.ComplexList {
  public internalValue? : ComputeInterconnectMacsecPreSharedKeys[] | cdktf.IResolvable

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
  public get(index: number): ComputeInterconnectMacsecPreSharedKeysOutputReference {
    return new ComputeInterconnectMacsecPreSharedKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectMacsec {
  /**
  * If set to true, the Interconnect connection is configured with a should-secure
  * MACsec security policy, that allows the Google router to fallback to cleartext
  * traffic if the MKA session cannot be established. By default, the Interconnect
  * connection is configured with a must-secure security policy that drops all traffic
  * if the MKA session cannot be established with your router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#fail_open ComputeInterconnect#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * pre_shared_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#pre_shared_keys ComputeInterconnect#pre_shared_keys}
  */
  readonly preSharedKeys: ComputeInterconnectMacsecPreSharedKeys[] | cdktf.IResolvable;
}

export function computeInterconnectMacsecToTerraform(struct?: ComputeInterconnectMacsecOutputReference | ComputeInterconnectMacsec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
    pre_shared_keys: cdktf.listMapper(computeInterconnectMacsecPreSharedKeysToTerraform, true)(struct!.preSharedKeys),
  }
}


export function computeInterconnectMacsecToHclTerraform(struct?: ComputeInterconnectMacsecOutputReference | ComputeInterconnectMacsec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pre_shared_keys: {
      value: cdktf.listMapperHcl(computeInterconnectMacsecPreSharedKeysToHclTerraform, true)(struct!.preSharedKeys),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInterconnectMacsecPreSharedKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInterconnectMacsecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInterconnectMacsec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._preSharedKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKeys = this._preSharedKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectMacsec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failOpen = undefined;
      this._preSharedKeys.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failOpen = value.failOpen;
      this._preSharedKeys.internalValue = value.preSharedKeys;
    }
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // pre_shared_keys - computed: false, optional: false, required: true
  private _preSharedKeys = new ComputeInterconnectMacsecPreSharedKeysList(this, "pre_shared_keys", false);
  public get preSharedKeys() {
    return this._preSharedKeys;
  }
  public putPreSharedKeys(value: ComputeInterconnectMacsecPreSharedKeys[] | cdktf.IResolvable) {
    this._preSharedKeys.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeysInput() {
    return this._preSharedKeys.internalValue;
  }
}
export interface ComputeInterconnectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#create ComputeInterconnect#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#delete ComputeInterconnect#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#update ComputeInterconnect#update}
  */
  readonly update?: string;
}

export function computeInterconnectTimeoutsToTerraform(struct?: ComputeInterconnectTimeouts | cdktf.IResolvable): any {
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


export function computeInterconnectTimeoutsToHclTerraform(struct?: ComputeInterconnectTimeouts | cdktf.IResolvable): any {
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

export class ComputeInterconnectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeInterconnectTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeInterconnectTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect google_compute_interconnect}
*/
export class ComputeInterconnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_interconnect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeInterconnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeInterconnect to import
  * @param importFromId The id of the existing ComputeInterconnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeInterconnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_interconnect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect google_compute_interconnect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInterconnectConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeInterconnectConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_interconnect',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.11.1',
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
    this._adminEnabled = config.adminEnabled;
    this._customerName = config.customerName;
    this._description = config.description;
    this._id = config.id;
    this._interconnectType = config.interconnectType;
    this._labels = config.labels;
    this._linkType = config.linkType;
    this._location = config.location;
    this._macsecEnabled = config.macsecEnabled;
    this._name = config.name;
    this._nocContactEmail = config.nocContactEmail;
    this._project = config.project;
    this._remoteLocation = config.remoteLocation;
    this._requestedFeatures = config.requestedFeatures;
    this._requestedLinkCount = config.requestedLinkCount;
    this._macsec.internalValue = config.macsec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_enabled - computed: false, optional: true, required: false
  private _adminEnabled?: boolean | cdktf.IResolvable; 
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled');
  }
  public set adminEnabled(value: boolean | cdktf.IResolvable) {
    this._adminEnabled = value;
  }
  public resetAdminEnabled() {
    this._adminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEnabledInput() {
    return this._adminEnabled;
  }

  // available_features - computed: true, optional: false, required: false
  public get availableFeatures() {
    return this.getListAttribute('available_features');
  }

  // circuit_infos - computed: true, optional: false, required: false
  private _circuitInfos = new ComputeInterconnectCircuitInfosList(this, "circuit_infos", false);
  public get circuitInfos() {
    return this._circuitInfos;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // customer_name - computed: false, optional: true, required: false
  private _customerName?: string; 
  public get customerName() {
    return this.getStringAttribute('customer_name');
  }
  public set customerName(value: string) {
    this._customerName = value;
  }
  public resetCustomerName() {
    this._customerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerNameInput() {
    return this._customerName;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // expected_outages - computed: true, optional: false, required: false
  private _expectedOutages = new ComputeInterconnectExpectedOutagesList(this, "expected_outages", false);
  public get expectedOutages() {
    return this._expectedOutages;
  }

  // google_ip_address - computed: true, optional: false, required: false
  public get googleIpAddress() {
    return this.getStringAttribute('google_ip_address');
  }

  // google_reference_id - computed: true, optional: false, required: false
  public get googleReferenceId() {
    return this.getStringAttribute('google_reference_id');
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

  // interconnect_attachments - computed: true, optional: false, required: false
  public get interconnectAttachments() {
    return this.getListAttribute('interconnect_attachments');
  }

  // interconnect_type - computed: false, optional: false, required: true
  private _interconnectType?: string; 
  public get interconnectType() {
    return this.getStringAttribute('interconnect_type');
  }
  public set interconnectType(value: string) {
    this._interconnectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectTypeInput() {
    return this._interconnectType;
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
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

  // link_type - computed: false, optional: false, required: true
  private _linkType?: string; 
  public get linkType() {
    return this.getStringAttribute('link_type');
  }
  public set linkType(value: string) {
    this._linkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType;
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

  // macsec_enabled - computed: false, optional: true, required: false
  private _macsecEnabled?: boolean | cdktf.IResolvable; 
  public get macsecEnabled() {
    return this.getBooleanAttribute('macsec_enabled');
  }
  public set macsecEnabled(value: boolean | cdktf.IResolvable) {
    this._macsecEnabled = value;
  }
  public resetMacsecEnabled() {
    this._macsecEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecEnabledInput() {
    return this._macsecEnabled;
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

  // noc_contact_email - computed: false, optional: true, required: false
  private _nocContactEmail?: string; 
  public get nocContactEmail() {
    return this.getStringAttribute('noc_contact_email');
  }
  public set nocContactEmail(value: string) {
    this._nocContactEmail = value;
  }
  public resetNocContactEmail() {
    this._nocContactEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nocContactEmailInput() {
    return this._nocContactEmail;
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // peer_ip_address - computed: true, optional: false, required: false
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
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

  // provisioned_link_count - computed: true, optional: false, required: false
  public get provisionedLinkCount() {
    return this.getNumberAttribute('provisioned_link_count');
  }

  // remote_location - computed: false, optional: true, required: false
  private _remoteLocation?: string; 
  public get remoteLocation() {
    return this.getStringAttribute('remote_location');
  }
  public set remoteLocation(value: string) {
    this._remoteLocation = value;
  }
  public resetRemoteLocation() {
    this._remoteLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteLocationInput() {
    return this._remoteLocation;
  }

  // requested_features - computed: false, optional: true, required: false
  private _requestedFeatures?: string[]; 
  public get requestedFeatures() {
    return this.getListAttribute('requested_features');
  }
  public set requestedFeatures(value: string[]) {
    this._requestedFeatures = value;
  }
  public resetRequestedFeatures() {
    this._requestedFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedFeaturesInput() {
    return this._requestedFeatures;
  }

  // requested_link_count - computed: false, optional: false, required: true
  private _requestedLinkCount?: number; 
  public get requestedLinkCount() {
    return this.getNumberAttribute('requested_link_count');
  }
  public set requestedLinkCount(value: number) {
    this._requestedLinkCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedLinkCountInput() {
    return this._requestedLinkCount;
  }

  // satisfies_pzs - computed: true, optional: false, required: false
  public get satisfiesPzs() {
    return this.getBooleanAttribute('satisfies_pzs');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // macsec - computed: false, optional: true, required: false
  private _macsec = new ComputeInterconnectMacsecOutputReference(this, "macsec");
  public get macsec() {
    return this._macsec;
  }
  public putMacsec(value: ComputeInterconnectMacsec) {
    this._macsec.internalValue = value;
  }
  public resetMacsec() {
    this._macsec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecInput() {
    return this._macsec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeInterconnectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeInterconnectTimeouts) {
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
      admin_enabled: cdktf.booleanToTerraform(this._adminEnabled),
      customer_name: cdktf.stringToTerraform(this._customerName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      interconnect_type: cdktf.stringToTerraform(this._interconnectType),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      link_type: cdktf.stringToTerraform(this._linkType),
      location: cdktf.stringToTerraform(this._location),
      macsec_enabled: cdktf.booleanToTerraform(this._macsecEnabled),
      name: cdktf.stringToTerraform(this._name),
      noc_contact_email: cdktf.stringToTerraform(this._nocContactEmail),
      project: cdktf.stringToTerraform(this._project),
      remote_location: cdktf.stringToTerraform(this._remoteLocation),
      requested_features: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requestedFeatures),
      requested_link_count: cdktf.numberToTerraform(this._requestedLinkCount),
      macsec: computeInterconnectMacsecToTerraform(this._macsec.internalValue),
      timeouts: computeInterconnectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_enabled: {
        value: cdktf.booleanToHclTerraform(this._adminEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      customer_name: {
        value: cdktf.stringToHclTerraform(this._customerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      interconnect_type: {
        value: cdktf.stringToHclTerraform(this._interconnectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      link_type: {
        value: cdktf.stringToHclTerraform(this._linkType),
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
      macsec_enabled: {
        value: cdktf.booleanToHclTerraform(this._macsecEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      noc_contact_email: {
        value: cdktf.stringToHclTerraform(this._nocContactEmail),
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
      remote_location: {
        value: cdktf.stringToHclTerraform(this._remoteLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requested_features: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requestedFeatures),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      requested_link_count: {
        value: cdktf.numberToHclTerraform(this._requestedLinkCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      macsec: {
        value: computeInterconnectMacsecToHclTerraform(this._macsec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInterconnectMacsecList",
      },
      timeouts: {
        value: computeInterconnectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeInterconnectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
