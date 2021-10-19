// https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerServicePerimetersConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AccessPolicy this ServicePerimeter lives in.
Format: accessPolicies/{policy_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#parent AccessContextManagerServicePerimeters#parent}
  */
  readonly parent: string;
  /**
  * service_perimeters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#service_perimeters AccessContextManagerServicePerimeters#service_perimeters}
  */
  readonly servicePerimeters?: AccessContextManagerServicePerimetersServicePerimeters[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#timeouts AccessContextManagerServicePerimeters#timeouts}
  */
  readonly timeouts?: AccessContextManagerServicePerimetersTimeouts;
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom {
  /**
  * A list of identities that are allowed access through this 'EgressPolicy'. 
Should be in the format of email address. The email address should 
represent individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#identities AccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the 
perimeter. If left unspecified, then members of 'identities' field will 
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#identity_type AccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
}

function accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference | AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[] | undefined; 
  public get identities() {
    return this.getListAttribute('identities');
  }
  public set identities(value: string[] | undefined) {
    this._identities = value;
  }
  public resetIdentities() {
    this._identities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities
  }

  // identity_type - computed: false, optional: true, required: false
  private _identityType?: string | undefined; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string | undefined) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding 
'serviceName' in 'ApiOperation'. If '*' used as value for method, 
then ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#method AccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#permission AccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

function accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#service_name AccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#method_selectors AccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors[];
}

function accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo {
  /**
  * A list of resources, currently only projects in the form 
'projects/<projectnumber>', that match this to stanza. A request matches 
if it contains a resource in this list. If * is specified for resources, 
then this 'EgressTo' rule will authorize access to all resources outside 
the perimeter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#resources AccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#operations AccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations[];
}

function accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference | AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsToTerraform)(struct!.operations),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[] | undefined; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[] | undefined) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations[] | undefined; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations') as any;
  }
  public set operations(value: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations[] | undefined) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies {
  /**
  * egress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#egress_from AccessContextManagerServicePerimeters#egress_from}
  */
  readonly egressFrom?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom;
  /**
  * egress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#egress_to AccessContextManagerServicePerimeters#egress_to}
  */
  readonly egressTo?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo;
}

function accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_from: accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromToTerraform(struct!.egressFrom),
    egress_to: accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToToTerraform(struct!.egressTo),
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#access_level AccessContextManagerServicePerimeters#access_level}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#resource AccessContextManagerServicePerimeters#resource}
  */
  readonly resource?: string;
}

function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom {
  /**
  * A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent 
individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#identities AccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the 
perimeter. If left unspecified, then members of 'identities' field will be 
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#identity_type AccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#sources AccessContextManagerServicePerimeters#sources}
  */
  readonly sources?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources[];
}

function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference | AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesToTerraform)(struct!.sources),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[] | undefined; 
  public get identities() {
    return this.getListAttribute('identities');
  }
  public set identities(value: string[] | undefined) {
    this._identities = value;
  }
  public resetIdentities() {
    this._identities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities
  }

  // identity_type - computed: false, optional: true, required: false
  private _identityType?: string | undefined; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string | undefined) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources[] | undefined; 
  public get sources() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sources') as any;
  }
  public set sources(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources[] | undefined) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding 
serviceName in 'ApiOperation'. If '*' used as value for 'method', then 
ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#method AccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#permission AccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName' 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#service_name AccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#method_selectors AccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors[];
}

function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#resources AccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#operations AccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations[];
}

function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference | AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsToTerraform)(struct!.operations),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[] | undefined; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[] | undefined) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations[] | undefined; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations') as any;
  }
  public set operations(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations[] | undefined) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies {
  /**
  * ingress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#ingress_from AccessContextManagerServicePerimeters#ingress_from}
  */
  readonly ingressFrom?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom;
  /**
  * ingress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#ingress_to AccessContextManagerServicePerimeters#ingress_to}
  */
  readonly ingressTo?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo;
}

function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_from: accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromToTerraform(struct!.ingressFrom),
    ingress_to: accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToToTerraform(struct!.ingressTo),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices {
  /**
  * The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#allowed_services AccessContextManagerServicePerimeters#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#enable_restriction AccessContextManagerServicePerimeters#enable_restriction}
  */
  readonly enableRestriction?: boolean | cdktf.IResolvable;
}

function accessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference | AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_services - computed: false, optional: true, required: false
  private _allowedServices?: string[] | undefined; 
  public get allowedServices() {
    return this.getListAttribute('allowed_services');
  }
  public set allowedServices(value: string[] | undefined) {
    this._allowedServices = value;
  }
  public resetAllowedServices() {
    this._allowedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicesInput() {
    return this._allowedServices
  }

  // enable_restriction - computed: false, optional: true, required: false
  private _enableRestriction?: boolean | cdktf.IResolvable | undefined; 
  public get enableRestriction() {
    return this.getBooleanAttribute('enable_restriction') as any;
  }
  public set enableRestriction(value: boolean | cdktf.IResolvable | undefined) {
    this._enableRestriction = value;
  }
  public resetEnableRestriction() {
    this._enableRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRestrictionInput() {
    return this._enableRestriction
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#access_levels AccessContextManagerServicePerimeters#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#resources AccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#restricted_services AccessContextManagerServicePerimeters#restricted_services}
  */
  readonly restrictedServices?: string[];
  /**
  * egress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#egress_policies AccessContextManagerServicePerimeters#egress_policies}
  */
  readonly egressPolicies?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies[];
  /**
  * ingress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#ingress_policies AccessContextManagerServicePerimeters#ingress_policies}
  */
  readonly ingressPolicies?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies[];
  /**
  * vpc_accessible_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#vpc_accessible_services AccessContextManagerServicePerimeters#vpc_accessible_services}
  */
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices;
}

function accessContextManagerServicePerimetersServicePerimetersSpecToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference | AccessContextManagerServicePerimetersServicePerimetersSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesToTerraform)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesToTerraform)(struct!.ingressPolicies),
    vpc_accessible_services: accessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesToTerraform(struct!.vpcAccessibleServices),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels?: string[] | undefined; 
  public get accessLevels() {
    return this.getListAttribute('access_levels');
  }
  public set accessLevels(value: string[] | undefined) {
    this._accessLevels = value;
  }
  public resetAccessLevels() {
    this._accessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[] | undefined; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[] | undefined) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources
  }

  // restricted_services - computed: false, optional: true, required: false
  private _restrictedServices?: string[] | undefined; 
  public get restrictedServices() {
    return this.getListAttribute('restricted_services');
  }
  public set restrictedServices(value: string[] | undefined) {
    this._restrictedServices = value;
  }
  public resetRestrictedServices() {
    this._restrictedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedServicesInput() {
    return this._restrictedServices
  }

  // egress_policies - computed: false, optional: true, required: false
  private _egressPolicies?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies[] | undefined; 
  public get egressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('egress_policies') as any;
  }
  public set egressPolicies(value: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies[] | undefined) {
    this._egressPolicies = value;
  }
  public resetEgressPolicies() {
    this._egressPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPoliciesInput() {
    return this._egressPolicies
  }

  // ingress_policies - computed: false, optional: true, required: false
  private _ingressPolicies?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies[] | undefined; 
  public get ingressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress_policies') as any;
  }
  public set ingressPolicies(value: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies[] | undefined) {
    this._ingressPolicies = value;
  }
  public resetIngressPolicies() {
    this._ingressPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPoliciesInput() {
    return this._ingressPolicies
  }

  // vpc_accessible_services - computed: false, optional: true, required: false
  private _vpcAccessibleServices?: AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices | undefined; 
  private __vpcAccessibleServicesOutput = new AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference(this as any, "vpc_accessible_services", true);
  public get vpcAccessibleServices() {
    return this.__vpcAccessibleServicesOutput;
  }
  public putVpcAccessibleServices(value: AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices | undefined) {
    this._vpcAccessibleServices = value;
  }
  public resetVpcAccessibleServices() {
    this._vpcAccessibleServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessibleServicesInput() {
    return this._vpcAccessibleServices
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom {
  /**
  * A list of identities that are allowed access through this 'EgressPolicy'. 
Should be in the format of email address. The email address should 
represent individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#identities AccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the 
perimeter. If left unspecified, then members of 'identities' field will 
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#identity_type AccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
}

function accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference | AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[] | undefined; 
  public get identities() {
    return this.getListAttribute('identities');
  }
  public set identities(value: string[] | undefined) {
    this._identities = value;
  }
  public resetIdentities() {
    this._identities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities
  }

  // identity_type - computed: false, optional: true, required: false
  private _identityType?: string | undefined; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string | undefined) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding 
'serviceName' in 'ApiOperation'. If '*' used as value for method, 
then ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#method AccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#permission AccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

function accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#service_name AccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#method_selectors AccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors[];
}

function accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo {
  /**
  * A list of resources, currently only projects in the form 
'projects/<projectnumber>', that match this to stanza. A request matches 
if it contains a resource in this list. If * is specified for resources, 
then this 'EgressTo' rule will authorize access to all resources outside 
the perimeter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#resources AccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#operations AccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations[];
}

function accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference | AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsToTerraform)(struct!.operations),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[] | undefined; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[] | undefined) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations[] | undefined; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations') as any;
  }
  public set operations(value: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations[] | undefined) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies {
  /**
  * egress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#egress_from AccessContextManagerServicePerimeters#egress_from}
  */
  readonly egressFrom?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom;
  /**
  * egress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#egress_to AccessContextManagerServicePerimeters#egress_to}
  */
  readonly egressTo?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo;
}

function accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_from: accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromToTerraform(struct!.egressFrom),
    egress_to: accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToToTerraform(struct!.egressTo),
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#access_level AccessContextManagerServicePerimeters#access_level}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#resource AccessContextManagerServicePerimeters#resource}
  */
  readonly resource?: string;
}

function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom {
  /**
  * A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent 
individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#identities AccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the 
perimeter. If left unspecified, then members of 'identities' field will be 
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#identity_type AccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#sources AccessContextManagerServicePerimeters#sources}
  */
  readonly sources?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources[];
}

function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference | AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesToTerraform)(struct!.sources),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[] | undefined; 
  public get identities() {
    return this.getListAttribute('identities');
  }
  public set identities(value: string[] | undefined) {
    this._identities = value;
  }
  public resetIdentities() {
    this._identities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities
  }

  // identity_type - computed: false, optional: true, required: false
  private _identityType?: string | undefined; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string | undefined) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources[] | undefined; 
  public get sources() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sources') as any;
  }
  public set sources(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources[] | undefined) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding 
