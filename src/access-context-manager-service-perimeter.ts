// https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerServicePerimeterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the ServicePerimeter and its use. Does not affect
behavior.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#description AccessContextManagerServicePerimeter#description}
  */
  readonly description?: string;
  /**
  * Resource name for the ServicePerimeter. The short_name component must
begin with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#name AccessContextManagerServicePerimeter#name}
  */
  readonly name: string;
  /**
  * The AccessPolicy this ServicePerimeter lives in.
Format: accessPolicies/{policy_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#parent AccessContextManagerServicePerimeter#parent}
  */
  readonly parent: string;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#perimeter_type AccessContextManagerServicePerimeter#perimeter_type}
  */
  readonly perimeterType?: string;
  /**
  * Human readable title. Must be unique within the Policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#title AccessContextManagerServicePerimeter#title}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#use_explicit_dry_run_spec AccessContextManagerServicePerimeter#use_explicit_dry_run_spec}
  */
  readonly useExplicitDryRunSpec?: boolean | cdktf.IResolvable;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#spec AccessContextManagerServicePerimeter#spec}
  */
  readonly spec?: AccessContextManagerServicePerimeterSpec;
  /**
  * status block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#status AccessContextManagerServicePerimeter#status}
  */
  readonly status?: AccessContextManagerServicePerimeterStatus;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#timeouts AccessContextManagerServicePerimeter#timeouts}
  */
  readonly timeouts?: AccessContextManagerServicePerimeterTimeouts;
}
export interface AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom {
  /**
  * A list of identities that are allowed access through this 'EgressPolicy'. 
Should be in the format of email address. The email address should 
represent individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#identities AccessContextManagerServicePerimeter#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the 
perimeter. If left unspecified, then members of 'identities' field will 
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#identity_type AccessContextManagerServicePerimeter#identity_type}
  */
  readonly identityType?: string;
}

function accessContextManagerServicePerimeterSpecEgressPoliciesEgressFromToTerraform(struct?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference | AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
  }
}

export class AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference extends cdktf.ComplexObject {
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
export interface AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding 
'serviceName' in 'ApiOperation'. If '*' used as value for method, 
then ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#method AccessContextManagerServicePerimeter#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#permission AccessContextManagerServicePerimeter#permission}
  */
  readonly permission?: string;
}

function accessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#service_name AccessContextManagerServicePerimeter#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#method_selectors AccessContextManagerServicePerimeter#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors[];
}

function accessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsToTerraform(struct?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo {
  /**
  * A list of resources, currently only projects in the form 
'projects/<projectnumber>', that match this to stanza. A request matches 
if it contains a resource in this list. If * is specified for resources, 
then this 'EgressTo' rule will authorize access to all resources outside 
the perimeter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#resources AccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#operations AccessContextManagerServicePerimeter#operations}
  */
  readonly operations?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations[];
}

function accessContextManagerServicePerimeterSpecEgressPoliciesEgressToToTerraform(struct?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference | AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsToTerraform)(struct!.operations),
  }
}

export class AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference extends cdktf.ComplexObject {
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
  private _operations?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations[] | undefined; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations') as any;
  }
  public set operations(value: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations[] | undefined) {
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
export interface AccessContextManagerServicePerimeterSpecEgressPolicies {
  /**
  * egress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#egress_from AccessContextManagerServicePerimeter#egress_from}
  */
  readonly egressFrom?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom;
  /**
  * egress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#egress_to AccessContextManagerServicePerimeter#egress_to}
  */
  readonly egressTo?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo;
}

function accessContextManagerServicePerimeterSpecEgressPoliciesToTerraform(struct?: AccessContextManagerServicePerimeterSpecEgressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_from: accessContextManagerServicePerimeterSpecEgressPoliciesEgressFromToTerraform(struct!.egressFrom),
    egress_to: accessContextManagerServicePerimeterSpecEgressPoliciesEgressToToTerraform(struct!.egressTo),
  }
}

export interface AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#access_level AccessContextManagerServicePerimeter#access_level}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#resource AccessContextManagerServicePerimeter#resource}
  */
  readonly resource?: string;
}

function accessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesToTerraform(struct?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom {
  /**
  * A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent 
individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#identities AccessContextManagerServicePerimeter#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the 
perimeter. If left unspecified, then members of 'identities' field will be 
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#identity_type AccessContextManagerServicePerimeter#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#sources AccessContextManagerServicePerimeter#sources}
  */
  readonly sources?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources[];
}

function accessContextManagerServicePerimeterSpecIngressPoliciesIngressFromToTerraform(struct?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference | AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(accessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesToTerraform)(struct!.sources),
  }
}

export class AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference extends cdktf.ComplexObject {
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
  private _sources?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources[] | undefined; 
  public get sources() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sources') as any;
  }
  public set sources(value: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources[] | undefined) {
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
export interface AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding 
serviceName in 'ApiOperation'. If '*' used as value for 'method', then 
ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#method AccessContextManagerServicePerimeter#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#permission AccessContextManagerServicePerimeter#permission}
  */
  readonly permission?: string;
}

function accessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName' 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#service_name AccessContextManagerServicePerimeter#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#method_selectors AccessContextManagerServicePerimeter#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors[];
}

function accessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsToTerraform(struct?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#resources AccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#operations AccessContextManagerServicePerimeter#operations}
  */
  readonly operations?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations[];
}

function accessContextManagerServicePerimeterSpecIngressPoliciesIngressToToTerraform(struct?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference | AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsToTerraform)(struct!.operations),
  }
}

export class AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference extends cdktf.ComplexObject {
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
  private _operations?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations[] | undefined; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations') as any;
  }
  public set operations(value: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations[] | undefined) {
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
export interface AccessContextManagerServicePerimeterSpecIngressPolicies {
  /**
  * ingress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#ingress_from AccessContextManagerServicePerimeter#ingress_from}
  */
  readonly ingressFrom?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom;
  /**
  * ingress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#ingress_to AccessContextManagerServicePerimeter#ingress_to}
  */
  readonly ingressTo?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo;
}

function accessContextManagerServicePerimeterSpecIngressPoliciesToTerraform(struct?: AccessContextManagerServicePerimeterSpecIngressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_from: accessContextManagerServicePerimeterSpecIngressPoliciesIngressFromToTerraform(struct!.ingressFrom),
    ingress_to: accessContextManagerServicePerimeterSpecIngressPoliciesIngressToToTerraform(struct!.ingressTo),
  }
}

export interface AccessContextManagerServicePerimeterSpecVpcAccessibleServices {
  /**
  * The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#allowed_services AccessContextManagerServicePerimeter#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#enable_restriction AccessContextManagerServicePerimeter#enable_restriction}
  */
  readonly enableRestriction?: boolean | cdktf.IResolvable;
}

function accessContextManagerServicePerimeterSpecVpcAccessibleServicesToTerraform(struct?: AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference | AccessContextManagerServicePerimeterSpecVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}

export class AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference extends cdktf.ComplexObject {
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
export interface AccessContextManagerServicePerimeterSpec {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#access_levels AccessContextManagerServicePerimeter#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#resources AccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#restricted_services AccessContextManagerServicePerimeter#restricted_services}
  */
  readonly restrictedServices?: string[];
  /**
  * egress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#egress_policies AccessContextManagerServicePerimeter#egress_policies}
  */
  readonly egressPolicies?: AccessContextManagerServicePerimeterSpecEgressPolicies[];
  /**
  * ingress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#ingress_policies AccessContextManagerServicePerimeter#ingress_policies}
  */
  readonly ingressPolicies?: AccessContextManagerServicePerimeterSpecIngressPolicies[];
  /**
  * vpc_accessible_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#vpc_accessible_services AccessContextManagerServicePerimeter#vpc_accessible_services}
  */
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimeterSpecVpcAccessibleServices;
}

function accessContextManagerServicePerimeterSpecToTerraform(struct?: AccessContextManagerServicePerimeterSpecOutputReference | AccessContextManagerServicePerimeterSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(accessContextManagerServicePerimeterSpecEgressPoliciesToTerraform)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(accessContextManagerServicePerimeterSpecIngressPoliciesToTerraform)(struct!.ingressPolicies),
    vpc_accessible_services: accessContextManagerServicePerimeterSpecVpcAccessibleServicesToTerraform(struct!.vpcAccessibleServices),
  }
}

