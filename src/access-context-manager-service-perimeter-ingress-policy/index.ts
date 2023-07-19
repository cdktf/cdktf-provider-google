/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerServicePerimeterIngressPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#id AccessContextManagerServicePerimeterIngressPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Service Perimeter to add this resource to.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#perimeter AccessContextManagerServicePerimeterIngressPolicy#perimeter}
  */
  readonly perimeter: string;
  /**
  * ingress_from block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#ingress_from AccessContextManagerServicePerimeterIngressPolicy#ingress_from}
  */
  readonly ingressFrom?: AccessContextManagerServicePerimeterIngressPolicyIngressFrom;
  /**
  * ingress_to block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#ingress_to AccessContextManagerServicePerimeterIngressPolicy#ingress_to}
  */
  readonly ingressTo?: AccessContextManagerServicePerimeterIngressPolicyIngressTo;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#timeouts AccessContextManagerServicePerimeterIngressPolicy#timeouts}
  */
  readonly timeouts?: AccessContextManagerServicePerimeterIngressPolicyTimeouts;
}
export interface AccessContextManagerServicePerimeterIngressPolicyIngressFromSources {
  /**
  * An 'AccessLevel' resource name that allow resources within the
'ServicePerimeters' to be accessed from the internet. 'AccessLevels' listed
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
If * is specified, then all IngressSources will be allowed.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#access_level AccessContextManagerServicePerimeterIngressPolicy#access_level}
  */
  readonly accessLevel?: string;
  /**
  * A Google Cloud resource that is allowed to ingress the perimeter.
Requests from these resources will be allowed to access perimeter data.
Currently only projects are allowed. Format 'projects/{project_number}'
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the case
of allowing all Google Cloud resources only is not supported.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#resource AccessContextManagerServicePerimeterIngressPolicy#resource}
  */
  readonly resource?: string;
}

export function accessContextManagerServicePerimeterIngressPolicyIngressFromSourcesToTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export class AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimeterIngressPolicyIngressFromSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimeterIngressPolicyIngressFromSources | cdktf.IResolvable | undefined) {
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

export class AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimeterIngressPolicyIngressFromSources[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference {
    return new AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimeterIngressPolicyIngressFrom {
  /**
  * A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent
individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#identities AccessContextManagerServicePerimeterIngressPolicy#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the
perimeter. If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#identity_type AccessContextManagerServicePerimeterIngressPolicy#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#sources AccessContextManagerServicePerimeterIngressPolicy#sources}
  */
  readonly sources?: AccessContextManagerServicePerimeterIngressPolicyIngressFromSources[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimeterIngressPolicyIngressFromToTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference | AccessContextManagerServicePerimeterIngressPolicyIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(accessContextManagerServicePerimeterIngressPolicyIngressFromSourcesToTerraform, true)(struct!.sources),
  }
}

export class AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimeterIngressPolicyIngressFrom | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimeterIngressPolicyIngressFrom | undefined) {
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
  private _sources = new AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: AccessContextManagerServicePerimeterIngressPolicyIngressFromSources[] | cdktf.IResolvable) {
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
export interface AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding
serviceName in 'ApiOperation'. If '*' used as value for 'method', then
ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#method AccessContextManagerServicePerimeterIngressPolicy#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#permission AccessContextManagerServicePerimeterIngressPolicy#permission}
  */
  readonly permission?: string;
}

export function accessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export class AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
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

export class AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference {
    return new AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimeterIngressPolicyIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#service_name AccessContextManagerServicePerimeterIngressPolicy#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#method_selectors AccessContextManagerServicePerimeterIngressPolicy#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimeterIngressPolicyIngressToOperationsToTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}

export class AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimeterIngressPolicyIngressToOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimeterIngressPolicyIngressToOperations | cdktf.IResolvable | undefined) {
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
  private _methodSelectors = new AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors[] | cdktf.IResolvable) {
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

export class AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimeterIngressPolicyIngressToOperations[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference {
    return new AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimeterIngressPolicyIngressTo {
  /**
  * A list of resources, currently only projects in the form
'projects/<projectnumber>', protected by this 'ServicePerimeter'
that are allowed to be accessed by sources defined in the
corresponding 'IngressFrom'. A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#resources AccessContextManagerServicePerimeterIngressPolicy#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#operations AccessContextManagerServicePerimeterIngressPolicy#operations}
  */
  readonly operations?: AccessContextManagerServicePerimeterIngressPolicyIngressToOperations[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimeterIngressPolicyIngressToToTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference | AccessContextManagerServicePerimeterIngressPolicyIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimeterIngressPolicyIngressToOperationsToTerraform, true)(struct!.operations),
  }
}

export class AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimeterIngressPolicyIngressTo | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimeterIngressPolicyIngressTo | undefined) {
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
  private _operations = new AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: AccessContextManagerServicePerimeterIngressPolicyIngressToOperations[] | cdktf.IResolvable) {
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
export interface AccessContextManagerServicePerimeterIngressPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#create AccessContextManagerServicePerimeterIngressPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#delete AccessContextManagerServicePerimeterIngressPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#update AccessContextManagerServicePerimeterIngressPolicy#update}
  */
  readonly update?: string;
}

export function accessContextManagerServicePerimeterIngressPolicyTimeoutsToTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyTimeouts | cdktf.IResolvable): any {
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

export class AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessContextManagerServicePerimeterIngressPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimeterIngressPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy google_access_context_manager_service_perimeter_ingress_policy}
*/
export class AccessContextManagerServicePerimeterIngressPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_service_perimeter_ingress_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.74.0/docs/resources/access_context_manager_service_perimeter_ingress_policy google_access_context_manager_service_perimeter_ingress_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerServicePerimeterIngressPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerServicePerimeterIngressPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_service_perimeter_ingress_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.74.0',
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
  private _ingressFrom = new AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference(this, "ingress_from");
  public get ingressFrom() {
    return this._ingressFrom;
  }
  public putIngressFrom(value: AccessContextManagerServicePerimeterIngressPolicyIngressFrom) {
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
  private _ingressTo = new AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference(this, "ingress_to");
  public get ingressTo() {
    return this._ingressTo;
  }
  public putIngressTo(value: AccessContextManagerServicePerimeterIngressPolicyIngressTo) {
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
  private _timeouts = new AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessContextManagerServicePerimeterIngressPolicyTimeouts) {
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
      ingress_from: accessContextManagerServicePerimeterIngressPolicyIngressFromToTerraform(this._ingressFrom.internalValue),
      ingress_to: accessContextManagerServicePerimeterIngressPolicyIngressToToTerraform(this._ingressTo.internalValue),
      timeouts: accessContextManagerServicePerimeterIngressPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
