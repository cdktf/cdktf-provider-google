// https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerServicePerimetersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#id AccessContextManagerServicePerimeters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The AccessPolicy this ServicePerimeter lives in.
Format: accessPolicies/{policy_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#parent AccessContextManagerServicePerimeters#parent}
  */
  readonly parent: string;
  /**
  * service_perimeters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#service_perimeters AccessContextManagerServicePerimeters#service_perimeters}
  */
  readonly servicePerimeters?: AccessContextManagerServicePerimetersServicePerimeters[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#timeouts AccessContextManagerServicePerimeters#timeouts}
  */
  readonly timeouts?: AccessContextManagerServicePerimetersTimeouts;
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom {
  /**
  * A list of identities that are allowed access through this 'EgressPolicy'. 
Should be in the format of email address. The email address should 
represent individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#identities AccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the 
perimeter. If left unspecified, then members of 'identities' field will 
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#identity_type AccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
}

export function accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference | AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
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
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding 
'serviceName' in 'ApiOperation'. If '*' used as value for method, 
then ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#method AccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#permission AccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

export function accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
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

export class AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#service_name AccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#method_selectors AccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations | cdktf.IResolvable | undefined) {
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
  private _methodSelectors = new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable) {
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

export class AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo {
  /**
  * A list of external resources that are allowed to be accessed. A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#external_resources AccessContextManagerServicePerimeters#external_resources}
  */
  readonly externalResources?: string[];
  /**
  * A list of resources, currently only projects in the form 
'projects/<projectnumber>', that match this to stanza. A request matches 
if it contains a resource in this list. If * is specified for resources, 
then this 'EgressTo' rule will authorize access to all resources outside 
the perimeter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#resources AccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#operations AccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference | AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalResources),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsToTerraform, true)(struct!.operations),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo | undefined {
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
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalResources = undefined;
      this._resources = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalResources = value.externalResources;
      this._resources = value.resources;
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

  // operations - computed: false, optional: true, required: false
  private _operations = new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable) {
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
export interface AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies {
  /**
  * egress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#egress_from AccessContextManagerServicePerimeters#egress_from}
  */
  readonly egressFrom?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom;
  /**
  * egress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#egress_to AccessContextManagerServicePerimeters#egress_to}
  */
  readonly egressTo?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo;
}

export function accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_from: accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromToTerraform(struct!.egressFrom),
    egress_to: accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToToTerraform(struct!.egressTo),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressFrom = this._egressFrom?.internalValue;
    }
    if (this._egressTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressTo = this._egressTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressFrom.internalValue = undefined;
      this._egressTo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressFrom.internalValue = value.egressFrom;
      this._egressTo.internalValue = value.egressTo;
    }
  }

  // egress_from - computed: false, optional: true, required: false
  private _egressFrom = new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference(this, "egress_from");
  public get egressFrom() {
    return this._egressFrom;
  }
  public putEgressFrom(value: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom) {
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
  private _egressTo = new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference(this, "egress_to");
  public get egressTo() {
    return this._egressTo;
  }
  public putEgressTo(value: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo) {
    this._egressTo.internalValue = value;
  }
  public resetEgressTo() {
    this._egressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressToInput() {
    return this._egressTo.internalValue;
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#access_level AccessContextManagerServicePerimeters#access_level}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#resource AccessContextManagerServicePerimeters#resource}
  */
  readonly resource?: string;
}

export function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources | cdktf.IResolvable | undefined) {
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

export class AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom {
  /**
  * A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent 
individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#identities AccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the 
perimeter. If left unspecified, then members of 'identities' field will be 
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#identity_type AccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#sources AccessContextManagerServicePerimeters#sources}
  */
  readonly sources?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference | AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesToTerraform, true)(struct!.sources),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom | undefined) {
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
  private _sources = new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable) {
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
export interface AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding 
serviceName in 'ApiOperation'. If '*' used as value for 'method', then 
ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#method AccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#permission AccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

export function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
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

export class AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName' 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#service_name AccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#method_selectors AccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations | cdktf.IResolvable | undefined) {
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
  private _methodSelectors = new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable) {
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

export class AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#resources AccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#operations AccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference | AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsToTerraform, true)(struct!.operations),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo | undefined) {
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
  private _operations = new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable) {
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
export interface AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies {
  /**
  * ingress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#ingress_from AccessContextManagerServicePerimeters#ingress_from}
  */
  readonly ingressFrom?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom;
  /**
  * ingress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#ingress_to AccessContextManagerServicePerimeters#ingress_to}
  */
  readonly ingressTo?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo;
}

export function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_from: accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromToTerraform(struct!.ingressFrom),
    ingress_to: accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToToTerraform(struct!.ingressTo),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingressFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressFrom = this._ingressFrom?.internalValue;
    }
    if (this._ingressTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressTo = this._ingressTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingressFrom.internalValue = undefined;
      this._ingressTo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingressFrom.internalValue = value.ingressFrom;
      this._ingressTo.internalValue = value.ingressTo;
    }
  }

  // ingress_from - computed: false, optional: true, required: false
  private _ingressFrom = new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference(this, "ingress_from");
  public get ingressFrom() {
    return this._ingressFrom;
  }
  public putIngressFrom(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom) {
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
  private _ingressTo = new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference(this, "ingress_to");
  public get ingressTo() {
    return this._ingressTo;
  }
  public putIngressTo(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo) {
    this._ingressTo.internalValue = value;
  }
  public resetIngressTo() {
    this._ingressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressToInput() {
    return this._ingressTo.internalValue;
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices {
  /**
  * The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#allowed_services AccessContextManagerServicePerimeters#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#enable_restriction AccessContextManagerServicePerimeters#enable_restriction}
  */
  readonly enableRestriction?: boolean | cdktf.IResolvable;
}

export function accessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference | AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServices = this._allowedServices;
    }
    if (this._enableRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRestriction = this._enableRestriction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedServices = undefined;
      this._enableRestriction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedServices = value.allowedServices;
      this._enableRestriction = value.enableRestriction;
    }
  }

  // allowed_services - computed: false, optional: true, required: false
  private _allowedServices?: string[]; 
  public get allowedServices() {
    return this.getListAttribute('allowed_services');
  }
  public set allowedServices(value: string[]) {
    this._allowedServices = value;
  }
  public resetAllowedServices() {
    this._allowedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicesInput() {
    return this._allowedServices;
  }

  // enable_restriction - computed: false, optional: true, required: false
  private _enableRestriction?: boolean | cdktf.IResolvable; 
  public get enableRestriction() {
    return this.getBooleanAttribute('enable_restriction');
  }
  public set enableRestriction(value: boolean | cdktf.IResolvable) {
    this._enableRestriction = value;
  }
  public resetEnableRestriction() {
    this._enableRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRestrictionInput() {
    return this._enableRestriction;
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpec {
  /**
  * A list of AccessLevel resource names that allow resources within
the ServicePerimeter to be accessed from the internet.
AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#access_levels AccessContextManagerServicePerimeters#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#resources AccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#restricted_services AccessContextManagerServicePerimeters#restricted_services}
  */
  readonly restrictedServices?: string[];
  /**
  * egress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#egress_policies AccessContextManagerServicePerimeters#egress_policies}
  */
  readonly egressPolicies?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies[] | cdktf.IResolvable;
  /**
  * ingress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#ingress_policies AccessContextManagerServicePerimeters#ingress_policies}
  */
  readonly ingressPolicies?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies[] | cdktf.IResolvable;
  /**
  * vpc_accessible_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#vpc_accessible_services AccessContextManagerServicePerimeters#vpc_accessible_services}
  */
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices;
}

export function accessContextManagerServicePerimetersServicePerimetersSpecToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference | AccessContextManagerServicePerimetersServicePerimetersSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesToTerraform, true)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesToTerraform, true)(struct!.ingressPolicies),
    vpc_accessible_services: accessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesToTerraform(struct!.vpcAccessibleServices),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevels = this._accessLevels;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._restrictedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedServices = this._restrictedServices;
    }
    if (this._egressPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPolicies = this._egressPolicies?.internalValue;
    }
    if (this._ingressPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPolicies = this._ingressPolicies?.internalValue;
    }
    if (this._vpcAccessibleServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcAccessibleServices = this._vpcAccessibleServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessLevels = undefined;
      this._resources = undefined;
      this._restrictedServices = undefined;
      this._egressPolicies.internalValue = undefined;
      this._ingressPolicies.internalValue = undefined;
      this._vpcAccessibleServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessLevels = value.accessLevels;
      this._resources = value.resources;
      this._restrictedServices = value.restrictedServices;
      this._egressPolicies.internalValue = value.egressPolicies;
      this._ingressPolicies.internalValue = value.ingressPolicies;
      this._vpcAccessibleServices.internalValue = value.vpcAccessibleServices;
    }
  }

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels?: string[]; 
  public get accessLevels() {
    return this.getListAttribute('access_levels');
  }
  public set accessLevels(value: string[]) {
    this._accessLevels = value;
  }
  public resetAccessLevels() {
    this._accessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels;
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

  // restricted_services - computed: false, optional: true, required: false
  private _restrictedServices?: string[]; 
  public get restrictedServices() {
    return this.getListAttribute('restricted_services');
  }
  public set restrictedServices(value: string[]) {
    this._restrictedServices = value;
  }
  public resetRestrictedServices() {
    this._restrictedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedServicesInput() {
    return this._restrictedServices;
  }

  // egress_policies - computed: false, optional: true, required: false
  private _egressPolicies = new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList(this, "egress_policies", false);
  public get egressPolicies() {
    return this._egressPolicies;
  }
  public putEgressPolicies(value: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies[] | cdktf.IResolvable) {
    this._egressPolicies.internalValue = value;
  }
  public resetEgressPolicies() {
    this._egressPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPoliciesInput() {
    return this._egressPolicies.internalValue;
  }

  // ingress_policies - computed: false, optional: true, required: false
  private _ingressPolicies = new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList(this, "ingress_policies", false);
  public get ingressPolicies() {
    return this._ingressPolicies;
  }
  public putIngressPolicies(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies[] | cdktf.IResolvable) {
    this._ingressPolicies.internalValue = value;
  }
  public resetIngressPolicies() {
    this._ingressPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPoliciesInput() {
    return this._ingressPolicies.internalValue;
  }

  // vpc_accessible_services - computed: false, optional: true, required: false
  private _vpcAccessibleServices = new AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference(this, "vpc_accessible_services");
  public get vpcAccessibleServices() {
    return this._vpcAccessibleServices;
  }
  public putVpcAccessibleServices(value: AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices) {
    this._vpcAccessibleServices.internalValue = value;
  }
  public resetVpcAccessibleServices() {
    this._vpcAccessibleServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessibleServicesInput() {
    return this._vpcAccessibleServices.internalValue;
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom {
  /**
  * A list of identities that are allowed access through this 'EgressPolicy'. 
Should be in the format of email address. The email address should 
represent individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#identities AccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the 
perimeter. If left unspecified, then members of 'identities' field will 
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#identity_type AccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
}

export function accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference | AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
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
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding 
'serviceName' in 'ApiOperation'. If '*' used as value for method, 
then ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#method AccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#permission AccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

export function accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
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

export class AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#service_name AccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#method_selectors AccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations | cdktf.IResolvable | undefined) {
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
  private _methodSelectors = new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable) {
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

export class AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo {
  /**
  * A list of external resources that are allowed to be accessed. A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#external_resources AccessContextManagerServicePerimeters#external_resources}
  */
  readonly externalResources?: string[];
  /**
  * A list of resources, currently only projects in the form 
'projects/<projectnumber>', that match this to stanza. A request matches 
if it contains a resource in this list. If * is specified for resources, 
then this 'EgressTo' rule will authorize access to all resources outside 
the perimeter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#resources AccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#operations AccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference | AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalResources),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsToTerraform, true)(struct!.operations),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo | undefined {
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
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalResources = undefined;
      this._resources = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalResources = value.externalResources;
      this._resources = value.resources;
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

  // operations - computed: false, optional: true, required: false
  private _operations = new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable) {
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
export interface AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies {
  /**
  * egress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#egress_from AccessContextManagerServicePerimeters#egress_from}
  */
  readonly egressFrom?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom;
  /**
  * egress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#egress_to AccessContextManagerServicePerimeters#egress_to}
  */
  readonly egressTo?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo;
}

export function accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_from: accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromToTerraform(struct!.egressFrom),
    egress_to: accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToToTerraform(struct!.egressTo),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressFrom = this._egressFrom?.internalValue;
    }
    if (this._egressTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressTo = this._egressTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressFrom.internalValue = undefined;
      this._egressTo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressFrom.internalValue = value.egressFrom;
      this._egressTo.internalValue = value.egressTo;
    }
  }

  // egress_from - computed: false, optional: true, required: false
  private _egressFrom = new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference(this, "egress_from");
  public get egressFrom() {
    return this._egressFrom;
  }
  public putEgressFrom(value: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom) {
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
  private _egressTo = new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference(this, "egress_to");
  public get egressTo() {
    return this._egressTo;
  }
  public putEgressTo(value: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo) {
    this._egressTo.internalValue = value;
  }
  public resetEgressTo() {
    this._egressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressToInput() {
    return this._egressTo.internalValue;
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#access_level AccessContextManagerServicePerimeters#access_level}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#resource AccessContextManagerServicePerimeters#resource}
  */
  readonly resource?: string;
}

export function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources | cdktf.IResolvable | undefined) {
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

export class AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom {
  /**
  * A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent 
individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#identities AccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the 
perimeter. If left unspecified, then members of 'identities' field will be 
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#identity_type AccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#sources AccessContextManagerServicePerimeters#sources}
  */
  readonly sources?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference | AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesToTerraform, true)(struct!.sources),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom | undefined) {
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
  private _sources = new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable) {
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
export interface AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding 
serviceName in 'ApiOperation'. If '*' used as value for 'method', then 
ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#method AccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#permission AccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

export function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
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

export class AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName' 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#service_name AccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#method_selectors AccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations | cdktf.IResolvable | undefined) {
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
  private _methodSelectors = new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable) {
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

export class AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#resources AccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#operations AccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable;
}

export function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference | AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsToTerraform, true)(struct!.operations),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo | undefined) {
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
  private _operations = new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable) {
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
export interface AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies {
  /**
  * ingress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#ingress_from AccessContextManagerServicePerimeters#ingress_from}
  */
  readonly ingressFrom?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom;
  /**
  * ingress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#ingress_to AccessContextManagerServicePerimeters#ingress_to}
  */
  readonly ingressTo?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo;
}

export function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_from: accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromToTerraform(struct!.ingressFrom),
    ingress_to: accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToToTerraform(struct!.ingressTo),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingressFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressFrom = this._ingressFrom?.internalValue;
    }
    if (this._ingressTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressTo = this._ingressTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingressFrom.internalValue = undefined;
      this._ingressTo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingressFrom.internalValue = value.ingressFrom;
      this._ingressTo.internalValue = value.ingressTo;
    }
  }

  // ingress_from - computed: false, optional: true, required: false
  private _ingressFrom = new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference(this, "ingress_from");
  public get ingressFrom() {
    return this._ingressFrom;
  }
  public putIngressFrom(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom) {
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
  private _ingressTo = new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference(this, "ingress_to");
  public get ingressTo() {
    return this._ingressTo;
  }
  public putIngressTo(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo) {
    this._ingressTo.internalValue = value;
  }
  public resetIngressTo() {
    this._ingressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressToInput() {
    return this._ingressTo.internalValue;
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices {
  /**
  * The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#allowed_services AccessContextManagerServicePerimeters#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#enable_restriction AccessContextManagerServicePerimeters#enable_restriction}
  */
  readonly enableRestriction?: boolean | cdktf.IResolvable;
}

export function accessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference | AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServices = this._allowedServices;
    }
    if (this._enableRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRestriction = this._enableRestriction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedServices = undefined;
      this._enableRestriction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedServices = value.allowedServices;
      this._enableRestriction = value.enableRestriction;
    }
  }

  // allowed_services - computed: false, optional: true, required: false
  private _allowedServices?: string[]; 
  public get allowedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_services'));
  }
  public set allowedServices(value: string[]) {
    this._allowedServices = value;
  }
  public resetAllowedServices() {
    this._allowedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicesInput() {
    return this._allowedServices;
  }

  // enable_restriction - computed: false, optional: true, required: false
  private _enableRestriction?: boolean | cdktf.IResolvable; 
  public get enableRestriction() {
    return this.getBooleanAttribute('enable_restriction');
  }
  public set enableRestriction(value: boolean | cdktf.IResolvable) {
    this._enableRestriction = value;
  }
  public resetEnableRestriction() {
    this._enableRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRestrictionInput() {
    return this._enableRestriction;
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatus {
  /**
  * A list of AccessLevel resource names that allow resources within
the ServicePerimeter to be accessed from the internet.
AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#access_levels AccessContextManagerServicePerimeters#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#resources AccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#restricted_services AccessContextManagerServicePerimeters#restricted_services}
  */
  readonly restrictedServices?: string[];
  /**
  * egress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#egress_policies AccessContextManagerServicePerimeters#egress_policies}
  */
  readonly egressPolicies?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies[] | cdktf.IResolvable;
  /**
  * ingress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#ingress_policies AccessContextManagerServicePerimeters#ingress_policies}
  */
  readonly ingressPolicies?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies[] | cdktf.IResolvable;
  /**
  * vpc_accessible_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#vpc_accessible_services AccessContextManagerServicePerimeters#vpc_accessible_services}
  */
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices;
}

export function accessContextManagerServicePerimetersServicePerimetersStatusToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference | AccessContextManagerServicePerimetersServicePerimetersStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesToTerraform, true)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesToTerraform, true)(struct!.ingressPolicies),
    vpc_accessible_services: accessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesToTerraform(struct!.vpcAccessibleServices),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimetersStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevels = this._accessLevels;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._restrictedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedServices = this._restrictedServices;
    }
    if (this._egressPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPolicies = this._egressPolicies?.internalValue;
    }
    if (this._ingressPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPolicies = this._ingressPolicies?.internalValue;
    }
    if (this._vpcAccessibleServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcAccessibleServices = this._vpcAccessibleServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimetersStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessLevels = undefined;
      this._resources = undefined;
      this._restrictedServices = undefined;
      this._egressPolicies.internalValue = undefined;
      this._ingressPolicies.internalValue = undefined;
      this._vpcAccessibleServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessLevels = value.accessLevels;
      this._resources = value.resources;
      this._restrictedServices = value.restrictedServices;
      this._egressPolicies.internalValue = value.egressPolicies;
      this._ingressPolicies.internalValue = value.ingressPolicies;
      this._vpcAccessibleServices.internalValue = value.vpcAccessibleServices;
    }
  }

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels?: string[]; 
  public get accessLevels() {
    return this.getListAttribute('access_levels');
  }
  public set accessLevels(value: string[]) {
    this._accessLevels = value;
  }
  public resetAccessLevels() {
    this._accessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels;
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

  // restricted_services - computed: false, optional: true, required: false
  private _restrictedServices?: string[]; 
  public get restrictedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_services'));
  }
  public set restrictedServices(value: string[]) {
    this._restrictedServices = value;
  }
  public resetRestrictedServices() {
    this._restrictedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedServicesInput() {
    return this._restrictedServices;
  }

  // egress_policies - computed: false, optional: true, required: false
  private _egressPolicies = new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList(this, "egress_policies", false);
  public get egressPolicies() {
    return this._egressPolicies;
  }
  public putEgressPolicies(value: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies[] | cdktf.IResolvable) {
    this._egressPolicies.internalValue = value;
  }
  public resetEgressPolicies() {
    this._egressPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPoliciesInput() {
    return this._egressPolicies.internalValue;
  }

  // ingress_policies - computed: false, optional: true, required: false
  private _ingressPolicies = new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList(this, "ingress_policies", false);
  public get ingressPolicies() {
    return this._ingressPolicies;
  }
  public putIngressPolicies(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies[] | cdktf.IResolvable) {
    this._ingressPolicies.internalValue = value;
  }
  public resetIngressPolicies() {
    this._ingressPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPoliciesInput() {
    return this._ingressPolicies.internalValue;
  }

  // vpc_accessible_services - computed: false, optional: true, required: false
  private _vpcAccessibleServices = new AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference(this, "vpc_accessible_services");
  public get vpcAccessibleServices() {
    return this._vpcAccessibleServices;
  }
  public putVpcAccessibleServices(value: AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices) {
    this._vpcAccessibleServices.internalValue = value;
  }
  public resetVpcAccessibleServices() {
    this._vpcAccessibleServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessibleServicesInput() {
    return this._vpcAccessibleServices.internalValue;
  }
}
export interface AccessContextManagerServicePerimetersServicePerimeters {
  /**
  * Description of the ServicePerimeter and its use. Does not affect
behavior.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#description AccessContextManagerServicePerimeters#description}
  */
  readonly description?: string;
  /**
  * Resource name for the ServicePerimeter. The short_name component must
begin with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#name AccessContextManagerServicePerimeters#name}
  */
  readonly name: string;
  /**
  * Specifies the type of the Perimeter. There are two types: regular and
bridge. Regular Service Perimeter contains resources, access levels,
and restricted services. Every resource can be in at most
ONE regular Service Perimeter.

In addition to being in a regular service perimeter, a resource can also
be in zero or more perimeter bridges. A perimeter bridge only contains
resources. Cross project operations are permitted if all effected
resources share some perimeter (whether bridge or regular). Perimeter
Bridge does not contain access levels or services: those are governed
entirely by the regular perimeter that resource is in.

Perimeter Bridges are typically useful when building more complex
topologies with many independent perimeters that need to share some data
with a common perimeter, but should not be able to share data among
themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#perimeter_type AccessContextManagerServicePerimeters#perimeter_type}
  */
  readonly perimeterType?: string;
  /**
  * Human readable title. Must be unique within the Policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#title AccessContextManagerServicePerimeters#title}
  */
  readonly title: string;
  /**
  * Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists
for all Service Perimeters, and that spec is identical to the status for those
Service Perimeters. When this flag is set, it inhibits the generation of the
implicit spec, thereby allowing the user to explicitly provide a
configuration ("spec") to use in a dry-run version of the Service Perimeter.
This allows the user to test changes to the enforced config ("status") without
actually enforcing them. This testing is done through analyzing the differences
between currently enforced and suggested restrictions. useExplicitDryRunSpec must
bet set to True if any of the fields in the spec are set to non-default values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#use_explicit_dry_run_spec AccessContextManagerServicePerimeters#use_explicit_dry_run_spec}
  */
  readonly useExplicitDryRunSpec?: boolean | cdktf.IResolvable;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#spec AccessContextManagerServicePerimeters#spec}
  */
  readonly spec?: AccessContextManagerServicePerimetersServicePerimetersSpec;
  /**
  * status block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#status AccessContextManagerServicePerimeters#status}
  */
  readonly status?: AccessContextManagerServicePerimetersServicePerimetersStatus;
}

export function accessContextManagerServicePerimetersServicePerimetersToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimeters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    perimeter_type: cdktf.stringToTerraform(struct!.perimeterType),
    title: cdktf.stringToTerraform(struct!.title),
    use_explicit_dry_run_spec: cdktf.booleanToTerraform(struct!.useExplicitDryRunSpec),
    spec: accessContextManagerServicePerimetersServicePerimetersSpecToTerraform(struct!.spec),
    status: accessContextManagerServicePerimetersServicePerimetersStatusToTerraform(struct!.status),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimetersServicePerimeters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._perimeterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.perimeterType = this._perimeterType;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._useExplicitDryRunSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.useExplicitDryRunSpec = this._useExplicitDryRunSpec;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimetersServicePerimeters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._perimeterType = undefined;
      this._title = undefined;
      this._useExplicitDryRunSpec = undefined;
      this._spec.internalValue = undefined;
      this._status.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._perimeterType = value.perimeterType;
      this._title = value.title;
      this._useExplicitDryRunSpec = value.useExplicitDryRunSpec;
      this._spec.internalValue = value.spec;
      this._status.internalValue = value.status;
    }
  }

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

  // perimeter_type - computed: false, optional: true, required: false
  private _perimeterType?: string; 
  public get perimeterType() {
    return this.getStringAttribute('perimeter_type');
  }
  public set perimeterType(value: string) {
    this._perimeterType = value;
  }
  public resetPerimeterType() {
    this._perimeterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perimeterTypeInput() {
    return this._perimeterType;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // use_explicit_dry_run_spec - computed: false, optional: true, required: false
  private _useExplicitDryRunSpec?: boolean | cdktf.IResolvable; 
  public get useExplicitDryRunSpec() {
    return this.getBooleanAttribute('use_explicit_dry_run_spec');
  }
  public set useExplicitDryRunSpec(value: boolean | cdktf.IResolvable) {
    this._useExplicitDryRunSpec = value;
  }
  public resetUseExplicitDryRunSpec() {
    this._useExplicitDryRunSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExplicitDryRunSpecInput() {
    return this._useExplicitDryRunSpec;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AccessContextManagerServicePerimetersServicePerimetersSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status = new AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: AccessContextManagerServicePerimetersServicePerimetersStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerServicePerimetersServicePerimeters[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerServicePerimetersServicePerimetersOutputReference {
    return new AccessContextManagerServicePerimetersServicePerimetersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimetersTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#create AccessContextManagerServicePerimeters#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#delete AccessContextManagerServicePerimeters#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters#update AccessContextManagerServicePerimeters#update}
  */
  readonly update?: string;
}

export function accessContextManagerServicePerimetersTimeoutsToTerraform(struct?: AccessContextManagerServicePerimetersTimeoutsOutputReference | AccessContextManagerServicePerimetersTimeouts | cdktf.IResolvable): any {
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

export class AccessContextManagerServicePerimetersTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimetersTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerServicePerimetersTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters google_access_context_manager_service_perimeters}
*/
export class AccessContextManagerServicePerimeters extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_service_perimeters";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters google_access_context_manager_service_perimeters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerServicePerimetersConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerServicePerimetersConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_service_perimeters',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._parent = config.parent;
    this._servicePerimeters.internalValue = config.servicePerimeters;
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // service_perimeters - computed: false, optional: true, required: false
  private _servicePerimeters = new AccessContextManagerServicePerimetersServicePerimetersList(this, "service_perimeters", true);
  public get servicePerimeters() {
    return this._servicePerimeters;
  }
  public putServicePerimeters(value: AccessContextManagerServicePerimetersServicePerimeters[] | cdktf.IResolvable) {
    this._servicePerimeters.internalValue = value;
  }
  public resetServicePerimeters() {
    this._servicePerimeters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePerimetersInput() {
    return this._servicePerimeters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessContextManagerServicePerimetersTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessContextManagerServicePerimetersTimeouts) {
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
      parent: cdktf.stringToTerraform(this._parent),
      service_perimeters: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersToTerraform, true)(this._servicePerimeters.internalValue),
      timeouts: accessContextManagerServicePerimetersTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
