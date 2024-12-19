/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerServicePerimeterDryRunIngressPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#id AccessContextManagerServicePerimeterDryRunIngressPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Service Perimeter to add this resource to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#perimeter AccessContextManagerServicePerimeterDryRunIngressPolicy#perimeter}
  */
  readonly perimeter: string;
  /**
  * ingress_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#ingress_from AccessContextManagerServicePerimeterDryRunIngressPolicy#ingress_from}
  */
  readonly ingressFrom?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom;
  /**
  * ingress_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#ingress_to AccessContextManagerServicePerimeterDryRunIngressPolicy#ingress_to}
  */
  readonly ingressTo?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#timeouts AccessContextManagerServicePerimeterDryRunIngressPolicy#timeouts}
  */
  readonly timeouts?: AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts;
}
export interface AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources {
  /**
  * An 'AccessLevel' resource name that allow resources within the
  * 'ServicePerimeters' to be accessed from the internet. 'AccessLevels' listed
  * must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
  * 'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
  * resources within the perimeter can only be accessed via Google Cloud calls
  * with request origins within the perimeter.
  * Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
  * If * is specified, then all IngressSources will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#access_level AccessContextManagerServicePerimeterDryRunIngressPolicy#access_level}
  */
  readonly accessLevel?: string;
  /**
  * A Google Cloud resource that is allowed to ingress the perimeter.
  * Requests from these resources will be allowed to access perimeter data.
  * Currently only projects are allowed. Format 'projects/{project_number}'
  * The project may be in any Google Cloud organization, not just the
  * organization that the perimeter is defined in. '*' is not allowed, the case
  * of allowing all Google Cloud resources only is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#resource AccessContextManagerServicePerimeterDryRunIngressPolicy#resource}
  */
  readonly resource?: string;
}

export function accessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesToTerraform(struct?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function accessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesToHclTerraform(struct?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._resource = value.resource;
    }
  }

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
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
}

