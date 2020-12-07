// https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeters.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerServicePerimetersConfig extends cdktf.TerraformMetaArguments {
  /** The AccessPolicy this ServicePerimeter lives in.
Format: accessPolicies/{policy_id} */
  readonly parent: string;
  /** service_perimeters block */
  readonly servicePerimeters?: AccessContextManagerServicePerimetersServicePerimeters[];
  /** timeouts block */
  readonly timeouts?: AccessContextManagerServicePerimetersTimeouts;
}
export interface AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices {
  /** The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True. */
  readonly allowedServices?: string[];
  /** Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'. */
  readonly enableRestriction?: boolean;
}

function accessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersSpec {
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
  /** vpc_accessible_services block */
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices[];
}

function accessContextManagerServicePerimetersServicePerimetersSpecToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    vpc_accessible_services: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesToTerraform)(struct!.vpcAccessibleServices),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices {
  /** The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True. */
  readonly allowedServices?: string[];
  /** Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'. */
  readonly enableRestriction?: boolean;
}

function accessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimetersStatus {
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
  /** vpc_accessible_services block */
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices[];
}

function accessContextManagerServicePerimetersServicePerimetersStatusToTerraform(struct?: AccessContextManagerServicePerimetersServicePerimetersStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    vpc_accessible_services: cdktf.listMapper(accessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesToTerraform)(struct!.vpcAccessibleServices),
  }
}

export interface AccessContextManagerServicePerimetersServicePerimeters {
  /** Description of the ServicePerimeter and its use. Does not affect
behavior. */
  readonly description?: string;
  /** Resource name for the ServicePerimeter. The short_name component must
begin with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/servicePerimeters/{short_name} */
  readonly name: string;
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
  readonly spec?: AccessContextManagerServicePerimetersServicePerimetersSpec[];
  /** status block */
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
  readonly create?: string;
  readonly delete?: string;
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


// Resource

export class AccessContextManagerServicePerimeters extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