export class AccessContextManagerServicePerimeterSpecOutputReference extends cdktf.ComplexObject {
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
  private _egressPolicies?: AccessContextManagerServicePerimeterSpecEgressPolicies[] | undefined; 
  public get egressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('egress_policies') as any;
  }
  public set egressPolicies(value: AccessContextManagerServicePerimeterSpecEgressPolicies[] | undefined) {
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
  private _ingressPolicies?: AccessContextManagerServicePerimeterSpecIngressPolicies[] | undefined; 
  public get ingressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress_policies') as any;
  }
  public set ingressPolicies(value: AccessContextManagerServicePerimeterSpecIngressPolicies[] | undefined) {
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
  private _vpcAccessibleServices?: AccessContextManagerServicePerimeterSpecVpcAccessibleServices | undefined; 
  private __vpcAccessibleServicesOutput = new AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference(this as any, "vpc_accessible_services", true);
  public get vpcAccessibleServices() {
    return this.__vpcAccessibleServicesOutput;
  }
  public putVpcAccessibleServices(value: AccessContextManagerServicePerimeterSpecVpcAccessibleServices | undefined) {
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
export interface AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom {
  /**
  * A list of identities that are allowed access through this 'EgressPolicy'. 
Should be in the format of email address. The email address should 
represent individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#identities AccessContextManagerServicePerimeter#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the 
perimeter. If left unspecified, then members of 'identities' field will 
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#identity_type AccessContextManagerServicePerimeter#identity_type}
  */
  readonly identityType?: string;
}

function accessContextManagerServicePerimeterStatusEgressPoliciesEgressFromToTerraform(struct?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference | AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
  }
}

export class AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference extends cdktf.ComplexObject {
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
export interface AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding 
'serviceName' in 'ApiOperation'. If '*' used as value for method, 
then ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#method AccessContextManagerServicePerimeter#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#permission AccessContextManagerServicePerimeter#permission}
  */
  readonly permission?: string;
}

function accessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#service_name AccessContextManagerServicePerimeter#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#method_selectors AccessContextManagerServicePerimeter#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors[];
}

function accessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsToTerraform(struct?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo {
  /**
  * A list of resources, currently only projects in the form 
'projects/<projectnumber>', that match this to stanza. A request matches 
if it contains a resource in this list. If * is specified for resources, 
then this 'EgressTo' rule will authorize access to all resources outside 
the perimeter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#resources AccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#operations AccessContextManagerServicePerimeter#operations}
  */
  readonly operations?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations[];
}

function accessContextManagerServicePerimeterStatusEgressPoliciesEgressToToTerraform(struct?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference | AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsToTerraform)(struct!.operations),
  }
}

export class AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference extends cdktf.ComplexObject {
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
  private _operations?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations[] | undefined; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations') as any;
  }
  public set operations(value: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations[] | undefined) {
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
export interface AccessContextManagerServicePerimeterStatusEgressPolicies {
  /**
  * egress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#egress_from AccessContextManagerServicePerimeter#egress_from}
  */
  readonly egressFrom?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom;
  /**
  * egress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#egress_to AccessContextManagerServicePerimeter#egress_to}
  */
  readonly egressTo?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo;
}

function accessContextManagerServicePerimeterStatusEgressPoliciesToTerraform(struct?: AccessContextManagerServicePerimeterStatusEgressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_from: accessContextManagerServicePerimeterStatusEgressPoliciesEgressFromToTerraform(struct!.egressFrom),
    egress_to: accessContextManagerServicePerimeterStatusEgressPoliciesEgressToToTerraform(struct!.egressTo),
  }
}

export interface AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#access_level AccessContextManagerServicePerimeter#access_level}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#resource AccessContextManagerServicePerimeter#resource}
  */
  readonly resource?: string;
}

function accessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesToTerraform(struct?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom {
  /**
  * A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent 
individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#identities AccessContextManagerServicePerimeter#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the 
perimeter. If left unspecified, then members of 'identities' field will be 
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#identity_type AccessContextManagerServicePerimeter#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#sources AccessContextManagerServicePerimeter#sources}
  */
  readonly sources?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources[];
}

function accessContextManagerServicePerimeterStatusIngressPoliciesIngressFromToTerraform(struct?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference | AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(accessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesToTerraform)(struct!.sources),
  }
}

