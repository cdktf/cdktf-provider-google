// https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerServicePerimeterConfig extends cdktf.TerraformMetaArguments {
  /** Description of the ServicePerimeter and its use. Does not affect
behavior. */
  readonly description?: string;
  /** Resource name for the ServicePerimeter. The short_name component must
begin with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/servicePerimeters/{short_name} */
  readonly name: string;
  /** The AccessPolicy this ServicePerimeter lives in.
Format: accessPolicies/{policy_id} */
  readonly parent: string;
  /** Specifies the type of the Perimeter. There are two types: regular and
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
themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"] */
  readonly perimeterType?: string;
  /** Human readable title. Must be unique within the Policy. */
  readonly title: string;
  /** Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists
for all Service Perimeters, and that spec is identical to the status for those
Service Perimeters. When this flag is set, it inhibits the generation of the
implicit spec, thereby allowing the user to explicitly provide a
configuration ("spec") to use in a dry-run version of the Service Perimeter.
This allows the user to test changes to the enforced config ("status") without
actually enforcing them. This testing is done through analyzing the differences
between currently enforced and suggested restrictions. useExplicitDryRunSpec must
bet set to True if any of the fields in the spec are set to non-default values. */
  readonly useExplicitDryRunSpec?: boolean;
  /** spec block */
  readonly spec?: AccessContextManagerServicePerimeterSpec[];
  /** status block */
  readonly status?: AccessContextManagerServicePerimeterStatus[];
  /** timeouts block */
  readonly timeouts?: AccessContextManagerServicePerimeterTimeouts;
}
export interface AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom {
  /** A list of identities that are allowed access through this 'EgressPolicy'. 
Should be in the format of email address. The email address should 
represent individual user or service account only. */
  readonly identities?: string[];
  /** Specifies the type of identities that are allowed access to outside the 
perimeter. If left unspecified, then members of 'identities' field will 
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"] */
  readonly identityType?: string;
}

function accessContextManagerServicePerimeterSpecEgressPoliciesEgressFromToTerraform(struct?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
  }
}

export interface AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors {
  /** Value for 'method' should be a valid method name for the corresponding 
'serviceName' in 'ApiOperation'. If '*' used as value for method, 
then ALL methods and permissions are allowed. */
  readonly method?: string;
  /** Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'. */
  readonly permission?: string;
}

function accessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations {
  /** The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName 
field set to '*' will allow all methods AND permissions for all services. */
  readonly serviceName?: string;
  /** method_selectors block */
  readonly methodSelectors?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors[];
}

function accessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsToTerraform(struct?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo {
  /** A list of resources, currently only projects in the form 
'projects/<projectnumber>', that match this to stanza. A request matches 
if it contains a resource in this list. If * is specified for resources, 
then this 'EgressTo' rule will authorize access to all resources outside 
the perimeter. */
  readonly resources?: string[];
  /** operations block */
  readonly operations?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations[];
}

function accessContextManagerServicePerimeterSpecEgressPoliciesEgressToToTerraform(struct?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsToTerraform)(struct!.operations),
  }
}

export interface AccessContextManagerServicePerimeterSpecEgressPolicies {
  /** egress_from block */
  readonly egressFrom?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom[];
  /** egress_to block */
  readonly egressTo?: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo[];
}

function accessContextManagerServicePerimeterSpecEgressPoliciesToTerraform(struct?: AccessContextManagerServicePerimeterSpecEgressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    egress_from: cdktf.listMapper(accessContextManagerServicePerimeterSpecEgressPoliciesEgressFromToTerraform)(struct!.egressFrom),
    egress_to: cdktf.listMapper(accessContextManagerServicePerimeterSpecEgressPoliciesEgressToToTerraform)(struct!.egressTo),
  }
}

export interface AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources {
  /** An 'AccessLevel' resource name that allow resources within the 
'ServicePerimeters' to be accessed from the internet. 'AccessLevels' listed 
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed, 
resources within the perimeter can only be accessed via Google Cloud calls 
with request origins within the perimeter. 
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.' 
If * is specified, then all IngressSources will be allowed. */
  readonly accessLevel?: string;
  /** A Google Cloud resource that is allowed to ingress the perimeter. 
Requests from these resources will be allowed to access perimeter data. 
Currently only projects are allowed. Format 'projects/{project_number}' 
The project may be in any Google Cloud organization, not just the 
organization that the perimeter is defined in. '*' is not allowed, the case 
of allowing all Google Cloud resources only is not supported. */
  readonly resource?: string;
}

function accessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesToTerraform(struct?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom {
  /** A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent 
individual user or service account only. */
  readonly identities?: string[];
  /** Specifies the type of identities that are allowed access from outside the 
perimeter. If left unspecified, then members of 'identities' field will be 
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"] */
  readonly identityType?: string;
  /** sources block */
  readonly sources?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources[];
}

function accessContextManagerServicePerimeterSpecIngressPoliciesIngressFromToTerraform(struct?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(accessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesToTerraform)(struct!.sources),
  }
}

export interface AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors {
  /** Value for method should be a valid method name for the corresponding 
serviceName in 'ApiOperation'. If '*' used as value for 'method', then 
ALL methods and permissions are allowed. */
  readonly method?: string;
  /** Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'. */
  readonly permission?: string;
}

function accessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations {
  /** The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName' 
field set to '*' will allow all methods AND permissions for all services. */
  readonly serviceName?: string;
  /** method_selectors block */
  readonly methodSelectors?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors[];
}

function accessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsToTerraform(struct?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo {
  /** A list of resources, currently only projects in the form 
'projects/<projectnumber>', protected by this 'ServicePerimeter'
that are allowed to be accessed by sources defined in the
corresponding 'IngressFrom'. A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all 
resources inside the perimeter, provided that the request
also matches the 'operations' field. */
  readonly resources?: string[];
  /** operations block */
  readonly operations?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations[];
}

function accessContextManagerServicePerimeterSpecIngressPoliciesIngressToToTerraform(struct?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsToTerraform)(struct!.operations),
  }
}

export interface AccessContextManagerServicePerimeterSpecIngressPolicies {
  /** ingress_from block */
  readonly ingressFrom?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom[];
  /** ingress_to block */
  readonly ingressTo?: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo[];
}

function accessContextManagerServicePerimeterSpecIngressPoliciesToTerraform(struct?: AccessContextManagerServicePerimeterSpecIngressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ingress_from: cdktf.listMapper(accessContextManagerServicePerimeterSpecIngressPoliciesIngressFromToTerraform)(struct!.ingressFrom),
    ingress_to: cdktf.listMapper(accessContextManagerServicePerimeterSpecIngressPoliciesIngressToToTerraform)(struct!.ingressTo),
  }
}

export interface AccessContextManagerServicePerimeterSpecVpcAccessibleServices {
  /** The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True. */
  readonly allowedServices?: string[];
  /** Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'. */
  readonly enableRestriction?: boolean;
}

function accessContextManagerServicePerimeterSpecVpcAccessibleServicesToTerraform(struct?: AccessContextManagerServicePerimeterSpecVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}

export interface AccessContextManagerServicePerimeterSpec {
  /** A list of AccessLevel resource names that allow resources within
the ServicePerimeter to be accessed from the internet.
AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name} */
  readonly accessLevels?: string[];
  /** A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number} */
  readonly resources?: string[];
  /** GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions. */
  readonly restrictedServices?: string[];
  /** egress_policies block */
  readonly egressPolicies?: AccessContextManagerServicePerimeterSpecEgressPolicies[];
  /** ingress_policies block */
  readonly ingressPolicies?: AccessContextManagerServicePerimeterSpecIngressPolicies[];
  /** vpc_accessible_services block */
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimeterSpecVpcAccessibleServices[];
}

function accessContextManagerServicePerimeterSpecToTerraform(struct?: AccessContextManagerServicePerimeterSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(accessContextManagerServicePerimeterSpecEgressPoliciesToTerraform)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(accessContextManagerServicePerimeterSpecIngressPoliciesToTerraform)(struct!.ingressPolicies),
    vpc_accessible_services: cdktf.listMapper(accessContextManagerServicePerimeterSpecVpcAccessibleServicesToTerraform)(struct!.vpcAccessibleServices),
  }
}

