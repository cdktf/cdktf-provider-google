/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BeyondcorpApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. User-settable Application resource ID.
  * * Must start with a letter.
  * * Must contain between 4-63 characters from '/a-z-/'.
  * * Must end with a number or letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#application_id BeyondcorpApplication#application_id}
  */
  readonly applicationId: string;
  /**
  * Optional. An arbitrary user-provided name for the Application resource.
  * Cannot exceed 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#display_name BeyondcorpApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#id BeyondcorpApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#project BeyondcorpApplication#project}
  */
  readonly project?: string;
  /**
  * Part of 'parent'. See documentation of 'projectsId'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#security_gateways_id BeyondcorpApplication#security_gateways_id}
  */
  readonly securityGatewaysId: string;
  /**
  * endpoint_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#endpoint_matchers BeyondcorpApplication#endpoint_matchers}
  */
  readonly endpointMatchers: BeyondcorpApplicationEndpointMatchers[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#timeouts BeyondcorpApplication#timeouts}
  */
  readonly timeouts?: BeyondcorpApplicationTimeouts;
  /**
  * upstreams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#upstreams BeyondcorpApplication#upstreams}
  */
  readonly upstreams?: BeyondcorpApplicationUpstreams[] | cdktf.IResolvable;
}
export interface BeyondcorpApplicationEndpointMatchers {
  /**
  * Required. Hostname of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#hostname BeyondcorpApplication#hostname}
  */
  readonly hostname: string;
  /**
  * Optional. Ports of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#ports BeyondcorpApplication#ports}
  */
  readonly ports?: number[];
}

export function beyondcorpApplicationEndpointMatchersToTerraform(struct?: BeyondcorpApplicationEndpointMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
  }
}