serviceName in 'ApiOperation'. If '*' used as value for 'method', then 
ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#method AccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#permission AccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName' 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#service_name AccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#method_selectors AccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors[];
}

function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#resources AccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#operations AccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations[];
}

function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference | AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsToTerraform)(struct!.operations),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[] | undefined; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[] | undefined) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations[] | undefined; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations') as any;
  }
  public set operations(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations[] | undefined) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations
  }
}
export interface AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies {
  /**
  * ingress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#ingress_from AccessContextManagerServicePerimeters#ingress_from}
  */
  readonly ingressFrom?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom;
  /**
  * ingress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#ingress_to AccessContextManagerServicePerimeters#ingress_to}
  */
  readonly ingressTo?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo;
}

function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_from: accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromToTerraform(struct!.ingressFrom),
    ingress_to: accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToToTerraform(struct!.ingressTo),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices {
  /**
  * The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#allowed_services AccessContextManagerServicePerimeters#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#enable_restriction AccessContextManagerServicePerimeters#enable_restriction}
  */
  readonly enableRestriction?: boolean | cdktf.IResolvable;
}

function accessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference | AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_services - computed: false, optional: true, required: false
  private _allowedServices?: string[] | undefined; 
  public get allowedServices() {
    return this.getListAttribute('allowed_services');
  }
  public set allowedServices(value: string[] | undefined) {
    this._allowedServices = value;
  }
  public resetAllowedServices() {
    this._allowedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicesInput() {
    return this._allowedServices
  }

  // enable_restriction - computed: false, optional: true, required: false
  private _enableRestriction?: boolean | cdktf.IResolvable | undefined; 
  public get enableRestriction() {
    return this.getBooleanAttribute('enable_restriction') as any;
  }
  public set enableRestriction(value: boolean | cdktf.IResolvable | undefined) {
    this._enableRestriction = value;
  }
  public resetEnableRestriction() {
    this._enableRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRestrictionInput() {
    return this._enableRestriction
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#access_levels AccessContextManagerServicePerimeters#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#resources AccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#restricted_services AccessContextManagerServicePerimeters#restricted_services}
  */
  readonly restrictedServices?: string[];
  /**
  * egress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#egress_policies AccessContextManagerServicePerimeters#egress_policies}
  */
  readonly egressPolicies?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies[];
  /**
  * ingress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#ingress_policies AccessContextManagerServicePerimeters#ingress_policies}
  */
  readonly ingressPolicies?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies[];
  /**
  * vpc_accessible_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#vpc_accessible_services AccessContextManagerServicePerimeters#vpc_accessible_services}
  */
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices;
}

function accessContextManagerServicePerimetersServicePerimetersStatusToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference | AccessContextManagerServicePerimetersServicePerimetersStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesToTerraform)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesToTerraform)(struct!.ingressPolicies),
    vpc_accessible_services: accessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesToTerraform(struct!.vpcAccessibleServices),
  }
}