export interface AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom {
  /** A list of identities that are allowed access through this 'EgressPolicy'. 
Should be in the format of email address. The email address should 
represent individual user or service account only. */
  readonly identities?: string[];
  /** Specifies the type of identities that are allowed access to outside the 
perimeter. If left unspecified, then members of 'identities' field will 
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"] */
  readonly identityType?: string;
}

function accessContextManagerServicePerimeterStatusEgressPoliciesEgressFromToTerraform(struct?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
  }
}

export interface AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors {
  /** Value for 'method' should be a valid method name for the corresponding 
'serviceName' in 'ApiOperation'. If '*' used as value for method, 
then ALL methods and permissions are allowed. */
  readonly method?: string;
  /** Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'. */
  readonly permission?: string;
}

function accessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations {
  /** The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName 
field set to '*' will allow all methods AND permissions for all services. */
  readonly serviceName?: string;
  /** method_selectors block */
  readonly methodSelectors?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors[];
}

function accessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsToTerraform(struct?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo {
  /** A list of resources, currently only projects in the form 
'projects/<projectnumber>', that match this to stanza. A request matches 
if it contains a resource in this list. If * is specified for resources, 
then this 'EgressTo' rule will authorize access to all resources outside 
the perimeter. */
  readonly resources?: string[];
  /** operations block */
  readonly operations?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations[];
}

function accessContextManagerServicePerimeterStatusEgressPoliciesEgressToToTerraform(struct?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsToTerraform)(struct!.operations),
  }
}

export interface AccessContextManagerServicePerimeterStatusEgressPolicies {
  /** egress_from block */
  readonly egressFrom?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom[];
  /** egress_to block */
  readonly egressTo?: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo[];
}

function accessContextManagerServicePerimeterStatusEgressPoliciesToTerraform(struct?: AccessContextManagerServicePerimeterStatusEgressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    egress_from: cdktf.listMapper(accessContextManagerServicePerimeterStatusEgressPoliciesEgressFromToTerraform)(struct!.egressFrom),
    egress_to: cdktf.listMapper(accessContextManagerServicePerimeterStatusEgressPoliciesEgressToToTerraform)(struct!.egressTo),
  }
}

export interface AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources {
  /** An 'AccessLevel' resource name that allow resources within the 
'ServicePerimeters' to be accessed from the internet. 'AccessLevels' listed 
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed, 
resources within the perimeter can only be accessed via Google Cloud calls 
with request origins within the perimeter. 
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.' 
If * is specified, then all IngressSources will be allowed. */
  readonly accessLevel?: string;
  /** A Google Cloud resource that is allowed to ingress the perimeter. 
Requests from these resources will be allowed to access perimeter data. 
Currently only projects are allowed. Format 'projects/{project_number}' 
The project may be in any Google Cloud organization, not just the 
organization that the perimeter is defined in. '*' is not allowed, the case 
of allowing all Google Cloud resources only is not supported. */
  readonly resource?: string;
}

function accessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesToTerraform(struct?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom {
  /** A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent 
individual user or service account only. */
  readonly identities?: string[];
  /** Specifies the type of identities that are allowed access from outside the 
perimeter. If left unspecified, then members of 'identities' field will be 
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"] */
  readonly identityType?: string;
  /** sources block */
  readonly sources?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources[];
}

function accessContextManagerServicePerimeterStatusIngressPoliciesIngressFromToTerraform(struct?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(accessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesToTerraform)(struct!.sources),
  }
}

export interface AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors {
  /** Value for method should be a valid method name for the corresponding 
serviceName in 'ApiOperation'. If '*' used as value for 'method', then 
ALL methods and permissions are allowed. */
  readonly method?: string;
  /** Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'. */
  readonly permission?: string;
}

function accessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations {
  /** The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName' 
field set to '*' will allow all methods AND permissions for all services. */
  readonly serviceName?: string;
  /** method_selectors block */
  readonly methodSelectors?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors[];
}

function accessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsToTerraform(struct?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(accessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo {
  /** A list of resources, currently only projects in the form 
'projects/<projectnumber>', protected by this 'ServicePerimeter'
that are allowed to be accessed by sources defined in the
corresponding 'IngressFrom'. A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all 
resources inside the perimeter, provided that the request
also matches the 'operations' field. */
  readonly resources?: string[];
  /** operations block */
  readonly operations?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations[];
}

function accessContextManagerServicePerimeterStatusIngressPoliciesIngressToToTerraform(struct?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(accessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsToTerraform)(struct!.operations),
  }
}

export interface AccessContextManagerServicePerimeterStatusIngressPolicies {
  /** ingress_from block */
  readonly ingressFrom?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom[];
  /** ingress_to block */
  readonly ingressTo?: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo[];
}

function accessContextManagerServicePerimeterStatusIngressPoliciesToTerraform(struct?: AccessContextManagerServicePerimeterStatusIngressPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ingress_from: cdktf.listMapper(accessContextManagerServicePerimeterStatusIngressPoliciesIngressFromToTerraform)(struct!.ingressFrom),
    ingress_to: cdktf.listMapper(accessContextManagerServicePerimeterStatusIngressPoliciesIngressToToTerraform)(struct!.ingressTo),
  }
}

export interface AccessContextManagerServicePerimeterStatusVpcAccessibleServices {
  /** The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True. */
  readonly allowedServices?: string[];
  /** Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'. */
  readonly enableRestriction?: boolean;
}

function accessContextManagerServicePerimeterStatusVpcAccessibleServicesToTerraform(struct?: AccessContextManagerServicePerimeterStatusVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}

export interface AccessContextManagerServicePerimeterStatus {
  /** A list of AccessLevel resource names that allow resources within
the ServicePerimeter to be accessed from the internet.
AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name} */
  readonly accessLevels?: string[];
  /** A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number} */
  readonly resources?: string[];
  /** GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions. */
  readonly restrictedServices?: string[];
  /** egress_policies block */
  readonly egressPolicies?: AccessContextManagerServicePerimeterStatusEgressPolicies[];
  /** ingress_policies block */
  readonly ingressPolicies?: AccessContextManagerServicePerimeterStatusIngressPolicies[];
  /** vpc_accessible_services block */
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimeterStatusVpcAccessibleServices[];
}

function accessContextManagerServicePerimeterStatusToTerraform(struct?: AccessContextManagerServicePerimeterStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(accessContextManagerServicePerimeterStatusEgressPoliciesToTerraform)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(accessContextManagerServicePerimeterStatusIngressPoliciesToTerraform)(struct!.ingressPolicies),
    vpc_accessible_services: cdktf.listMapper(accessContextManagerServicePerimeterStatusVpcAccessibleServicesToTerraform)(struct!.vpcAccessibleServices),
  }
}

export interface AccessContextManagerServicePerimeterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function accessContextManagerServicePerimeterTimeoutsToTerraform(struct?: AccessContextManagerServicePerimeterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AccessContextManagerServicePerimeter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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
  private _name: string;
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

  // perimeter_type - computed: false, optional: true, required: false
  private _perimeterType?: string;
  public get perimeterType() {
    return this.getStringAttribute('perimeter_type');
  }
  public set perimeterType(value: string ) {
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
  private _title: string;
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
  private _useExplicitDryRunSpec?: boolean;
  public get useExplicitDryRunSpec() {
    return this.getBooleanAttribute('use_explicit_dry_run_spec');
  }
  public set useExplicitDryRunSpec(value: boolean ) {
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
  private _spec?: AccessContextManagerServicePerimeterSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: AccessContextManagerServicePerimeterSpec[] ) {
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
  private _status?: AccessContextManagerServicePerimeterStatus[];
  public get status() {
    return this.interpolationForAttribute('status') as any;
  }
  public set status(value: AccessContextManagerServicePerimeterStatus[] ) {
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
  private _timeouts?: AccessContextManagerServicePerimeterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AccessContextManagerServicePerimeterTimeouts ) {
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
      spec: cdktf.listMapper(accessContextManagerServicePerimeterSpecToTerraform)(this._spec),
      status: cdktf.listMapper(accessContextManagerServicePerimeterStatusToTerraform)(this._status),
      timeouts: accessContextManagerServicePerimeterTimeoutsToTerraform(this._timeouts),
    };
  }
}