export class AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference extends cdktf.ComplexObject {
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
  private _sources?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources[] | undefined; 
  public get sources() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sources') as any;
  }
  public set sources(value: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources[] | undefined) {
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
export interface AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding 
serviceName in 'ApiOperation'. If '*' used as value for 'method', then 
ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#method AccessContextManagerServicePerimeter#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#permission AccessContextManagerServicePerimeter#permission}
  */
  readonly permission?: string;
}

function accessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName' 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#service_name AccessContextManagerServicePerimeter#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#method_selectors AccessContextManagerServicePerimeter#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors[];
}

function accessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsToTerraform(struct?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#resources AccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#operations AccessContextManagerServicePerimeter#operations}
  */
  readonly operations?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations[];
}

function accessContextManagerServicePerimeterStatusIngressPoliciesIngressToToTerraform(struct?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference | AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsToTerraform)(struct!.operations),
  }
}

export class AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference extends cdktf.ComplexObject {
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
  private _operations?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations[] | undefined; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations') as any;
  }
  public set operations(value: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations[] | undefined) {
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
export interface AccessContextManagerServicePerimeterStatusIngressPolicies {
  /**
  * ingress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#ingress_from AccessContextManagerServicePerimeter#ingress_from}
  */
  readonly ingressFrom?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom;
  /**
  * ingress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#ingress_to AccessContextManagerServicePerimeter#ingress_to}
  */
  readonly ingressTo?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo;
}

function accessContextManagerServicePerimeterStatusIngressPoliciesToTerraform(struct?: AccessContextManagerServicePerimeterStatusIngressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_from: accessContextManagerServicePerimeterStatusIngressPoliciesIngressFromToTerraform(struct!.ingressFrom),
    ingress_to: accessContextManagerServicePerimeterStatusIngressPoliciesIngressToToTerraform(struct!.ingressTo),
  }
}

export interface AccessContextManagerServicePerimeterStatusVpcAccessibleServices {
  /**
  * The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#allowed_services AccessContextManagerServicePerimeter#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#enable_restriction AccessContextManagerServicePerimeter#enable_restriction}
  */
  readonly enableRestriction?: boolean | cdktf.IResolvable;
}

function accessContextManagerServicePerimeterStatusVpcAccessibleServicesToTerraform(struct?: AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference | AccessContextManagerServicePerimeterStatusVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}

export class AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference extends cdktf.ComplexObject {
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
export interface AccessContextManagerServicePerimeterStatus {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#access_levels AccessContextManagerServicePerimeter#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#resources AccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#restricted_services AccessContextManagerServicePerimeter#restricted_services}
  */
  readonly restrictedServices?: string[];
  /**
  * egress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#egress_policies AccessContextManagerServicePerimeter#egress_policies}
  */
  readonly egressPolicies?: AccessContextManagerServicePerimeterStatusEgressPolicies[];
  /**
  * ingress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#ingress_policies AccessContextManagerServicePerimeter#ingress_policies}
  */
  readonly ingressPolicies?: AccessContextManagerServicePerimeterStatusIngressPolicies[];
  /**
  * vpc_accessible_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#vpc_accessible_services AccessContextManagerServicePerimeter#vpc_accessible_services}
  */
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimeterStatusVpcAccessibleServices;
}

function accessContextManagerServicePerimeterStatusToTerraform(struct?: AccessContextManagerServicePerimeterStatusOutputReference | AccessContextManagerServicePerimeterStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(accessContextManagerServicePerimeterStatusEgressPoliciesToTerraform)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(accessContextManagerServicePerimeterStatusIngressPoliciesToTerraform)(struct!.ingressPolicies),
    vpc_accessible_services: accessContextManagerServicePerimeterStatusVpcAccessibleServicesToTerraform(struct!.vpcAccessibleServices),
  }
}

