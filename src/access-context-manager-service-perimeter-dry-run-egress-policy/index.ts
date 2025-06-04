/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerServicePerimeterDryRunEgressPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#id AccessContextManagerServicePerimeterDryRunEgressPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Service Perimeter to add this resource to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#perimeter AccessContextManagerServicePerimeterDryRunEgressPolicy#perimeter}
  */
  readonly perimeter: string;
  /**
  * Human readable title. Must be unique within the perimeter. Does not affect behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#title AccessContextManagerServicePerimeterDryRunEgressPolicy#title}
  */
  readonly title?: string;
  /**
  * egress_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#egress_from AccessContextManagerServicePerimeterDryRunEgressPolicy#egress_from}
  */
  readonly egressFrom?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom;
  /**
  * egress_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#egress_to AccessContextManagerServicePerimeterDryRunEgressPolicy#egress_to}
  */
  readonly egressTo?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#timeouts AccessContextManagerServicePerimeterDryRunEgressPolicy#timeouts}
  */
  readonly timeouts?: AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts;
}
export interface AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources {
  /**
  * An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#access_level AccessContextManagerServicePerimeterDryRunEgressPolicy#access_level}
  */
  readonly accessLevel?: string;
  /**
  * A Google Cloud resource that is allowed to egress the perimeter.
  * Requests from these resources are allowed to access data outside the perimeter.
  * Currently only projects are allowed. Project format: 'projects/{project_number}'.
  * The resource may be in any Google Cloud organization, not just the
  * organization that the perimeter is defined in. '*' is not allowed, the
  * case of allowing all Google Cloud resources only is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#resource AccessContextManagerServicePerimeterDryRunEgressPolicy#resource}
  */
  readonly resource?: string;
}