export class AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels?: string[] | undefined; 
  public get accessLevels() {
    return this.getListAttribute('access_levels');
  }
  public set accessLevels(value: string[] | undefined) {
    this._accessLevels = value;
  }
  public resetAccessLevels() {
    this._accessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[] | undefined; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[] | undefined) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources
  }

  // restricted_services - computed: false, optional: true, required: false
  private _restrictedServices?: string[] | undefined; 
  public get restrictedServices() {
    return this.getListAttribute('restricted_services');
  }
  public set restrictedServices(value: string[] | undefined) {
    this._restrictedServices = value;
  }
  public resetRestrictedServices() {
    this._restrictedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedServicesInput() {
    return this._restrictedServices
  }

  // egress_policies - computed: false, optional: true, required: false
  private _egressPolicies?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies[] | undefined; 
  public get egressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('egress_policies') as any;
  }
  public set egressPolicies(value: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies[] | undefined) {
    this._egressPolicies = value;
  }
  public resetEgressPolicies() {
    this._egressPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPoliciesInput() {
    return this._egressPolicies
  }

  // ingress_policies - computed: false, optional: true, required: false
  private _ingressPolicies?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies[] | undefined; 
  public get ingressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress_policies') as any;
  }
  public set ingressPolicies(value: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies[] | undefined) {
    this._ingressPolicies = value;
  }
  public resetIngressPolicies() {
    this._ingressPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPoliciesInput() {
    return this._ingressPolicies
  }

  // vpc_accessible_services - computed: false, optional: true, required: false
  private _vpcAccessibleServices?: AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices | undefined; 
  private __vpcAccessibleServicesOutput = new AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference(this as any, "vpc_accessible_services", true);
  public get vpcAccessibleServices() {
    return this.__vpcAccessibleServicesOutput;
  }
  public putVpcAccessibleServices(value: AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices | undefined) {
    this._vpcAccessibleServices = value;
  }
  public resetVpcAccessibleServices() {
    this._vpcAccessibleServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessibleServicesInput() {
    return this._vpcAccessibleServices
  }
}
export interface AccessContextManagerServicePerimetersServicePerimeters {
  /**
  * Description of the ServicePerimeter and its use. Does not affect
behavior.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#description AccessContextManagerServicePerimeters#description}
  */
  readonly description?: string;
  /**
  * Resource name for the ServicePerimeter. The short_name component must
begin with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#name AccessContextManagerServicePerimeters#name}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#perimeter_type AccessContextManagerServicePerimeters#perimeter_type}
  */
  readonly perimeterType?: string;
  /**
  * Human readable title. Must be unique within the Policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#title AccessContextManagerServicePerimeters#title}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#use_explicit_dry_run_spec AccessContextManagerServicePerimeters#use_explicit_dry_run_spec}
  */
  readonly useExplicitDryRunSpec?: boolean | cdktf.IResolvable;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#spec AccessContextManagerServicePerimeters#spec}
  */
  readonly spec?: AccessContextManagerServicePerimetersServicePerimetersSpec;
  /**
  * status block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#status AccessContextManagerServicePerimeters#status}
  */
  readonly status?: AccessContextManagerServicePerimetersServicePerimetersStatus;
}

function accessContextManagerServicePerimetersServicePerimetersToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimeters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface AccessContextManagerServicePerimetersTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#create AccessContextManagerServicePerimeters#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#delete AccessContextManagerServicePerimeters#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#update AccessContextManagerServicePerimeters#update}
  */
  readonly update?: string;
}

function accessContextManagerServicePerimetersTimeoutsToTerraform(struct?: AccessContextManagerServicePerimetersTimeoutsOutputReference | AccessContextManagerServicePerimetersTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html google_access_context_manager_service_perimeters}
*/
export class AccessContextManagerServicePerimeters extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_access_context_manager_service_perimeters";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html google_access_context_manager_service_perimeters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerServicePerimetersConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerServicePerimetersConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_service_perimeters',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._parent = config.parent;
    this._servicePerimeters = config.servicePerimeters;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._parent
  }

  // service_perimeters - computed: false, optional: true, required: false
  private _servicePerimeters?: AccessContextManagerServicePerimetersServicePerimeters[] | undefined; 
  public get servicePerimeters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('service_perimeters') as any;
  }
  public set servicePerimeters(value: AccessContextManagerServicePerimetersServicePerimeters[] | undefined) {
    this._servicePerimeters = value;
  }
  public resetServicePerimeters() {
    this._servicePerimeters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePerimetersInput() {
    return this._servicePerimeters
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AccessContextManagerServicePerimetersTimeouts | undefined; 
  private __timeoutsOutput = new AccessContextManagerServicePerimetersTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AccessContextManagerServicePerimetersTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      parent: cdktf.stringToTerraform(this._parent),
      service_perimeters: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersToTerraform)(this._servicePerimeters),
      timeouts: accessContextManagerServicePerimetersTimeoutsToTerraform(this._timeouts),
    };
  }
}