export class AccessContextManagerServicePerimeterStatusOutputReference extends cdktf.ComplexObject {
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
  private _egressPolicies?: AccessContextManagerServicePerimeterStatusEgressPolicies[] | undefined; 
  public get egressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('egress_policies') as any;
  }
  public set egressPolicies(value: AccessContextManagerServicePerimeterStatusEgressPolicies[] | undefined) {
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
  private _ingressPolicies?: AccessContextManagerServicePerimeterStatusIngressPolicies[] | undefined; 
  public get ingressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress_policies') as any;
  }
  public set ingressPolicies(value: AccessContextManagerServicePerimeterStatusIngressPolicies[] | undefined) {
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
  private _vpcAccessibleServices?: AccessContextManagerServicePerimeterStatusVpcAccessibleServices | undefined; 
  private __vpcAccessibleServicesOutput = new AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference(this as any, "vpc_accessible_services", true);
  public get vpcAccessibleServices() {
    return this.__vpcAccessibleServicesOutput;
  }
  public putVpcAccessibleServices(value: AccessContextManagerServicePerimeterStatusVpcAccessibleServices | undefined) {
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
export interface AccessContextManagerServicePerimeterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#create AccessContextManagerServicePerimeter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#delete AccessContextManagerServicePerimeter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html#update AccessContextManagerServicePerimeter#update}
  */
  readonly update?: string;
}

function accessContextManagerServicePerimeterTimeoutsToTerraform(struct?: AccessContextManagerServicePerimeterTimeoutsOutputReference | AccessContextManagerServicePerimeterTimeouts): any {
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

export class AccessContextManagerServicePerimeterTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html google_access_context_manager_service_perimeter}
*/
export class AccessContextManagerServicePerimeter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_access_context_manager_service_perimeter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html google_access_context_manager_service_perimeter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerServicePerimeterConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerServicePerimeterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_service_perimeter',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._parent = config.parent;
    this._perimeterType = config.perimeterType;
    this._title = config.title;
    this._useExplicitDryRunSpec = config.useExplicitDryRunSpec;
    this._spec = config.spec;
    this._status = config.status;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name
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

  // perimeter_type - computed: false, optional: true, required: false
  private _perimeterType?: string | undefined; 
  public get perimeterType() {
    return this.getStringAttribute('perimeter_type');
  }
  public set perimeterType(value: string | undefined) {
    this._perimeterType = value;
  }
  public resetPerimeterType() {
    this._perimeterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perimeterTypeInput() {
    return this._perimeterType
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
    return this._title
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // use_explicit_dry_run_spec - computed: false, optional: true, required: false
  private _useExplicitDryRunSpec?: boolean | cdktf.IResolvable | undefined; 
  public get useExplicitDryRunSpec() {
    return this.getBooleanAttribute('use_explicit_dry_run_spec') as any;
  }
  public set useExplicitDryRunSpec(value: boolean | cdktf.IResolvable | undefined) {
    this._useExplicitDryRunSpec = value;
  }
  public resetUseExplicitDryRunSpec() {
    this._useExplicitDryRunSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExplicitDryRunSpecInput() {
    return this._useExplicitDryRunSpec
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: AccessContextManagerServicePerimeterSpec | undefined; 
  private __specOutput = new AccessContextManagerServicePerimeterSpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: AccessContextManagerServicePerimeterSpec | undefined) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // status - computed: false, optional: true, required: false
  private _status?: AccessContextManagerServicePerimeterStatus | undefined; 
  private __statusOutput = new AccessContextManagerServicePerimeterStatusOutputReference(this as any, "status", true);
  public get status() {
    return this.__statusOutput;
  }
  public putStatus(value: AccessContextManagerServicePerimeterStatus | undefined) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AccessContextManagerServicePerimeterTimeouts | undefined; 
  private __timeoutsOutput = new AccessContextManagerServicePerimeterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AccessContextManagerServicePerimeterTimeouts | undefined) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      perimeter_type: cdktf.stringToTerraform(this._perimeterType),
      title: cdktf.stringToTerraform(this._title),
      use_explicit_dry_run_spec: cdktf.booleanToTerraform(this._useExplicitDryRunSpec),
      spec: accessContextManagerServicePerimeterSpecToTerraform(this._spec),
      status: accessContextManagerServicePerimeterStatusToTerraform(this._status),
      timeouts: accessContextManagerServicePerimeterTimeoutsToTerraform(this._timeouts),
    };
  }
}
