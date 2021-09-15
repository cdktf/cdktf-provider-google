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

function accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
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

function accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsToTerraform)(struct!.operations),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies {
  /**
  * egress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#egress_from AccessContextManagerServicePerimeters#egress_from}
  */
  readonly egressFrom?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom[];
  /**
  * egress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#egress_to AccessContextManagerServicePerimeters#egress_to}
  */
  readonly egressTo?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo[];
}

function accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    egress_from: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromToTerraform)(struct!.egressFrom),
    egress_to: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToToTerraform)(struct!.egressTo),
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

function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesToTerraform)(struct!.sources),
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

function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsToTerraform)(struct!.operations),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies {
  /**
  * ingress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#ingress_from AccessContextManagerServicePerimeters#ingress_from}
  */
  readonly ingressFrom?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom[];
  /**
  * ingress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#ingress_to AccessContextManagerServicePerimeters#ingress_to}
  */
  readonly ingressTo?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo[];
}

function accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ingress_from: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromToTerraform)(struct!.ingressFrom),
    ingress_to: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToToTerraform)(struct!.ingressTo),
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

function accessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
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
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices[];
}

function accessContextManagerServicePerimetersServicePerimetersSpecToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesToTerraform)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesToTerraform)(struct!.ingressPolicies),
    vpc_accessible_services: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesToTerraform)(struct!.vpcAccessibleServices),
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

function accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
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

function accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsToTerraform)(struct!.operations),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies {
  /**
  * egress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#egress_from AccessContextManagerServicePerimeters#egress_from}
  */
  readonly egressFrom?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom[];
  /**
  * egress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#egress_to AccessContextManagerServicePerimeters#egress_to}
  */
  readonly egressTo?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo[];
}

function accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    egress_from: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromToTerraform)(struct!.egressFrom),
    egress_to: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToToTerraform)(struct!.egressTo),
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

function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesToTerraform)(struct!.sources),
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

function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsToTerraform)(struct!.operations),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies {
  /**
  * ingress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#ingress_from AccessContextManagerServicePerimeters#ingress_from}
  */
  readonly ingressFrom?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom[];
  /**
  * ingress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#ingress_to AccessContextManagerServicePerimeters#ingress_to}
  */
  readonly ingressTo?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo[];
}

function accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ingress_from: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromToTerraform)(struct!.ingressFrom),
    ingress_to: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToToTerraform)(struct!.ingressTo),
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

function accessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
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
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices[];
}

function accessContextManagerServicePerimetersServicePerimetersStatusToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesToTerraform)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesToTerraform)(struct!.ingressPolicies),
    vpc_accessible_services: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesToTerraform)(struct!.vpcAccessibleServices),
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
  readonly spec?: AccessContextManagerServicePerimetersServicePerimetersSpec[];
  /**
  * status block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html#status AccessContextManagerServicePerimeters#status}
  */
  readonly status?: AccessContextManagerServicePerimetersServicePerimetersStatus[];
}

function accessContextManagerServicePerimetersServicePerimetersToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimeters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    perimeter_type: cdktf.stringToTerraform(struct!.perimeterType),
    title: cdktf.stringToTerraform(struct!.title),
    use_explicit_dry_run_spec: cdktf.booleanToTerraform(struct!.useExplicitDryRunSpec),
    spec: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecToTerraform)(struct!.spec),
    status: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusToTerraform)(struct!.status),
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

function accessContextManagerServicePerimetersTimeoutsToTerraform(struct?: AccessContextManagerServicePerimetersTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
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
  private _parent: string;
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
  private _servicePerimeters?: AccessContextManagerServicePerimetersServicePerimeters[];
  public get servicePerimeters() {
    return this.interpolationForAttribute('service_perimeters') as any;
  }
  public set servicePerimeters(value: AccessContextManagerServicePerimetersServicePerimeters[] ) {
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
  private _timeouts?: AccessContextManagerServicePerimetersTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AccessContextManagerServicePerimetersTimeouts ) {
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