export function accessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesToTerraform(struct?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function accessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesToHclTerraform(struct?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources | cdktf.IResolvable): any {
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

export class AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources | cdktf.IResolvable | undefined) {
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

export class AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference {
    return new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom {
  /**
  * Identities can be an individual user, service account, Google group,
  * or third-party identity. For third-party identity, only single identities
  * are supported and other identity types are not supported.The v1 identities
  * that have the prefix user, group and serviceAccount in
  * https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#identities AccessContextManagerServicePerimeterDryRunEgressPolicy#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the
  * perimeter. If left unspecified, then members of 'identities' field will
  * be allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#identity_type AccessContextManagerServicePerimeterDryRunEgressPolicy#identity_type}
  */
  readonly identityType?: string;
  /**
  * Whether to enforce traffic restrictions based on 'sources' field. If the 'sources' field is non-empty, then this field must be set to 'SOURCE_RESTRICTION_ENABLED'. Possible values: ["SOURCE_RESTRICTION_ENABLED", "SOURCE_RESTRICTION_DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#source_restriction AccessContextManagerServicePerimeterDryRunEgressPolicy#source_restriction}
  */
  readonly sourceRestriction?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#sources AccessContextManagerServicePerimeterDryRunEgressPolicy#sources}
  */
  readonly sources?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimeterDryRunEgressPolicyEgressFromToTerraform(struct?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference | AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    source_restriction: cdktf.stringToTerraform(struct!.sourceRestriction),
    sources: cdktf.listMapper(accessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function accessContextManagerServicePerimeterDryRunEgressPolicyEgressFromToHclTerraform(struct?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference | AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom): any {
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
    source_restriction: {
      value: cdktf.stringToHclTerraform(struct!.sourceRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(accessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom | undefined {
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
    if (this._sourceRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRestriction = this._sourceRestriction;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
      this._sourceRestriction = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
      this._sourceRestriction = value.sourceRestriction;
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

  // source_restriction - computed: false, optional: true, required: false
  private _sourceRestriction?: string; 
  public get sourceRestriction() {
    return this.getStringAttribute('source_restriction');
  }
  public set sourceRestriction(value: string) {
    this._sourceRestriction = value;
  }
  public resetSourceRestriction() {
    this._sourceRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRestrictionInput() {
    return this._sourceRestriction;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources[] | cdktf.IResolvable) {
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
export interface AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding
  * 'serviceName' in 'ApiOperation'. If '*' used as value for method,
  * then ALL methods and permissions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#method AccessContextManagerServicePerimeterDryRunEgressPolicy#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the
  * corresponding 'serviceName' in 'ApiOperation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#permission AccessContextManagerServicePerimeterDryRunEgressPolicy#permission}
  */
  readonly permission?: string;
}

export function accessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function accessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsToHclTerraform(struct?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors | cdktf.IResolvable): any {
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

export class AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
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

export class AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference {
    return new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or
  * 'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName
  * field set to '*' will allow all methods AND permissions for all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#service_name AccessContextManagerServicePerimeterDryRunEgressPolicy#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#method_selectors AccessContextManagerServicePerimeterDryRunEgressPolicy#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsToTerraform(struct?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}


export function accessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsToHclTerraform(struct?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(accessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsToHclTerraform, true)(struct!.methodSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations | cdktf.IResolvable | undefined) {
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
  private _methodSelectors = new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors[] | cdktf.IResolvable) {
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

export class AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference {
    return new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo {
  /**
  * A list of external resources that are allowed to be accessed. A request
  * matches if it contains an external resource in this list (Example:
  * s3://bucket/path). Currently '*' is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#external_resources AccessContextManagerServicePerimeterDryRunEgressPolicy#external_resources}
  */
  readonly externalResources?: string[];
  /**
  * A list of resources, currently only projects in the form
  * 'projects/<projectnumber>', that match this to stanza. A request matches
  * if it contains a resource in this list. If * is specified for resources,
  * then this 'EgressTo' rule will authorize access to all resources outside
  * the perimeter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#resources AccessContextManagerServicePerimeterDryRunEgressPolicy#resources}
  */
  readonly resources?: string[];
  /**
  * A list of IAM roles that represent the set of operations that the sources
  * specified in the corresponding 'EgressFrom'
  * are allowed to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#roles AccessContextManagerServicePerimeterDryRunEgressPolicy#roles}
  */
  readonly roles?: string[];
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#operations AccessContextManagerServicePerimeterDryRunEgressPolicy#operations}
  */
  readonly operations?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimeterDryRunEgressPolicyEgressToToTerraform(struct?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference | AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalResources),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    operations: cdktf.listMapper(accessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsToTerraform, true)(struct!.operations),
  }
}


export function accessContextManagerServicePerimeterDryRunEgressPolicyEgressToToHclTerraform(struct?: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference | AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(accessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalResources = this._externalResources;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalResources = undefined;
      this._resources = undefined;
      this._roles = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalResources = value.externalResources;
      this._resources = value.resources;
      this._roles = value.roles;
      this._operations.internalValue = value.operations;
    }
  }

  // external_resources - computed: false, optional: true, required: false
  private _externalResources?: string[]; 
  public get externalResources() {
    return this.getListAttribute('external_resources');
  }
  public set externalResources(value: string[]) {
    this._externalResources = value;
  }
  public resetExternalResources() {
    this._externalResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalResourcesInput() {
    return this._externalResources;
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

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations[] | cdktf.IResolvable) {
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
export interface AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#create AccessContextManagerServicePerimeterDryRunEgressPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#delete AccessContextManagerServicePerimeterDryRunEgressPolicy#delete}
  */
  readonly delete?: string;
}

export function accessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsToTerraform(struct?: AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function accessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsToHclTerraform(struct?: AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts | cdktf.IResolvable): any {
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

export class AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy google_access_context_manager_service_perimeter_dry_run_egress_policy}
*/
export class AccessContextManagerServicePerimeterDryRunEgressPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_service_perimeter_dry_run_egress_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessContextManagerServicePerimeterDryRunEgressPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessContextManagerServicePerimeterDryRunEgressPolicy to import
  * @param importFromId The id of the existing AccessContextManagerServicePerimeterDryRunEgressPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessContextManagerServicePerimeterDryRunEgressPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_access_context_manager_service_perimeter_dry_run_egress_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_egress_policy google_access_context_manager_service_perimeter_dry_run_egress_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerServicePerimeterDryRunEgressPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerServicePerimeterDryRunEgressPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_service_perimeter_dry_run_egress_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.38.0',
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
    this._title = config.title;
    this._egressFrom.internalValue = config.egressFrom;
    this._egressTo.internalValue = config.egressTo;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_id - computed: true, optional: false, required: false
  public get accessPolicyId() {
    return this.getStringAttribute('access_policy_id');
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // egress_from - computed: false, optional: true, required: false
  private _egressFrom = new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference(this, "egress_from");
  public get egressFrom() {
    return this._egressFrom;
  }
  public putEgressFrom(value: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom) {
    this._egressFrom.internalValue = value;
  }
  public resetEgressFrom() {
    this._egressFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressFromInput() {
    return this._egressFrom.internalValue;
  }

  // egress_to - computed: false, optional: true, required: false
  private _egressTo = new AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference(this, "egress_to");
  public get egressTo() {
    return this._egressTo;
  }
  public putEgressTo(value: AccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo) {
    this._egressTo.internalValue = value;
  }
  public resetEgressTo() {
    this._egressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressToInput() {
    return this._egressTo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts) {
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
      title: cdktf.stringToTerraform(this._title),
      egress_from: accessContextManagerServicePerimeterDryRunEgressPolicyEgressFromToTerraform(this._egressFrom.internalValue),
      egress_to: accessContextManagerServicePerimeterDryRunEgressPolicyEgressToToTerraform(this._egressTo.internalValue),
      timeouts: accessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_from: {
        value: accessContextManagerServicePerimeterDryRunEgressPolicyEgressFromToHclTerraform(this._egressFrom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromList",
      },
      egress_to: {
        value: accessContextManagerServicePerimeterDryRunEgressPolicyEgressToToHclTerraform(this._egressTo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessContextManagerServicePerimeterDryRunEgressPolicyEgressToList",
      },
      timeouts: {
        value: accessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