export function beyondcorpApplicationEndpointMatchersToHclTerraform(struct?: BeyondcorpApplicationEndpointMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpApplicationEndpointMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BeyondcorpApplicationEndpointMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpApplicationEndpointMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ports = value.ports;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class BeyondcorpApplicationEndpointMatchersList extends cdktf.ComplexList {
  public internalValue? : BeyondcorpApplicationEndpointMatchers[] | cdktf.IResolvable

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
  public get(index: number): BeyondcorpApplicationEndpointMatchersOutputReference {
    return new BeyondcorpApplicationEndpointMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BeyondcorpApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#create BeyondcorpApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#delete BeyondcorpApplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#update BeyondcorpApplication#update}
  */
  readonly update?: string;
}

export function beyondcorpApplicationTimeoutsToTerraform(struct?: BeyondcorpApplicationTimeouts | cdktf.IResolvable): any {
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


export function beyondcorpApplicationTimeoutsToHclTerraform(struct?: BeyondcorpApplicationTimeouts | cdktf.IResolvable): any {
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

export class BeyondcorpApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BeyondcorpApplicationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BeyondcorpApplicationTimeouts | cdktf.IResolvable | undefined) {
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
export interface BeyondcorpApplicationUpstreamsEgressPolicy {
  /**
  * Required. List of regions where the application sends traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#regions BeyondcorpApplication#regions}
  */
  readonly regions: string[];
}

export function beyondcorpApplicationUpstreamsEgressPolicyToTerraform(struct?: BeyondcorpApplicationUpstreamsEgressPolicyOutputReference | BeyondcorpApplicationUpstreamsEgressPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
  }
}


export function beyondcorpApplicationUpstreamsEgressPolicyToHclTerraform(struct?: BeyondcorpApplicationUpstreamsEgressPolicyOutputReference | BeyondcorpApplicationUpstreamsEgressPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpApplicationUpstreamsEgressPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpApplicationUpstreamsEgressPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpApplicationUpstreamsEgressPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regions = value.regions;
    }
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}
export interface BeyondcorpApplicationUpstreamsNetwork {
  /**
  * Required. Network name is of the format:
  * 'projects/{project}/global/networks/{network}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#name BeyondcorpApplication#name}
  */
  readonly name: string;
}

export function beyondcorpApplicationUpstreamsNetworkToTerraform(struct?: BeyondcorpApplicationUpstreamsNetworkOutputReference | BeyondcorpApplicationUpstreamsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function beyondcorpApplicationUpstreamsNetworkToHclTerraform(struct?: BeyondcorpApplicationUpstreamsNetworkOutputReference | BeyondcorpApplicationUpstreamsNetwork): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpApplicationUpstreamsNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpApplicationUpstreamsNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpApplicationUpstreamsNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface BeyondcorpApplicationUpstreams {
  /**
  * egress_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#egress_policy BeyondcorpApplication#egress_policy}
  */
  readonly egressPolicy?: BeyondcorpApplicationUpstreamsEgressPolicy;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#network BeyondcorpApplication#network}
  */
  readonly network?: BeyondcorpApplicationUpstreamsNetwork;
}

export function beyondcorpApplicationUpstreamsToTerraform(struct?: BeyondcorpApplicationUpstreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_policy: beyondcorpApplicationUpstreamsEgressPolicyToTerraform(struct!.egressPolicy),
    network: beyondcorpApplicationUpstreamsNetworkToTerraform(struct!.network),
  }
}


export function beyondcorpApplicationUpstreamsToHclTerraform(struct?: BeyondcorpApplicationUpstreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_policy: {
      value: beyondcorpApplicationUpstreamsEgressPolicyToHclTerraform(struct!.egressPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "BeyondcorpApplicationUpstreamsEgressPolicyList",
    },
    network: {
      value: beyondcorpApplicationUpstreamsNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "BeyondcorpApplicationUpstreamsNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpApplicationUpstreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BeyondcorpApplicationUpstreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPolicy = this._egressPolicy?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpApplicationUpstreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressPolicy.internalValue = undefined;
      this._network.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressPolicy.internalValue = value.egressPolicy;
      this._network.internalValue = value.network;
    }
  }

  // egress_policy - computed: false, optional: true, required: false
  private _egressPolicy = new BeyondcorpApplicationUpstreamsEgressPolicyOutputReference(this, "egress_policy");
  public get egressPolicy() {
    return this._egressPolicy;
  }
  public putEgressPolicy(value: BeyondcorpApplicationUpstreamsEgressPolicy) {
    this._egressPolicy.internalValue = value;
  }
  public resetEgressPolicy() {
    this._egressPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPolicyInput() {
    return this._egressPolicy.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new BeyondcorpApplicationUpstreamsNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: BeyondcorpApplicationUpstreamsNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}

export class BeyondcorpApplicationUpstreamsList extends cdktf.ComplexList {
  public internalValue? : BeyondcorpApplicationUpstreams[] | cdktf.IResolvable

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
  public get(index: number): BeyondcorpApplicationUpstreamsOutputReference {
    return new BeyondcorpApplicationUpstreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application google_beyondcorp_application}
*/
export class BeyondcorpApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_beyondcorp_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BeyondcorpApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BeyondcorpApplication to import
  * @param importFromId The id of the existing BeyondcorpApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BeyondcorpApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_beyondcorp_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application google_beyondcorp_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BeyondcorpApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: BeyondcorpApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_beyondcorp_application',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.34.0',
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
    this._applicationId = config.applicationId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._project = config.project;
    this._securityGatewaysId = config.securityGatewaysId;
    this._endpointMatchers.internalValue = config.endpointMatchers;
    this._timeouts.internalValue = config.timeouts;
    this._upstreams.internalValue = config.upstreams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // security_gateways_id - computed: false, optional: false, required: true
  private _securityGatewaysId?: string; 
  public get securityGatewaysId() {
    return this.getStringAttribute('security_gateways_id');
  }
  public set securityGatewaysId(value: string) {
    this._securityGatewaysId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGatewaysIdInput() {
    return this._securityGatewaysId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // endpoint_matchers - computed: false, optional: false, required: true
  private _endpointMatchers = new BeyondcorpApplicationEndpointMatchersList(this, "endpoint_matchers", false);
  public get endpointMatchers() {
    return this._endpointMatchers;
  }
  public putEndpointMatchers(value: BeyondcorpApplicationEndpointMatchers[] | cdktf.IResolvable) {
    this._endpointMatchers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointMatchersInput() {
    return this._endpointMatchers.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BeyondcorpApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BeyondcorpApplicationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upstreams - computed: false, optional: true, required: false
  private _upstreams = new BeyondcorpApplicationUpstreamsList(this, "upstreams", false);
  public get upstreams() {
    return this._upstreams;
  }
  public putUpstreams(value: BeyondcorpApplicationUpstreams[] | cdktf.IResolvable) {
    this._upstreams.internalValue = value;
  }
  public resetUpstreams() {
    this._upstreams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamsInput() {
    return this._upstreams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      security_gateways_id: cdktf.stringToTerraform(this._securityGatewaysId),
      endpoint_matchers: cdktf.listMapper(beyondcorpApplicationEndpointMatchersToTerraform, true)(this._endpointMatchers.internalValue),
      timeouts: beyondcorpApplicationTimeoutsToTerraform(this._timeouts.internalValue),
      upstreams: cdktf.listMapper(beyondcorpApplicationUpstreamsToTerraform, true)(this._upstreams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_gateways_id: {
        value: cdktf.stringToHclTerraform(this._securityGatewaysId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_matchers: {
        value: cdktf.listMapperHcl(beyondcorpApplicationEndpointMatchersToHclTerraform, true)(this._endpointMatchers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BeyondcorpApplicationEndpointMatchersList",
      },
      timeouts: {
        value: beyondcorpApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BeyondcorpApplicationTimeouts",
      },
      upstreams: {
        value: cdktf.listMapperHcl(beyondcorpApplicationUpstreamsToHclTerraform, true)(this._upstreams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BeyondcorpApplicationUpstreamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