export class AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference {
    return new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom {
  /**
  * Identities can be an individual user, service account, Google group,
  * or third-party identity. For third-party identity, only single identities
  * are supported and other identity types are not supported.The v1 identities
  * that have the prefix user, group and serviceAccount in
  * https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#identities AccessContextManagerServicePerimeterDryRunIngressPolicy#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the
  * perimeter. If left unspecified, then members of 'identities' field will be
  * allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#identity_type AccessContextManagerServicePerimeterDryRunIngressPolicy#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#sources AccessContextManagerServicePerimeterDryRunIngressPolicy#sources}
  */
  readonly sources?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimeterDryRunIngressPolicyIngressFromToTerraform(struct?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference | AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(accessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function accessContextManagerServicePerimeterDryRunIngressPolicyIngressFromToHclTerraform(struct?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference | AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    identity_type: {
      value: cdktf.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(accessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
      this._sources.internalValue = value.sources;
    }
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[]; 
  public get identities() {
    return this.getListAttribute('identities');
  }
  public set identities(value: string[]) {
    this._identities = value;
  }
  public resetIdentities() {
    this._identities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities;
  }

  // identity_type - computed: false, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding
  * serviceName in 'ApiOperation'. If '*' used as value for 'method', then
  * ALL methods and permissions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#method AccessContextManagerServicePerimeterDryRunIngressPolicy#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the
  * corresponding 'serviceName' in 'ApiOperation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#permission AccessContextManagerServicePerimeterDryRunIngressPolicy#permission}
  */
  readonly permission?: string;
}

export function accessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function accessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsToHclTerraform(struct?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._permission = value.permission;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference {
    return new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or
  * 'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName'
  * field set to '*' will allow all methods AND permissions for all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#service_name AccessContextManagerServicePerimeterDryRunIngressPolicy#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#method_selectors AccessContextManagerServicePerimeterDryRunIngressPolicy#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsToTerraform(struct?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}


export function accessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsToHclTerraform(struct?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_selectors: {
      value: cdktf.listMapperHcl(accessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsToHclTerraform, true)(struct!.methodSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._methodSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodSelectors = this._methodSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._methodSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
      this._methodSelectors.internalValue = value.methodSelectors;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // method_selectors - computed: false, optional: true, required: false
  private _methodSelectors = new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors[] | cdktf.IResolvable) {
    this._methodSelectors.internalValue = value;
  }
  public resetMethodSelectors() {
    this._methodSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodSelectorsInput() {
    return this._methodSelectors.internalValue;
  }
}

export class AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference {
    return new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo {
  /**
  * A list of resources, currently only projects in the form
  * 'projects/<projectnumber>', protected by this 'ServicePerimeter'
  * that are allowed to be accessed by sources defined in the
  * corresponding 'IngressFrom'. A request matches if it contains
  * a resource in this list. If '*' is specified for resources,
  * then this 'IngressTo' rule will authorize access to all
  * resources inside the perimeter, provided that the request
  * also matches the 'operations' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#resources AccessContextManagerServicePerimeterDryRunIngressPolicy#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#operations AccessContextManagerServicePerimeterDryRunIngressPolicy#operations}
  */
  readonly operations?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimeterDryRunIngressPolicyIngressToToTerraform(struct?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference | AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsToTerraform, true)(struct!.operations),
  }
}


export function accessContextManagerServicePerimeterDryRunIngressPolicyIngressToToHclTerraform(struct?: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference | AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(accessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
      this._operations.internalValue = value.operations;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }
}
export interface AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#create AccessContextManagerServicePerimeterDryRunIngressPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#delete AccessContextManagerServicePerimeterDryRunIngressPolicy#delete}
  */
  readonly delete?: string;
}

export function accessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsToTerraform(struct?: AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function accessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsToHclTerraform(struct?: AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts | cdktf.IResolvable): any {
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

export class AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy google_access_context_manager_service_perimeter_dry_run_ingress_policy}
*/
export class AccessContextManagerServicePerimeterDryRunIngressPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_service_perimeter_dry_run_ingress_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessContextManagerServicePerimeterDryRunIngressPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessContextManagerServicePerimeterDryRunIngressPolicy to import
  * @param importFromId The id of the existing AccessContextManagerServicePerimeterDryRunIngressPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessContextManagerServicePerimeterDryRunIngressPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_access_context_manager_service_perimeter_dry_run_ingress_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/access_context_manager_service_perimeter_dry_run_ingress_policy google_access_context_manager_service_perimeter_dry_run_ingress_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerServicePerimeterDryRunIngressPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerServicePerimeterDryRunIngressPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_service_perimeter_dry_run_ingress_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.14.1',
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
    this._id = config.id;
    this._perimeter = config.perimeter;
    this._ingressFrom.internalValue = config.ingressFrom;
    this._ingressTo.internalValue = config.ingressTo;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // perimeter - computed: false, optional: false, required: true
  private _perimeter?: string; 
  public get perimeter() {
    return this.getStringAttribute('perimeter');
  }
  public set perimeter(value: string) {
    this._perimeter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perimeterInput() {
    return this._perimeter;
  }

  // ingress_from - computed: false, optional: true, required: false
  private _ingressFrom = new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference(this, "ingress_from");
  public get ingressFrom() {
    return this._ingressFrom;
  }
  public putIngressFrom(value: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom) {
    this._ingressFrom.internalValue = value;
  }
  public resetIngressFrom() {
    this._ingressFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressFromInput() {
    return this._ingressFrom.internalValue;
  }

  // ingress_to - computed: false, optional: true, required: false
  private _ingressTo = new AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference(this, "ingress_to");
  public get ingressTo() {
    return this._ingressTo;
  }
  public putIngressTo(value: AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo) {
    this._ingressTo.internalValue = value;
  }
  public resetIngressTo() {
    this._ingressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressToInput() {
    return this._ingressTo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      perimeter: cdktf.stringToTerraform(this._perimeter),
      ingress_from: accessContextManagerServicePerimeterDryRunIngressPolicyIngressFromToTerraform(this._ingressFrom.internalValue),
      ingress_to: accessContextManagerServicePerimeterDryRunIngressPolicyIngressToToTerraform(this._ingressTo.internalValue),
      timeouts: accessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perimeter: {
        value: cdktf.stringToHclTerraform(this._perimeter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_from: {
        value: accessContextManagerServicePerimeterDryRunIngressPolicyIngressFromToHclTerraform(this._ingressFrom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromList",
      },
      ingress_to: {
        value: accessContextManagerServicePerimeterDryRunIngressPolicyIngressToToHclTerraform(this._ingressTo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessContextManagerServicePerimeterDryRunIngressPolicyIngressToList",
      },
      timeouts: {
        value: accessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
